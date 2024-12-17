// src/pages/Tracking.js
import React, { useState } from 'react';

const Tracking = () => {
    const [trackingId, setTrackingId] = useState('');
    const [status, setStatus] = useState('');

    const handleTrack = () => {
        // Logic to fetch tracking status (e.g., API call)
        setStatus(`Tracking status for ID: ${trackingId} is: Your return is being processed.`);
        // Reset field
        setTrackingId('');
    };

    return (
        <div>
            <h2>Track Your Return</h2>
            <input 
                type="text" 
                placeholder="Enter Tracking ID" 
                value={trackingId} 
                onChange={(e) => setTrackingId(e.target.value)} 
            />
            <button onClick={handleTrack}>Track</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Tracking;