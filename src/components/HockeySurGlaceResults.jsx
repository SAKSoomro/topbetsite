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

 function HockeySurGlaceData(){

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
      };

    return (
        // LIVE NOW
            <div className='result-chart'>
                    <div className='result-chart-header'>LIVE NOW</div>
                    <div className='result-chart-subheader'>
                    <div className="football">
                    <i><img src='https://drive.google.com/uc?export=download&id=1kvEL-xsjQfkeB4swZqAou5MVCDg5rIsc' /></i>
                            <a href="/">Football</a>
                        </div>
                        <div className="tennis">
                            <i><img src="https://drive.google.com/uc?export=download&id=1_Rzitp2QgeX4uvqbDtznBSFkmliZvv-c" alt="img" /></i>
                            <a href="/tennisresults">Tennis</a>
                        </div>
                        <div className="basketball">
                            <i><img src="https://drive.google.com/uc?export=download&id=13rbf0NtCHU8hWh1Bw2uBK7Qiz8a5VRN6" alt="img" /></i>
                            <a href="/basketballresults">Basketball</a>
                        </div>
                        <div className="hockey">
                        <i><img src="https://drive.google.com/uc?export=download&id=13rbf0NtCHU8hWh1Bw2uBK7Qiz8a5VRN6" alt="img" /></i>
                            <a href="/hockeyresults"><span className='highlights'>Hockey Sur Glace</span></a>
                        </div>
                        <div className="volleyball">
                        <i><img src="https://drive.google.com/uc?export=download&id=13ymJlbsDjTZWTfQkeRNufZFFpEN2tjbK" alt="" /></i>
                            <a href="/volleyballresults">Volleyball</a>
                        </div>
                        <div className="tennis-table">
                            <i><img src="https://drive.google.com/uc?export=download&id=1ibitdUeLwQ2lwnK14I3DQdEh8vUK4AxK" alt="img" /></i>
                            <a href="/tennistableresults">Tennis Table</a>
                        </div>
                        <div className="baseball">
                            <i><img src="https://drive.google.com/uc?export=download&id=1V-uaLUQdw-Bsz8oM2uwyvQgyRIxwzmk3" alt="" /></i>
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

                </div>

                
    )
}

export default function HockeySurGlaceResults(){
    
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
                <HockeySurGlaceData />
                </div>
                </div>
                </div>
        <Footer />
        </div>
    )
}