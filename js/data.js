const penyimpanan = 'bookshelf';
const menyimpanData = '';

function simpanData() {
  const disimpan = JSON.stringify(bukuBaru);
  localStorage.setItem(penyimpanan, disimpan);
  document.dispatchEvent(new Event(menyimpanData));
}

function ambilDataPenyimpanan() {
  const ambilData = localStorage.getItem(penyimpanan);
  let data = JSON.parse(ambilData);

  if (data !== null) {
    for (const a of data) {
      bukuBaru.push(a);
    }
  }

  document.dispatchEvent(new Event(simpanBuku));
}
