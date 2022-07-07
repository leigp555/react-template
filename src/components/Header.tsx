import React from "react";
import {Link} from 'react-router-dom'
import  styled from 'styled-components'

const StyleHeader=styled.header`
   background-color: red;
`

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <StyleHeader>
            <nav>
                <Link to={'/'}>首页</Link>
                <Link to={'/history'}>上传历史</Link>
                <Link to={'/about'}>关于我</Link>
            </nav>
        </StyleHeader>
    )
}

export default Header
