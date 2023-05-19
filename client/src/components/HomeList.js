import React from "react";
import { useQuery } from '@apollo/client';
import { ALL_SONGS } from "../utils/queries";
import "../App.css";
import "../index.css";
import 'semantic-ui-css/semantic.min.css';
import "./HomeList.css";

function HomeList() {

  const { data } =  useQuery(ALL_SONGS);
  const songList = data?.allSongs || [];
  console.log(songList)

    return (

        <div>
            {songList && songList.map((song) => (
                <div key={song._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                    
                    <h4 className="card-header bg-dark text-light p-2 m-0">
                    {song.name}
                    </h4>

                    <audio controls>
                        <source src={song.mp3Link} type="audio/mpeg" />
                    </audio>
                    
                </div>
                </div>
            ))}
        </div>
    );
  }

  export default HomeList;