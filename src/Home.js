import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-page-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to our Store</h1>
                    <p>Discover the latest trends in fashion</p>
                    <p className="btn "><Link to="/prod" >Shop Now</Link></p>
                </div>
            </div>
            <div className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {/* Product components can be added here */}
                </div>
            </div>
        </div>
    )
}

export default Home