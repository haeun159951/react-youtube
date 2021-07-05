import NavMenu from '../components/NavMenu';
import './css/PlaylistPage.css';
import VideoListing from '../components/VideoListing';

function PlaylistPage({ playlist }) {
  if (playlist === undefined || playlist.length === 0) {
    return (
      <div className='Playlist'>
        <NavMenu />
        <div className='sub-error'>
          <h2>My Playlist</h2>
          <p>You don't have any videos in your playlist</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='Playlist'>
        <NavMenu />
        <VideoListing videos={playlist} />
      </div>
    );
  }
}
export default PlaylistPage;
