import renderer from 'react-test-renderer';
import { Calculator } from '../components';

it('renders calculator page correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
