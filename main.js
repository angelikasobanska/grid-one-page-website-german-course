const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalSend = document.querySelector(".button-send");
const modalSendNegative = document.querySelector(".button-send-negative");
const selectCourseButton = document.querySelectorAll(".course-button");

for (let i = 0; i < selectCourseButton.length; i++) {
    selectCourseButton[i].addEventListener("click", function () {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function () {
    closeModal();
});



modalSend.addEventListener("click", closeModal)

modalSendNegative.addEventListener("click", closeModal)


function closeModal() {
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}