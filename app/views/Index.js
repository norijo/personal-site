import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Me</Link></h2>
          <p>
              <ul>
                <li>Age: 17</li>
                <li>Status: ughnjhsn??</li>
                <li>Busy with school normally.</li>
              </ul>
            </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        {/* <Link to="/resume">resume</Link>, {' '} */}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or <Link to="/contact">contact</Link> me.
      </p>

    </article>
  </Main>
);

export default Index;
