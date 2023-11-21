document.addEventListener("DOMContentLoaded", function () {
    const boxLeft = document.querySelector(".box-login");
    const boxRight = document.querySelector(".box-sign-up");
    const signUpLink = document.querySelector(".sign-up-btn");

    signUpLink.addEventListener('click', function () {
        boxLeft.classList.toggle('d-none');
        boxRight.classList.toggle('d-none');
    });
});
