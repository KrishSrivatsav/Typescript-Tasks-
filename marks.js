var marks = [40, 13, 69, 35, 27, 58, 70, 92, 83];
var a = marks;
a.for each(function (res) {
    if (res >= 90) {
        res = "grade a"

    }
    if (res >= 80) {
        res = "grade b"

    }

    if (res >= 70) {
        res = "grade c"

    }

    if (res >= 60) {
        res = "grade d"

    }

    if (res < 40){
        res = "grade e"
    }
)}
console.log(a);
