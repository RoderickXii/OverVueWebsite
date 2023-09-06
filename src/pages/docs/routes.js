import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';
import AddRoutes from '../../assets/doc-data/addRoutes.jpg';
import ComponentHierarchy from '../../assets/doc-data/componentHierarchy.jpg';

export default function Routes() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h2>Component Relationships</h2>
        <div className='desc'>
          <div>
            <h3>Create new routes</h3>
            <p>
              You can find all of your routes in the Routes tab. To add a route,
              enter the name in the input field and click the "+", or press
              enter. Once added, you can click on a route to navigate to it. To
              delete a route, click on the "x" on the right side of the route
              block.{' '}
            </p>
            <p>Note: The default route, HomeView, cannot be deleted!</p>
          </div>
          <img className='gif' alt='show options' src={AddRoutes}></img>
        </div>
        <div className='desc'>
          <div>
            <h3>Visualize component hierarchies in real time</h3>
            <p>
              The central user interface in Tree Mode (the default view) gives
              you a visual representation of how routes and components relate to
              one another. You can navigate to a specific component or route by
              clicking on its node within the tree.
            </p>
          </div>
          <img
            className='gif'
            alt='show options'
            src={ComponentHierarchy}
          ></img>
        </div>
      </div>
    </DocsLayout>
  );
}
