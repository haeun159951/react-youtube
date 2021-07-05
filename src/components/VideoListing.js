import './css/VideoListing.css';
import Video from './Video';

function VideoListing({ videos }) {
  return (
    <section className='listing-container'>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}
export default VideoListing;
