function testForm() {
    ten = document.getElementById('name');
    email = document.getElementById('email');
    sdt = document.getElementById('phone');
    loiten = document.getElementById('ErrorName');
    loimail = document.getElementById('ErrorEmail');
    loidt = document.getElementById('ErrorPhone');
    var reEmail = /^\w+@\w+(\.\w+){1,3}$/;
    var reDienthoai = /^0[1-9]\d{8}$/;
    if(ten.value=="") {
        loiten.innerHTML="This field is required";
        ten.focus();
        return false;
    }
    loiten.innerHTML="";

    if(email.value=="") {
        loimail.innerHTML="This field is required";
        email.select();
        return false
    }else if(reEmail.test(email.value)==false) {
        loimail.innerHTML="This field has the format abc@domain.com";
        email.select();
        return false
    }
    loimail.innerHTML="";

    if(sdt.value==""){
        loidt.innerHTML="This field is required";
        sdt.select();
        return false
    }else if(reDienthoai.test(sdt.value)==false) {
        loidt.innerHTML='This field enter the number and contain 10-11 number';
        return false
    }
    if(reDienthoai.test(sdt.value)==true) {
        loidt.innerHTML="";
    }
    return true
    alert("ok")
}