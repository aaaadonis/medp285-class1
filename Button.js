let one = document.getElementById('one');
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

let showOne = () => {
    one.style.backgroundColor = "white"; 
}

let showTwo = () => {
    two.style.backgroundColor = "white";
};

let showThree = () => {
    three.style.backgroundColor = "white";
};

let showFour = () => {
    four.style.backgroundColor = "white";
}

let showFive = () => {
    five.style.backgroundColor = "white";
}

let showSix = () => {
    six.style.backgroundColor = "white";
}


one.onclick = function() {
    showOne();
    two.style.backgroundColor = "black";
    three.style.backgroundColor = "black";
    four.style.backgroundColor = "black";
    five.style.backgroundColor = "black";
    six.style.backgroundColor = "black";
}

two.onclick = function() {
    showTwo();
    one.style.backgroundColor = "black";
    three.style.backgroundColor = "black";
    four.style.backgroundColor = "black";
    five.style.backgroundColor = "black";
    six.style.backgroundColor = "black";
};

three.onclick = function () {
    showThree();
    one.style.backgroundColor = "black";
    two.style.backgroundColor = "black";
    four.style.backgroundColor = "black";
    five.style.backgroundColor = "black";
    six.style.backgroundColor = "black";
};

four.onclick = function () {
    showFour();
    one.style.backgroundColor = "black";
    three.style.backgroundColor = "black";
    two.style.backgroundColor = "black";
    five.style.backgroundColor = "black";
    six.style.backgroundColor = "black";
};

five.onclick = function() {
    showFive();
    one.style.backgroundColor = "black";
    three.style.backgroundColor = "black";
    two.style.backgroundColor = "black";
    four.style.backgroundColor = "black";
    six.style.backgroundColor = "black";
};

six.onclick = function() {
    showSix();
    one.style.backgroundColor = "black";
    three.style.backgroundColor = "black";
    two.style.backgroundColor = "black";
    five.style.backgroundColor = "black";
    four.style.backgroundColor = "black";
};