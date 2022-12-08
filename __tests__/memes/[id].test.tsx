import { render, screen } from '@testing-library/react';
import MemeBlock from '../../pages/memes/[id]';

const mockQuery = {
  captions: 5000,
  imgUrl: 'pusheen.jpg',
  name: 'hello kale chips',
};

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/memes/123',
      pathname: '',
      query: mockQuery,
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

it('Should render correctly on route: /users/nikita', async () => {
  render(<MemeBlock />);
  const heading = screen.getByText(mockQuery.name);
  expect(heading).toBeInTheDocument();
});
