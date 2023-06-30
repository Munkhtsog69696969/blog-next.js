import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Slug(){
    const router=useRouter();

    const [html,setHtml]=useState();

    const slug=router.query.slug;

    useEffect(()=>{
        if(slug){
            fetch(`https://dev.to/api/articles/nataliedeweerd/${slug}`)
                .then(res=>res.json())
                .then(data=>setHtml(data.body_html))
                .catch(err=>console.log(err))
        }
    },[slug]);

    // console.log(html)

    return(
        <div>
             {/* <Head>
                <meta property="og:title" content="test title" />
                <meta property="og:description" content="test description" />
                <meta property="og:image" content="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg" />
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
            </Head> */}
            <div dangerouslySetInnerHTML={{__html:html && html}}>
            </div>
        </div>
    )
}