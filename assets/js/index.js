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

const createChart = () => {
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}