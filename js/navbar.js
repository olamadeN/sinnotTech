window.onscroll = function()
{stickfy()};

var navbar = document.getElementById("navbar");
var sticky =50;

function stickfy(){
    if (window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}

