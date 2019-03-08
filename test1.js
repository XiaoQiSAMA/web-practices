function show() {
    alert('Hello World !');
}
function timeshow() {
    var time = new Date().getHours();
    var t = "";
    if(time < 10)
    {
        t = "Good Morning !"
    }
    else if(time < 16)
    {
        t = "Good Afternoon !"
    }
    else if(time < 24)
    {
        t = "Good Evening !"
    }
    return t;
}
document.getElementById("greet").innerHTML = timeshow();
document.getElementById("Date").innerHTML = Date();

window.alert("please make a choice!")
if (window.confirm("Is it true?")){
    var answer = window.prompt("How many girlfirends you have?")
    console.log("%i gf", answer);
}
else{
    console.log("failed!");
}