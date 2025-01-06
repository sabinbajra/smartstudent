window.onload = function () {
  const path = window.location.pathname.split("/");

  switch (path[1]) {
    case "": {
      loadPage("home");
      break;
    }
    case "about": {
      loadPage("about");
      break;
    }
    case "developers": {
      loadPage("developers");
      break;
    }
    case "hoursstudied": {
      loadPage("hoursstudied");
      break;
    }
    case "attendance": {
      loadPage("attendance");
      break;
    }
    case "previousscore": {
      loadPage("previousscore");
      break;
    }
    case "sleephours": {
      loadPage("sleephours");
      break;
    }
    case "decisiontree": {
      loadPage("decisiontree");
      break;
    }
    case "heatmap": {
      loadPage("heatmap");
      break;
    }
    default: {
      loadPage("404");
      break;
    }
  }

  document.querySelectorAll(".menu__item").forEach((item) => {
    item.addEventListener("click", function () {
      const path = item.getAttribute("value");
      loadPage(path);
      if (path == "home") {
        window.history.pushState("", "", "/");
        return;
      }

      window.history.pushState("", "", path);
    });
  });

  function loadPage($path) {
    if ($path == "") return;

    const container = document.getElementById("container");

    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + $path + ".html");
    request.send();
    request.onload = function () {
      if (request.status == 200) {
        container.innerHTML = request.responseText;
        document.title = $path;
      }
    };
  }

  // Get the dropdown button and content
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle visibility when button is clicked
  dropdownBtn.addEventListener("click", function () {
    // Toggle the "show" class to open or close the dropdown
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown if the user clicks anywhere outside of it
  window.onclick = function (event) {
    if (
      !event.target.matches(".dropdown-btn") &&
      !event.target.matches(".dropdown-content") &&
      !event.target.matches(".dropdown-content a")
    ) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  };
};

