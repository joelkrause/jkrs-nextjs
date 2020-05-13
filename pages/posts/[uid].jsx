import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Layout from '../../layouts/layout'
import { Client } from "../../prismic-configuration";

const Post = ({post}) => {
    if(post){
        const titled = RichText.asText(post.data.title).length !== 0;
        const title = titled ? RichText.asText(post.data.title) : "Untitled";
        return(
            <Layout title={title}>
                <div className="container">
                    <PostHero>
                        <PostHeroDate>{moment(post.first_publication_date).format("MMM Do YYYY")}</PostHeroDate>
                        <PostHeroTitle>{title}</PostHeroTitle>
                        <PostHeroExcerpt>
                            <RichText render={post.data.post_excerpt} />
                        </PostHeroExcerpt>
                    </PostHero>
                    <PostHeroImage src={post.data.post_hero.url} />
                    <RichText render={post.data.body} />
                    <pre>{JSON.stringify(post, null, 2)}</pre>
                </div>
            </Layout>
        )
    }
}

Post.getInitialProps = async function({ req, query }) {
    try {
        const { uid } = query;
        const document = await Client(req).getByUID("post", uid);

        return {
        post: document
        };
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default Post;

const PostHero = styled.div`
    padding:5vw 0;
`

const PostHeroImage = styled.img`
    max-width:calc(55vw + 5vw);
    margin:0 -5vw 5vw;
    border-radius:5px;
    overflow:hidden;
`

const PostHeroExcerpt = styled.div`
    color:#999;
    max-width:65%;
`

const PostHeroDate = styled.div``

const PostHeroTitle = styled.h1`
    margin:25px 0;
`