import './css/Video.css';
import { Link } from 'react-router-dom';

function Video({ video }) {
  if (video !== undefined) {
    return (
      <div className='video-container'>
        <img
          className='video-thumbnail'
          src={`${video.video_thumbnail}`}
          alt=''
        />
        <div className='video-details'>
          <p className='name'>
            <Link to={`/video-details/${video.id}`}>{video.title}</Link>
          </p>
          <p className='stats'>{video.date_posted}</p>
          <p className='creator'>
            <img
              //src='assets/profiles/andong.jpg'
              src={`${video.profile_photo}`}
              className='creator-profile-photo'
              alt=''
            />
            <span> {video.author}</span>
          </p>
          <p className='desc'>{video.description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default Video;
