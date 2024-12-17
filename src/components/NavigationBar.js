// src/components/NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav>
            <ul>
                <li ><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                        Services
                    </span>
                    {dropdownOpen && (
                        <ul className="dropdown">
                            <li><Link to="/return-initiation">Initiate Return</Link></li>
                            <li><Link to="/tracking">Track Return</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/rma">Request RMA</Link></li> {/* New link for RMA */}
            </ul>
        </nav>
    );
};

export default NavigationBar;