import LayoutTop from '../containers/LayoutTop';

export default (props) => (
    <div>
        <LayoutTop />
        {props.children}
    </div>
)
