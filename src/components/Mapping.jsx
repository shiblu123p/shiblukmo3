import React, { useState } from 'react'

export const Mapping = () => {
    var [name,setName] = useState(["shiblu","ansif","keeru","ajmal"])
  return (
    <div style={{paddingTop:"80px"}}>
        <ol>
            {names.map((value,index)=>{
                return(
                    <li key={index}>{value}</li>
                )
            })}
        </ol>
    </div>
  )
}
