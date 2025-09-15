const prompt = require ("prompt-sync")();

let mahasiswa = [
    { nama: "Budi", nilai: 85 } ,
    { nama: "Siti", nilai: 92 } ,
    { nama: "Andi", nilai: 58 } ,
    { nama: "Dewi", nilai: 60 } 
];

// 1. Data mahasiswa
console.log("\nDaftar Nilai Mahasiswa:");
mahasiswa.forEach(mhs => {
    
     if (mhs.nilai >=60) {
        console.log(`${mhs.nama}-nilai:${mhs.nilai}-(Lulus)`);
     } else {
        console.log(`${mhs.nama}-nilai:${mhs.nilai}-(Tidak lulus)`);
}
});

// 2. Array baru mahasiswa
 let daftarNama = mahasiswa.map(mhs => mhs.nama);
 console.log("\nDaftar Nilai Mahasiswa:", daftarNama);

 // 3. Urutkan berdasarkan nilai tertinggi
 let urutNilai = [...mahasiswa].sort((a,b) => b.nilai - a.nilai);
 console.log("\nUrutan Berdasarkan Nilai (Tertinggi -> Terendah):");
 urutNilai.forEach(mhs => console.log(`${mhs.nama} - ${mhs.nilai}`));

// 4. Cari mahasiswa berdasarkan nama
do{
 let cariNama = prompt("Masukan nama mahasiswa yang dicari:");
 let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

 if (hasilCari) {
    let statusMhs = hasilCari.nilai >=60 ? 'Lulus' : 'Tidak Lulus'
    console.log(`\nDitemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai} dinyatakan ${statusMhs}`);
} else {
    console.log("\nMahasiswa tidak ditemukan.");
}


// tanyakan apakah ingin mencari lagi
var ulang=prompt('Ulang? (y/n) : ');
} while (ulang.toLowerCase() === 'y');
    console.log("\nTerimakasih Program Selesai");
 
 
