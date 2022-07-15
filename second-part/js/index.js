const phoneNumber = {
    'Fire services': [
        ['number 1', '123'],
        ['number 2', '221'],
        ['number 3', '144323']
    ],
    'Police services': [
        ['numberP1', 'ddsdsd'],
        ['numberP2', 'ddsdsd2'],
        ['numberP3', 'dd3e23esdsd']
    ],
    'Helthi services': [
        ['ewee', '5131'],
        ['ewee2', 'asas'],
        ['ewee3', '5131']
    ]
}
const CERTIFICATES = {
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
                "price": 0.00,
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

document.querySelector('.size-table-for-certificate').innerHTML = `<table class="certificates"></table>`;
// document.querySelector('.certificates').innerHTML = `<div class="certificates"></div>`;
console.log(CERTIFICATES._embedded.giftCertificateDtoList);

let step = 3;
for (let i = 0; CERTIFICATES._embedded.giftCertificateDtoList.length; i = i + step) {

    let divElement = document.createElement('div');
    divElement.innerHTML = `
         <div>
            <h1>Name -> ${CERTIFICATES._embedded.giftCertificateDtoList[i].name}</h1>
            <h3>ID -> ${CERTIFICATES._embedded.giftCertificateDtoList[i].giftCertificateDtoId}</h3>
            <h3>Price -> ${CERTIFICATES._embedded.giftCertificateDtoList[i].price}</h3>
        </div`;

    document.querySelector('.certificates').appendChild(divElement)

    // let rowLine = document.createElement('tr');
    // document.querySelector('.certificate').appendChild(rowLine);

    // for(let j = 0; j < step; j++) {
    //
    //     document.querySelector('.size-table-for-certificate').innerHTML = `<table class="certificate"></table>`;
    //     let rowLine = document.createElement('tr');
    //     document.querySelector('.certificate').appendChild(rowLine);
    //
    //     console.log("ID =>", CERTIFICATES._embedded.giftCertificateDtoList[i +j].giftCertificateDtoId);
    //     console.log(CERTIFICATES._embedded.giftCertificateDtoList[i +j].name);
    //     // let rowPosition = document.createElement('tr');
    //
    //     let rowImage = document.createElement('tr');
    //     rowImage.innerHTML = `<td><img src="../image/icon-certificate.png" class="size-icon-large"></td>`;
    //     document.querySelector('.certificate').appendChild(rowImage);
    //
    //     let rowName = document.createElement('tr');
    //     rowName.innerHTML = `<td colspan="2">${CERTIFICATES._embedded.giftCertificateDtoList[i + j].name}</td>`;
    //     document.querySelector('.certificate').appendChild(rowName);
    //
    //     let rowPrice = document.createElement('tr');
    //     rowPrice.innerHTML = `<td><h1>${CERTIFICATES._embedded.giftCertificateDtoList[i + j].price}</h1></td>`;
    //     document.querySelector('.certificate').appendChild(rowPrice);
    //
    //     let rowId = document.createElement('tr');
    //     rowId.innerHTML = `<td><h1>ID: ${CERTIFICATES._embedded.giftCertificateDtoList[i + j].giftCertificateDtoId}</h1></td>`;
    //     document.querySelector('.certificate').appendChild(rowId);
    //
    //     let rowButton = document.createElement('tr');
    //     rowButton.innerHTML = `<td><input type="submit" value="Add to basket" class="button-add-to-basket"></td>`;
    //     document.querySelector('.certificate').appendChild(rowButton);
    //
    //
    //     // document.querySelector('.certificate').appendChild(rowPosition);
    // }

}





// document.querySelector('.content').innerHTML = `<table class="phone"></table>`;
// for (key in phoneNumber) {
//     let row = document.createElement('tr')
//     row.innerHTML = `<td colspan = "2">${key}</td>`
//     document.querySelector('.phone').appendChild(row)
//
//     for (let i = 0; i < phoneNumber[key].length; i++) {
//         let row = document.createElement('tr')
//         row.innerHTML = `
//             <td>${phoneNumber[key][i][0]}</td>
//             <td>${phoneNumber[key][i][1]}</td>
//             `
//         document.querySelector('.phone').appendChild(row)
//     }
// }


/**
 * document.querySelector('.size-table-for-certificate').innerHTML = `<table class="certificate"></table>`;
 console.log(CERTIFICATES._embedded.giftCertificateDtoList);
 let countPosition = 1;
 let countElementInRow = 1;
 let step = 3;
 for (let i = 0; CERTIFICATES._embedded.giftCertificateDtoList.length; i = i + step) {
        console.log(CERTIFICATES._embedded.giftCertificateDtoList[i].name);
        console.log(CERTIFICATES._embedded.giftCertificateDtoList.length);

        let rowLine = document.createElement('tr');
        document.querySelector('.certificate').appendChild(rowLine);

        for(let j = 0; j < step; j++) {
            console.log(CERTIFICATES._embedded.giftCertificateDtoList.length);

            let rowPosition = document.createElement('tr');

            // rowPosition.innerHTML = ``
            let rowImage = document.createElement('tr');
            rowImage.innerHTML = `<td><img src="../image/icon-certificate.png" class="size-icon-large"></td>`;
            document.querySelector('.certificate').appendChild(rowImage);

            let rowName = document.createElement('tr');
            rowName.innerHTML = `<td colspan="2">${CERTIFICATES._embedded.giftCertificateDtoList[i + j].name}</td>`;
            document.querySelector('.certificate').appendChild(rowName);

            let rowPrice = document.createElement('tr');
            rowPrice.innerHTML = `<td><h1>${CERTIFICATES._embedded.giftCertificateDtoList[i + j].price}</h1></td>`;
            document.querySelector('.certificate').appendChild(rowPrice);

            let rowButton = document.createElement('tr');
            rowButton.innerHTML = `<td><input type="submit" value="Add to basket" class="button-add-to-basket"></td>`;
            document.querySelector('.certificate').appendChild(rowButton);


            document.querySelector('.certificate').appendChild(rowPosition);
        }
    }
 */




























// function checkCountElementInRow() {
//     console.log('checkCountElementInRow');
//     if (countPosition <= 3) {
//         countPosition++;
//         let rowElementInRow = document.createElement('td');
//         rowElementInRow.innerHTML = `<td>`
//     }
// }
//
// function finishPositionElementInRow() {
//         countPosition++;
//         console.log('finishPositionElementInRow', countPosition);
//         let rowElementInRow = document.createElement('td');
//         rowElementInRow.innerHTML = `</td>`
//         document.querySelector('.certificate').appendChild(rowElementInRow);
//     }
//
//
// function startNewRow() {
//     console.log('startNewRow', countPosition);
//     if (countPosition === 3) {
//         let row = document.createElement('tr');
//         document.querySelector('.certificate').appendChild(row);
//         countElementInRow = 1;
//     } else if (countPosition <= 3) {
//         checkCountElementInRow();
//     }
// }



//
// document.querySelector('.content').innerHTML = `<table class="phone"></table>`
// for (key in phoneNumber) {
//     let row = document.createElement('tr')
//     row.innerHTML = `<td colspan = "2">${key}</td>`
//     document.querySelector('.phone').appendChild(row)
//
//     for (let i = 0; i < phoneNumber[key].length; i++) {
//         let row = document.createElement('tr')
//         row.innerHTML = `
//             <td>${phoneNumber[key][i][0]}</td>
//             <td>${phoneNumber[key][i][1]}</td>
//             `
//         document.querySelector('.phone').appendChild(row)
//     }
// }





// const list = document.getElementById('list');
// const search = document.getElementById('search');
// const form = document.getElementById('form');
// const nextPage = document.getElementById('next-page');
// let page = 1;
//
// function searchPhotos(searchStr) {
//     console.log("search", searchStr);
//     drawItems(data);
// }
//
// function drawItems(data) {
//     const newElement = data.results.map((item) => {
//         const newContainer = document.createElement('div');
//         newContainer.classList.add('item');
//         const img = document.createElement("img");
//         img.setAttribute('src', item.urls.thumb);
//         newContainer.appendChild(img);
//         return newContainer;
//     });
//
//     newElement.forEach(element => {
//         list.appendChild(element);
// });
// }
//
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     list.innerHTML = "";
//     page = 1;
//     searchPhotos(search.value);
// });
//
// window.addEventListener('scroll', () => {
//     const documentRect = document.documentElement.getBoundingClientRect();
//     console.log('top', documentRect.bottom);
//     if (documentRect.bottom < document.documentElement.clientHeight + 150) {
//         console.log('DONE');
//         page++;
//         searchPhotos(search.value)
//     }
// })





// var 2
// const images = document.querySelectorAll('img');
//
// const options = {
//     root : null,
//     rootManager: '0px',
//     threshold: 0.9
// };
// // const observer = new IntersectionObserver(handleImg, options);
// function handleImg(myImg, observer) {
//     myImg.forEach(myImgSingle => {
//         console.log(myImgSingle.intersectionRatio);
//         if (myImgSingle.intersectionRatio > 0) {
//             loadImage(myImgSingle.target);
//         }
//     })
// }
//
// function loadImage(image) {
//     image.src = image.getAttribute(data);
// }
//
// const observer = new IntersectionObserver(handleImg, options);
//
// images.forEach(img => {
//     observer.observe(img);
// });

// var 1

// const Unsplash = require('unsplash-js').default;
//
// const unsplash = new Unsplash({
//     accessKey : ""
// });
//
// const list = document.getElementById('list');
// const search = document.getElementById('search');
// const form = document.getElementById('form');
// const nextPage = document.getElementById('next-page');
// let page = 1;
//
// function searchPhotos(searchStr) {
//     unsplash.search.photos(searchStr, page, 9, { orientation: "squarish"})
//         .then(toJson => toJson.json())
//         .then(data => {
//             console.log('data', data);
//             drawItems(data);
//             nextPage.classList.toggle('hidden', !(data.total_pages > page));
//         });
// }
//
// function drawItems(data) {
//     const newElement = data.results.map((item) => {
//         const newContainer = document.createElement('div');
//         newContainer.classList.add('item');
//         const img = document.createElement("img");
//         img.setAttribute('src', item.urls.thumb);
//         newContainer.appendChild(img);
//         return newContainer;
//     });
//
//     newElement.forEach(element => {
//         list.appendChild(element);
// });
// }
//
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     list.innerHTML = "";
//     page = 1;
//     searchPhotos(search.value);
// });
//
// nextPage.addEventListener('click', () => {
//     page++;
//     searchPhotos(search.value);
// });