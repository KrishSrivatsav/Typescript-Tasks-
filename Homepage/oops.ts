let b = 0;
let c = 1;
class Home {
    Name;
    color;
    noofbedrooms;
    kitchen;
    isparking;
    nofodoors;

    constructor(a) {
        console.log("my home is new Home");
        this.Name = a;
        console.log(this.Name);

        if (b % 2 == 0) {
            let i = document.createElement("img");
            i.setAttribute("src", "Home.png");
            i.style.width = "100px";
            document.body.appendChild(i);
        }

        else {
            let j = document.createElement("img");
            j.setAttribute("src", "Homeclose.png");
            j.style.width = "100px";
            j.style.marginTop = "50px";
            document.body.appendChild(j);
            console.log("closed");
        }
        b++
    }


    openHome() {

        console.log("the home is open now");
    }

    closeHome() {

        console.log("the home is closed now");
    }

}


let createHome = () => {
    let myHome = new Home('Ragavan Villa');
    myHome.openHome();
}



let noHome = () => {
    let myHome1 = new Home('Ragavan Villa');
    myHome1.closeHome();
    console.log("closed");
}