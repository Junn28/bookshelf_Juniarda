let bukuBaru = [];
const simpanBuku = '';

document.addEventListener('DOMContentLoaded', function () {
  var submit = document.getElementById('myForm');
  submit.addEventListener('submit', function (e) {
    e.preventDefault();

    popup();
  });
  ambilDataPenyimpanan();
});

function tambahBuku() {
  const judul = document.getElementById('judul').value;
  const penulis = document.getElementById('penulis').value;
  const tahun = document.getElementById('tahun').value;

  const generatedID = generateId();
  const buku = generateBuku(generatedID, judul, penulis, tahun, false);
  bukuBaru.push(buku);

  document.dispatchEvent(new Event(simpanBuku));
  simpanData();
}

function generateId() {
  return +new Date();
}

function generateBuku(id, judul, penulis, tahun, isCompleted) {
  return {
    id,
    judul,
    penulis,
    tahun,
    isCompleted,
  };
}

function buatBuku(b) {
  const judulBuku = document.createElement('h3');
  judulBuku.classList.add('iJudul');
  judulBuku.innerText = b.judul;

  const penulisBuku = document.createElement('p');
  penulisBuku.innerText = b.penulis;

  const tahunBuku = document.createElement('p');
  tahunBuku.innerText = b.tahun;

  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(judulBuku, penulisBuku, tahunBuku);

  const container = document.createElement('div');
  container.classList.add('item');
  container.setAttribute('id', `buku-${b.id}`);

  container.append(textContainer);

  if (b.isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');

    undoButton.addEventListener('click', function () {
      kembalikanBuku(b.id);
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');

    trashButton.addEventListener('click', function () {
      popupDelete(b.id);
    });

    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');

    checkButton.addEventListener('click', function () {
      bukuDibaca(b.id);
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');

    trashButton.addEventListener('click', function () {
      popupDelete(b.id);
    });

    container.append(checkButton, trashButton);
  }

  return container;
}

document.addEventListener(simpanBuku, function () {
  const noRead = document.getElementById('noRead');
  noRead.innerHTML = '';

  const read = document.getElementById('read');
  read.innerHTML = '';

  for (const listBuku of bukuBaru) {
    const elementBuku = buatBuku(listBuku);
    if (!listBuku.isCompleted) {
      noRead.append(elementBuku);
    } else {
      read.append(elementBuku);
    }
  }
});

function bukuDibaca(bukuId) {
  const bukuTarget = findBuku(bukuId);

  if (bukuTarget == null) return;

  bukuTarget.isCompleted = true;
  document.dispatchEvent(new Event(simpanBuku));

  simpanData();
}

function hapusBuku(bukuId) {
  const bukuTarget = findBukuId(bukuId);

  if (bukuTarget === -1) return;

  bukuBaru.splice(bukuTarget, 1);
  document.dispatchEvent(new Event(simpanBuku));

  simpanData();
}

function kembalikanBuku(bukuId) {
  const bukuTarget = findBuku(bukuId);

  if (bukuTarget == null) return;

  bukuTarget.isCompleted = false;
  document.dispatchEvent(new Event(simpanBuku));

  simpanData();
}

function findBuku(bukuId) {
  for (const listBuku of bukuBaru) {
    if (listBuku.id === bukuId) {
      return listBuku;
    }
  }

  return null;
}

function findBukuId(bukuId) {
  for (const i in bukuBaru) {
    if (bukuBaru[i].id === bukuId) {
      return i;
    }
  }

  return -1;
}
