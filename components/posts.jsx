import React from 'react'
import styled from 'styled-components'
import Post from './post'

const Posts = ({posts, heading, filters}) => (
    <PostsWrapper>
        <h2>{heading}</h2>
        {posts.map((post) => (
            <Post post={post} key={post.id} />
        ))}
    </PostsWrapper>
)

export default Posts

const PostsWrapper = styled.div`
  max-width:55vw;
  margin:0 auto;
  padding:5vw 0;
`