import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Button } from '@mui/joy'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import AspectRatio from '@mui/joy/AspectRatio';

import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blog,setBlog]=useState([]);

  useEffect(()=>{
    fetch("https://dev.to/api/articles?username=nataliedeweerd")
      .then(res=>res.json())
      .then(data=>setBlog(data))
      .catch(err=>console.log(err))
  },[]);

  console.log(blog)

  return (
    <>
      <Head>
          <meta property="og:title" content="test title" />
          <meta property="og:description" content="test description" />
          <meta property="og:image" content="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg" />
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
      </Head>
     <div className={styles.container}>
      {
        blog?.map((item,i)=>{
          return(
            <Card key={i} variant='outlined' sx={{ width: 320 }}>
              <div>
                <div style={{display:"flex",alignItems:"center"}}>
                  <Image
                    src={item?.user.profile_image}
                    width={40}
                    height={40}
                    alt='Profile Image'
                  />
                  {item.user.name}
                </div>
                <Typography level="body2">{item.readable_publish_date}</Typography>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                >
                  <BookmarkAdd />
                </IconButton>
              </div>
              <div>
                {item.description}
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                {
                  item.cover_image ?

                  <Image
                    src={item?.cover_image || ''}
                    width={item.cover_image ? 500 : 0}
                    height={500}
                    alt='Image'
                    style={{objectFit:"cover"}}
                  />

                  :""
                }
              </AspectRatio>
              <CardContent orientation="horizontal">
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                  onClick={()=>{window.location.pathname=item?.slug}}
                >
                  Exploree
                </Button>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                  onClick={()=>{window.location.pathname="comment/"+item?.id}}
                >
                  Comments
                </Button>
              </CardContent>
            </Card>
          )
        })
      }
     </div>
    </>
  )
}
