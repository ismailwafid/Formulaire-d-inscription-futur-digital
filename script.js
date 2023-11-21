document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    container.addEventListener('click', function (event) {
        const signUpLink = event.target.closest('.sign-up-btn');

        if (signUpLink) {
            const boxLeft = document.querySelector(".box-login");
            const boxRight = document.querySelector(".box-sign-up");

            boxLeft.classList.toggle('d-none');
            boxRight.classList.toggle('d-none');
        }
    });
});
