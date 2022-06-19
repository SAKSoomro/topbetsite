import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import SideModule from "./SideModule";
import '../index.css'
import Container from "./Container";
import { Router, Link, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MatchOdds from "./MatchOdds";
import Home from "./Home";
import ShowcaseGaming from "./ShowcaseGaming";
import VirtualGames from "./VirtualGames";
import GameCard from "./Gamecards";
// import https from 'https'
import { useEffect, useState } from "react";
import TennisResults from "./TennisResults";
import BasketballResults from "./BasketBallResults";
import HockeySurGlaceResults from "./HockeySurGlaceResults";
import VolleyballResults from "./Volleyball";
import TennisTable from "./TennisTable";
import BaseballResults from "./BaseballResults";
import Register from "./Register";
import Error from "./Error";
import Login from "./Login";
// import express from "express";

export default function App() {

  const [data, setData] = useState([])

  const navigate = useNavigate();

  const navigateToLoadMore = () => {
    navigate('/loadmore');
  };

  const navigateToVirtualGames = () => {
    navigate('/virtualgames');
  };

  const navigateToTennis = () => {
    navigate('/tennisresults');
  };

  const navigateToBasket = () => {
    navigate('/basketballresults');
  };
  const navigateHockey = () => {
    navigate('/hockeyresults');
  };
  const navigateToVolleyball = () => {
    navigate('/volleyballresults');
  };
  const navigateToTennisTable = () => {
    navigate('/tennistableresults');
  };
  const navigateToBaseball = () => {
    navigate('/baseballresults');
  };
  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToRegister = () => {
    navigate('/register');
  };

  // const url = 'https://sports-live-scores.p.rapidapi.com/football/live?rapidapi-key=e445f1df04msh9c2568eefa9e981p1ff976jsn169985ed8bd8'
  
  // https.get(url,function(response){
  //   console.log(response)
  // })

//   const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'e445f1df04msh9c2568eefa9e981p1ff976jsn169985ed8bd8',
//         'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
//     }
// };

// fetch('https://sports-live-scores.p.rapidapi.com/football/live', options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// const url = 'https://sports-live-scores.p.rapidapi.com/football/live'
// useEffect( () => {
//   fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     console.log('json',json)
//   setData(json)
//   }).catch(e => {
//     console.log('e',e)
//   })
// },[])

// const url = 'https://sports-live-scores.p.rapidapi.com/football/live?rapidapi-key=e445f1df04msh9c2568eefa9e981p1ff976jsn169985ed8bd8'
// useEffect( () => {
//   fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     console.log('json',json)
//   setData(json)
//   }).catch(e => {
//     console.log('e',e)
//   })
// },[])

    return (
      <main>

          <Routes>
            <Route path="/loadmore" element={<MatchOdds />} />
            <Route path="/virtualgames" element={<VirtualGames />} />
            <Route path="/" element={<Home />} />
            <Route path="/tennisresults" element={<TennisResults />}/>
            <Route path="/basketballresults" element={<BasketballResults />}/>
            <Route path="/hockeyresults" element={<HockeySurGlaceResults />}/>
            <Route path="/volleyballresults" element={<VolleyballResults />}/>
            <Route path="/tennistableresults" element={<TennisTable />}/>
            <Route path="/baseballresults" element={<BaseballResults />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/error" element={<Error />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
      </main>
    );

}