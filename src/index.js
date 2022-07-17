import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

import printMe from './print'
import Print from './print'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`










function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.onclick = Print.bind(null, 'Hello webpack!');

    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width = "200";

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());




/* async function getComponent() {
  const element = document.createElement('div');

  const { default: _ } = await import('lodash');

//  return import('lodash')
//    .then(({ default: _ }) => {
//      const element = document.createElement('div');

element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //    return element;
  //  })
  //  .catch((error) => 'An error occurred while loading the component');

  return element;
  
} 

getComponent().then((component) => {
 document.body.appendChild(component);
});

*/