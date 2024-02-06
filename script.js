alert("Selamat Datang the Ticket App \n Yang bisa masuk hanya umur 13 tahun keatas");

const umur = prompt("Masukkan umur anda");

if (umur >= 13) {
    const studio = prompt("Masukkan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");
    
    if (studio == "A" || studio == "B" || studio == "C") {
        const Film = prompt("Pilih Film \n 1 : Kereta Berdarah \n 2 : Kupu-Kupu Kertas \n 3 : Siksa Kubur");

        let namaFilm;
        if (Film == "1") {
            namaFilm = "Kereta Berdarah";
        } else if (Film == "2") {
            namaFilm = "Kupu-Kupu Kertas";
        } else if (Film == 3) {
            namaFilm = "Siksa Kubur";
        } //mutable

        if (Film == "1" || Film == "2" || Film == "3") {
            const nama = prompt("Masukkan nama anda");

            alert(`Berikut Tiket Anda! \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`);
        } else {
         alert("Maaf film yang anda pilih tidak tersedia");
        }
     } else {
        alert("Anda harus memilih studio");
     }
} else {
    alert("Maaf tidak bisa Masuk, umur anda dibawah 13 tahun");
}