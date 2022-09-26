///////////////////////////////////////////////////////////////////////////////Go TOP
window.onscroll = function() {
    if(document.documentElement.scrollTop > 120) {
        document.querySelector(".gotop").classList.remove("show");
    } else {
        document.querySelector(".gotop").classList.add("show");
    }
}
///////////////////////////////////////////////////////////////////////////Go TOP END

////////////////////////////////////////////////////////////////////////////////RESET
function reset() {
    const intro = document.querySelector("#intro");
    const newcriat = document.querySelector("#newcriat");
    const newstat = document.querySelector("#newstat");

    setTimeout(() => {
        if (intro.className == "") {
            intro.classList.add("intro");
        }

        if (newcriat.className == "") {
            newcriat.classList.add("newcriat");
        }
        
        if (newstat.className == "") {
            newstat.classList.add("newstat");
        }
    }, 600);
    
}
////////////////////////////////////////////////////////////////////////////RESET END

///////////////////////////////////////////////////////////////////////////SHOW INTRO
function showIntro(){
    const intro = document.querySelector("#intro");
    const newcriat = document.querySelector("#newcriat");
    const newstat = document.querySelector("#newstat");

    if (newcriat.className == "")
        newcriat.classList.add("newcriat");
    
    if (newstat.className == "")
        newstat.classList.add("newstat");

    if (intro.className == "intro")
        intro.classList.remove("intro");
}
///////////////////////////////////////////////////////////////////////SHOW INTRO END

///////////////////////////////////////////////////////////////////////SHOW NEW BEAST
function showNewCriat() {
    const newcriat = document.querySelector("#newcriat");
    const intro = document.querySelector("#intro");
    const newstat = document.querySelector("#newstat");

    if (intro.className == "")
        intro.classList.add("intro");

    if (newstat.className == "")
        newstat.classList.add("newstat");
    
    if (newcriat.className == "newcriat")
        newcriat.classList.remove("newcriat");

    showSlide(slideIndex);
}

///////////////////////////////////////////////////////////////////////////SHOW NEWSTAT
function showNewStat(){
    const intro = document.querySelector("#intro");
    const newcriat = document.querySelector("#newcriat");
    const newstat = document.querySelector("#newstat");

    if (newcriat.className == "")
        newcriat.classList.add("newcriat");

    if (intro.className == "")
        intro.classList.add("intro");

    if (newstat.className == "newstat")
        newstat.classList.remove("newstat");
}
///////////////////////////////////////////////////////////////////////SHOW NEWSTAT END

// set the default active slide to the first one
let slideIndex = 1;

// change slide with the prev/next button
function moveSlide(moveStep) {
    showSlide(slideIndex += moveStep);
}

function showSlide(n) {
    let i;
    const img = document.getElementsByClassName("img");
    
    if (n > img.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = img.length }

    // hide all slides
    for (i = 0; i < img.length; i++) {
        img[i].classList.add("hidden");
    }

    // show the active slide
    img[slideIndex - 1].classList.remove("hidden");
}
///////////////////////////////////////////////////////////////////SHOW NEW BEAST END