import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import moment from 'moment'

const post = ({post}) => {
    return (
        <PostWrapper>
            <Link href="/posts/[uid]" as={`/posts/${post.uid}`}>
                <a>
                    <PostTitle>{RichText.asText(post.data.title)}</PostTitle>
                    <PostDate>{moment(post.first_publication_date).format("MMM Do YYYY")}</PostDate>
                </a>
            </Link>
        </PostWrapper>
    );
}

export default post;

const PostWrapper = styled.article`
    &:not(:last-of-type){
        border-bottom:1px solid var(--accentColor);
    }

    a{
        text-decoration:none;
        color:var(--textColor);
        display:flex;
        align-items:center;
        padding:1rem 0.5rem;
        margin-left:-0.5rem;
        margin-right:-0.5rem;
        border-radius:5px;
        &:hover{
            background:var(--accentColor);
        }
    }
`

const PostTitle = styled.div`
    font-weight:bold;
`

const PostDate = styled.div`
    color:#999;
    margin-left:auto;
`

const PostIcon = styled.img`
    max-width:2rem;
    margin-right:1rem;
`