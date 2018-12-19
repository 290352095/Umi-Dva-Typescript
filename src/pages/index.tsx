import React from 'react';
import ButtonWithDefaultProps from './test/Button';
import Computed from './test/Computed';
import Link from 'umi/link';

export default function() {
  return (
    <div className={'normal'}>
      <div className={'welcome'} />
      <ul className={'list'}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          {/*<ButtonWithDefaultProps />*/}
          <Computed />
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
          <Link to="/display">go to display</Link>
        </li>
      </ul>
    </div>
  );
}
