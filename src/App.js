/*********************************************************************************
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Ha Eun Kim Student ID: 158007187 Date: June 25, 2021
 *
 ********************************************************************************/

import './App.css';
// page imports
import VideoDetailsPage from './pages/VideoDetailsPage';
import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let videolist = [];
function App() {
  const addToPlayList = (video) => {
    videolist.push(video);
    alert('Saved!');
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/myPlaylist'>
            <PlaylistPage playlist={videolist} />
          </Route>
          <Route
            exact
            path='/video-details/:id'
            render={(props) => (
              <VideoDetailsPage
                id={props.match.params.id}
                addToPlayListHandler={addToPlayList}
              />
            )}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
