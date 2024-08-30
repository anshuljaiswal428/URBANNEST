import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '/src/css/FindYourNest.css';

const FindYourNest: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }, []);

  return (
    <div className="full_container">
      <div className="navContainer">

      </div>
      <div className="findPg">
        <div className="findPgLeft" id="map" style={{ height: '750px', borderRadius: '1rem' }} />
        <div className="findPgRight">
          <div className='gridContainer'>
            <div className="grid-item">
              <img src='/public/assets/FindPageImages/ar1.jpg' className='grid-item-img' />
              <div className='grid-item-text'>
                <h3>Leelansh Girls's PG <br />
                  <span>Devi Nagar, Sodala</span>
                </h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora molestiae quae cumque eaque aliquid porro! Amet, enim facere sit odio sunt dolorem, totam voluptate ex repellendus optio officiis cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sed asperiores obcaecati necessitatibus earum repellendus dolorem dolores, labore maxime ea repudiandae quasi nulla doloribus sunt eligendi omnis corrupti? Illum, corrupti!
              </div>
            </div>
            <div className="grid-item">
              <img src='/public/assets/FindPageImages/ar1.jpg' className='grid-item-img' />
              <div className='grid-item-text'>
                <h3>Leelansh Girls's PG <br />
                  <span>Devi Nagar, Sodala</span>
                </h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora molestiae quae cumque eaque aliquid porro! Amet, enim facere sit odio sunt dolorem, totam voluptate ex repellendus optio officiis cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sed asperiores obcaecati necessitatibus earum repellendus dolorem dolores, labore maxime ea repudiandae quasi nulla doloribus sunt eligendi omnis corrupti? Illum, corrupti!
              </div>
            </div>
            <div className="grid-item">
              <img src='/public/assets/FindPageImages/ar1.jpg' className='grid-item-img' />
              <div className='grid-item-text'>
                <h3>Leelansh Girls's PG <br />
                  <span>Devi Nagar, Sodala</span>
                </h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora molestiae quae cumque eaque aliquid porro! Amet, enim facere sit odio sunt dolorem, totam voluptate ex repellendus optio officiis cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sed asperiores obcaecati necessitatibus earum repellendus dolorem dolores, labore maxime ea repudiandae quasi nulla doloribus sunt eligendi omnis corrupti? Illum, corrupti!
              </div>
            </div>
            <div className="grid-item">
              <img src='/public/assets/FindPageImages/ar1.jpg' className='grid-item-img' />
              <div className='grid-item-text'>
                <h3>Leelansh Girls's PG <br />
                  <span>Devi Nagar, Sodala</span>
                </h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora molestiae quae cumque eaque aliquid porro! Amet, enim facere sit odio sunt dolorem, totam voluptate ex repellendus optio officiis cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sed asperiores obcaecati necessitatibus earum repellendus dolorem dolores, labore maxime ea repudiandae quasi nulla doloribus sunt eligendi omnis corrupti? Illum, corrupti!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindYourNest;
