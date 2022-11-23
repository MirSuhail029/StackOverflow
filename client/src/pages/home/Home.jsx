import React from 'react';
import '../../App.css';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import HomeMainbar from '../../components/homeMainbar/HomeMainbar';

const Home = () => {
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <RightSidebar />
            </div>

        </div>
    )
}

export default Home;