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
  var data = myData;
  var filteredData = [];

  for (var i = 0; i < data.length; i++) {
    value = value.toString().toLowerCase();
    var group = data[i].group.toString().toLowerCase();

    if (group.includes(value)) {
      filteredData.push(data[i]);
    }
  }
  return buildTable(filteredData);
}
