import '../index.css'
import CardModule from './CardModue'
import CardModueSecond from './CardModuleSecond'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MatchOdds from './MatchOdds';
import TennisResults from './TennisResults';
import BasketballResults from './BasketBallResults';

export default function ResultChart(){

    const navigate = useNavigate();

    const navigateToLoadMore = () => {
        navigate('/loadmore');
      };
      const navigateToTennis = () => {
        navigate('/tennisresults');
      };

    return (
        // LIVE NOW
            <div className='result-chart'>
                    <div className='result-chart-header'>LIVE NOW</div>
                    <div className='result-chart-subheader'>
                    <div className="football">
                            <i><img src="../img/soccer_ball_50px.png" alt="img" /></i>
                            <a href="/"><span className='highlights'>Football</span></a>
                        </div>
                        <div className="tennis">
                            <i><img src="../img/tennis_ball_50px.png" alt="img" /></i>
                            <a href="/tennisresults">Tennis</a>
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
                            <a href="/baseballresults">Baseball</a>
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
                   <CardModule />
                   <CardModule />
                   <CardModule />
                   <div className='load-more'>
                    <button onClick={navigateToLoadMore}>LOAD MORE</button>
                   </div>

                    {/*  POINTS FORTS */}

                    <div className='result-chart'>
                    <div className='result-chart-header'>LIVE NOW</div>
                    <div className='result-chart-subheader'>
                        <div className="football">
                            <i><img src="../img/soccer_ball_50px.png" alt="img" /></i>
                            <a href="/"><span className='highlights'>Football</span></a>
                        </div>
                        <div className="tennis">
                            <i><img src="../img/tennis_ball_50px.png" alt="img" /></i>
                            <a href="/tennisresults">Tennis</a>
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
                            <a href="/baseballresults">Baseball</a>
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
                   <CardModueSecond />
                   <CardModueSecond />
                   <CardModueSecond />
                   <CardModueSecond />
                   <CardModueSecond />
                   <CardModueSecond />
                   <CardModueSecond />
                   <CardModueSecond />

                    <Routes>
                      <Route path="/loadmore" element={<MatchOdds />} />
                      <Route path="/tennisresults" element={<TennisResults />} />
                      <Route path="/basketballresults" element={<BasketballResults />} />
                    </Routes>

                </div>
                </div>

                
    )
}