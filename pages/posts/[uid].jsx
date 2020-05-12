import React from 'react'
import { RichText } from 'prismic-reactjs'
import Layout from '../../layouts/layout'
import { Client } from "../../prismic-configuration";

const Post = ({post}) => {
    if(post){
        const titled = RichText.asText(post.data.title).length !== 0;
        const title = titled ? RichText.asText(post.data.title) : "Untitled";
        return(
            <Layout title={title}>
                <h1>{title}</h1>
                <RichText render={post.data.body} />
                <pre>{JSON.stringify(post, null, 2)}</pre>
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