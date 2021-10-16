import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="content">
                <h3 className="home-content">Best Food Waiting For Your Belly.</h3>
                <div className="search-field">
                <div className="search-box">
                    <input id="input-field" placeholder="Enter Your Input" className="search-field" type="text" />
                        <button type="button" className="btn btn-danger search-button" data-toggle="button" aria-pressed="false" id="search-btn">
                        Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
