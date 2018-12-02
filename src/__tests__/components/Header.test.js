import { render } from 'react-testing-library';

import Header from '../../components/Header';

describe('Component <Header />', () => {
    it('Should render <Header />', () => {
        const { container } = render(<Header />);
        expect(container).toBeInTheDocument();
    });

    it('Should contain specific links', () => {
        const { getByTestId, container } = render(<Header />);

        // Check the number of links.
        const links = container.querySelectorAll('a');
        expect(links).toHaveLength(3);

        // Check specific links.
        const linkHome = getByTestId('link-home');
        expect(linkHome).toBeInTheDocument();
        expect(linkHome).toHaveAttribute('href', '/');

        const linkAbout = getByTestId('link-about');
        expect(linkAbout).toBeInTheDocument();
        expect(linkAbout).toHaveAttribute('href', '/about');
    });
});
