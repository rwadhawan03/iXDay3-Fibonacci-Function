function fibonacci() {
    var first = 0;
    var second = 1;

    var update = document.getElementById("fibonacci-algo");
    update.innerText = first;
    update.innerHTML += "<br>"
    update.innerText += second;

    for(let i = 0; i < 8; i++) {
        update.innerHTML += "<br>"
        update.innerHTML += first+second;
        let tempFirst = first;
        first = second;
        second = tempFirst + second;  
        if(i == 7 && second == 34) {
            update.innerHTML += "<br>" + "<h2>";
            update.innerText += "Success!"
            update.innerHTML += "</h2>" + "<br>"; 
        }
        else if (i == 7 && second != 34) {
            update.innerHTML += "<br>" + "<h2>";
            update.innerText += "Failure"
            update.innerHTML += "</h2>" + "<br>";
        }
    }

}