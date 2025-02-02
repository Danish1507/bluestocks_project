import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/pages/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="home-container">
                <h1>Welcome to Bluestocks</h1>
                <p>Your one-stop platform for stock trading insights.</p>
                <button className="signup-btn" onClick={() => navigate('/login')}>
                    Sign Up Now
                </button>
            </div>
        </div>
    );
};

export default Home;
