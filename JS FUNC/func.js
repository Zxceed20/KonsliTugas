// Fungsi konversi suhu
function convertTemperature(input, type) {
    if (type === 1) {
        return (input * 9/5) + 32;
    } else if (type === 2) {
        return (input - 32) * 5/9;
    } else if (type === 3) {
        return input + 273.15;
    } else if (type === 4) {
        return input - 273.15;
    } else if (type === 5) {
        return (input - 32) * 5/9 + 273.15;
    }
    return null;
}


let input = parseFloat(prompt("Masukkan susu (angka):"));
let suhu = parseInt(prompt("Pilih konversi (1. C to F, 2. F to C, 3. C to K, 4. K to C, 5. F to K):"), 10);

if (isNaN(input)) {
    alert("Input suhu harus berupa angka");
} else if (isNaN(suhu)) {
    alert("Pilihan konversi harus berupa angka");
} else {
    let result = convertTemperature(input, suhu);
    if (result !== null) {
        alert(`Hasil: ${result.toFixed(2)}`);
    } else {
        alert("Pilihan tidak valid");
    }
}
