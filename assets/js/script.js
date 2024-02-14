var openDropdownId = null; // Keep track of the currently open dropdown

function toggleDropdown(dropdownId) {
  var dropdownMenu = document.getElementById(dropdownId);

  // Close the previously open dropdown, if any
  if (openDropdownId && openDropdownId !== dropdownId) {
    var previousDropdown = document.getElementById(openDropdownId);
    previousDropdown.style.display = "none";
  }

  // Toggle the current dropdown
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
    openDropdownId = null;
  } else {
    dropdownMenu.style.display = "block";
    openDropdownId = dropdownId;
  }
}

// Close the dropdowns when clicking outside
document.addEventListener("click", function(event) {
  var dropdowns = document.getElementsByClassName("dropdown-menu");
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdownMenu = dropdowns[i];
    if (!event.target.closest('.dropdown')) {
      dropdownMenu.style.display = "none";
      openDropdownId = null; // Reset the currently open dropdown
    }
  }
});
