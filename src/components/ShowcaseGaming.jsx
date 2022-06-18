import '../index.css'


export default function ShowcaseGaming(){

    return (
        <div>
            <div className="container">
        <div className="main-image">
            <img src='https://drive.google.com/uc?export=download&id=1uL2n8Omug7B-gjGo5LRBy-bNIq8HIAyO' alt="img" />
        </div>
        <div className="showcase-buttom-bar">
            <div>sort by :</div>
            <div ><a className="button-light" href="#">recents</a></div>
            <div ><a className="button-light" href="#">popular</a></div>
            <div ><a className="button-light" href="#">a - z</a></div>
            <div>sort by :</div>
            <input className='game-search' type='text' placeholder='All game providers'></input>
            <div className="bar-flag">
                <i><img src="https://drive.google.com/uc?export=download&id=1lx-Fbd6sVNPx_VHyOpVgPFfRl4J9KnrV" alt="img" /></i>
                Germany
            </div>
        </div>
        </div>
        </div>
    )
}