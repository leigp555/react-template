import React, {useContext} from "react";
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {AuthContext} from "../App";

const StyledHeader = styled.header`
  padding: 10px 100px;
  background-color: #02101f;
  display: flex;
  align-items: center;
`
const StyledLink = styled(NavLink)`
  margin-left: 30px;
  color: #fff;
  &.active {
    color: yellow;
    border-bottom: 1px solid yellow;
  }
`

interface Props {
}

const Header: React.FC<Props> = () => {
    const {logout} =useContext(AuthContext)
    return (
        <StyledHeader>
            <nav>
                <StyledLink to={'/'}>首页</StyledLink>
                <StyledLink to={'/history'}>上传历史</StyledLink>
                <StyledLink to={'/about'}>关于我</StyledLink>
                <StyledLink to={'/test'}>测试</StyledLink>
            </nav>
            <button onClick={logout}>logout</button>
        </StyledHeader>
    )
}

export default Header
