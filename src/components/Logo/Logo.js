import React from 'react';
import Tilt from 'react-parallax-tilt';
import facelogo from './facelogo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt>
                <div style={{ height: '100px', backgroundColor: 'darkgreen' }}>
                    <h1 className="pa3"><img style={{paddingTop: '5px'}} alt='logo' src={facelogo}/></h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;