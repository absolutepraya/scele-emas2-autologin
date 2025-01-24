// ==UserScript==
// @name         SSO UI, EMAS2, SCELE, SIAK-NG, and Webmail AutoLogin
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Automatically login to UI websites including Webmail using your credentials
// @author       absolutepraya
// @match        https://scele.cs.ui.ac.id/
// @match        https://scele.cs.ui.ac.id/login/index.php
// @match        https://emas2.ui.ac.id/login/index.php
// @match        https://academic.ui.ac.id/main/Authentication/
// @match        https://sso.ui.ac.id/cas/login*
// @match        https://sso.ui.ac.id/cas2/login*
// @match        https://webmail.ui.ac.id/roundcube2*
// @icon         https://i.ibb.co.com/m8vqKV2/favicon-32x32.png
// @license      MIT
// ==/UserScript==

(function () {
    // Replace with your credentials
    const username = "___username___";
    const password = "___password___";

    // Handle Webmail UI separately
    if (window.location.href.startsWith("https://webmail.ui.ac.id/roundcube2")) {
        if (document.body.innerText.includes("Permasalahan Umum")) return;

        const userField = document.querySelector("input#rcmloginuser");
        const passField = document.querySelector("input#rcmloginpwd");
        const loginBtn = document.querySelector("input#rcmloginsubmit.button.mainaction");

        if (userField && passField && loginBtn) {
            userField.value = username;
            passField.value = password;
            loginBtn.click();
        }
        return;
    }

    // Original login handler for other sites
    let inputName, inputPass, submitButton;

    if (window.location.href === "https://academic.ui.ac.id/main/Authentication/") {
        inputName = document.getElementsByName("u")[0];
        inputPass = document.getElementsByName("p")[0];
    } else if (window.location.href.startsWith("https://sso.ui.ac.id/cas/login")) {
        inputName = document.getElementById("username");
        inputPass = document.getElementById("password");
    } else {
        inputName = document.getElementsByName("username")[0];
        if (!inputName) return;
        inputPass = document.getElementsByName("password")[0];
    }

    if (inputName && inputPass) {
        inputName.value = username;
        inputPass.value = password;
        submitButton = document.querySelector("[type='submit']");
        if (submitButton) submitButton.click();
    }
})();