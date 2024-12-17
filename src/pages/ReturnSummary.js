import React from 'react';

const ReturnSummary = ({ returnDetails }) => {
    return (
        <div>
            <h2>Return Summary</h2>
            {returnDetails.length > 0 ? (
                <ul>
                    {returnDetails.map((detail, index) => (
                        <li key={index}>
                            Item ID: {detail.itemId}, Reason: {detail.reason}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items to return. Please initiate a return to see the summary here.</p>
            )}
        </div>
    );
};

export default ReturnSummary;