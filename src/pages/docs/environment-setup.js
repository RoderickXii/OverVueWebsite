import React from 'react';
import { DocsLayout } from '../../layouts';
import '../../styles/docs.css';
import GridDensity from '../../assets/doc-data/GridDensity.jpg';
import OptionsPullDown from '../../assets/doc-data/optionspulldown.jpg';
import SlackOAuth from '../../assets/doc-data/SlackOAuth.jpg';
import toggleMode from '../../assets/doc-data/toggleMode.jpeg';

// import HeadTwoStyle from "../../styles/HeadTwoStyle.js";
// import styled from "styled-components";
export default function EnvironmentSetup() {
  return (
    <DocsLayout>
      <div className='docs__content'>
        <h2>Setting Up Your OverVue Environment</h2>
        <br />
        <p>
          OverVue 10.0 offers a versatile and powerful toolset designed to make
          your tasks easier and more efficient.
        </p>
        <p>
          One of the standout features of our application is its dual operating
          mode, offering you two distinct ways to visualize and build your
          component structure: <strong> Tree Mode</strong> and{' '}
          <strong>Grid Mode.</strong>
        </p>
        <br />
        <div>
          <div>
            <h3>Toggle between Tree Mode and Grid Mode</h3>
            <p>
              Switch between Tree Mode & Grid Mode by clicking on the gear icon
              in the upper-right corner.
            </p>
            <img
              src='https://live.staticflickr.com/65535/53167957178_c262e14f29.jpg'
              width='500'
              height='73'
              alt='toggleMode'
            />
            <br />
            <br />

            <img
              src='https://live.staticflickr.com/65535/53167471681_61021973f3_h.jpg'
              width='650vh'
              height='350vh'
              alt='modes'
            />
            <br />
            <br />
            <p>
              <em>
                Please note that some functionality in Grid Mode may be disabled
                or broken, as this view is now considered deprecated.
              </em>
            </p>
            <br />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
// const Section = styled.div`
//   display: flex;
//   width: 100%;
//   max-width: 1300px;
//   justify-content: space-between;
//   margin-bottom: 120px;

//   h3 {
//     margin-bottom: 1.5rem;
//     color: #666666 !important;
//   }
//   p {
//     color: #666666 !important;
//     font-size: 1.5rem;
//     font-weight: 300;
//     line-height: 1.7rem;
//   }
//   h3::after {
//     background: hsla(0, 0%, 56.5%, 0.5);
//     content: "";
//     display: block;
//     height: 1.5px;
//     margin: 20px 0px;

//   }

//   img {
//     max-width: 500px;
//     width: 100%;
//     margin-right: 60px;
//   }

//   @media only screen and (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     img {
//       max-width: unset;
//       margin: 0px;
//       margin-bottom: 32px;
//     }
//   }
// `
