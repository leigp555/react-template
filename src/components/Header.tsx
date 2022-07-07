import React from "react";
import {Link} from 'react-router-dom'

interface Props{}

const Header:React.FC<Props> =()=>{
    return(
        <React.Fragment>
            <nav>
              <Link to={'/'}>首页</Link>
              <Link to={'/history'}>上传历史</Link>
              <Link to={'/about'}>关于我</Link>
            </nav>
        </React.Fragment>
    )
}

export default Header
