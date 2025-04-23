document.getElementById('show-button').addEventListener('click', function () {
  // Ambil data dari form
  let nama = document.getElementById('nama').value;
  let produk = document.getElementById('produk').value;
  let durasi = document.getElementById('durasi').value;
  let harga = document.getElementById('harga').value;
  let nomorPremium = document.getElementById('nomor-premium').value;
  let linkGrup = document.getElementById('link-grup').value;

  // Tampilkan hasil di bawah form
  let resultContainer = document.getElementById('result-container');
  let result = document.getElementById('result');
  
  result.innerHTML = `
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Produk:</strong> ${produk}</p>
    <p><strong>Durasi:</strong> ${durasi}</p>
    <p><strong>Harga:</strong> ${harga}</p>
    <p><strong>Nomor Premium:</strong> ${nomorPremium}</p>
    <p><strong>Link Grup:</strong> <a href="${linkGrup}" target="_blank">${linkGrup}</a></p>
  `;

  resultContainer.style.display = 'block'; // Menampilkan hasil

  // Tampilkan tombol "Simpan sebagai Gambar"
  document.getElementById('save-button').style.display = 'block';
});

document.getElementById('save-button').addEventListener('click', function () {
  let resultContainer = document.getElementById('result-container');
  
  html2canvas(resultContainer).then(function (canvas) {
    let imgData = canvas.toDataURL('image/png');
    let link = document.createElement('a');
    link.href = imgData;
    link.download = 'struktur_pembayaran.png';
    link.click();
  });
});
