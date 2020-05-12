import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const Header = () => (
    <HeaderWrapper>
        <Logo>
            <Link href="/">
                <a>Joel Krause</a>
            </Link>
        </Logo>
        <NavWrapper>
            <NavList>
                <NavItem>
                    <Link href="/"><a>Home</a></Link>
                </NavItem>
                <NavItem>
                    <Link href="/posts"><a>Posts</a></Link>
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
    a{
        color:currentColor;
        text-decoration:none;
    }
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