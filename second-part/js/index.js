const images = document.querySelectorAll('img');

const options = {
    root : null,
    rootManager: '0px',
    threshold: 0.9
};
// const observer = new IntersectionObserver(handleImg, options);
function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    image.src = image.getAttribute(data);
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
});



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