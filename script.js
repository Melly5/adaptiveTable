const article = [
  {
    group: "Group",
    company: "Company",
    amount: "Member's amount",
    album: "Recent album",
    song: "Top Song",
  },
];

const myData = [
  {
    group: "TWICE",
    company: "JYP",
    amount: "9",
    album: "Between 1&2",
    song: "Fancy",
  },
  {
    group: "BLACKPINK",
    company: "YG",
    amount: "4",
    album: "BornPink",
    song: "DDDD",
  },
  {
    group: "XG",
    company: "XGALX",
    amount: "7",
    album: "-",
    song: "Tippy Toes",
  },
  {
    group: "Red Velvet",
    company: "SM",
    amount: "5",
    album: "Fell My Rhythm",
    song: "Peek-a-boo",
  },
];

const tableArticle = document.getElementById("article");
const tableRows = document.getElementById("myData");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const searchForm = document.querySelector("#search-form");

const buildArticle = (cell) => {
  tableArticle.innerHTML += `<div class="column first">
                                <div class="cell article">${cell.group}</div>
                                <div class="cell article">${cell.company}</div>
                                <div class="cell article">${cell.amount}</div>
                                <div class="cell article">${cell.album}</div>
                                <div class="cell article">${cell.song}</div>
                              </div>`;
};

const buildTable = (cell) => {
  tableRows.innerHTML += `<div class="column">     
                            <div class="cell" id="first" data-label="Group">${cell.group}</div>
                            <div class="cell" data-label="Company">${cell.company}</div>
                            <div class="cell" data-label="Amount">${cell.amount}</div>
                            <div class="cell" data-label="Album">${cell.album}</div>
                            <div class="cell" data-label="Top Song">${cell.song}</div>
                          </div>`;
};

const removeColor = (item) => {
  item.forEach((e) => {
    e.classList.remove("matched");
  });
};

article.forEach(buildArticle);
myData.forEach(buildTable);

const formHandler = (event) => {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  const firstColumn = document.querySelectorAll("#first");
  let inputText = searchInput.value.toString().toLowerCase();
  let count = 0;

  removeColor(firstColumn);
  searchInput.value = "";

  for (i = 0; i < firstColumn.length; i++) {
    count++;
    if (
      firstColumn[i].textContent.toString().toLowerCase().includes(inputText)
    ) {
      firstColumn[i].classList.add("matched");
      count++;
    }
  }

  if (count == 0) {
    info.innerHTML = "Nothing is found";
  } else {
    info.innerHTML = "Number of matches found: " + count.toString();
  }
  document.getElementById("return").style.display = "block";
};

searchForm.addEventListener("submit", formHandler);

function remove() {
  document.getElementById("info").innerHTML = "";
  document.getElementById("return").style.display = "none";
  const firstColumn = document.querySelectorAll("#first");
  removeColor(firstColumn);
}
