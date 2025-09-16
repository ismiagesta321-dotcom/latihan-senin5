const prompt = require('prompt-sync')();

let dataSiswa=[{
    nama: 'ismi',
    alamat: 'garutkota',
    telepon: '081234567'
},
{
    nama: 'agesta',
    alamat: 'tarogong kidul',
    telepon: '0856789123' 
}];

let menu;

//1. Tampilkan Data
do{ console.log('Pilihan menu : 1= Tambah Data, 2= Tampilkan Data, 3= Hapus Data, 4= Cari Data');
    menu = prompt('Masukan nomor sesuai menu yang ingin dipilih : ');
    switch(menu){
        case '1':
    let nama = prompt('Masukan nama siswa : ');
    let alamat = prompt('Masukan alamat siswa : ');
    let telepon = prompt('Masukan telepon siswa : ')

    dataSiswa.push({nama,alamat,telepon});
    console.log (dataSiswa);
break;

//2. Tambah Status
case '2':
    console.log('\nData Siswa');
    dataSiswa.forEach((ds,index) =>{
    console.log(`${index + 1}.Nama : ${ds.nama}, alamat : ${ds.alamat}, : nomor telepon ${ds.telepon}`);
    });
    break;

//3. Hapus data
case '3':
        let hapusIndex = parseInt(prompt("Masukkan nomor data yang ingin dihapus: ") - 1);
    if (hapusIndex >= 0 && hapusIndex < dataSiswa.length){
        let hapusNama = dataSiswa[hapusIndex].nama;
        dataSiswa.splice(hapusIndex, 1);
        console.log(`Data ${hapusNama} berhasil dihapus!`);
    } else {
        console.log("Nomor data tidak valid!");
    }
    break;

//4. Cari data
case '4':
    let cariNama= prompt('Masukan nama siswa yang dicari : ');
    let hasilCari = dataSiswa.find(ds.nama.tolowerCase()=== cariNama.tolowerCase());
    if (hasilCari){
        console.log(`\nDitemukan: ${hasilCari.nama} beralamat di ${hasilCari.alamat} dan nomor telepon ${hasilCari.telepon}`);
    }else{
        console.log(`\nData siswa tidak ditemukan.`);
    }
    } //akhit tanda kurung dari switch

    //5. Keluar
    var ulang = prompt('Apakah masih ingin melakukan sesuatu? (y/n) ');
    } while (ulang.toLowerCase()==='y');
    console.log(`\n Terima kasih. Program telah selesai.`)

