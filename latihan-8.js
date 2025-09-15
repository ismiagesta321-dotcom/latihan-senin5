const prompt = require ("prompt-sync")();

let produk = [
    { nama: "Laptop", harga: 12000000 } ,
    { nama: "HP", harga: 3500000 } ,
    { nama: "Tablet", harga: 5000000 } ,
    { nama: "Smartwatch", harga: 1500000 } 
];

// 1. Data mahasiswa
console.log("\nDaftar Nilai Produk:");
produk.forEach(mhs => {
    
     if (mhs.nilai >=5000000 ) {
        console.log(`${mhs.nama}-harga:${mhs.harga}-(Mahal)`);
     } else {
        console.log(`${mhs.nama}-harga:${mhs.harga}-(Murah)`);
}
});

// 2. Array baru produk
 let daftarNama = produk.map(mhs => mhs.nama);
 console.log("\nDaftar Nilai Produk:", daftarNama);

 // 3. Urutkan berdasarkan nilai tertinggi
 let urutHarga = [...produk].sort((a,b) => b.harga - a.harga);
 console.log("\nUrutan Berdasarkan Harga (Tertinggi -> Murah):");
 urutHarga.forEach(mhs => console.log(`${mhs.nama} - ${mhs.harga}`));

// 4. Cari produk berdasarkan nama
do{
 let cariNama = prompt("Masukan nama produk yang dicari:");
 let hasilCari = produk.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

 if (hasilCari) {
    let statusMhs = hasilCari.harga >=5000000 ? 'Mahal' : 'Murah';
    console.log(`\nDitemukan: ${hasilCari.nama} dengan harga ${hasilCari.harga} termasuk ${statusMhs}`);
} else {
    console.log("\nProduk tidak ditemukan.");
}

// tanyakan apakah ingin mencari lagi
var ulang=prompt('Ulang? (y/n) : ');
} while (ulang.toLowerCase() === 'y');
    console.log("\nTerimakasih Program Selesai");
 
 
