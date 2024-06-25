const apiUrl = 'https://api.thecatapi.com/v1/images/search';

const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

btnCat.addEventListener('click', () =>{
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const catImgUrl = data[0].url;

        catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
    })
    .catch(error => console.log(error))
})