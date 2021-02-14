import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="/"><i className="fas fa-home"></i></a></li>
                        <li><a href="/todopage"><i className="fas fa-tasks"></i></a></li>
                        <li><a href="/profile"><i className="fas fa-users"></i></a></li>
                        {/* <li><a href="/achievements"><i className="fas fa-envelope-open"></i></a></li>
                        <li><a href="/contact"><i className="fas fa-envelope-open"></i></a></li> */}
                    </ul>
                    
                </div>

            </footer>
        </div>
    )
}

export default Footer
