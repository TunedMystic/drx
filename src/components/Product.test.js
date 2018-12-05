import { render, fireEvent } from 'react-testing-library';

import Product from './Product';

describe('Component <Product />', () => {
    const addToCart = jest.fn();
    const productData = {
        name: 'Pen',
        price: 3.99
    };
    const productProps = {
        product: productData,
        addToCart
    };

    it('should render correctly', () => {
        const { queryByText, getByTestId } = render(<Product {...productProps} />);
        expect(queryByText('Pen')).toBeInTheDocument();
        expect(queryByText('$3.99')).toBeInTheDocument();
        expect(getByTestId('add-to-cart').textContent).toBe('Add to cart');
    });

    it('should match snapshot', () => {
        const { container } = render(<Product {...productProps} />);
        expect(container).toMatchSnapshot();
    });

    it('should call addToCart on button click', () => {
        const { getByTestId } = render(<Product {...productProps} />);
        fireEvent.click(getByTestId('add-to-cart'));
        // Check that the function was called 1 time.
        expect(addToCart.mock.calls.length).toBe(1);
        // Check that the first function invocation was called with the expected args.
        expect(addToCart.mock.calls[0][0]).toBe(productData);
    });
});
