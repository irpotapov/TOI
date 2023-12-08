function show_content_one() {
    document.getElementById("dropdown-one").classList.toggle("show");
}

window.onclick = function (evennt) {
    if(!evennt.target.matches('.dropbtn-one')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-one");
        for (var i = 0; i < dropdowns.length; i++) {
            var open_drop = dropdowns[i];
            if (open_drop.classList.contains('show')) {
                open_drop.classList.remove('show');
            }
        }
    }
}

function show_content_two() {
    document.getElementById("dropdown-two").classList.toggle("show");
}

window.onclick = function (evennt) {
    if(!evennt.target.matches('.dropbtn-two')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-two");
        for (var i = 0; i < dropdowns.length; i++) {
            var open_drop = dropdowns[i];
            if (open_drop.classList.contains('show')) {
                open_drop.classList.remove('show');
            }
        }
    }
}

function show_content_three() {
    document.getElementById("dropdown-three").classList.toggle("show");
}

window.onclick = function (evennt) {
    if(!evennt.target.matches('.dropbtn-three')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-three");
        for (var i = 0; i < dropdowns.length; i++) {
            var open_drop = dropdowns[i];
            if (open_drop.classList.contains('show')) {
                open_drop.classList.remove('show');
            }
        }
    }
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn-one')) {
      var dropdownOne = document.getElementById('dropdown-one');
      if (dropdownOne.classList.contains('show')) {
        dropdownOne.classList.remove('show');
      }
    }
    if (!event.target.matches('.dropbtn-two')) {
      var dropdownTwo = document.getElementById('dropdown-two');
      if (dropdownTwo.classList.contains('show')) {
        dropdownTwo.classList.remove('show');
      }
    }
    if (!event.target.matches('.dropbtn-three')) {
      var dropdownThree = document.getElementById('dropdown-three');
      if (dropdownThree.classList.contains('show')) {
        dropdownThree.classList.remove('show');
      }
    }
  });