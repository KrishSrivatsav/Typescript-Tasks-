var b = 0;
var c = 1;
var Home = /** @class */ (function () {
    function Home(a) {
        console.log("my home is new Home");
        this.Name = a;
        console.log(this.Name);
        if (b % 2 == 0) {
            var i = document.createElement("img");
            i.setAttribute("src", "Home.png");
            i.style.width = "100px";
            document.body.appendChild(i);
        }
        else {
            var j = document.createElement("img");
            j.setAttribute("src", "Homeclose.png");
            j.style.width = "100px";
            j.style.marginTop = "50px";
            document.body.appendChild(j);
            console.log("closed");
        }
        b++;
    }
    Home.prototype.openHome = function () {
        console.log("the home is open now");
    };
    Home.prototype.closeHome = function () {
        console.log("the home is closed now");
    };
    return Home;
}());
var createHome = function () {
    var myHome = new Home('Ragavan Villa');
    myHome.openHome();
};
var noHome = function () {
    var myHome1 = new Home('Ragavan Villa');
    myHome1.closeHome();
    console.log("closed");
};
