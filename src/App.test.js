import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "./App.js";

describe('Menu links work', () => {
  test('Сlicking on posts link renders the posts page', async () => {
    render(<App />);
    const aboutPosts = screen.getAllByText(/Posts/i);
    await userEvent.click(aboutPosts[0]); 
    expect(screen.getByText(/View our posts/i)).toBeInTheDocument();
  });
  
  test('Сlicking on login link renders the login page', async () => {
    render(<App />);
    const aboutLogin = screen.getAllByText(/Login/i);
    await userEvent.click(aboutLogin[0]); 
    expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
  });

  test('Сlicking on login link renders the main page', async () => {
    render(<App />);
    const aboutMain = screen.getAllByText(/Main/i);
    await userEvent.click(aboutMain[0]); 
    expect(screen.getByText(/We have a lot of posts/i)).toBeInTheDocument();
  });
});



