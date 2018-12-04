import { render } from 'react-testing-library';

// import Index from '../pages/index';
import About from '../pages/about';

// describe('Page <Index />', () => {
//     it('Should render <Index />', () => {
//         const { queryByText, container } = render(<Index />);
//         expect(container).toMatchSnapshot();

//         expect(queryByText('Index page')).toBeInTheDocument();

//     });
// });

describe('Page <About />', () => {
    it('should render correctly', () => {
        const { queryByText, container } = render(<About />);
        expect(container).toMatchSnapshot();

        expect(queryByText('About page')).toBeInTheDocument();
    });
});
