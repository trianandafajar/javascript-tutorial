// Array shift
// Digunakan untuk menghapus elemen pertama dari sebuah array
// array.shift() akan mengembalikan nilai yang dihapus
// Jika array kosong, maka akan mengembalikan undefined

let numbers = [10, 20, 30];

// Menghapus elemen pertama
let number = numbers.shift();
console.log("Elemen yang dihapus:", number); // 10
console.log("Sisa array:", numbers); // [20, 30]

// Menghapus elemen satu per satu hingga habis
numbers = [10, 20, 30];
while ((number = numbers.shift()) !== undefined) {
  console.log("Menghapus:", number);
}
// Output: 10, 20, 30

// Menerapkan shift pada objek seperti array
let greetings = {
  0: "Hai",
  1: "Hello",
  2: "Holiday",
  length: 3,
  removeFirst() {
    // Memanggil shift menggunakan call pada objek
    return [].shift.call(this);
  },
};

const greeting = greetings.removeFirst();
console.log("Salam yang dihapus:", greeting); // Hai
console.log("Sisa salam dalam objek:", greetings);
/*
Output:
{
  0: 'Hello',
  1: 'Holiday',
  2: 'Holiday',
  length: 2
}
Catatan: properti bergeser ke kiri, dan elemen terakhir akan terduplikasi jika tidak dihapus secara manual.
*/
