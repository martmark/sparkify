import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
  render() {
    return (
      <div>
        <header className='signup-header'><Link to={'/'}>Sparkify</Link></header>
        <section className='page404-main'>
        <h2>404: Page Not Found</h2>
        </section>
      </div>
    );
  }
}

export default Page404;