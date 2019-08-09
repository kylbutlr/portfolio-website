export default function readType(type) {
  let readType;

  //Adds ".js" to javascript languages as desired
  /*if (type === 'react' || type === 'node' || type === 'vue') {
    type = type + '.js';
  }*/

  //Capitalizes the S in JavaScript
  if (type === 'javascript') {
    readType =
      type.substring(0, 1).toUpperCase() +
      type.substring(1, 4) +
      type.substring(4, 5).toUpperCase() +
      type.substring(5);
  } else if (type === 'css') {
    //Capitalizes whole word
    readType = type.toUpperCase();
  } else {
    //Capitalizes first character
    readType = type.substring(0, 1).toUpperCase() + type.substring(1);
  }
  return readType;
}
