// import css
import './css/VideoDetailsPage.css';
import NavMenu from '../components/NavMenu';
import { useEffect, useState } from 'react';
// import icons
import { GoThumbsdown, GoThumbsup } from 'react-icons/go';

function VideoDetailsPage({ id, addToPlayListHandler }) {
  const [detailVideo, setDetailVideo] = useState({});
  const [status, setStatus] = useState(undefined);

  const likeBtn = status === false ? 'pressed' : '';
  const dislikeBtn = status === true ? 'pressed' : '';

  useEffect(() => {
    fetch(`http://localhost:3000/videos/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDetailVideo(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const addToListPressed = () => {
    addToPlayListHandler(detailVideo);
  };

  const likePressed = () => {
    if (status === undefined) {
      setDetailVideo({ ...detailVideo, likes: detailVideo.likes + 1 });
    } else if (status === true) {
      setDetailVideo({
        ...detailVideo,
        likes: detailVideo.likes + 1,
        dislikes: detailVideo.dislikes - 1,
      });
    }
    setStatus(false);
  };

  const dislikePressed = () => {
    if (status === undefined) {
      setDetailVideo({ ...detailVideo, dislikes: detailVideo.dislikes + 1 });
    } else if (status === false) {
      setDetailVideo({
        ...detailVideo,
        likes: detailVideo.likes - 1,
        dislikes: detailVideo.dislikes + 1,
      });
    }
    setStatus(true);
  };

  return (
    <div>
      <NavMenu />
      <section className='video-player-container'>
        <iframe
          width='800'
          height='450'
          src={`https://www.youtube.com/embed/${detailVideo.id}`}
          title={detailVideo.title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <p className='title'>{detailVideo.title}</p>
        <div className='stats'>
          <p>
            <span>{detailVideo.views}</span>
            &nbsp;&bull;&nbsp;
            <span>{detailVideo.date_posted}</span>
          </p>
          <ul className='links'>
            <li className={likeBtn} onClick={likePressed}>
              <GoThumbsup />
              &nbsp;&nbsp;
              <span>{detailVideo.likes}</span>
            </li>
            <li className={dislikeBtn} onClick={dislikePressed}>
              <GoThumbsdown />
              &nbsp;&nbsp;
              <span>{detailVideo.dislikes}</span>
            </li>
          </ul>
        </div>
        <div className='video-details'>
          <div>
            <p className='creator'>
              <img
                src={`../${detailVideo.profile_photo}`}
                className='creator-profile-photo'
                alt=''
              />
              <span>{detailVideo.title}</span>
            </p>
            <p className='desc'>{detailVideo.description}</p>
          </div>
          <div className='col-right'>
            <button onClick={addToListPressed} className='btn btn-secondary'>
              ADD TO PLAYLIST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default VideoDetailsPage;
