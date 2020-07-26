import data from "./data.js"

let datePicker = document.getElementById('date-input');
let dateHeader = document.getElementById('date-header');
let dataList = document.getElementById('data-list');

let monthString = new Date().getMonth() < 10 ? "0" + (new Date().getMonth() + 1) : "" + (new Date().getMonth() + 1);
let dayString = new Date().getDate() + "";
let yearString = new Date().getFullYear() + "";

let dateString = `${yearString}-${monthString}-${dayString}`;

datePicker.setAttribute('max', dateString);

datePicker.addEventListener('change', () => {
  let dateArr = datePicker.value.split('-');
  dateArr.push(dateArr[0])
  dateArr.shift();
  dateHeader.innerText = dateArr.join('/');
  dataList.innerHTML = '';
  for (let i = 1; i < data.length; ++i) {
    createDataElement(data[i]);
  }
});

function createDataElement(datum) {
  let selectedDate = datePicker.value;
  selectedDate = selectedDate.split('-');
  selectedDate.shift();
  selectedDate = selectedDate.map(item => parseInt(item));
  selectedDate = selectedDate.join('/');
  let city = datum[0]
  let index = data[0].indexOf(selectedDate) + 1;
  let infected = datum[index];

  let ctx = document.createElement('canvas');
  let newDatum = [...datum];
  newDatum.shift();

  let infectedData = {
    labels: [...data[0]].reverse(),
    datasets: [
      {
        label: 'infected',
        data: newDatum.reverse(),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        spanGaps: false,
      }
    ]
  }

  let options = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      },
      responsive: true,
      maintainAspectRatio: false
    }
  };

  let myChart = new Chart(ctx, {
    type: 'line',
    data: infectedData,
    options: options
  });

  let container = document.createElement('div');
  container.style.fontSize = '20px'
  container.innerText = city + ': ' + infected;

  let chartContainer = document.createElement('div');
  chartContainer.style.marginTop = '20px';


  container.style.padding = '20px';
  container.style.textAlign = 'left'
  container.style.width = '90%';
  container.style.boxShadow = '0 0 5px rgb(176, 176, 177)';
  container.style.margin = 'auto';
  container.style.marginBottom = '10px';
  container.style.marginTop = '10px';

  chartContainer.appendChild(ctx);
  container.appendChild(chartContainer);

  dataList.appendChild(container);
}

let dateArr = datePicker.value.split('-');
dateArr.push(dateArr[0])
dateArr.shift();
dateHeader.innerText = dateArr.join('/');
dataList.innerHTML = '';
for (let i = 1; i < data.length; ++i) {
  createDataElement(data[i]);
}
