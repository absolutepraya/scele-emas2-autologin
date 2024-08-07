// ==UserScript==
// @name         Webmail UI AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This userscript is made to automatically login to Webmail UI using your account credentials.
// @author       absolutepraya
// @match        https://webmail.ui.ac.id/roundcube2*
// @license      MIT
// ==/UserScript==

(function () {

    // check if the string "Permasalan Umum" appears in the page
    if (document.body.innerText.includes("Permasalahan Umum")) {
        return;
    }

    // replace ___username___ and ___password___ with your own username and password
    const username = "___username___";
    const password = "___password___";

    // declare variables
    let inputName, inputPassword, submitButton;

    // get the inputname field
    inputName = document.querySelector("input#rcmloginuser");

    // get the inputpassword field
    inputPassword = document.querySelector("input#rcmloginpwd");

    // insert username and password
    inputName.value = username;
    inputPassword.value = password;

    // get the submit button
    submitButton = document.querySelector("input#rcmloginsubmit.button.mainaction");

    // click the login button
    submitButton.click();

})();