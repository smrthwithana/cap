import React, { useState } from 'react';

const ReturnInitiation = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [returnReasons, setReturnReasons] = useState({});
    const [returnMethod, setReturnMethod] = useState('');
    const [message, setMessage] = useState('');

    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    const handleItemChange = (itemId) => {
        setSelectedItems(prevSelected => {
            if (prevSelected.includes(itemId)) {
                return prevSelected.filter(id => id !== itemId);
            } else {
                return [...prevSelected, itemId];
            }
        });
    };

    const handleReturnReasonChange = (itemId, reason) => {
        setReturnReasons(prevReasons => ({
            ...prevReasons,
            [itemId]: reason
        }));
    };

    const handleReturnMethodChange = (event) => {
        setReturnMethod(event.target.value);
    };

    const handleReturn = async () => {
        const returnDetails = selectedItems.map(itemId => ({
            itemId,
            reason: returnReasons[itemId],
        }));

        if (returnDetails.length === 0 || !returnMethod) {
            setMessage('Please select at least one item and a return method.');
            return;
        }

        // Format the return details into a readable string
        const formattedDetails = returnDetails.map(item => `Item ID: ${item.itemId} (Reason: ${item.reason || 'N/A'})`).join(', ');

        // Set the success message
        setMessage(`Return initiated successfully: ${formattedDetails} with method: ${returnMethod}`);
    };

    return (
        <div>
            <h2>Initiate Return</h2>
            <h3>Select Items to Return:</h3>
            {items.map(item => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        id={`item-${item.id}`}
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleItemChange(item.id)}
                    />
                    <label htmlFor={`item-${item.id}`}>{item.name}</label>
                    {selectedItems.includes(item.id) && (
                        <div>
                            <input
                                type="text"
                                placeholder="Reason for Return"
                                value={returnReasons[item.id] || ''}
                                onChange={(e) => handleReturnReasonChange(item.id, e.target.value)}
                            />
                        </div>
                    )}
                </div>
            ))}
            <h3>Select Return Method:</h3>
            <select value={returnMethod} onChange={handleReturnMethodChange}>
                <option value="">Select Method</option>
                <option value="shipping">Shipping</option>
                <option value="drop-off">Drop-Off</option>
            </select>
            <button onClick={handleReturn}>Submit Return</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ReturnInitiation;