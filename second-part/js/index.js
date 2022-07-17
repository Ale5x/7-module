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
                // "name": "that reinforcements were on their way, both from Tarentum and from the Samnites, they felt that",
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

const list = document.getElementById('list');
const search = document.getElementById('search');
const form = document.getElementById('form');
const nextPage = document.getElementById('next-page');
let page = 1;

function showCertificates(searchStr) {
    console.log("showCertificates");
    console.log("search", searchStr);
    let data = CERTIFICATES._embedded.giftCertificateDtoList;
    console.log("data size -> ", data.length)
    build(data);
    console.log('hidden...')
    nextPage.classList.toggle('hidden', !(data.length > 9))
}


// function build(data) {
//     console.log("start builder...")
//     document.querySelector('.list-certificates').innerHTML = `<table class="certificates"></table>`;
//
//     let step = 3;
//     for (let i = 0; data.length; i = i + step) {
//
//         let divElement = document.createElement('div');
//         divElement.innerHTML = `
//          <div>
//              <table>
//                 <tr>
//                     <td>
//                         <table class="size-table-for-certificate">
//                             <tr>
//                                 <td colspan="2">
//                                     <a href="description-certificate.html"><img src="../image/icon-certificate.png" class="size-icon-large"></a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <h3>${data[i].name}</h3>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <h2>Price: ${data[i].price}</h2>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input type="submit" value="Add to basket" class="button-add-to-basket">
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//
//
// <!--                    2 section-->
//
//                     <td>
//                         <table class="size-table-for-certificate">
//                             <tr>
//                                 <td colspan="2">
//                                     <a href="description-certificate.html"><img src="../image/icon-certificate.png" class="size-icon-large"></a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <h3>${data[i + 1].name}</h3>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <h2>Price: ${data[i + 1].price}</h2>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input type="submit" value="Add to basket" class="button-add-to-basket">
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//
// <!--                    3 section-->
//
//                     <td>
//                         <table class="size-table-for-certificate">
//                             <tr>
//                                 <td colspan="2">
//                                     <a href="description-certificate.html"><img src="../image/icon-certificate.png" class="size-icon-large"></a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <h3>${data[i + 1].name}</h3>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td colspan="2">
//                                     <h2>Price: ${data[i + 1].price}</h2>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input type="submit" value="Add to basket" class="button-add-to-basket">
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//              </table>
//         </div`;
//
//         document.querySelector('.certificates').appendChild(divElement)
//     }
// }

function build(data) {
    console.log("start builder...")
    // const newElement = data.results.map((item) => {
    //     const newContainer = document.createElement('div');
    //     newContainer.classList.add('item');
    //     const img = document.createElement('img');
    //     img.setAttribute('src', "../image/icon-certificate.png");
    //     newContainer.appendChild(img);
    //     return newContainer;
    // });
    //
    // newElement.forEach(element => {
    //     list.appendChild(element);
    // });

    const newContainer = document.createElement('div');
        newContainer.classList.add('item');
        const img = document.createElement('img');
        img.setAttribute('src', "../image/icon-certificate.png");
        newContainer.appendChild(img);
}


form.addEventListener('submit', (event) => {
    console.log("addEventListener")
    event.preventDefault();
    list.innerHTML = "";
    page = 1;
    showCertificates(search.value);
});

window.addEventListener("scroll", () => {
    const documentRect = document.documentElement.getBoundingClientRect();
    if (documentRect.bottom < document.documentElement.clientHeight + 150) {
        console.log('Scroll...')
        page++;
        showCertificates(search.value)
    }
})