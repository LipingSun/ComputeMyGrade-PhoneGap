/**
 * Created by Liping on 12/5/15.
 */
'use strict';

var slp = {
    host: "http://compute-my-grade.herokuapp.com",

    student: null,

    login: function () {
        $.post(host + "/api/authenticate", {username: $("#login_sid").val(), password: $("#login_pwd").val()}, function (data) {
            slp.loadStudent(data["token"].split(':', 1)[0]);
        });
    },

    loadStudent: function (sid) {
        $.get(host + "/api/students", function (data) {
            slp.student = $.grep(data, function (student) {
                return student.sid == sid;
            })[0];
            showInfo(slp.student);
            location.href = "#home_page";
        })
    },

    register: function () {
        $.ajax({
            type: "POST",
            url: host + "/api/register",
            data: JSON.stringify({login: $("#reg_sid").val(),email:$("#reg_email").val(),password:$("#reg_pwd").val()}),
            contentType: "application/json",
            crossDomain: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (data) {
                console.log("data:" + data);
                $.ajax({
                    type: "POST",
                    url: host + "/api/students",
                    crossDomain: true,
                    data: JSON.stringify({sid:$("#reg_sid").val(),email:$("#reg_email").val(),lastName:$("#reg_ln").val(),firstName:$("#reg_fn").val(),phone:$("#reg_phone").val()}),
                    contentType: "application/json",
                    success: function (data) {
                        console.log("data:" + data);
                        slp.student = data;
                        slp.loadStudent(data["sid"]);
                    },
                    error: function (err) {
                        console.log("error:" + err)
                    }
                });
            },
            error: function (err) {
                console.log("error:" + err)
            }
        });
    }
};