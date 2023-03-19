import { render, screen } from '@testing-library/react';
import Posts from "./Posts";

test('Should render post titles', () => {
  render(<Posts />);
  const titleElement = screen.queryAllByText(/.+/i);
  expect(titleElement).toEqual(expect.arrayContaining([
    expect.any(HTMLElement),
  ]));
});





















































