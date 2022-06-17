import '../index.css'
import background from '../img/virtualgames.png'


export default function ShowcaseGaming(){

    return (
        <div>
            <div className="container">
        <div className="main-image">
            <img src={background} alt="img" />
        </div>
        <div className="showcase-buttom-bar">
            <div>sort by :</div>
            <div ><a className="button-light" href="#">recents</a></div>
            <div ><a className="button-light" href="#">popular</a></div>
            <div ><a className="button-light" href="#">a - z</a></div>
            <div>sort by :</div>
            <input className='game-search' type='text' placeholder='All game providers'></input>
            <div className="bar-flag">
                <i><img src="../img/germany_96px.png" alt="img" /></i>
                Germany
            </div>
        </div>
        </div>
        </div>
    )
}