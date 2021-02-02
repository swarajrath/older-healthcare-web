import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="/home"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/notifications"><i className="fab fa-github"></i></a></li>
                        <li><a href="/projects"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="/achievements"><i className="fas fa-envelope-open"></i></a></li>
                        <li><a href="/contact"><i className="fas fa-envelope-open"></i></a></li>
                    </ul>
                    
                </div>

            </footer>
        </div>
    )
}

export default Footer
