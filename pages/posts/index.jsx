import React from 'react'
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";

import Layout from '../../layouts/layout'
import Posts from '../../components/posts'

const PostsIndex = ({posts}) => {
    return (
        <Layout title="Posts">
            <h1>Posts</h1>
            <Posts posts={posts} heading="" filters="false"/>
        </Layout>
    );
}

PostsIndex.getInitialProps = async function({ req }) {
    try {
        const posts = await Client(req).query(Prismic.Predicates.at("document.type","post"),{orderings:'[document.first_publication_date desc]'})
  
        return {
          posts: posts.results
        };
    } catch (error) {
        console.error(error);
        return error;
    }
  };

export default PostsIndex;
