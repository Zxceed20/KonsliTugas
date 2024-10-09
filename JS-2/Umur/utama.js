let umur = prompt("Masukkan Umur anda : ");

if (isNaN(umur)) {
    console.log("Input harus berupa angka")
    document.writeln("Input harus berupa angka")
} else {

};


if (umur === "") {
    console.log("Umur tidak valid")
    document.writeln("Umur ini tidak valid")
} else if (umur <= 1 ) {
    console.log("Umur ini termasuk golongan bayi")
    document.writeln("Umur ini termasuk golongan bayi")
} else if (umur <= 5) {
    console.log("Umur ini termasuk golongan Balita")
    document.writeln("Umur ini termasuk golongan balita")
} else if (umur <= 12) {
    console.log("Umur ini termasuk golongan anak-anak")
    document.writeln("Umur ini termasuk golongan anak-anak")
} else if (umur <= 18) {
    console.log("Umur ini termasuk golongan remaja")
    document.writeln("Umur ini termasuk golongan remaja")
} else if (umur <= 59) {
    console.log("Umur ini termasuk golongan dewasa")
    document.writeln("Umur ini termasuk golongan dewasa")
} else if (umur >= 59) {
    console.log("Umur ini termasuk golongan lansia")
    document.writeln("Umur ini termasuk golongan lansia")
} else {
    
};