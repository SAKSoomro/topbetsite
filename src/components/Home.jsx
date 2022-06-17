import '../index.css'
import Header from './Header'
import Showcase from './Showcase'
import Container from './Container'
import Footer from './Footer'

export default function Home(){
    return (
        <div className="container">
            <Header />
            <Showcase />
            <Container />
            <Footer />
         </div>

    )
}