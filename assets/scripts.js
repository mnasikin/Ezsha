function ezshaFb() {
  var currentUrl = window.location.href;
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentUrl), "_blank");
}
function ezshaTwit() {
  var currentUrl = window.location.href;
  var textToShare = "";
  window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(currentUrl) + "&text=" + encodeURIComponent(textToShare), "_blank");
}
function ezshaWa() {
  var currentUrl = window.location.href;
  var textToShare = "";
  window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(textToShare + " " + currentUrl), "_blank");
}
function ezshaCp() {
  var currentUrl = window.location.href;
  var copyLinkButton = document.getElementById("ezsha-cp");
  var inputElement = document.createElement("input");
  inputElement.value = currentUrl;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  document.body.removeChild(inputElement);
  copyLinkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  setTimeout(function () {
    copyLinkButton.innerHTML = '<i class="fa-solid fa-copy"></i>';
  }, 1000);
}
function ezshaToggle() {
    document.getElementById('ezshaButtons').classList.toggle('show');
}