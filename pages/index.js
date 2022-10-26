import Head from '../components/portifolio/Head'
import Tools from '../components/portifolio/Tools'
import Works from '../components/portifolio/Works'
import About from '../components/portifolio/About'
import Contact from '../components/portifolio/Contact'
import Footer from '../components/portifolio/Footer'

export default function Home({ children }) {
    return (
        <>
            <Head />
            <Tools />
            <About />
            <Works />
            <Contact />
            <Footer /> 
        </>

    )
}

