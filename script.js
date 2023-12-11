$(document).ready(function () {
    $("#driving_base").on('click',animDrivingbase());
    backGroundColor();
    $("#submit").click(function () {submit(); });
});

function animDrivingbase(){
    let isDown = false; 
    $("#driving_base").click(function () {
        if (!isDown) {
            $("#driving_base").animate({top:'800px'}, "slow");
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else {
            $("#driving_base").animate({top:'0px'}, "slow");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        isDown = !isDown;
})
}

function backGroundColor(){
    const colorPicker = document.getElementById('colorpicker');
const changeColorButton = document.getElementById('colorbutton');

changeColorButton.addEventListener('click', function() {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    
});
}

function submit(){
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var checkbox1 = document.getElementById("build");
    var checkbox2 = document.getElementById("program");
    var checkbox3 = document.getElementById("play");
    var date = $("#date").val();
    var textarea = $("#legolike").val();
    var emptybox = false;

    if(firstname==''){
        $("#firstname").css("border", "2px solid red");
        emptybox = true;
    }
    else{
        $("#firstname").css("border", "2px solid black");
    }
    if(lastname==''){
        $("#lastname").css("border", "2px solid red");
        emptybox = true;
    }
    else{
        $("#lastname").css("border", "2px solid black");
    }
    if(textarea==''){
        $("#legolike").css("border", "2px solid red");
        emptybox = true;
    }
    else{
        $("#legolike").css("border", "2px solid black");
    }
    if (!checkbox1.on && !checkbox2.checked && !checkbox3.checked) {
        $(".checkbox").css("box-shadow", "0 0 0 1px red");
        emptybox = true;
    } else {
        $(".checkbox").css("box-shadow", "none");
    }
    if(!date){
        $("#date").css("border", "2px solid red");
        emptybox = true;
    }
    else{
        $("#date").css("border", "2px solid black");
    }
    if(emptybox){
        alert("Kérlek töltsd ki a piros keretű mezőket");
    }
    else{
        alert("Sikeresen kiöltöttél mindent");
    }
}

  
  
  
