function showInfo() {
    var username = document.getElementById('name').value;
    var bday = document.getElementById('birth').value; //string
    var addr = document.getElementById('addr').value;
    var cmt = document.getElementById('cmt').value;
    var phone = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var today = new Date();
    var birth = new Date(bday);
    var age = Math.floor((today - birth) / (24 * 60 * 60 * 1000 * 365));
    var cities = document.getElementById('cities').value;//show selected city (đặt id tại selected)

    //Code to show gender
    var radios = document.getElementsByName('gender');
    var gender = [];
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {//kiểm tra ô radio có check hay không
            // do whatever you want with the checked radio
            gender.push(radios[i].value);
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }//end code show Gender
    
    //Code to show hobbies
    var hobby = document.getElementsByName('hobby');
    var hobbies = [];
    for (var i = 0, length = hobby.length; i < length; i++) {
        if (hobby[i].checked) {//kiểm tra ô radio có check hay không
            // do whatever you want with the checked radio
            hobbies.push(hobby[i].value);
        }
    }//end code show Hobbies

    if (age >= 17) {
        alert( "Member information:" + "\n---------------------" +
            "\nName: " + username + "\nGender: " + gender + "\nHobbies: " + hobbies + 
        "\nBirthday: " + bday + "\nAddress: " + addr + "\nEmail: " + email + "\nPhone: " + phone + "\nCity: " + cities + "\nComment: " +cmt);
        event.preventDefault();
    } 
    else {
        alert("Age must be 17-year old or above");
        event.preventDefault();
    }    
}
