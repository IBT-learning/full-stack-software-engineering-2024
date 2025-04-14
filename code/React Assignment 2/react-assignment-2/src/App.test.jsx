import { beforeEach, describe, expect, it, vi } from "vitest"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "./App";

global.fetch = vi.fn()

describe('To-Do App Tests',() => {
    test('adds a new item to the to-do list', () => {
        render(<App />);

        // Select input field and button
    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    // Simulate typing and submitting
    fireEvent.change(input, { target: { value: 'Buy groceries' } });
    fireEvent.click(addButton);

    // Check if the item appears in the list
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });

  test('marks an item as complete', () => {
    render(<App />);

    // Add an item
    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'Do homework' } });
    fireEvent.click(addButton);

    // Click to mark as complete
    const completeButton = screen.getByText('Complete');
    fireEvent.click(completeButton);

    // Check if the item has a completed class or style change
    const taskItem = screen.getByText('Do homework');
    expect(taskItem).toHaveClass('completed');
  });

  test('deletes an item from the to-do list', () => {
    render(<App />);

    // Add an item
    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Read a book' } });
    fireEvent.click(addButton);

    // Delete the item
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Check that the item is removed
    expect(screen.queryByText('Read a book')).not.toBeInTheDocument();
  });
});
