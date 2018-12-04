import renderWithRedux from '../utils/render-with-redux';

import About from '../pages/about';
import Cart from '../pages/cart';
import Index from '../pages/index';

describe('Page <About />', () => {
    it('should render correctly', () => {
        const { queryByText, container } = renderWithRedux(<About />);
        expect(container).toMatchSnapshot();

        expect(queryByText('About page')).toBeInTheDocument();
    });
});

describe('Page <Cart />', () => {
    it('should render correctly', () => {
        const { container } = renderWithRedux(<Cart />);
        expect(container).toBeInTheDocument();
    });
});

describe('Page <Index />', () => {
    it('Should render <Index />', () => {
        const { container } = renderWithRedux(<Index />);
        expect(container).toBeInTheDocument();

    });
});
