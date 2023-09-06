import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';
import save from '../../assets/doc-data/save.gif';
import exp from '../../assets/doc-data/export.gif';

export default function SaveAndExport() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h2>Save, import, and export projects</h2>
        <div className='desc'>
          <div className='saveImport'>
            ​<h3>Save a project / import a project</h3>
            <p>
              To save your progress within the application, click the "Save"
              button in the upper-right corner of the application to save your
              prototype structure as a JSON file.{' '}
            </p>
            <p>
              {' '}
              You can then import that JSON file (using the "Import" button) at
              a later time to restore your progress and keep building your
              project.
            </p>
          </div>
          <img
            className='gif'
            alt='Save Import'
            src='https://media.giphy.com/media/AEQJSRb04uXuomJhIQ/giphy.gif'
          ></img>
        </div>
        <div className='desc'>
          <div className='saveImport'>
            <h3>Export a project</h3>
            <p>
              To export your project as a folder, click the "Export" button in
              the upper-right corner.
            </p>
            <p>
              {' '}
              Clicking "Current Project" will export the entire project as a
              folder containing files with boilerplate code.
            </p>
            <p>
              Clicking "Current Active Component" will export the current active
              component as a single .vue file.
            </p>
          </div>
          <img
            className='gif'
            alt='Export'
            src='https://media.giphy.com/media/iu0j0TsZDHiGx5Qa3K/giphy.gif'
          ></img>
        </div>
      </div>
    </DocsLayout>
  );
}
