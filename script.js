class Animal {
    constructor(name, legs, actionText, actionSoundName, picture) {
        this.name = name;
        this.legs = legs;
        this.actionText = actionText;
        this.actionSoundName = actionSoundName;
        this.picture = picture;
    }
    action() {
        document.getElementById(this.actionSoundName).play();
    }
    openImage() {
        var pictures = document.getElementsByTagName("img")
        for (var i = 0; i < pictures.length; i++) {
            if (pictures[i].id === this.picture) {
                document.getElementById(pictures[i].id).style.display = "block";
            }
            else {
                document.getElementById(pictures[i].id).style.display = "none"
            }
        }
    }

    putInTheDocument() {
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");
        petTR.setAttribute("id", "a");

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
        petNameTD.setAttribute("id", "catTD")

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        petActionTDButton.onclick = this.action.bind(this);
        petTR.onclick = this.openImage.bind(this);

        petsTable.querySelector("tbody").appendChild(petTR);
    }
}

class Cat extends Animal {
    constructor(name, legs, actionText, actionSoundName, picture) {
        super(name, legs, actionText, actionSoundName, picture);
    }
}

class Monkey extends Animal {
    constructor(name, legs, actionText, actionSoundName, picture) {
        super(name, legs, actionText, actionSoundName, picture);
    }
}
var Mila = new Cat("Mila", 4, "Meoow", "meow", "cat");

var Charlie = new Monkey("Charlie", 2, "Scream", "scream", "monkey");

Mila.putInTheDocument();
Charlie.putInTheDocument();
