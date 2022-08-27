console.log('Hello World!');
inputNama();

function inputNama() {
    const input = prompt('Masukkan nama Anda : ');
    alert(`Hello ${input}`);
    let conf = confirm('Apakah mau lagi?');
    again(conf);
}

function again(confirm) {
    if (confirm == true) {
        inputNama();
    }
}