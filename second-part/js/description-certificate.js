import {getParameter, getBuilderUrlParameter, getCharStartParameter} from "./url.js";
import {getDao} from './dao.js';

let id = 1;
const idConstant = "id";
const container = document.querySelector('.certificate-description-form');

init()

function init() {
    console.log("Starting...")
    let url = new URLSearchParams(window.location.search)
    console.log("url...", url)
    console.log("url get id...", url.get('id'))
    id = getParameter(idConstant, window.location.search);
    console.log("id", getParameter(idConstant, url))
    getCertificate(buildUrl(id))
}

async function getCertificate(urlLine) {
    const data = await getDao(urlLine);
    loadItem(data);
}

function buildUrl(id) {
    let url = "http://localhost:8080/store/certificate/get"
    return  url + getCharStartParameter + getBuilderUrlParameter(idConstant, id);
}

function loadItem(certificate) {
    if (certificate !== null){
        const div = document.createElement('div')
        div.innerHTML = `
             <img src="../image/icon-certificate.png" class="size-icon-large">
             <br>
             <b>ID:</b> ${certificate.giftCertificateDtoId}
             <br>
             <b>Name:</b> ${certificate.name}
             <br>
             <b>Create date:</b> ${certificate.createDate}
             <br>
             <b>Duration:</b> ${certificate.duration} days
             <br>
             <b>Tags:</b> ${certificate.tags}
             <br>
             <p><b>Description:</b> ${certificate.description}</p>
             
             <input type="submit" value="Add to basket" class="button-add-to-basket">
          `
        container.appendChild(div);
    }
}


/**
 {
    "giftCertificateDtoId": 115,
    "name": "Women's massage studio WomanSPA Studio & Khinkalnya Titan",
    "description": "[6] and as though the inhabitants had been made prisoners by their own defenders, they were subjected",
    "price": 6.00,
    "duration": 206,
    "createDate": "2006-11-08T07:27",
    "lastUpdateDate": "2006-11-08T07:27",
    "tags": "#Tag 4, #Tag 5, #Tag 2, #Tag 3"
}
 */