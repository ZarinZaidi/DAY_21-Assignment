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
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        backgroundColor: '#333',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        float: 'left',
        padding: '10px 15px',
    },
    navLink: {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 20px',
        textDecoration: 'none',
    },
};
export default Navbar