// Home page

// bottons

// var url = document.getElementsByClassName("pay").onclick = function () {
//         location.href = "https://payrent.com/login/eyJyZXR1cm5fdXJsIjoiL2xhbmRsb3JkL3RlbmFudHMifQ____";
//     };


// Maintenance-page

// Accordion list effect

// Accordion 1
var acc = document.getElementsByClassName("accordion1");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel1 = this.nextElementSibling;
        if (panel1.style.display === "block") {
            panel1.style.display = "none";
        } else {
            panel1.style.display = "block";
        }
    });
}

// Accordion 2
var acc = document.getElementsByClassName("accordion2");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel2 = this.nextElementSibling;
        if (panel2.style.display === "block") {
            panel2.style.display = "none";
        } else {
            panel2.style.display = "block";
        }
    });
}

// Accordion 3
var acc = document.getElementsByClassName("accordion3");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel3 = this.nextElementSibling;
        if (panel3.style.display === "block") {
            panel3.style.display = "none";
        } else {
            panel3.style.display = "block";
        }
    });
}

// Accordion 4
var acc = document.getElementsByClassName("accordion4");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel4 = this.nextElementSibling;
        if (panel4.style.display === "block") {
            panel4.style.display = "none";
        } else {
            panel4.style.display = "block";
        }
    });
}

// Accordion 5
var acc = document.getElementsByClassName("accordion5");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel5 = this.nextElementSibling;
        if (panel5.style.display === "block") {
            panel5.style.display = "none";
        } else {
            panel5.style.display = "block";
        }
    });
}

// Accordion 6
var acc = document.getElementsByClassName("accordion6");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel6 = this.nextElementSibling;
        if (panel6.style.display === "block") {
            panel6.style.display = "none";
        } else {
            panel6.style.display = "block";
        }
    });
}

// https://www.w3schools.com/howto/howto_js_accordion.asp

// Maintenance Form

function autoLogIn(un, pw) {
    var form = document.createElement("form");
    var element1 = document.createElement("input"); 
    var element2 = document.createElement("input");  

    form.method = "POST";
    form.action = "login.php";   

    element1.value=un;
    element1.name="un";
    form.appendChild(element1);  

    element2.value=pw;
    element2.name="pw";
    form.appendChild(element2);

    document.body.appendChild(form);

    form.submit();
}