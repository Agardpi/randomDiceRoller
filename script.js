const diceNumber = document.getElementById("diceNumber");
const rollerButton = document.getElementById("rollerButton");
const result= document.getElementById("result");
const resultImage = document.getElementById("resultImage");

rollerButton.onclick = function(){
    const values = [];
    const images = [];


    for(let i= 0; i< diceNumber.value; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice${value}.png" alt="Dice ${value}">`);
    };

    result.textContent= `Dice ${values.join(", ")}`;
    resultImage.innerHTML = images.join(``);

};

