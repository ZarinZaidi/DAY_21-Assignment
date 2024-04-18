import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul style={styles.navbar}>
                <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
                <li style={styles.navItem}><Link to="/prod" style={styles.navLink}>Product</Link></li>
                <li style={styles.navItem}><Link to="/news" style={styles.navLink}>News</Link></li>
                <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
                <li style={styles.navItem}><Link to="/corp" style={styles.navLink}>Corporate</Link></li>
                <li style={styles.navItem}><Link to="/con" style={styles.navLink}>Contact Us</Link></li>
            </ul>
        </div>
    )
}

const styles = {
    navbar: {
        display: 'flex',
        listStyleType: 'none',
        padding: 0,
        backgroundColor: '#333',
        color: '#fff',
    },
    navItem: {
        marginRight: '10px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px',
    },
};
export default Navbar