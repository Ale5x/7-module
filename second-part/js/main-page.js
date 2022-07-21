import {scrollToTop} from "./functions.js";
import {getDao, getMapperDate} from './dao.js';
import {getCharStartParameter, getCharAnd, getBuilderUrlParameter} from './url.js';

const container = document.querySelector('.list-certificates');
const nextPage = document.querySelector('next-page');
let scrollPositionY;
let page = 1;
let form = document.getElementById('form');
let tagName = document.getElementById('tag-name');
let certificateName = document.getElementById('certificate-name');


function loadItems(certificates) {
    let countCertificates = 9;
    let i = 0;
    while (i < countCertificates) {
        const div = document.createElement('div')
        div.innerHTML = `
             <a href="description-certificate.html?id=${certificates.giftCertificateDtoList[i].giftCertificateDtoId}"><img src="../image/icon-certificate.png"></a>
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
async function getCertificateByTag(name) {
    let url = "http://localhost:8080/store/certificate/getCertificatesByTagName"
    let countItemInPage = 9;
    let sizeConstant = "size";
    let pageConstant = "page";
    let nameConstant = "name";
    let buildUrl = url + getCharStartParameter + getBuilderUrlParameter(pageConstant, page)
        + getCharAnd + getBuilderUrlParameter(sizeConstant, countItemInPage) + getCharAnd
        + getBuilderUrlParameter(nameConstant, name);

    console.log("url tag name", buildUrl )
    console.log("tag name", name )

    const data = await getDao(buildUrl);
    const content = getMapperDate(data)

    console.log("content ", content)

    loadItems(content)
}

async function getCertificateByName(name) {
    let url = "http://localhost:8080/store/certificate/getCertificatesByPartName"
    let countItemInPage = 9;
    let sizeConstant = "size";
    let pageConstant = "page";
    let nameConstant = "name";
    let buildUrl = url + getCharStartParameter + getBuilderUrlParameter(pageConstant, page)
        + getCharAnd + getBuilderUrlParameter(sizeConstant, countItemInPage) + getCharAnd
        + getBuilderUrlParameter(nameConstant, name);

    const data = await getDao(buildUrl);
    const content = getMapperDate(data)

    loadItems(content)
}

async function initCertificates() {
    let url = "http://localhost:8080/store/certificate/getAllCertificates"
    let countItemInPage = 9;
    let sizeConstant = "size";
    let pageConstant = "page";
    let buildUrl = url + getCharStartParameter + getBuilderUrlParameter(pageConstant, page)
        + getCharAnd + getBuilderUrlParameter(sizeConstant, countItemInPage);

    const data = await getDao(buildUrl);
    const content = getMapperDate(data)

    // nePage = page + 1;
    // getCountCertificates(url + getCharStartParameter + getBuilderUrlParameter(pageConstant, nePage)
    //     + getCharAnd + getBuilderUrlParameter(sizeConstant, countItemInPage))


    loadItems(content)
}

function init() {
    if (certificateName.value != null && certificateName.value !== "") {
        console.log('certificateName', certificateName.value);
        getCertificateByName(certificateName.value)
    } else if (tagName.value != null && tagName.value !== "") {
        console.log('tagName', tagName.value);
        getCertificateByTag(tagName.value)
    } else {
        initCertificates();
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
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

form.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = "";
    page = 1;
    init();
});

function scrollToTopF() {
    scrollPositionY = scrollToTop();
    console.log("PositionY", scrollPositionY)
}

function scrollToBackF() {
    window.scrollTo(0,scrollPositionY)
}

document.querySelector('#scrollToTop').addEventListener('click', scrollToTopF);
document.querySelector('#scrollBack').addEventListener('click', scrollToBackF);