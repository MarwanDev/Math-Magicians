import renderer from 'react-test-renderer';
import { Home } from '../components';

it('renders home page correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
