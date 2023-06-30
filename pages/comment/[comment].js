import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from 'next/image'

import CommentRecursive from "../Comment";

export default function Slug(){
    const router=useRouter();

    const [comment,setComment]=useState();

    const id=router.query.comment;

    useEffect(()=>{
        if(id){
            fetch(`https://dev.to/api/comments?a_id=${id}?sort=-created_at`)
                .then((res) => res.json())
                .then(data=>setComment(data))
                .catch((err)=>console.log(err))
        }
    
    },[id]);

    // console.log(comment)

    const Call=(comment)=>{
        return(
            <div dangerouslySetInnerHTML={{__html:comment.body_html}}>

            </div>
        )
    }

    return(
        <div>
            {
                comment?.length !== 0 ?
                    comment?.map((comment,i)=>{
                        return(
                            <CommentRecursive comment={comment}></CommentRecursive>
                        )
                    })
                :

                <div>No comment</div>
            }
        </div>
    )
}