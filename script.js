// window.onload = function () {
//   const path = window.location.pathname.split("/");

//   switch (path[1]) {
//     case "": {
//       loadPage("home");
//       break;
//     }
//     case "about": {
//       loadPage("about");
//       break;
//     }
//     case "developers": {
//       loadPage("developers");
//       break;
//     }
//     case "hoursstudied": {
//       loadPage("hoursstudied");
//       break;
//     }
//     case "attendance": {
//       loadPage("attendance");
//       break;
//     }
//     case "previousscore": {
//       loadPage("previousscore");
//       break;
//     }
//     case "sleephours": {
//       loadPage("sleephours");
//       break;
//     }
//     case "decisiontree": {
//       loadPage("decisiontree");
//       break;
//     }
//     case "heatmap": {
//       loadPage("heatmap");
//       break;
//     }
//     default: {
//       loadPage("404");
//       break;
//     }
//   }

//   document.querySelectorAll(".menu__item").forEach((item) => {
//     item.addEventListener("click", function () {
//       const path = item.getAttribute("value");
//       loadPage(path);
//       if (path == "home") {
//         window.history.pushState("", "", "/");
//         return;
//       }

//       window.history.pushState("", "", path);
//     });
//   });

//   function loadPage($path) {
//     if ($path == "") return;

//     const container = document.getElementById("container");

//     const request = new XMLHttpRequest();
//     request.open("GET", "pages/" + $path + ".html");
//     request.send();
//     request.onload = function () {
//       if (request.status == 200) {
//         container.innerHTML = request.responseText;
//         document.title = $path;
//       }
//     };
//   }

//   // Get the dropdown button and content
//   const dropdownBtn = document.querySelector(".dropdown-btn");
//   const dropdownContent = document.querySelector(".dropdown-content");

//   // Toggle visibility when button is clicked
//   dropdownBtn.addEventListener("click", function () {
//     // Toggle the "show" class to open or close the dropdown
//     dropdownContent.style.display =
//       dropdownContent.style.display === "block" ? "none" : "block";
//   });

//   // Close the dropdown if the user clicks anywhere outside of it
//   window.onclick = function (event) {
//     if (
//       !event.target.matches(".dropdown-btn") &&
//       !event.target.matches(".dropdown-content") &&
//       !event.target.matches(".dropdown-content a")
//     ) {
//       if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//       }
//     }
//   };
// };

// window.onload = function () {
//   function loadPage($path) {
//     if ($path == "") return;

//     const container = document.getElementById("container");

//     const request = new XMLHttpRequest();
//     request.open("GET", "pages/" + $path + ".html");
//     request.send();
//     request.onload = function () {
//       if (request.status == 200) {
//         container.innerHTML = request.responseText;
//         document.title = $path;
//       }
//     };
//   }

//   function handleRoute() {
//     const hash = window.location.hash.slice(1); // Get the part after "#"
//     const path = hash || "home"; // Default to "home"
//     loadPage(path);
//   }

//   // Trigger the router on page load
//   handleRoute();

//   // Trigger the router on hash change
//   window.addEventListener("hashchange", handleRoute);

//   document.querySelectorAll(".menu__item").forEach((item) => {
//     item.addEventListener("click", function () {
//       const path = item.getAttribute("value");
//       window.location.hash = path; // Use hash instead of pushState
//     });
//   });

//   const dropdownBtn = document.querySelector(".dropdown-btn");
//   const dropdownContent = document.querySelector(".dropdown-content");

//   dropdownBtn.addEventListener("click", function () {
//     dropdownContent.style.display =
//       dropdownContent.style.display === "block" ? "none" : "block";
//   });

//   window.onclick = function (event) {
//     if (
//       !event.target.matches(".dropdown-btn") &&
//       !event.target.matches(".dropdown-content") &&
//       !event.target.matches(".dropdown-content a")
//     ) {
//       if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//       }
//     }
//   };
// };


window.onload = function () {
  function loadPage(path) {
    if (!path) return;

    const container = document.getElementById("container");

    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + path + ".html");
    request.send();
    request.onload = function () {
      if (request.status === 200) {
        container.innerHTML = request.responseText;
        document.title = path;
      } else {
        load404(); // Load the 404 page if the requested page doesn't exist
      }
    };
  }

  function load404() {
    const container = document.getElementById("container");
    const request = new XMLHttpRequest();
    request.open("GET", "pages/404.html"); // Make sure you have a 404.html page in your "pages" folder
    request.send();
    request.onload = function () {
      if (request.status === 200) {
        container.innerHTML = request.responseText;
        document.title = "404 - Page Not Found";
      }
    };
  }

  function handleRoute() {
    const hash = window.location.hash.slice(1); // Get the part after "#"
    const path = hash || "home"; // Default to "home"
    loadPage(path); // Try to load the requested page
  }

  // Trigger the router on page load
  handleRoute();

  // Trigger the router on hash change
  window.addEventListener("hashchange", handleRoute);

  document.querySelectorAll(".menu__item").forEach((item) => {
    item.addEventListener("click", function () {
      const path = item.getAttribute("value");
      window.location.hash = path; // Use hash for navigation
    });
  });

  // Dropdown functionality
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

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
