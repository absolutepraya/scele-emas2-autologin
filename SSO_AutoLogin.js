// ==UserScript==
// @name         EMAS, SCELE, and SIAK-NG AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  This userscript is made to automatically login to SCELE UI website using your account
// @author       absolutepraya
// @match        https://sso.ui.ac.id/cas/login
// ==/UserScript==

(function() {
    // replace ___username___ and ___password___ with your own username and password
    var username = "___username___";
    var password = "___password___";

    // declare variables
    var inputName, inputPassword, submitButton;

    // insert username and password
    inputName = document.getElementById("username");
    inputName.value = username;
    inputPassword = document.getElementById("password");
    inputPassword.value = password;

    // click the login button
    submitButton = document.getElementsByClassName("btn btn-lg btn-primary")[0];
    submitButton.click();
})();