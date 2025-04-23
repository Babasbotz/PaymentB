function formatRupiah(number) {
  return 'Rp ' + parseInt(number).toLocaleString('id-ID');
}

function previewLogo() {
  const logoInput = document.getElementById("logo");
  const logoPreview = document.getElementById("logoPreview");
  const file = logoInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      logoPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function generateStruk() {
  const harga = parseInt(document.getElementById('harga').value);

  document.getElementById('outputNama').innerText = document.getElementById('nama').value;
  document.getElementById('outputProduk').innerText = document.getElementById('produk').value;
  document.getElementById('outputDurasi').innerText = document.getElementById('durasi').value;
  document.getElementById('outputPembayaran').innerText = document.getElementById('pembayaran').value;
  document.getElementById('outputHarga').innerText = formatRupiah(harga);
  document.getElementById('outputNomorPremium').innerText = document.getElementById('nomor').value;
  document.getElementById('outputLinkGrup').innerText = document.getElementById('link').value;

  document.getElementById('struk').style.display = 'block';
}

function downloadStruk() {
  const struk = document.getElementById("struk");
  html2canvas(struk).then(canvas => {
    const link = document.createElement('a');
    link.download = 'struk.jpg';
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });
}
