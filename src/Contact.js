import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div class="container">
            <h1>Contact Us</h1>
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder='eg: John Doe' required></input>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder='eg: john@mail.com' required></input>

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder='Any messages for us is welcome. ' required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact