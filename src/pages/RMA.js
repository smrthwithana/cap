// src/pages/RMA.js
import React, { useState } from 'react';

const RMA = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [rmaNumber, setRmaNumber] = useState('');
    const [message, setMessage] = useState('');

    const generateRMA = () => {
        // Simple RMA generation logic (you can customize this)
        if (orderId && email) {
            const generatedRma = `RMA-${orderId}-${Date.now()}`; // Example format
            setRmaNumber(generatedRma);
            setMessage(`Your RMA number is: ${generatedRma}`);
            // Reset fields
            setOrderId('');
            setEmail('');
        } else {
            setMessage('Please enter both Order ID and Email.');
        }
    };

    return (
        <div>
            <h2>Request Return Merchandise Authorization (RMA)</h2>
            <input 
                type="text" 
                placeholder="Enter Order ID" 
                value={orderId} 
                onChange={(e) => setOrderId(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Enter Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={generateRMA}>Generate RMA</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RMA;