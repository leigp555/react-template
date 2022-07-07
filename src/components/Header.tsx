import React from "react";
import {Link} from 'react-router-dom'
import  styled from 'styled-components'

const StyledHeader=styled.header`
   background-color: red;
`
const StyledLink=styled(Link)`
   color: yellow;
`

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <StyledHeader>
            <nav>
                <StyledLink to={'/'}>首页</StyledLink>
                <StyledLink to={'/history'}>上传历史</StyledLink>
                <StyledLink to={'/about'}>关于我</StyledLink>
            </nav>
        </StyledHeader>
    )
}

export default Header
