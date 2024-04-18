import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-us-container">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="location">
                <h2>Our Location</h2>
                <p>123 Main Street</p>
                <p>City, State, Zip Code</p>
            </div>
            <div className="follow-us">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
        padding: '20px',
    },
    contactForm: {
        gridColumn: '1 / span 2',
    },
    location: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
    },
    followUs: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
    },
};
export default Contact