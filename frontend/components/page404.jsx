import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
  render() {
    return (
      <div>
        <header className='signup-header'><Link to={'/'}>Sparkify</Link></header>
        <section className='page404-main'>
        <h2>404: Page Not Found</h2>
        <br/>
          <div style={{ textAlign: 'center', fontSize: '22px' }}><Link className='green-link' to={'/'}>Home</Link></div>
        </section>
      </div>
    );
  }
}

export default Page404;