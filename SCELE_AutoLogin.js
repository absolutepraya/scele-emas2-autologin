// ==UserScript==
// @name         SCELE AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  This userscript is made to automatically login to SCELE UI website using your account
// @author       absolutepraya
// @match        https://scele.cs.ui.ac.id/
// @match        https://scele.cs.ui.ac.id/login/index.php
// ==/UserScript==

(function() {
    // replace ___username___ and ___password___ with your own username and password
    var username = "___username___";
    var password = "___password___";

    // insert username
    var inputName = document.getElementsByName("username")[0];
    if (inputName) {
        inputName.value = username;
    } else {
        return; // stop the script if username input is not found
    }
    // insert password
    var inputPassword = document.getElementsByName("password")[0];
    inputPassword.value = password;
    // click the login button
    var submitButton = document.querySelector("[type='submit']");
    submitButton.click();
})();