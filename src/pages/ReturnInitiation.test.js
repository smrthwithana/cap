import { render, screen, fireEvent } from '@testing-library/react';
import ReturnInitiation from './ReturnInitiation';

describe('ReturnInitiation Component', () => {
    test('submits return request and shows confirmation', async () => {
        render(<ReturnInitiation />);

        // Simulate user input
        fireEvent.click(screen.getByLabelText(/Item 1/i)); // Check the first item
        fireEvent.change(screen.getByPlaceholderText(/Reason for Return/i), { target: { value: 'Defective' } }); // Enter reason
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'shipping' } }); // Select return method

        // Submit the return
        fireEvent.click(screen.getByText(/Submit Return/i));

        // Check for confirmation message
        const confirmationMessage = await screen.findByText(/Return initiated successfully/i);
        expect(confirmationMessage).toBeInTheDocument();
    });

    test('displays error when no items are selected', async () => {
        render(<ReturnInitiation />);

        // Attempt to submit without selecting items
        fireEvent.click(screen.getByText(/Submit Return/i));

        // Check for error message
        const errorMessage = await screen.findByText(/Please select at least one item and a return method/i);
        expect(errorMessage).toBeInTheDocument();
    });
});