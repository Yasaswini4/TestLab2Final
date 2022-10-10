import React from 'react';
import Addition from '../Addition/Addition';
import Description from '../Description/Description';

const Home = () => {
    return (
        <div>
            <div className='section-margins'>
                <Description></Description>
            </div>
            <div className='section-margins'>
                <Addition></Addition>
            </div>
        </div>
    );
};

export default Home;