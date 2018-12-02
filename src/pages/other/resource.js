import { withRouter } from 'next/router';

import Layout from '../../components/Layout';

export default withRouter((props) => (
  <Layout>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    You are viewing resource {props.router.query.id}
  </Layout>
));
