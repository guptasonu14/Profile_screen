import React, { useState } from 'react';
import './Profile.css';
import Ceo from '../../assets/ceo.jpeg';

function Profile() {
  const [likes, setLikes] = useState(12); // Initial like count

  const handleLikeClick = () => {
    // Increase the like count
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="userWrapper">
      <div className="ImageWrapper">
        <div className="userImageBlock">
          <img src={Ceo} alt="Ceo" />
        </div>
        <div className="userDetails">
          <h3>Anuj Gosalia💎✅</h3>
          <div className="userFollowersWrapper">
            <div>
              <button>6482</button>
              <p>Followers</p>
            </div>
            <div>
              <button>245</button>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profileData">
        <p>Co-founder & CEO at Terribly Tiny Tales</p>
        <a href="https://www.instagram.com/anujgosalia" target="_blank" rel="noopener noreferrer">
          https://www.instagram.com
        </a>
        <div>
          <div>⭐ 125</div>
          
          <div
          onClick={handleLikeClick}>👍{likes} 
          </div>
          <div>👁️ 57.8K</div>
          <div>💖 26.0K</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
