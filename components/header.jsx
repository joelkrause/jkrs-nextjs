import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const Header = () => (
    <HeaderWrapper>
        <Logo>Joel Krause</Logo>
        <NavWrapper>
            <NavList>
                <NavItem>
                    <Link href="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link href="/posts">Posts</Link>
                </NavItem>
            </NavList>
        </NavWrapper>
    </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
    padding:3rem;
    display:flex;
    align-items:center;
    position:sticky;
`

const Logo = styled.div`
    font-weight:bold;
`

const NavWrapper = styled.nav``

const NavList = styled.ul`
    display:flex;
`

const NavItem = styled.li`
    padding-left:4rem;
    a {
        color:var(--textColor);
        text-decoration:none;
    }
`