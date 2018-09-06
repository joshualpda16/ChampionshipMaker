function eliminatoria(){
    var e = document.getElementById("opciones");
    var selectedOption = e.options[e.selectedIndex].value;

    window.location.href = selectedOption+'.html';
}