import { render, screen } from '@testing-library/react'
import Home, { headingText } from '../pages/index'

describe('Home', () => {
  const props = {
    data: {
      data: {
        memes: [
          {
            box_count: 123,
            captions: 123,
            height: 123,
            id: 'asdf123',
            name: 'asdf',
            url: 'asdf.com',
            width: 123,
          },
          {
            box_count: 456,
            captions: 456,
            height: 456,
            id: 'qwerty456',
            name: 'qwerty',
            url: 'qwerty.com',
            width: 456,
          },
        ],
      }
    }
  };

  beforeEach(() => {
    render(<Home {...props} />);
  });

  it('renders a heading', () => {
    const heading = screen.getByText(headingText);
    expect(heading).toBeInTheDocument();
  });

  it('renders the correct number of memes', () => {
    const listItems = screen.getAllByTestId('list-item');
    expect(listItems.length).toBe(props.data.data.memes.length);
  });
});
