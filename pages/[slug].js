import { useRouter } from "next/router"
import { useEffect, useState } from "react";

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

    return(
        <div dangerouslySetInnerHTML={{__html:html && html}}>
        </div>
    )
}