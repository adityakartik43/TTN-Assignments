const PI = 3.14;

function cirArea(r) {
  return PI * r * r;
}

function recArea(l, b) {
  return l * b;
}

function cylArea(r, h) {
  return 2 * PI * r * (r + h);
}

export {cirArea, recArea, cylArea}

