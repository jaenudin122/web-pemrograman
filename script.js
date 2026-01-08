const materi = [
  {judul:"Pertemuan 1 - Pengenalan Web", desc:"Konsep dasar web dan internet.", link:"https://www.w3schools.com/whatis/"},
  {judul:"Pertemuan 2 - HTML Dasar", desc:"Struktur HTML dan elemen dasar.", link:"https://www.w3schools.com/html/"},
  {judul:"Pertemuan 3 - HTML Lanjutan", desc:"Form, tabel, multimedia.", link:"https://www.w3schools.com/html/html_forms.asp"},
  {judul:"Pertemuan 4 - CSS Dasar", desc:"Styling menggunakan CSS.", link:"https://www.w3schools.com/css/"},
  {judul:"Pertemuan 5 - Layout CSS", desc:"Flexbox dan Grid.", link:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},
  {judul:"Pertemuan 6 - Responsive Web", desc:"Media query dan desain responsif.", link:"https://www.w3schools.com/css/css_rwd_intro.asp"},
  {judul:"Pertemuan 7 - JavaScript Dasar", desc:"Variabel dan tipe data.", link:"https://www.w3schools.com/js/"},
  {judul:"Pertemuan 8 - Percabangan", desc:"If else dan switch.", link:"https://www.w3schools.com/js/js_if_else.asp"},
  {judul:"Pertemuan 9 - Function", desc:"Fungsi JavaScript.", link:"https://www.w3schools.com/js/js_functions.asp"},
  {judul:"Pertemuan 10 - DOM", desc:"Manipulasi elemen HTML.", link:"https://www.w3schools.com/js/js_htmldom.asp"},
  {judul:"Pertemuan 11 - Event", desc:"Event handling.", link:"https://www.w3schools.com/js/js_events.asp"},
  {judul:"Pertemuan 12 - Validasi Form", desc:"Validasi input form.", link:"https://www.w3schools.com/js/js_validation.asp"},
  {judul:"Pertemuan 13 - Mini Project", desc:"Penerapan HTML, CSS, JS.", link:"https://www.freecodecamp.org/learn/"},
  {judul:"Pertemuan 14 - Review", desc:"Review dan evaluasi.", link:"https://developer.mozilla.org/en-US/docs/Learn"}
];

const list = document.getElementById("materiList");

function tampilMateri(data){
  list.innerHTML="";
  data.forEach((m,i)=>{
    list.innerHTML+=`
      <div class="card">
        <h3>${m.judul}</h3>
        <button onclick="showDetail(${i})">Detail</button>
      </div>
    `;
  });
}

tampilMateri(materi);

function showDetail(i){
  document.getElementById("modalTitle").innerText = materi[i].judul;
  document.getElementById("modalDesc").innerText = materi[i].desc;
  document.getElementById("modalLink").href = materi[i].link;
  document.getElementById("modal").style.display="flex";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function searchMateri(){
  const key = document.getElementById("search").value.toLowerCase();
  tampilMateri(materi.filter(m => m.judul.toLowerCase().includes(key)));
}
