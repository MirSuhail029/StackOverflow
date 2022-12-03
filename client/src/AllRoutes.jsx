import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Questions from './pages/questions/Questions';
import AskQuestion from './pages/askquestion/AskQuestion';
import DisplayQuestion from './pages/questions/DisplayQuestion';

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Auth' element={<Auth />} />
            <Route exact path='/Questions' element={<Questions />} />
            <Route exact path='/AskQuestion' element={<AskQuestion />} />
            <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
        </Routes>
    )
}

export default AllRoutes