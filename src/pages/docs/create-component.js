import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';
import Codesnippet from '../../assets/doc-data/Codesnippet.jpg';
import CreateComponentPic from '../../assets/doc-data/createcomponent.jpg';
import CreateElementPlus from '../../assets/doc-data/createlementplus.jpg';
import AddingProps from '../../assets/doc-data/addingprops.jpg';
import Vuetensils from '../../assets/doc-data/Vuetensils.png';

export default function CreateComponent() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h2>Creating New Components</h2>​
        <div className='desc'>
          <div>
            <h3>Create a new component</h3>
            <p>
              Under the Create Component menu in the left sidebar, set a
              component name (required) and optionally select a parent
              component.
            </p>
            <p> Then, click "Create Component" at the bottom of the menu.</p>
          </div>
          <img
            src='https://live.staticflickr.com/65535/53168259342_eb72295e98_b.jpg'
            className='gif'
            alt='CreateComponent'
          />
        </div>
        <div className='desc'>
          <div>
            <h3>Add HTML elements</h3>
            <p>
              Add HTML elements to your active component! Use the HTML Elements
              tab on the right sidebar.
            </p>
            <img
              src='https://live.staticflickr.com/65535/53169043389_d2f9b551cb_b.jpg'
              className='gif'
              alt='AddHtmlElements'
            />
            <br />
            <br />
            <p>
              Nest your HTML elements using our component focus modal or use the
              HTML Tab in the right sidebar.
            </p>
            <div style={{ display: 'flex' }}>
              <img
                alt='Add html element Gif'
                className='shadow'
                src='https://media.giphy.com/media/7ACv2wDz7wscaTtXuk/giphy.gif'
                style={{ 'max-width': '500px' }}
              />
              <img
                alt='HTML Element List Gif'
                className='shadow num2'
                src='https://media.giphy.com/media/ZxQLQ23f2vaJq4F380/giphy.gif'
                style={{
                  'max-width': '150px',
                }}
              />
            </div>
            <br />
            <h4>Vuetensils component library</h4>
            <p>
              OverVue now has a new feature to add accessible{' '}
              <a href='https://vuetensils.com/Introduction.html'>Vuetensils</a>{' '}
              components to quickly style your project prototype components.{' '}
            </p>
            <p>
              To add a Vuetensils component, click the Vuetensils tab and select
              the component you'd like to add.
            </p>
            <img
              src='https://live.staticflickr.com/65535/53169314443_546cc69a55_b.jpg'
              className='gif'
              alt='Screenshot 2023-09-06 at 10.54.12 AM'
            />
          </div>
        </div>
        <div className='desc'>
          <div>
            <h3>Customize your components</h3>
            <p>To set component styling, add a class attribute.</p>
            <p>
              You can further customize your components in the sidebar by adding
              an ID, parents, children, props, state, or actions - all of which
              will be dynamically updated in the Code Preview and included in
              your exported files.{' '}
            </p>
            <p>
              To update a component after its creation, select the component on
              the tree and the Update Component Menu will appear in the left
              sidebar.
            </p>
          </div>
          <img
            src='https://live.staticflickr.com/65535/53169093959_cd26285063_b.jpg'
            className='gif'
            alt='CustomizeComponents'
          />
        </div>
      </div>
    </DocsLayout>
  );
}
