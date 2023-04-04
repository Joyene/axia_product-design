let head6 = "Axia Orphanage Oragnization";
let html1 = `<h5>${head6}</h5>`;
document.getElementById("demo1").innerHTML = html1;
let head5 = "Lets help them together";
let html2 = `<h5>${head5}</h5>`;
document.getElementById("demo2").innerHTML = html2;
let head1 = "Don't leave the orphans alone";
let html3 = `<h1>${head1}</h1>`;
document.getElementById("demo3").innerHTML = html3;
let para = "Lets us all come together and join forces and power<br>to give these children <br>the best of life and thrive to make them be a success by giving us a helping hand/support us";
let html4 = `<p>${para}</p>`;
document.getElementById("demo4").innerHTML = html4;
//function ClickMe() {
  //  let clicks = "Kindly support the children, by donating what u have the children appreciates it";
    //let html5 = `<button>${clicks}</button>`;
    //document.getElementById("demo5").innerHTML = html5;
//}
//button
const myButton = document.getElementById("demo5");
myButton.addEventListener("click", function() {
    if (!document.getElementById("message")) {
        const message = document.createElement("p");
        message.id = "message";
        message.textContent = "Kindly support the children, by donating what u have the children appreciates it";
        document.body.appendChild(message);  
    }
});
