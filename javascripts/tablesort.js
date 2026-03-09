document$.subscribe(function () {
  var tables = document.querySelectorAll("article table")
  tables.forEach(function (table) {
    var firstTh = table.querySelector("th")
    if (firstTh && firstTh.textContent.trim() !== "") {
      new Tablesort(table)
    }
  })
})
