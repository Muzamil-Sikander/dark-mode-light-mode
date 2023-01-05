
function darkMode(){
    var id01 = document.getElementById("h12")
    id01.style.transition = "1s"
    id01.style.backgroundColor = "black"
    id01.style.color = "white"
   
    var h = document.getElementById("head");
    h.style.color = ("white")
   

}
function lightMode(){
    var id01 = document.getElementById("h12")
    id01.style.transition = "1s"
    id01.style.backgroundColor = "white"
    var h = document.getElementById("head");
    h.style.color = ("black")

}
