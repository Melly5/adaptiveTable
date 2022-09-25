var article = [
  {
    group: "Group",
    company: "Company",
    amount: "Member's amount",
    album: "Recent album",
    song: "Top Song",
  },
];

buildArticle(article);

var myData = [
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

function buildArticle(data) {
  var table = document.getElementById("article");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `<div class="column first">
      <div class="cell article">${data[i].group}</div>
      <div class="cell article">${data[i].company}</div>
      <div class="cell article">${data[i].amount}</div>
      <div class="cell article">${data[i].album}</div>
      <div class="cell article">${data[i].song}</div>
    </div>`;
    table.innerHTML += row;
  }
}

buildTable(myData);

function buildTable(data) {
  var table = document.getElementById("myData");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `<div class="column">     
                <div class="cell first" data-label="Group">${data[i].group}</div>
                <div class="cell" data-label="Company">${data[i].company}</div>
                <div class="cell" data-label="Amount">${data[i].amount}</div>
                <div class="cell" data-label="Album">${data[i].album}</div>
                <div class="cell" data-label="Top Song">${data[i].song}</div>
              </div>`;
    table.innerHTML += row;
  }
}

function tableSearch() {
  var value = document.getElementById("search-input").value;
  var info = document.getElementById("info");
  info.innerHTML = "";
  var data = myData;
  var filteredData = [];
  var count = 0;

  for (var i = 0; i < data.length; i++) {
    value = value.toString().toLowerCase();
    var group = data[i].group.toString().toLowerCase();

    if (group.includes(value)) {
      count++;
      filteredData.push(data[i]);
    }
  }

  if (count == 0) {
    info.innerHTML += "Nothing is found";
    var button = document.getElementById("return");
    button.style.display = "block";
    var table = document.getElementById("container");
    table.innerHTML = "";
    buildTable(table);
  } else {
    info.innerHTML += "Number of matches found: " + count.toString();
    var button = document.getElementById("return");
    button.style.display = "block";
    return buildTable(filteredData);
  }
}


function remove (){
    var info = document.getElementById("info");
    info.innerHTML = "";
    var button = document.getElementById("return");
    button.style.display = "none";

    var table = document.getElementById("container");
    table.innerHTML += `<div class="table" id = "table">
    <div id="article"></div>
    <div id="myData"></div>
  </div>`;

    buildArticle(article);
    buildTable(myData);
  }