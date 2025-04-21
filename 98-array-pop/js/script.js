/* Array pop
 * array pop digunakan untuk menghapus elemen terakhir dari sebuah array
 * perintah dasarnya: Array.prototype.pop()
 */

// CONTOH 1: Array biasa
let numbers = [10, 20, 30];
let last = numbers.pop();         // Menghapus elemen terakhir (30)
console.log("Elemen terakhir yang di-pop:", last); // 30
console.log("Sisa array:", numbers);               // [10, 20]

// CONTOH 2: Array kosong
numbers = [];
last = numbers.pop();            // Tidak ada elemen, hasilnya undefined
console.log("Hasil pop dari array kosong:", last); // undefined
console.log("Array setelah pop:", numbers);        // []

// CONTOH 3: Objek menyerupai array
let greetings = {
  0: "Hai",
  1: "Hello",
  2: "Holiday",
  length: 3,
  removeLast() {
    // Menggunakan Array.prototype.pop.call untuk "meniru" metode pop
    return [].pop.call(this);
  },
};

let grett = greetings.removeLast();  // Menghapus indeks 2 ("Holiday")
console.log("Hasil removeLast:", grett);  // Holiday
console.log("Objek greetings setelah removeLast():", greetings);
// Output:
// { 0: "Hai", 1: "Hello", length: 2, removeLast: [Function: removeLast] }
