import { withRouter } from 'next/router';

export default withRouter((props) => (
  <div>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    You are viewing resource {props.router.query.id}
  </div>
));
