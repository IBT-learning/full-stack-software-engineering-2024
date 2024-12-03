import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('adds a new task to the to-do list', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter a task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('marks a task as completed', () => {
    render(<App />);
    const task = screen.getByText('make dinner');
    fireEvent.click(task);

    expect(task).toHaveClass('completed');
});

test('deletes a task from the to-do list', () => {
    render(<App />);
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText('make dinner')).not.toBeInTheDocument();
});
