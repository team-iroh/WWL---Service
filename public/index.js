//Webpack Getting Started Guide to be edited to my actual react

import _ from 'lodash';

function component() {
  const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());


