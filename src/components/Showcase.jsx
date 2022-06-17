import { Link, NavLink } from 'react-router-dom'
import '../index.css'
import baseballimg from '../img/beach_ball_64px.png'

export default function Showcase(){
    return (
        <div>
            <div className="container">
        <div class="main-image">
            <img src="../img/background.png" alt="img" />
        </div>
        <div class="result-bar">
            <div class="live">
                <i><img src="../img/pot_player_64px.png" alt="img" /></i>
                <p><a href='/loadmore'>live</a></p>
            </div>
            <div class="footbal">
                <i><img src="../img/soccer_ball_50px.png" alt="img" /></i>
                <p><a href='/'>footbal</a></p>
            </div>
            <div class="tennis">
                <i><img src="../img/tennis_ball_50px.png" alt="img" /></i>
                <p><a href='/tennisresults'>tennis</a></p>
            </div>
            <div class="basket">
                <i><img src="../img/basketball_64px.png" alt="img" /></i>
                <p><a href='/basketballresults'>basketball</a></p>
            </div>
            <div class="table-tennis">
                <i><img src="../img/tennis_racquet_50px.png" alt="img" /></i>
                <p><a href='/tennisresults'>table tennis</a></p>
            </div>
            <div class="ice-hockey">
                <i><img src="../img/puck_32px.png" alt="img" /></i>
                <p><a href='/hockeyresults'>ice hockey</a></p>
            </div>
            <div className="baseball">
                 <i><img src={baseballimg} alt="" /></i>
                 <p><a href="/baseballresults">Baseball</a></p>
            </div>
        </div>
        </div>
        </div>
    )
}