import Head from 'next/head'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Layout = (data) => (
    <>
        <Head>
          <title>Joel Krause</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
        <main>
            {data.children}
        </main>
        <Footer />
    </>
)

export default Layout