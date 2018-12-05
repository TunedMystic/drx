import axios from 'axios';
import { cleanup, waitForElement } from 'react-testing-library';

import renderWithRedux from '../utils/render-with-redux';
import ProductGrid from './ProductGrid';

jest.mock('axios');

afterEach(cleanup);

describe('Container', () => {
    let productsResponse = [
        {
            id: 'mvx7',
            name: 'Pizza',
            price: 5.99
        },
        {
            id: 'hyt3',
            name: 'Cake',
            price: 12.67
        },
        {
            id: 'k85x',
            name: 'Salad',
            price: 4.78
        },
    ];

    productsResponse = {data: {json: productsResponse}};

    it('should render correctly', async () => {
        axios.post.mockReturnValue(new Promise(resolve => resolve(productsResponse)));
        const { container } = renderWithRedux(<ProductGrid />);
        expect(container).toBeInTheDocument();
    });

    it('should match snapshot', async () => {
        axios.post.mockReturnValue(new Promise(resolve => resolve(productsResponse)));
        const { container } = renderWithRedux(<ProductGrid />);
        expect(container).toMatchSnapshot();
    });

    it('should render <Product /> components', async () => {
        axios.post.mockReturnValue(new Promise(resolve => resolve(productsResponse)));
        const { queryByText, getAllByTestId } = renderWithRedux(<ProductGrid />);

        // Wait for the data to resolve.
        // Isn't the data resolved immediately? Is this really helpful?
        await waitForElement(() => getAllByTestId('product'));

        // Check that 3 products have rendered.
        expect(getAllByTestId('product')).toHaveLength(3);

        expect(queryByText('Pizza')).toBeInTheDocument();
        expect(queryByText('Cake')).toBeInTheDocument();
        expect(queryByText('Salad')).toBeInTheDocument();
    });
});
