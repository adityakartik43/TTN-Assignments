var temp = {
  cel: 0,

  read() {
    cel = Number(prompt("Enter cel"));
  },

  getFht() {
    return (cel * 9) / 5 + 32;
  },

  getKel() {
    return cel + 273.15;
  },

  getDisplay() {
    console.log(temp.getFht());
    console.log(temp.getKel());
  },
};

temp.read();
temp.getDisplay()
