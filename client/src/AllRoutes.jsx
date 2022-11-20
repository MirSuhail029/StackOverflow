import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Auth' element={<Auth />} />

        </Routes>
    )
}

export default AllRoutes