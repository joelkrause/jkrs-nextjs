import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Layout from '../../layouts/layout'
import { Client } from "../../prismic-configuration";

const Page = ({page}) => {
    if(page){
        const titled = RichText.asText(page.data.title).length !== 0;
        const title = titled ? RichText.asText(page.data.title) : "Untitled";
        return(
            <Layout title={title}>
                <div className="container">
                    <PageHero>
                        <PageHeroTitle>{title}</PageHeroTitle>
                    </PageHero>
                    <RichText render={page.data.body} />
                    <pre>{JSON.stringify(page, null, 2)}</pre>
                </div>
            </Layout>
        )
    }
}

Page.getInitialProps = async function({ req, query }) {
    console.log(query)
    try {
        const { uid } = query;
        const document = await Client(req).getByUID("page", uid);

        return {
        page: document
        };
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default Page;

const PageHero = styled.div`
    padding:5vw 0;
`

const PageHeroTitle = styled.h1`
    margin:25px 0;
`