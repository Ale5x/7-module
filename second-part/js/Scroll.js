const localCertificates = {
    "_embedded": {
        "giftCertificateDtoList": [
            {
                "giftCertificateDtoId": 1,
                "name": "Auto",
                "description": "Description of the car certificate",
                "price": 33.00,
                "duration": 3,
                "createDate": "2022-05-10T14:33:33",
                "lastUpdateDate": "2022-05-10T14:33:33",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 2,
                "name": "Tesla",
                "description": "Description of the Tesla certificate",
                "price": 100.00,
                "duration": 50,
                "createDate": "2020-01-01T12:10:10",
                "lastUpdateDate": "2022-10-10T12:10:10",
                "tags": "#Tag 5, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 3,
                "name": "Object",
                "description": "Description of the object certificate",
                "price": 300.00,
                "duration": 150,
                "createDate": "2020-05-05T12:10:10",
                "lastUpdateDate": "2022-10-10T12:10:10",
                "tags": "#Tag 5, #Tag 4, #Tag 2"
            },
            {
                "giftCertificateDtoId": 4,
                "name": "Balance space & Complex for the car \"CleanArt\"",
                "description": "[2] then the new consuls, having sent fetials, as commanded by the people, to declare war on the Samnites,",
                "price": 36.00,
                "duration": 270,
                "createDate": "1992-10-10T19:13",
                "lastUpdateDate": "1992-10-10T19:13",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 5,
                "name": "Relaxing aroma massage & Aroma Care \"Hot Cherry\"",
                "description": "Looked forward to the coming of their fellow Greeks, the young men of Tarentum, to enable",
                "price": 35.00,
                "duration": 96,
                "createDate": "2007-08-22T16:38",
                "lastUpdateDate": "2007-08-22T16:38",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 6,
                "name": "Dinner at a Georgian restaurant & Expobel-bowling",
                "description": "that reinforcements were on their way, both from Tarentum and from the Samnites, they felt that",
                "price": 70.00,
                "duration": 135,
                "createDate": "2020-10-14T04:30",
                "lastUpdateDate": "2020-10-14T04:30",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 3"
            },
            {
                "giftCertificateDtoId": 7,
                "name": "Nova Shangrila Luxury SPA & Fitness & School of drawing \"All Malevichi\"",
                "description": "where the Samnites were established, appointing [p. 103]Lucius Quinctius",
                "price": 9.00,
                "duration": 158,
                "createDate": "2017-02-06T11:34",
                "lastUpdateDate": "2017-02-06T11:34",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 8,
                "name": "Aroma Care \"Hot Cherry\" & School of massage \"Clarity\"",
                "description": "And praying that it might tum out a good and favourable and fortunate thing for Palaepolis",
                "price": 10.00,
                "duration": 86,
                "createDate": "1998-04-23T16:42",
                "lastUpdateDate": "1998-04-23T16:42",
                "tags": "#Tag 5, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 9,
                "name": "Set \"Caprice\" & Master class \"Painting in two hours\"",
                "description": "[p. 101]children and their wives, and suffered all the horrors2 of captured cities. [7] and so, on a report ",
                "price": 71.00,
                "duration": 222,
                "createDate": "2021-01-01T02:42",
                "lastUpdateDate": "2021-01-01T02:42",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            }
        ]
    },
    "_links": {
        "Previous": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9",
            "type": "GET"
        },
        "Next": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=2&size=9",
            "type": "GET"
        }
    }
};

const localCertificateByTag = {
    "_embedded": {
        "giftCertificateDtoList": [
            {
                "giftCertificateDtoId": 4,
                "name": "Balance space & Complex for the car \"CleanArt\"",
                "description": "[2] then the new consuls, having sent fetials, as commanded by the people, to declare war on the Samnites,",
                "price": 36.00,
                "duration": 270,
                "createDate": "1992-10-10T19:13",
                "lastUpdateDate": "1992-10-10T19:13",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 5,
                "name": "Relaxing aroma massage & Aroma Care \"Hot Cherry\"",
                "description": "Looked forward to the coming of their fellow Greeks, the young men of Tarentum, to enable",
                "price": 35.00,
                "duration": 96,
                "createDate": "2007-08-22T16:38",
                "lastUpdateDate": "2007-08-22T16:38",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 6,
                "name": "Dinner at a Georgian restaurant & Expobel-bowling",
                "description": "that reinforcements were on their way, both from Tarentum and from the Samnites, they felt that",
                "price": 70.00,
                "duration": 135,
                "createDate": "2020-10-14T04:30",
                "lastUpdateDate": "2020-10-14T04:30",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 3"
            },
            {
                "giftCertificateDtoId": 7,
                "name": "Nova Shangrila Luxury SPA & Fitness & School of drawing \"All Malevichi\"",
                "description": "where the Samnites were established, appointing [p. 103]Lucius Quinctius",
                "price": 9.00,
                "duration": 158,
                "createDate": "2017-02-06T11:34",
                "lastUpdateDate": "2017-02-06T11:34",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 8,
                "name": "Aroma Care \"Hot Cherry\" & School of massage \"Clarity\"",
                "description": "And praying that it might tum out a good and favourable and fortunate thing for Palaepolis",
                "price": 10.00,
                "duration": 86,
                "createDate": "1998-04-23T16:42",
                "lastUpdateDate": "1998-04-23T16:42",
                "tags": "#Tag 5, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 9,
                "name": "Set \"Caprice\" & Master class \"Painting in two hours\"",
                "description": "[p. 101]children and their wives, and suffered all the horrors2 of captured cities. [7] and so, on a report ",
                "price": 71.00,
                "duration": 222,
                "createDate": "2021-01-01T02:42",
                "lastUpdateDate": "2021-01-01T02:42",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            }
        ]
    },
    "_links": {
        "Previous": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9",
            "type": "GET"
        },
        "Next": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=2&size=9",
            "type": "GET"
        }
    }
};

