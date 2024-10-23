document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");

  function getLocation() {
    fetch("http://ip-api.com/json/?lang=ru")
      .then((response) => response.json())
      .then((data) => {
        var city = data.city;
        var locationSpan = document.querySelector(".location");
        locationSpan.textContent = city;
      })
      .catch((error) => {
        console.error("Ошибка при получении местоположения:", error);
        var locationSpan = document.querySelector(".location");
        locationSpan.textContent = "неизвестный город";
      });
  }

  getLocation();

  modal.style.display = "flex";

  var closeModal = document.getElementById("closeModal");

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
