import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';

export default function Installation() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h3>Installation</h3>
        <p>OverVue is compatible with both MacOS and Linux.</p>
        <p>
          To test the development version of OverVue, fork and clone our{' '}
          <a href='https://github.com/open-source-labs/OverVue'>
            GitHub repository
          </a>
          !{' '}
        </p>
        <br />
        <h3>Installation Instructions</h3>
        <p>
          1. Download the desktop App for{' '}
          <a href='https://github.com/open-source-labs/OverVue/releases/download/v8.0.0/OverVue-8.0.0-darwin-universal.zip'>
            MacOS
          </a>{' '}
          or{' '}
          <a href='https://github.com/open-source-labs/OverVue/releases/download/v8.0.0/OverVue-8.0.0-linux-x64.zip'>
            Linux
          </a>
          .
        </p>
        <p>2. Unzip the compressed folder.</p>
        <p>3. Run OverVue 10.0.</p>​
      </div>
    </DocsLayout>
  );
}
