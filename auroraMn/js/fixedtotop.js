document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".moveTopBtn").addEventListener("click", function() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    });
    document.querySelector(".moveBottomBtn").addEventListener("click", function() {
      window.scroll({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  });

  