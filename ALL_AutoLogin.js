// ==UserScript==
// @name         SSO UI, EMAS2, SCELE, and SIAK-NG AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  This userscript is made to automatically login to SCELE UI website using your account
// @author       absolutepraya
// @match        https://scele.cs.ui.ac.id/
// @match        https://scele.cs.ui.ac.id/login/index.php
// @match        https://emas2.ui.ac.id/login/index.php
// @match        https://academic.ui.ac.id/main/Authentication/
// @match        https://sso.ui.ac.id/cas/login
// ==/UserScript==

(function() {
    // replace ___username___ and ___password___ with your own username and password
    var username = "___username___";
    var password = "___password___";

    // declare variables
    var inputName, inputPassword, submitButton;

    // insert username and password
    if (window.location.href === "https://academic.ui.ac.id/main/Authentication/") {
        inputName = document.getElementsByName("u")[0];
        inputPassword = document.getElementsByName("p")[0];
        
    } else if (window.location.href === "https://sso.ui.ac.id/cas/login") {
        inputName = document.getElementById("username");
        inputPassword = document.getElementById("password");
    } else {
        inputName = document.getElementsByName("username")[0];
        if (inputName) {
        } else {
            return;
        }
        inputPassword = document.getElementsByName("password")[0];
    }
    inputName.value = username;
    inputPassword.value = password;

    // click the login button
    if (window.location.href === "https://sso.ui.ac.id/cas/login") {
    submitButton = document.getElementsByClassName("btn btn-lg btn-primary")[0];
    } else {
    submitButton = document.querySelector("[type='submit']");
    }
    submitButton.click();
})();