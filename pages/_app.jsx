import '../assets/scss/styles.scss'

function MyApp({ Component, pageProps }) {
    return(
        <>
        <Component {...pageProps} />
        <style jsx global>{`
            .container {
                max-width:55vw;
                margin:0 auto;
                padding-right:1rem;
                padding-left:1rem;
            }
        `}</style>
        </>
    )
}

export default MyApp