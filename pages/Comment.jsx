import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Head from "next/head";

export default function CommentRecursive({comment}){
//    console.log(children)

    return(
        <div style={{border:"1px solid red"}}>
            <div dangerouslySetInnerHTML={{__html:comment.body_html}}>
            </div>

            <div style={{paddingLeft:"50px"}}>
                {
                    comment?.children?.map((item,i)=>{
                        return(
                            <CommentRecursive comment={item}></CommentRecursive>
                        )
                    })
                }
            </div>
        </div>
    )
}