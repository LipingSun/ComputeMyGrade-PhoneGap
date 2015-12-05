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
                '<td width="90px">' + 'SId' + '</td>' +
                '<td width="80px">' + arr.sid + '</td></tr>' +
                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'LastName' + '</td>' +
                '<td width="80px">' + arr.lastName + '</td></tr>' +
                '<tr align="center" bgcolor="#FFCC00" height="40px">' +
                '<td width="90px">' + 'FirstName' + '</td>' +
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