const javashit = document.querySelector("#ScriptThing");
javashit.style.color = 'Yellow';
let button = document.querySelector("#fuckyou");

let ClickBool = true;

button.addEventListener("click", OnClick);

const test = document.getElementsByClassName("booty");

function OnClick() {
    if (ClickBool) {
        button.style.backgroundColor = "Blue";
        ClickBool = false;

    } else {
        button.style.backgroundColor = "yellow";
        ClickBool = true;
    }
}