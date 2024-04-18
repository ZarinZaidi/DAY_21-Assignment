import React from 'react';
import './News.css'

function News() {
    const newsData = [
        {
            id: 1,
            title: "German & Poland, Investment worth $1B!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "2024-03-25",
            image: "img1.jpeg",
        },
        {
            id: 2,
            title: "Hiring Anyone",
            description:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "2024-03-24",
            image: "img2.jpeg",
        },
        {
            id: 3,
            title: "Diversity Award!",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: "2024-03-23",
            image: "img3.jpeg",
        },
    ];
    return (
        <div className="news-container">
            <h1>Latest News</h1>
            {newsData.map((news) => (
                <div className="news-item" key={news.id}>
                    <img src={news.image} alt={news.title} />
                    <div className="news-details">
                        <h2>{news.title}</h2>
                        <p>{news.description}</p>
                        <span>{news.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default News;