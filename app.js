let elements = {
  score: document.querySelector("#score"),
  reaction: document.querySelector("#reaction"),
  memory: document.querySelector("#memory"),
  verbal: document.querySelector("#verbal"),
  visual: document.querySelector("#visual"),
};

async function getData() {
  return fetch("results-summary-component-main/data.json")
    .then((res) => res.json())
    .then((data) => data);
}

async function showData() {
  let data = await getData();
  let result = [];
  data.forEach((element) => {
    elements[element.category.toLowerCase()].textContent = element.score;
    result.push(element.score);
  });
  elements.score.textContent = totalOfResult(result);
}

showData();

function totalOfResult(result) {
  let sum = result.reduce((total, current) => {
    return total + current;
  });
  return Math.round(sum / result.length);
}

// test comment
