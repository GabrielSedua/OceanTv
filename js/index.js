//start of overlay
$(window).scroll(function() {
    $('.overlay').css({top: $('window').prop('scrollTop')+'px'})
});

//start of for all mankind
let forAllMankindfirstimg = [

    //{
    //    imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/90/a7/b6/90a7b6a7-04f4-ba38-11cd-77978c92e2fc/6dd93a9c-8082-4079-abd0-245e4fd8192c.lsr/1478x832fe.webp",
    //    id: "fstman1"
    //},
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/a5/dc/cd/a5dccd03-d89f-8dc7-d253-fa6876e7601f/a03790ea-bca4-4249-b9ad-d13f1a07d654.lsr/1478x832fe.webp",
        id: "fstman2"
    },
    {
        imgurl: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/98/33/a3/9833a393-d405-b5bb-2812-9f944a1072e7/3a9fe1af-3db9-4aca-8851-5d3460a4d115.lsr/1478x832fe.webp",
        id: "fstman3"
    },
    {
        imgurl: "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/7e/57/a6/7e57a60f-9be2-54a1-03f4-62f859f5a649/2644edb0-fde9-4a43-b2c5-dc28c368a89e.lsr/1478x832fe.webp",
        id: "fstman4"
    },
    {
        imgurl: "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/27/ed/14/27ed1408-6bb2-46ac-2523-66bc508d0618/d6340feb-a8de-405e-9ffa-31622d797990.lsr/1478x832fe.webp",
        id: "fstman5"
    }
];

displayforAllMankindfirstimg(forAllMankindfirstimg)

