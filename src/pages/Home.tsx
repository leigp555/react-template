import React, {useEffect, useRef} from "react";

interface Props{}

const Home:React.FC<Props> =()=>{
    const title=useRef<HTMLHeadingElement>(null)
    useEffect(()=>{
        console.log(title.current)
        if(title.current)title.current.innerText="你好呀"
    },[])
    return(
        <React.Fragment>
        <h1 ref={title}>home</h1>
        </React.Fragment>
    )
}

export default Home