const localCertificateByName = {
    "_embedded": {
        "giftCertificateDtoList": [
            {
                "giftCertificateDtoId": 4,
                "name": "Balance space & Complex for the car \"CleanArt\"",
                "description": "[2] then the new consuls, having sent fetials, as commanded by the people, to declare war on the Samnites,",
                "price": 36.00,
                "duration": 270,
                "createDate": "1992-10-10T19:13",
                "lastUpdateDate": "1992-10-10T19:13",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 5,
                "name": "Relaxing aroma massage & Aroma Care \"Hot Cherry\"",
                "description": "Looked forward to the coming of their fellow Greeks, the young men of Tarentum, to enable",
                "price": 35.00,
                "duration": 96,
                "createDate": "2007-08-22T16:38",
                "lastUpdateDate": "2007-08-22T16:38",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 8,
                "name": "Aroma Care \"Hot Cherry\" & School of massage \"Clarity\"",
                "description": "And praying that it might tum out a good and favourable and fortunate thing for Palaepolis",
                "price": 10.00,
                "duration": 86,
                "createDate": "1998-04-23T16:42",
                "lastUpdateDate": "1998-04-23T16:42",
                "tags": "#Tag 5, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 9,
                "name": "Set \"Caprice\" & Master class \"Painting in two hours\"",
                "description": "[p. 101]children and their wives, and suffered all the horrors2 of captured cities. [7] and so, on a report ",
                "price": 71.00,
                "duration": 222,
                "createDate": "2021-01-01T02:42",
                "lastUpdateDate": "2021-01-01T02:42",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            }
        ]
    },
    "_links": {
        "Previous": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9",
            "type": "GET"
        },
        "Next": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=2&size=9",
            "type": "GET"
        }
    }
};

localStorage.setItem('certificates', localCertificates.toString());
localStorage.setItem('certificateByTag', localCertificateByTag.toString());
localStorage.setItem('certificateByName', localCertificateByName.toString());

const container = document.querySelector('.list-certificates');
const nextPage = document.querySelector('next-page');
let page = 1;
let form = document.getElementById('form');
let tagName = document.getElementById('tag-name');
let certificateName = document.getElementById('certificate-name');


function loadImages(certificates) {
    let countCertificates = 9;
    let i = 0;
    while (i < countCertificates) {
        const div = document.createElement('div')
        div.innerHTML = `
            <img src="../image/icon-certificate.png">
            <h2>${certificates._embedded.giftCertificateDtoList[i].name}</h2>
            <h1>${certificates._embedded.giftCertificateDtoList[i].price}$</h1>
          
            <input type="submit" value="Add to basket" class="button-add-to-basket">
         `
        container.appendChild(div);
        i++;
    }
}

init()

function getCertificateByTag(name) {
    // const certificates = localStorage.getItem('certificateByTag');
    loadImages(localCertificateByTag)
}

function getCertificateByName(name) {
    // const certificates = localStorage.getItem('certificateByName');
    loadImages(localCertificateByName)
}

function initCertificates() {
    // const certificatesList = localStorage.getItem('certificates');
    loadImages(localCertificates)
}

function init() {
    if (certificateName.value != null && certificateName.value !== "") {
        getCertificateByName(certificateName.value)
    } else if (tagName.value != null && tagName.value !== "") {
        getCertificateByTag(tagName.value)
    } else {
        initCertificates()
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        console.log('scroll => page ->', page);
        page++;
        init()
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = "";
    page = 1;
    init();
});

let scrollPositionY;
function scrollToTop() {
    window.scrollTo(0,0)
    scrollPositionY = window.scrollY;
    console.log('position', scrollPositionY)
}

function scrollToBack() {
    window.scrollTo(0,scrollPositionY)
}



// // const scrollButton = document.querySelector('.isShowButton');
// const scrollButton = document.getElementById('.isShowButton');
// window.onscroll = () => {
//     console.log('Start scroll for up');
//     if(window.scrollY > 700) {
//         console.log('remove(isShowButton_hide')
//         // scrollButton.classList.remove('isShowButton_hide')
//     } else {
//         console.log('add(isShowButton_hide')
//         // scrollButton.classList.add('isShowButton_hide')
//     }
// };
//
// scrollButton.onclick = () => {
//     console.log('Onclick scroll for up');
//     window.scrollTo(0, 0);
// };