export default function readType(type) {
  let readType;
  if (type === 'react' || type === 'node') {
    type = type + '.js';
  }
  if (type === 'javascript') {
    readType =
      type.substring(0, 1).toUpperCase() +
      type.substring(1, 4) +
      type.substring(4, 5).toUpperCase() +
      type.substring(5);
  } else if (type === 'css') {
    readType = type.toUpperCase();
  } else {
    readType = type.substring(0, 1).toUpperCase() + type.substring(1);
  }
  return readType;
}
