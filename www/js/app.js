var host = "http://compute-my-grade.herokuapp.com";

document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

function clearText() {
    var gradeACutOff = document.getElementById("gradeACutOff");
    var gradeBCutOff = document.getElementById("gradeBCutOff");
    var gradeCCutOff = document.getElementById("gradeCCutOff");
    var gradeDCutOff = document.getElementById("gradeDCutOff");

    gradeACutOff.value = null;
    gradeBCutOff.value = null;
    gradeCCutOff.value = null;
    gradeDCutOff.value = null;
}

//showInfo();
function showInfo(arr) {

            var title = '<h2>' + ' Information' + '</h2>' + '<br/>';

            var out = '<table style="width:90%" align="center">' +


                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'Student Id' + '</td>' +
                '<td width="80px">' + arr.sid + '</td></tr>' +
                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'Last Name' + '</td>' +
                '<td width="80px">' + arr.lastName + '</td></tr>' +
                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'First Name' + '</td>' +
                '<td width="80px">' + arr.firstName + '</td></tr>' +
                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'Email' + '</td>' +
                '<td width="80px">' + arr.email + '</td></tr>' +
                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'Phone' + '</td>' +
                '<td width="80px">' + arr.phone + '</td></tr>' +
                '</tr>' +

                '</table>' + '<br/><br/>';

            document.getElementById("show").innerHTML = title + out;
}


show235();

function show235() {

    var xmlhttp = new XMLHttpRequest();
    var url = "http://compute-my-grade.herokuapp.com/api/courses/1030";


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var arr = JSON.parse(xmlhttp.responseText);


            document.getElementById("content2").innerHTML = arr.description;

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

showDes();

function showDes() {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://compute-my-grade.herokuapp.com/api/courses/1031";


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var arr = JSON.parse(xmlhttp.responseText);

            document.getElementById("content3").innerHTML = arr.description;

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var xmlhttp = new XMLHttpRequest();
var url = "http://compute-my-grade.herokuapp.com/api/courses/1029";

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);

        desInfo(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function desInfo(arr) {
    var out = "";
    var i;

    document.getElementById("content4").innerHTML = arr.description;
}

/************************************************
 Validation Functions
 *************************************************/

function checkPassword(){
    if($("#reg_pwd").val().length < 6) {
        alert("The minimum password length is 6 !");
        return false;
    } else {
        return true;
    }
}

function confirmPassword(){
    if($("#reg_pwd_confirm").val() !== $("#reg_pwd").val()){
        alert("Your password does not match!");
        return false;
    } else {
        return true;
    }
}

function validateEmail(){
    var x = $("#reg_email").val();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {
        alert("Please input a valid e-mail address");
        return false;
    } else {
        return true;
    }
}