import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Prismic from "prismic-javascript";

import Layout from '../layouts/layout'
import Posts from '../components/posts'
import { Client } from "../prismic-configuration";

const Home = ({home,posts}) => (
  <Layout title="Home">
    <Hero>
      <HeroImg>
        <img src={home.data.hero_image.url} />
      </HeroImg>
      <HeroText>
        <RichText render={home.data.hero_content} />
      </HeroText>
    </Hero>
    <Posts posts={posts} heading="Latest Posts" filters="false"/>
  </Layout>
)

Home.getInitialProps = async function({ req }) {
  try {
      const document = await Client(req).getByUID("home", "home");
      const posts = await Client(req).query(Prismic.Predicates.at("document.type","post"))

      return {
        home: document,
        posts: posts.results
      };
  } catch (error) {
      console.error(error);
      return error;
  }
};

export default Home

const Hero = styled.div`
  max-width:55vw;
  margin:0 auto;
  padding:5vw 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const HeroText = styled.div``

const HeroImg = styled.div`
  max-width:35%;
  min-width:35%;
  padding-right:5vw;

  img{
    max-width:100%;
  }
`