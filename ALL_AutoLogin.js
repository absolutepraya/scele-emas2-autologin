// ==UserScript==
// @name         EMAS, SCELE, and SIAK-NG AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  This userscript is made to automatically login to SCELE UI website using your account
// @author       absolutepraya
// @match        https://scele.cs.ui.ac.id/
// @match        https://scele.cs.ui.ac.id/login/index.php
// @match        https://emas2.ui.ac.id/login/index.php
// @match        https://academic.ui.ac.id/main/Authentication/
// ==/UserScript==

(function() {
    // replace ___username___ and ___password___ with your own username and password
    var username = "___username___";
    var password = "___password___";

    // declare variables
    var inputName, inputPassword, submitButton;

    if (window.location.href === "https://academic.ui.ac.id/main/Authentication/") {
        // insert username
        inputName = document.getElementsByName("u")[0];
        inputName.value = username;
        // insert password
        inputPassword = document.getElementsByName("p")[0];
        inputPassword.value = password;
    } else {
        // insert username
        inputName = document.getElementsByName("username")[0];
        if (inputName) {
            inputName.value = username;
        } else {
            // stop the script if username input is not found (for SCELE homepage)
            return;
        }
        // insert password
        inputPassword = document.getElementsByName("password")[0];
        inputPassword.value = password;
    }
    // click the login button
    submitButton = document.querySelector("[type='submit']");
    submitButton.click();
})();