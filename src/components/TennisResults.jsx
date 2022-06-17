import '../index.css'
import CardModule from './CardModue'
import CardModueSecond from './CardModuleSecond'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MatchOdds from './MatchOdds';
import ResultChart from './ResultChart';
import Home from './Home';
import Showcase from './Showcase';
import SideModule from './SideModule';
import Footer from './Footer';
import Header from './Header';
import imgStar from '../img/star_32px.png'

 function TennisResultsData(){

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
      };





 function CardModuleTennis(){



    const digitOne = Math.floor(Math.random()*2)
    const digitZero = Math.floor(Math.random()*1)
    const points1  = Math.floor(Math.random(0.5)*10)
    const points2  = Math.floor(Math.random(0.5)*10)
    const points3  = Math.floor(Math.random(0.5)*10)
    const decimal1 = Math.floor(Math.random()*100)
    const decimal2 = Math.floor(Math.random()*100)
    const decimal3 = Math.floor(Math.random()*100)
    const sixty = Math.floor(Math.random()*60)
    const sNo = Math.floor(Math.random()*500)
    const tennisCountryName = ['england','united states','france','austrailia','england','china','france','monaco','europe']
    const tennisCountryName1 = ['england','united states','france','austrailia','england','china','france','monaco','europe']
    const tennisTournaments = ['wimbledon','us open','roland garoos','austrailian open','atp world tour','shanghai masters','miami open','paris masters','monte-carlo masters','ATP world tour finals']
    const tennisTournaments1 = ['wimbledon','us open','roland garoos','austrailian open','atp world tour','shanghai masters','miami open','paris masters','monte-carlo masters','ATP world tour finals']
    // const scorePoints = Math.floor(Math.random() * (100) + 100) / 10;
    const rTennisCountryList = Math.floor(Math.random() * tennisCountryName.length);
    const rTennisCountryList1 = Math.floor(Math.random() * tennisCountryName1.length);
    const rTennisTournamentList = Math.floor(Math.random() * tennisTournaments.length);
    const rTennisTournamentList1 = Math.floor(Math.random() * tennisTournaments1.length)
    return (
        <div className='result-chart-card'>
        <div className='rc-serial-number'><p>{sNo}</p></div>
        <div className='partial-card-first first'>
            <div className='partial-card-up'>
        <i className='starimg'><img src={imgStar} alt="img" /></i>
            <p className='live-label'>LIVE</p>
            <p className=''>{sixty}' | </p>
            {/* <i><img src="../img/star_26px.png" alt="img" /></i> */}
            <p className='city'>{(rTennisCountryList, tennisCountryName[rTennisCountryList])}</p>
            <p className='country'></p>
            </div>
            <div className='partial-card-down'>
                <p><span className='highlight'>{digitZero}</span>{(rTennisTournamentList, tennisTournaments[rTennisTournamentList])}</p>
                <p><span className='highlight'>{digitOne}</span>{(rTennisTournamentList1, tennisTournaments1[rTennisTournamentList1])}</p>
            </div>
        </div>
        <div className='partial-card-second'>
            <p className='point-result'>{points1}.{decimal3}</p>
            <p className='point-result'>{points2}.{decimal2}</p>
            <p className='point-result'>{points3}.{decimal1}</p>
            <p className='dropdown-point-result'></p>
            <p className='point-result'>{points1}.{decimal3}</p>
            <p className='point-result'>{points1}.{decimal2}</p>
            <p className='point-result'>{points3}.{decimal1}</p>
            <p className='point-result'>{points3}.{decimal2}</p>
            <p className='point-result'>{points2}.{decimal3}</p>
            <p className='point-result'>{points2}.{decimal1}</p>
            <p className='point-result'>{points1}.{decimal3}</p>

        </div>
    </div>
    )
}



    return (
        // LIVE NOW
            <div className='result-chart'>
                    <div className='result-chart-header'>LIVE NOW</div>
                    <div className='result-chart-subheader'>
                    <div className="football">
                            <i><img src="../img/soccer_ball_50px.png" alt="img" /></i>
                            <a href="/">Football</a>
                        </div>
                        <div className="tennis">
                            <i><img src="../img/tennis_ball_50px.png" alt="img" /></i>
                            <a href="/tennisresults"><span className='highlights'>Tennis</span></a>
                        </div>
                        <div className="basketball">
                            <i><img src="../img/basketball_64px.png" alt="img" /></i>
                            <a href="/basketballresults">Basketball</a>
                        </div>
                        <div className="hockey">
                            <i><img src="../img/puck_32px.png" alt="img" /></i>
                            <a href="/hockeyresults">Hockey Sur Glace</a>
                        </div>
                        <div className="volleyball">
                        <i><img src="../img/volleyball_32px.png" alt="" /></i>
                            <a href="/volleyballresults">Volleyball</a>
                        </div>
                        <div className="tennis-table">
                            <i><img src="../img/tennis_racquet_50px.png" alt="img" /></i>
                            <a href="/tennistableresults">Tennis Table</a>
                        </div>
                        <div className="baseball">
                            <i><img src="../img/beach_ball_64px.png" alt="" /></i>
                            <a href="/baseball">Baseball</a>
                        </div>
                    </div>
                    {/* CARD HEADER */}
                    <div className='card-header'>
                        <p>1</p>
                        <p>X</p>
                        <p>2</p>
                        <p></p>
                        <p>More</p>
                        <p>Less</p>
                        <p>Oui</p>
                        <p>Non</p>
                        <p>1X</p>
                        <p>12</p>
                        <p>X2</p>
                    </div>
                    {/* CARDS CONTENT */}
                   <CardModule />
                   <CardModule />
                   <CardModule />
                   <CardModule />

                </div>

                
    )
}

export default function TennisResults(){
    
    return (
        <div>
        <Header />
        <Showcase />
        <div>
                <div className='content'>
                <div className='side-module'>
                <SideModule />
                </div>
                <div className='verticle-module'>
                <TennisResultsData />
                </div>
                </div>
                </div>
        <Footer />
        </div>
    )
}