// Imports React, the component's specific CSS styles, and a PDF file of Harold's resume.
import React from 'react';
import './Resume/Resume.css';
import chato from '../images/chato.jpeg'; 

// This is a functional React component named 'Resume'.
const Resume = () => {

 // Returns the JSX for the 'Resume' component. This component is a section with the class 'resume',
  // containing an h2 tag, a download link for Harold's resume, and an h3 tag followed by several unordered lists.
  // These lists describe Harold's proficiencies in front-end and back-end development.

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a className="download-resume" >
        Download my Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>Front-end Development</li>
      </ul>
      <ul>
        <li>
Aliquam tristique gravida scelerisque. Sed blandit molestie quam. Nullam maximus dui lacinia ex maximus, pulvinar condimentum ante mollis. Aliquam ac nulla ut odio faucibus interdum et id turpis. Ut sed velit diam. Donec maximus elementum nisi, posuere euismod neque. Cras id vulputate justo, ut tempor felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam fermentum justo eu aliquam congue. Maecenas vitae orci eget diam maximus vehicula. Quisque ac risus efficitur, cursus sem vitae, convallis leo. Curabitur finibus interdum efficitur. Nam feugiat urna sit amet felis auctor ultricies. Ut pulvinar facilisis vestibulum. Phasellus porttitor vel mauris quis interdum. Nam interdum dui eget sagittis auctor.


      </li>
      </ul>
      <ul>
        <li>Back-end Development</li>
      </ul>
      <ul>
        <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nunc sed massa viverra laoreet. In pellentesque placerat lorem quis fermentum. Sed feugiat leo semper sollicitudin tristique. Curabitur in sem suscipit, placerat neque id, tristique neque. Morbi et massa gravida, molestie purus vel, vestibulum turpis. Nullam gravida nisl turpis, finibus gravida sapien porta vel. Nam gravida mauris consectetur suscipit mollis. Nunc eu lorem in nisi molestie rutrum sit amet vitae nulla. Aliquam rhoncus nulla sit amet ultrices tempor. Quisque et lorem eu justo pulvinar faucibus tristique et augue. Nunc interdum, dolor et ultricies ultricies, libero elit facilisis quam, at imperdiet ex odio nec metus. Nam sit amet bibendum massa, non placerat felis. Etiam eget lorem orci. Mauris consectetur sapien iaculis euismod ornare. Aenean iaculis et dolor et malesuada.
      </li>
      </ul>


    </section>
  );
};

// Exports the 'Resume' component so it can be imported and used in other components or files.
export default Resume;