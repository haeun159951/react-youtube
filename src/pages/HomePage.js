import NavMenu from '../components/NavMenu';
import { useEffect, useState } from 'react';
import VideoListing from '../components/VideoListing';

function HomePage() {
  const [videos, setVideos] = useState([]);
  const url = 'http://localhost:3000/videos';

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setVideos(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavMenu />
      <VideoListing videos={videos} />
    </div>
  );
}

export default HomePage;
