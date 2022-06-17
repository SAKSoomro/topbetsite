import '../index.css'
import Footer from './Footer'
import GameContainer from './GameContainer'
import Header from './Header'
import ShowcaseGaming from './ShowcaseGaming'

export default function VirtualGames(){
    return (
        <div>
        <Header />
        <ShowcaseGaming />
        <GameContainer />
        <Footer />
        </div>
    )
}