function popup() {
  const tampilPopup = document.getElementById('popup-add');
  tampilPopup.classList.remove('hidden');

  const iJudul = document.getElementById('judul').value;
  const iPenulis = document.getElementById('penulis').value;
  const iTahun = document.getElementById('tahun').value;

  tampilPopup.querySelector('span#infoJudul').innerText = iJudul;
  tampilPopup.querySelector('span#infoPenulis').innerText = iPenulis;
  tampilPopup.querySelector('span#infoTahun').innerText = iTahun;

  var tSubmit = document.querySelector('#add-submit');
  tSubmit.addEventListener('click', function () {
    tambahBuku();
    tampilPopup.classList.add('hidden');
    return location.reload();
  });
  var tKembali = document.querySelector('#add-batal');
  tKembali.addEventListener('click', function () {
    tampilPopup.classList.add('hidden');
    return location.reload();
  });
}

function popupDelete(a) {
  const tampilDelete = document.getElementById('popup-delete');
  tampilDelete.classList.remove('hidden');

  var deleteSubmit = document.querySelector('#delete-submit');
  deleteSubmit.addEventListener('click', function () {
    tampilDelete.classList.add('hidden');
    hapusBuku(a);
    return location.reload();
  });
  var deleteKembali = document.querySelector('#delete-batal');
  deleteKembali.addEventListener('click', function () {
    tampilDelete.classList.add('hidden');
    return location.reload();
  });
}
