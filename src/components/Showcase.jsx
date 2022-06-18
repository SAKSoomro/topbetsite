import { Link, NavLink } from 'react-router-dom'
import '../index.css'

export default function Showcase(){
    return (
        <div>
            <div className="container">
        <div class="main-image">
            <img src="https://drive.google.com/uc?export=download&id=1m_2vDfLESJcAQ3gqzgMxGlwdycasD-D_" alt="img" />
        </div>
        <div class="result-bar">
            <div class="live">
                <i><img src="https://drive.google.com/uc?export=download&id=1YtOP9cdEyEqlXU6U8joRE7-z9AqISq3R" alt="img" /></i>
                <p><a href='/loadmore'>live</a></p>
            </div>
            <div class="footbal">
                <i><img src="https://drive.google.com/uc?export=download&id=1kvEL-xsjQfkeB4swZqAou5MVCDg5rIsc" alt="img" /></i>
                <p><a href='/'>footbal</a></p>
            </div>
            <div class="tennis">
                <i><img src="https://drive.google.com/uc?export=download&id=1_Rzitp2QgeX4uvqbDtznBSFkmliZvv-c" alt="img" /></i>
                <p><a href='/tennisresults'>tennis</a></p>
            </div>
            <div class="basket">
                <i><img src="https://drive.google.com/uc?export=download&id=13rbf0NtCHU8hWh1Bw2uBK7Qiz8a5VRN6" alt="img" /></i>
                <p><a href='/basketballresults'>basketball</a></p>
            </div>
            <div class="table-tennis">
                <i><img src="https://drive.google.com/uc?export=download&id=1ibitdUeLwQ2lwnK14I3DQdEh8vUK4AxK" alt="img" /></i>
                <p><a href='/tennisresults'>table tennis</a></p>
            </div>
            <div class="ice-hockey">
                <i><img src="https://drive.google.com/uc?export=download&id=1VTMbR4zBXC5jNnQ9uCMxV4tlELcG9_Op" alt="img" /></i>
                <p><a href='/hockeyresults'>ice hockey</a></p>
            </div>
            <div className="baseball">
                 <i><img src='https://drive.google.com/uc?export=download&id=1V-uaLUQdw-Bsz8oM2uwyvQgyRIxwzmk3' alt="" /></i>
                 <p><a href="/baseballresults">Baseball</a></p>
            </div>
        </div>
        </div>
        </div>
    )
}