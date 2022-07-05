const searchBuku = new Event('searchBuku');

function cariBuku() {
  var iSearch = document.getElementById('search').value.toLowerCase();
  var divItem = document.getElementsByClassName('item');

  for (var i = 0; i < divItem.length; i++) {
    var iJudul = divItem[i].getElementsByClassName('iJudul');
    if (iJudul[0].innerHTML.toLowerCase().indexOf(iSearch) > -1) {
      divItem[i].style.display = 'block';
    } else {
      divItem[i].style.display = 'none';
    }
  }
}
