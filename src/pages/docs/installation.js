import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';
import { downloadLinks } from '../../data/download-links';

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
          <a href={downloadLinks.macOS}>MacOS</a> or{' '}
          <a href={downloadLinks.linux}>Linux</a>.
        </p>
        <p>
          2. For MacOS: Unzip the compressed folder. <br />
        </p>
        <p style={{ 'padding-left': '20px' }}>
          For Linux: Follow the{' '}
          <a href='https://help.ubuntu.com/kubuntu/desktopguide/C/manual-install.html'>
            {' '}
            installation instructions for .deb files.
          </a>
        </p>
        <p>3. Run OverVue 10.0.</p>​
      </div>
    </DocsLayout>
  );
}
