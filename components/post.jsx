import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

const post = ({post}) => {
    return (
        <article>
            <Link href="/posts/[uid]" as={`/posts/${post.slugs}`}>
                <a>
                    {RichText.asText(post.data.title)}
                </a>
            </Link>
        </article>
    );
}

export default post;

const PostWrapper = styled.article`

`