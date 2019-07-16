export default function randomize(num, max) {
  let z = [];
  let x = [];
  for (let i = 0; i < max; i++) {
    z.push(i);
  }
  while (x.length < num) {
    let f = Math.floor(Math.random() * Math.floor(max) + 1);
    if (!x.includes(f)) {
      x.push(f);
    }
  }
  return x;
}