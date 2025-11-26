// Navigasi Home -> Form
document.getElementById("btnMulai").addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("formSection").style.display = "block";
});

// Navigasi Form -> Home
document.getElementById("btnKembaliHome").addEventListener("click", () => {
  if(confirm("Anda yakin ingin kembali ke Home?")){
    document.getElementById("formSection").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
});

// Popup Data Diri
document.getElementById("btnDataDiri").addEventListener("click", () => {
  document.getElementById("popupDataDiri").style.display = "flex";
});
document.querySelectorAll(".closePopup").forEach(btn=>{
  btn.addEventListener("click", () => {
    if(confirm("Anda yakin keluar dari Data Diri?")){
      document.getElementById("popupDataDiri").style.display = "none";
    }
  });
});

// Subform penelitian
const jenisSelect = document.getElementById("jenis");
const subForms = document.querySelectorAll(".subForm");

jenisSelect.addEventListener("change", function(){
  subForms.forEach(f => f.style.display = "none");
  if(this.value === "paper") document.getElementById("formPaper").style.display = "block";
  if(this.value === "buku") document.getElementById("formBuku").style.display = "block";
  if(this.value === "pengabdian") document.getElementById("formPengabdian").style.display = "block";
});

// Validasi Form + Tampilkan Hasil
document.getElementById("formUtama").addEventListener("submit", function(e){
  e.preventDefault();

  let nim = document.getElementById("nim").value.trim();
  let nama = document.getElementById("nama").value.trim();
  let semester = parseInt(document.getElementById("semester").value);
  let jenis = document.getElementById("jenis").value;

  if(!nim || !nama || !semester || !jenis){
    alert("Semua input wajib diisi!");
    return;
  }
  if(isNaN(nim)){
    alert("NIM harus angka!");
    return;
  }
  if(semester < 3){
    alert("Mahasiswa Belum bisa mengajukan pustaka digital! Harus semester 2 ke atas!");
    return;
  }

  // Hitung Tahun Masuk (contoh sederhana)
  let tahunMasuk = new Date().getFullYear() - Math.floor(semester/2);

  // Buat output hasil
  let outputHTML = `
    <p><b>NIM :</b> ${nim}</p>
    <p><b>Nama :</b> ${nama}</p>
    <p><b>Tahun Masuk :</b> ${tahunMasuk}</p>
  `;

  if(jenis === "paper"){
    outputHTML += `
      <p><b>Nama Penulis :</b> ${document.getElementById("penulisPaper").value}</p>
      <p><b>Judul Paper :</b> ${document.getElementById("judulPaper").value}</p>
      <p><b>Tahun Paper :</b> ${document.getElementById("tahunPaper").value}</p>
      <p><b>Vol Paper :</b> ${document.getElementById("volumePaper").value}</p>
      <p><b>DOI :</b> ${document.getElementById("doiPaper").value}</p>
    `;
    alert("Pengisian Paper Berhasil!");
  }
  else if(jenis === "buku"){
    outputHTML += `
      <p><b>Nama Penulis Buku :</b> ${document.getElementById("penulisBuku").value}</p>
      <p><b>Judul Buku :</b> ${document.getElementById("judulBuku").value}</p>
      <p><b>Tahun Buku :</b> ${document.getElementById("tahunBuku").value}</p>
      <p><b>Volume Buku :</b> ${document.getElementById("volumeBuku").value}</p>
      <p><b>ISBN :</b> ${document.getElementById("isbnBuku").value}</p>
    `;
    alert("Pengisian Buku Berhasil!");
  }
  else if(jenis === "pengabdian"){
    outputHTML += `
      <p><b>Judul Pengabdian :</b> ${document.getElementById("judulPengabdian").value}</p>
      <p><b>Lokasi :</b> ${document.getElementById("lokasiPengabdian").value}</p>
      <p><b>Tahun :</b> ${document.getElementById("tahunPengabdian").value}</p>
      <p><b>Partner :</b> ${document.getElementById("partnerPengabdian").value}</p>
    `;
    alert("Pengisian Jurnal Pengabdian Berhasil!");
  }

  // Masukkan ke output
  document.getElementById("hasilOutput").innerHTML = outputHTML;

  // Navigasi ke hasil
  document.getElementById("formSection").style.display = "none";
  document.getElementById("hasilSection").style.display = "block";
});

// Tombol kembali dari hasil -> form
document.getElementById("btnKembaliForm").addEventListener("click", function(){
  document.getElementById("hasilSection").style.display = "none";
  document.getElementById("formSection").style.display = "block";
});

