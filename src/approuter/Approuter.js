import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../components/Detail'
import Navbar from '../components/Navbar'
import Portfile from '../components/Portfile'




const AppRouter = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar />
        
        <Routes>

            <Route path="/" element={<Portfile />} />
            <Route path="/detail" element={<Detail />} />

        </Routes>

        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter