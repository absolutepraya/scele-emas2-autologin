// ==UserScript==
// @name         SIAK-NG AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  This userscript is made to automatically login to SIAK-NG UI website using your account
// @author       absolutepraya
// @match        https://academic.ui.ac.id/main/Authentication/
// ==/UserScript==

(function() {
    // replace ___username___ and ___password___ with your own username and password
    var username = "___username___";
    var password = "___password___";

    // insert username
    var inputName = document.getElementsByName("u")[0];
    inputName.value = username;
    // insert password
    var inputPassword = document.getElementsByName("p")[0];
    inputPassword.value = password;
    // click the login button
    var submitButton = document.querySelector("[type='submit']");
    submitButton.click();
})();