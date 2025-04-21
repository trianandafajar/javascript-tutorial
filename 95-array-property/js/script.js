// Contoh Array: Dense (penuh) dan Sparse (berlubang)

// DENSE ARRAY: Semua indeks terisi
let colors = ["red", "green", "blue"];
console.log("Jumlah elemen colors:", colors.length); // 3

colors.push("yellow");
console.log("Setelah push:", colors.length); // 4

colors = [];
console.log("Setelah dikosongkan:", colors.length); // 0

console.log("------------------------------");

// SPARSE ARRAY: Ada lubang di dalam array
let numbers = [10, , 29, 30]; // Indeks 1 kosong
console.log("Array numbers:", numbers);
console.log("Panjang numbers:", numbers.length); // 4

numbers[10] = 100; // Menambahkan elemen di indeks ke-10
console.log("Setelah menambahkan elemen di index 10:");
console.log("Panjang numbers:", numbers.length); // 11
console.log("Isi numbers:", numbers);

console.log("------------------------------");

// MENGUBAH PANJANG ARRAY SECARA MANUAL
const fruits = ["Apple", "Orange", "Strawberry"];
console.log("Sebelum diset length = 0:", fruits);
fruits.length = 0; // Menghapus semua elemen
console.log("Setelah diset length = 0:", fruits); // []

console.log("------------------------------");

const fruits2 = ["Apple", "Orange", "Strawberry"];
console.log("fruits2 awal:", fruits2);

fruits2.length = 2; // Potong elemen terakhir
console.log("Setelah diset length = 2:", fruits2); // ['Apple', 'Orange']

fruits2.length = 5; // Tambah panjang, tapi hanya menambah 'hole'
console.log("Setelah diset length = 5:", fruits2); // ['Apple', 'Orange', <3 empty items>]

console.log("Panjang akhir fruits2:", fruits2.length); // 5
