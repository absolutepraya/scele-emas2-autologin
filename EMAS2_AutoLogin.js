// ==UserScript==
// @name         EMAS2 AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  This userscript is made to automatically login to EMAS2 UI website using your account
// @author       absolutepraya
// @match        https://emas2.ui.ac.id/login/index.php
// ==/UserScript==

(function() {
    // replace ___username___ and ___password___ with your own username and password
    var username = "___username___";
    var password = "___password___";

    // insert username
    document.getElementById("username").value = username;
    // insert password
    document.getElementById("password").value = password;
    // click the login button
    document.getElementById("loginbtn").click();
})();