function persegi(sisi) {
    return Math.pow(sisi, 2);
}

function segitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function persegipanjang(panjang, lebar) {
    return panjang * lebar;
}

function lingkaran(jarijari) {
    return Math.PI * jarijari * jarijari;
}

function trapesium(atas, bawah, tinggi) {
    return 0.5 * (atas + bawah) * tinggi;
}

console.log("luas persegi: " + persegi(5));
console.log("luas segitiga: " + segitiga(5, 10));
console.log("luas persegipanjang: " + persegipanjang(5, 10));
console.log("luas lingkaran: " + lingkaran(21));
console.log("luas trapesium: " + trapesium(5, 10, 10));
