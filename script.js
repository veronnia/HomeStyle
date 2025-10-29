var w = Number(prompt("Enter n1: "))
var l = Number(prompt("Enter n2: "))
var h = Number(prompt("Enter n3: "))

var box = {
    width: w,
    len: l,
    hig: h
};

function volume({ width, len, hig }) {
    console.log(width * len * hig);
}

volume(box);