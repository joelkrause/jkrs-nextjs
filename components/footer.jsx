import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => (
    <FooterWrapper>
        &copy; {new Date().getFullYear()} Joel Krause
    </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
    padding:3rem;
`