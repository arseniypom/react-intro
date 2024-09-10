import { useState } from 'react';
import './Video.css';

function Video(props) {
  const { title, channelName, img } = props;
  const [likesCount, setLikesCount] = useState(0);

  const increaseLikesByOne = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div className="video">
      <img className="video-img" src={img} alt="video image" />
      <p>{title}</p>
      <p>{channelName}</p>
      <div className="video-footer">
        <p>Лайки: {likesCount}</p>
        <button onClick={increaseLikesByOne}>Лайк</button>
      </div>
    </div>
  );
}

export default Video;
