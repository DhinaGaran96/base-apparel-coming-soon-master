const check=document.getElementById("check")
const error=document.getElementById("error")
var email2=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const email=document.getElementById("email")
const input=document.getElementsByTagName("input")
check.addEventListener("click",function()
{
    if(!email.value.match(email2))
        {
            error.style.display="block"
            email.style.backgroundImage="url('images/icon-error.svg')"
            
        }
        else{
            error.style.display="none"
            email.style.backgroundImage="none"
        }

})