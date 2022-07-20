
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
            <h4>ID: ${certificates.giftCertificateDtoList[i].giftCertificateDtoId}</h4>
            <h2>${certificates.giftCertificateDtoList[i].name}</h2>
            <h1>${certificates.giftCertificateDtoList[i].price}$</h1>
          
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

import {getDao, getTestExport, getMapperDate} from './dao.js';

async function initCertificates() {
    const url = "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9";
    const data = await getDao(url);
    const content = getMapperDate(data)
    // const content = getMapperDate(data)
    loadImages(content)
}

async function getResponse() {
    console.log("Start...")
    let content = ""
    // let response = await fetch("http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9");
    // let content = await response.json();
    // console.log("content", content)
    console.log("Finish...")
    // console.log("id-> ", content._embedded.giftCertificateDtoList[2].giftCertificateDtoId)
    // console.log("Item-> ", content._embedded.giftCertificateDtoList)
    const promise = function () {
        new Promise(async function (resolve, reject) {
            console.log("Promise preparing")
            let response = await fetch("http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9");
            resolve(response.json());
        });
        promise.then((data) => {
            content = data.giftCertificateDtoList
            console.log("test 1", content)
        })
    }
    console.log("test 2", content)
}






function getData1() {
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9";
    const urlTest = "https://reqres.in/api/users";





    // xhr.onreadystatechange = function () {
    //     myFunction(this.responseText)
    // }
    //
    // xhr.open("GET", url, true)
    // // xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    // // xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept")
    // xhr.send()
    //
    // function myFunction(data) {
    //     // console.log("log", data)
    //     return data
    // }




    // var
   const getResource = async (url) => {
        const response = await fetch(url
            , {
            //     // mode: 'no-cors',
                method: "get",
            //     headers: {
            //         "Content-Type": "application/json",
            //         'Access-Control-Allow-Origin':'*',
            //         'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
            //     },
            }
        )
       if (response.ok) {
           console.log("Status ok")
           return await response.json()
       } else {
           console.log("Status not ok")
       }
       console.log(response)
   }

    return getResource(url)




    /*
    fetch(url, {
        mode: 'no-cors',
        method: "get",
        headers: {
            "Content-Type": "application/json"
        },})
     */
    // fetch(url)
    // // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(result => result)
    //     .then((output) => {
    //         console.log('Output: ', output);
    //
    //     }).catch(err => console.error(err));
    //
    // async function getDss() {
    //     const response = await fetch(url
    //         , {
    //         // mode: 'no-cors',
    //             method: "get",
    //             headers: {
    //             "Content-Type": "application/json"
    //         },})
    //     return  await response.json()
    // }
    //
    // getDss()

    // fetch(url )
    // fetch("https://reqres.in/api/users")
        // , {
        // mode: 'no-cors',
        // method: "get",
        // headers: {
        //     "Content-Type": "application/json"
        // },
    // })
    // .then(res => {
    //     if (res.ok) {
    //         console.log("Succesful")
    //     } else {
    //         console.log("Error")
    //     }
    //     // console.log(res.json())
    // })
    //     .then(data => console.log(data))

    // xhr.open('GET', url);
    // xhr.responseType = 'json';
    //
    // xhr.onload = function() {
    //     alert(`Loaded: ${xhr.status} ${xhr.response}`);
    // };

    // fetch(url)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         console.log(JSON.stringify(myJson));
    //     });
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
// const scrollButton = document.getElementById('.isShowBtn');
// window.onscroll = () => {
//     console.log('Start scroll for up');
//     if(window.scrollY > 700) {
//         console.log('remove(isShowButton_hide')
//         scrollButton.classList.remove('isShowBtn:hover')
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