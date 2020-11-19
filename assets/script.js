var modal = document.getElementById("myModal");
var btn = document.getElementById("myModal-btn");
var span = document.getElementsByClassName("cancel-btn")

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}