function displayforAllMankindfirstimg(forAllMankindfirstimg) {
    forAllMankindfirstimg.forEach(function (elem) {

        let photosforAllMankindfirstimg = document.createElement("div");
        photosforAllMankindfirstimg.addEventListener("click", function () {
            mankindFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosforAllMankindfirstimg.append(movphoto)
        document.querySelector("#firstMankind").append(photosforAllMankindfirstimg);

    });
}

// janaki update
$(document).ready(function () {
    $(".block-1").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 1,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});


// console.log(forAllMankindfirstimg[0])

function mankindFunction(ele) {
    let image = "https://is2-ssl.mzstatic.com/image/thumb/fSaT2Cu_1kdkgO4179kCwg/999x562.webp";
    sessionStorage.setItem("mankindFunction", image);
    window.open('index.html', '_blank');
}

//end of for all mankind


//start of most popular now
let mostPopularNowimg = [


];

displaymostPopularNowimg(mostPopularNowimg)

function displaymostPopularNowimg(mostPopularNowimg) {
    mostPopularNowimg.forEach(function (elem, i) {

        let photosmostPopularNow = document.createElement("div");
        photosmostPopularNow.setAttribute("class", "row");
        photosmostPopularNow.addEventListener("click", function () {
            mostPopularFunction(elem.imgurl, i);
        });
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosmostPopularNow.append(movphoto)
        document.querySelector("#mostPopularNow").append(photosmostPopularNow);

    });
}

// janaki updates
$(document).ready(function () {
    $(".block-2").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function mostPopularFunction(el, i) {
    switch (i) {
        case 0:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/0QNze4UdarsNMgqK230KnQ/999x562sr.webp",
                logo: "https://is3-ssl.mzstatic.com/image/thumb/Bti23Ucycf0qdlSVEgBIyA/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 1:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/817vv94spd-lZj8XcROCBw/999x562sr.webp",
                logo: "https://is2-ssl.mzstatic.com/image/thumb/lkfL5Yr2dJPdwg4healhjA/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 2:
            mostPopular1 = {
                image: "https://is3-ssl.mzstatic.com/image/thumb/ZiTyM73hqlnnRWPDPXxydw/999x562sr.webp",
                logo: "https://is5-ssl.mzstatic.com/image/thumb/ppDkYyI0vRmLKXootk7IBw/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 3:
            mostPopular1 = {
                image: "https://is4-ssl.mzstatic.com/image/thumb/cC8yOeECd9XOS00VpA3DYg/999x562sr.webp",
                logo: "https://is3-ssl.mzstatic.com/image/thumb/PQg_f7tjfoPNrV389DnMOw/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 4:
            mostPopular1 = {
                image: "https://is3-ssl.mzstatic.com/image/thumb/4x8-s5gM0I4HxxAjAQfVfA/999x562sr.webp",
                logo: "https://is4-ssl.mzstatic.com/image/thumb/TzRR7fuaGMrMZo5jTid-Dg/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 5:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/GRr31gLt6l3sDVJ3lslpjg/999x562sr.webp",
                logo: "https://is1-ssl.mzstatic.com/image/thumb/0lcgiIk8QlhnglLCsb2RSQ/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 6:
            mostPopular1 = {
                image: "https://is2-ssl.mzstatic.com/image/thumb/1_ESW4BqNF8IsFMfAjWX6A/999x562sr.webp",
                logo: "https://is1-ssl.mzstatic.com/image/thumb/bADpuDvDgShdIe3vA-W4aw/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 7:
            mostPopular1 = {
                image: "https://is1-ssl.mzstatic.com/image/thumb/teZHXHXnb2oCpibFW0V1rw/999x562sr.webp",
                logo: "https://is3-ssl.mzstatic.com/image/thumb/hdvBRgl2BXqEcbRUG8VD2A/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;
        case 8:
            mostPopular1 = {
                image: "https://is3-ssl.mzstatic.com/image/thumb/LoTOVzvUhbAhM1d9zfkcnQ/999x562sr.webp",
                logo: "https://is5-ssl.mzstatic.com/image/thumb/yhEFnVeUlSG6Y19ooMUh9g/1200x450.webp"
            }
            sessionStorage.setItem("mostPopular", JSON.stringify(mostPopular1));
            break;

    }
    window.open('insidePages/watch2.html', '_blank');
}

//end of most popular now

//start of watch entire seasons

let watchEntireSeasonsimg = [

];

displaywatchEntireSeasonsimg(watchEntireSeasonsimg)

function displaywatchEntireSeasonsimg(watchEntireSeasonsimg) {
    watchEntireSeasonsimg.forEach(function (elem) {

        let photoswatchEntireSeasons = document.createElement("div");
        photoswatchEntireSeasons.addEventListener("click", function () {
            mostPopularFunction(elem.imgurl);
        });
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl);

        photoswatchEntireSeasons.append(movphoto)
        document.querySelector("#watchEntireSeasons").append(photoswatchEntireSeasons);
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-3").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function mostPopularFunction(el){
    sessionStorage.setItem("mostPopularFunction", el);
    window.open('insidePages/watch3.html', '_blank');
}
//end of watch entire seasons

//start of latest original
let latestOriginalimg = [


];

displaylatestOriginal(latestOriginalimg)

function displaylatestOriginal(latestOriginalimg) {
    latestOriginalimg.forEach(function (elem) {

        let photoslatestOriginalimg = document.createElement("div");
        photoslatestOriginalimg.addEventListener("click", function () {
            photoslatestOriginalimgFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)
        let firstText = document.createElement("p");
        firstText.innerText = elem.fstTxt;
        firstText.setAttribute("id", "lstP1")
        let secondText = document.createElement("p");
        secondText.innerText = elem.secTxt;
        secondText.setAttribute("id", "lstP2")
        let thirdText = document.createElement("p");
        thirdText.innerText = elem.trdTxt;
        thirdText.setAttribute("id", "lstP3")

        photoslatestOriginalimg.append(movphoto, firstText, secondText, thirdText)
        document.querySelector("#latestOriginal").append(photoslatestOriginalimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-4").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photoslatestOriginalimgFunction(el){
    sessionStorage.setItem("photoslatestOriginalimgFunction", el);
    window.open('insidePages/watch4.html', '_blank');
}

//end of latest original
//start of coming soon
let comingSoonimg = [


];

displaycomingSoonimg(comingSoonimg)

function displaycomingSoonimg(comingSoonimg) {
    comingSoonimg.forEach(function (elem) {

        let photoscomingSoonimg = document.createElement("div");
        photoscomingSoonimg.addEventListener("click", function () {
            photoscomingSoonimgFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoscomingSoonimg.append(movphoto)
        document.querySelector("#comingSoon").append(photoscomingSoonimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-5").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

function photoscomingSoonimgFunction(el){
    sessionStorage.setItem("photoscomingSoonimg", el);
    window.open('insidePages/watch5.html', '_blank');
}
//end of coming soon

//start of baseball
let baseballimg = [



];

displaybaseballimg(baseballimg)

function displaybaseballimg(baseballimg) {
    baseballimg.forEach(function (elem) {

        let photosbaseballimg = document.createElement("div");
        photosbaseballimg.addEventListener("click", function () {
            photosbaseballimg(elem.imgurl);
        });
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosbaseballimg.append(movphoto)
        document.querySelector("#baseball").append(photosbaseballimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-6").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosbaseballimg(el){
    sessionStorage.setItem("photosbaseballimg", el);
    window.open('insidePages/watch6.html', '_blank');
}

//end of baseball

//start of a feast for the eyes
let aFeastforEyesimg = [


];

displayimgfeast(aFeastforEyesimg)

function displayimgfeast(aFeastforEyesimg) {
    aFeastforEyesimg.forEach(function (elem) {

        let photos = document.createElement("div");
        photos.addEventListener("click", function () {
            photosFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photos.append(movphoto)
        document.querySelector("#feast_for_the_eyes").append(photos);
    });
}
// janaki updates
$(document).ready(function () {
    $(".block-7").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosFunction(el){
    sessionStorage.setItem("photosFunction", el);
    window.open('insidePages/watch7.html', '_blank');
}
//end of a feast for the eyes

//start of feel good comedies

let feelGoodcomediesimg = [

]

displayimgcomedies(feelGoodcomediesimg)

function displayimgcomedies(feelGoodcomediesimg) {
    feelGoodcomediesimg.forEach(function (elem) {

        let photosComedies = document.createElement("div");
        photosComedies.addEventListener("click", function () {
            photosComediesFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosComedies.append(movphoto)
        document.querySelector("#comedy").append(photosComedies)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-8").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosComediesFunction(el){
    sessionStorage.setItem("photosComediesFunction", el);
    window.open('insidePages/watch8.html', '_blank');
}
//end of feel good comedies

//start of from page to screen

let fromPageToScreenimg = [


];

displayimgscreen(fromPageToScreenimg)

function displayimgscreen(fromPageToScreenimg) {
    fromPageToScreenimg.forEach(function (elem) {

        let photosScreen = document.createElement("div");
        photosScreen.addEventListener("click", function () {
            photosScreenFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosScreen.append(movphoto)
        document.querySelector("#screen").append(photosScreen)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-9").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosScreenFunction(el){
    sessionStorage.setItem("photosScreenFunction", el);
    window.open('insidePages/watch9.html', '_blank');
}
//end of from page to screen

//start of extraordinary people

let extraordinaryPeopledata = [



];

displayExtraordinaryPeople(extraordinaryPeopledata)

function displayExtraordinaryPeople(extraordinaryPeopledata) {
    extraordinaryPeopledata.forEach(function (elem) {

        let photosExtraPep = document.createElement("div");
        photosExtraPep.addEventListener("click", function () {
            photosExtraPepFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)
        let firstText = document.createElement("p");
        firstText.innerText = elem.fstTxt;
        firstText.setAttribute("id", "fstP")
        let secondText = document.createElement("p");
        secondText.innerText = elem.secTxt;
        secondText.setAttribute("id", "secP")
        let thirdText = document.createElement("p");
        thirdText.innerText = elem.trdTxt;
        thirdText.setAttribute("id", "trdP")

        photosExtraPep.append(movphoto, firstText, secondText, thirdText)
        document.querySelector("#extraordinary_people").append(photosExtraPep)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-10").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photosExtraPepFunction(el){
    sessionStorage.setItem("photosExtraPepFunction", el);
    window.open('insidePages/watch7.html', '_blank');
}

//end of extraordinary people

//start of creatures and critters

let creaturesAndCrittersimg = [


];

displaycreaturesAndCrittersimg(creaturesAndCrittersimg)

function displaycreaturesAndCrittersimg(aFeastforEyesimg) {
    creaturesAndCrittersimg.forEach(function (elem) {

        let photoscreaturesAndCrittersimg = document.createElement("div");
        photoscreaturesAndCrittersimg.addEventListener("click", function () {
            photoscreaturesAndCrittersimgFunction(elem.imgurl);
        });

        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoscreaturesAndCrittersimg.append(movphoto)
        document.querySelector("#creaturesCritters").append(photoscreaturesAndCrittersimg);
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-11").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

function photoscreaturesAndCrittersimgFunction(el){
    sessionStorage.setItem("photoscreaturesAndCrittersimgFunction", el);
    window.open('insidePages/watch8.html', '_blank');
}
//end of creatures and critters


//start of all drama series

let allDramaSeries = [


];

displayAllDramaSeries(allDramaSeries)

function displayAllDramaSeries(allDramaSeries) {
    allDramaSeries.forEach(function (elem) {

        let photosDrama = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosDrama.append(movphoto)
        document.querySelector(".drama").append(photosDrama)
    });
}
// janaki updates
$(document).ready(function () {
    $(".block-12").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all drama series

//start of all comedy series

let allComedySeriesimg = [



];

displayComedySeries(allComedySeriesimg)

function displayComedySeries(allComedySeriesimg) {
    allComedySeriesimg.forEach(function (elem) {

        let photosComedy = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosComedy.append(movphoto)
        document.querySelector(".comedySec").append(photosComedy)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-13").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all comedy series

//start of all feature films

let allFeatureFilmsimg = [


];

displayFeatureFilms(allFeatureFilmsimg)

function displayFeatureFilms(allFeatureFilmsimg) {
    allFeatureFilmsimg.forEach(function (elem) {

        let photosFeature = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photosFeature.append(movphoto)
        document.querySelector(".feature").append(photosFeature)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-14").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all feature films

//start of coda oscar winner best picture

let codaOscarImg = [

];

displaycodaOscarImg(codaOscarImg)

function displaycodaOscarImg(codaOscarImg) {
    codaOscarImg.forEach(function (elem) {

        let photoscodaOscar = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoscodaOscar.append(movphoto)
        document.querySelector(".codaOscar").append(photoscodaOscar)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-15").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});

//end of coda oscar winner best pictire
//start of nonfiction films & series

let nonficImg = [


];

displaynonficImg(nonficImg)

function displaynonficImg(nonficImg) {
    nonficImg.forEach(function (elem) {

        let photononficImg = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photononficImg.append(movphoto)
        document.querySelector(".nonFic").append(photononficImg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-16").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of nonfiction films & series

//start of all nonfiction series

let allNonfictionSeriesimg = [



];

displayallNonfictionSeriesimg(allNonfictionSeriesimg)

function displayallNonfictionSeriesimg(allNonfictionSeriesimg) {
    allNonfictionSeriesimg.forEach(function (elem) {

        let photoallNonfictionSeriesimg = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photoallNonfictionSeriesimg.append(movphoto)
        document.querySelector(".allNonfictionSeries").append(photoallNonfictionSeriesimg)
    });
}

// janaki updates
$(document).ready(function () {
    $(".block-17").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of all nonfiction series

//start of kids and family

let kidsAndfamilyimg = [



];

displaykidsAndfamilyimg(kidsAndfamilyimg)

function displaykidsAndfamilyimg(kidsAndfamilyimg) {
    kidsAndfamilyimg.forEach(function (elem) {

        let photokidsAndfamilyimg = document.createElement("div");
        let movphoto = document.createElement("img");
        movphoto.setAttribute("src", elem.imgurl)

        photokidsAndfamilyimg.append(movphoto)
        document.querySelector(".kidsAndfamily").append(photokidsAndfamilyimg)
    });
}
// janaki updates
$(document).ready(function () {
    $(".block-18").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false,
            },
            600: {
                items: 3,
                nav: true,
                loop: false,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
            }
        }
    });
});
//end of kids and family

// start of sifi section

  displayimagesifiInnerImg(sifiInnerImg)

  function displayimagesifiInnerImg(sifiInnerImg) {
    sifiInnerImg.forEach(function (elem) {

      let photossifiInnerImg = document.createElement("div");
      let movphoto = document.createElement("img");
      movphoto.setAttribute("src", elem.imgurl)
      let description = document.createElement("p");
      description.innerText=elem.text;
      description.setAttribute("id","sifiText")

      photossifiInnerImg.append(movphoto,description)
      console.log(photossifiInnerImg)
      document.querySelector("#sifiInnerImages").append(photossifiInnerImg)
  });
  }

    $(document).ready(function () {
    $(".block-19").owlCarousel({
        touchDrag: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        // nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true,
            },
            600: {
                items: 4,
                nav: true,
                loop: true,
            },
            1000: {
                items: 6,
                nav: true,
                loop: true,
            }
        }
    });
});

// end of sifi section







/* sticky footer */
myID = document.getElementById("myID");

let myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 100) {
        myID.className = "bottomMenu show"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
