function submit(){
    var e = document.getElementById("opciones");
    var selectedOption = e.options[e.selectedIndex];
    var selectedValue = selectedOption.value;

    if(selectedValue != 'opciones'){
        window.location.href = selectedValue+'.html';
    }
}