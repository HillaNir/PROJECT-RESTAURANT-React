import React from 'react';

function MainPage() {
  return (
    <div style={{ fontFamily: 'fantasy'}} >
        <div className="center-align" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img
            src="https://media.istockphoto.com/id/1284317567/vector/restaurant-on-transparent-background.jpg?s=612x612&w=0&k=20&c=UiH41QgE4M5B6Lhd2P5FiFwEhB4r7_Vy5kditQZnogc="
            alt="Restaurant"
            style={{ maxWidth: '100%', maxHeight: '70%', marginBottom: '2rem' }}
            />
            <h3 style={{ color: 'white', background: '#b71c1c', padding: '1rem' }}>
                Welcome to Hilla's Restaurant!
            </h3>
            <h5 style={{ color: '#b2dfdb', background: '#006064', padding: '1rem' }}>The place where API does its magic...</h5>
            <a href="/menu">Go To Menu</a>
            
        </div>
    </div>
  );
}

export default MainPage;
