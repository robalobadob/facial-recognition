import React from 'react';
import Tilt from 'react-parallax-tilt';
import facelogo from './facelogo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 flex'>
            <Tilt>
                <div className='ba grow shadow-5' style={{ height: '100px', width: '100px', background: 'linear-gradient(89deg, #00afe4 0%, #fce423 100%' }}>
                    <h1><img style={{padding: '5px'}} alt='logo' src={facelogo}/></h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;