import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import StyleGuide from './pages/StyleGuide'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white dark:bg-secondary-950 transition-colors duration-300">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/styleguide" element={<StyleGuide />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
