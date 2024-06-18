window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

function msg(){
    var v = confirm("Do you want to proceed?");
    if (v == true){
        alert("Welcome to RUNACOSS!!");
    }
    else{
        alert("Kindly go through the form again!");
    }

}