function ezsha_shareFb() {
  var currentUrl = window.location.href;
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentUrl), "_blank");
}
function ezsha_shareTwit() {
  var currentUrl = window.location.href;
  var textToShare = "";
  window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(currentUrl) + "&text=" + encodeURIComponent(textToShare), "_blank");
}
function ezsha_shareWa() {
  var currentUrl = window.location.href;
  var textToShare = "";
  window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(textToShare + " " + currentUrl), "_blank");
}
function ezsha_copyLink() {
  const currentUrl = window.location.href;
  const copyLinkButton = document.getElementById("ezsha_copy");

  const inputElement = document.createElement("input");
  inputElement.value = currentUrl;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  document.body.removeChild(inputElement);

  copyLinkButton.classList.add("animating");

  setTimeout(() => {
    copyLinkButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z"/></svg>`;
    // fade-in new icon
    copyLinkButton.classList.remove("animating");

    // revert to copy icon
    setTimeout(() => {
      copyLinkButton.classList.add("animating");
      setTimeout(() => {
        copyLinkButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z"/></svg>`;
        copyLinkButton.classList.remove("animating");
      }, 200); // fade between checklist > copy
    }, 1000); // checklist time
  }, 200); // first fade
}

function ezsha_Toggle() {
    document.getElementById('ezsha_buttons').classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('ezsha_Toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', async (e) => {
      e.preventDefault(); // prevent reload

      const url = window.location.href;
      const title = document.title;

      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            url: url
          });
        } catch (err) {
          // console.warn("Share dibatalkan atau gagal:", err);
          ezsha_Toggle();
        }
      } else {
        ezsha_Toggle();
      }
    });
  }
});
