import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Button } from '@mui/joy'
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
     <div>
      {
        blog?.map((item,i)=>{
          return(
            <Link href={item?.slug}>
            <div  key={i}>
              <div>{item?.slug}</div>

                <Image
                  src={item?.cover_image || ''}
                  width={500}
                  height={500}
                  alt='Image'
                />
              
            </div>
            </Link>
          )
        })
      }
     </div>
    </>
  )
}
