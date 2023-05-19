import React from "react";
import HeaderExampleUsersIcon from './Header';
import ListExampleLink from "./List";
import EmbedComponent from "./Embed";
import { useQuery } from '@apollo/client';
import { ALL_SONGS } from "../utils/queries";
import { Grid, Image, Rail, Segment } from "semantic-ui-react";
import MenuExampleSubMenu from "./Menu";
import "../App.css";
import "../index.css";
import 'semantic-ui-css/semantic.min.css';
import "./Home.css";
import HomeList from "./HomeList";

function Home() {

  let { data } =  useQuery(ALL_SONGS);
  let songList = data?.allSongs;

  console.log(songList);

    return (

      <div className="App">
  
        <HeaderExampleUsersIcon />
  
        <MenuExampleSubMenu />
  
    
        <HomeList />


        <form>

          

        </form>
  
      </div>
    );
  }

  export default Home;