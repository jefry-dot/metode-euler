document.getElementById('calculate').addEventListener('click', function () {
    // Ambil input dari pengguna
    const funcInput = document.getElementById('function').value;
    const y0 = parseFloat(document.getElementById('initialValue').value);
    const h = parseFloat(document.getElementById('stepSize').value);
    const iterations = parseInt(document.getElementById('iterations').value);

    // Validasi input
    if (isNaN(y0) || isNaN(h) || isNaN(iterations) || !funcInput) {
        alert("Harap masukkan semua nilai dengan benar.");
        return;
    }

    // Mengganti ^ dengan ** dan memastikan x dan y dapat digunakan
    const sanitizedInput = funcInput.replace(/\^/g, '**').replace(/([0-9]+)([a-zA-Z])/g, '$1*$2');

    // Buat fungsi dari input dengan parameter x dan y
    const f = (x, y) => eval(sanitizedInput); // Hati-hati menggunakan eval di lingkungan produksi!

    // Inisialisasi variabel untuk metode Euler
    let y = y0; // Nilai awal y
    let x = 0; // Nilai awal x
    let results = '';

    // Lakukan perhitungan metode Euler
    for (let i = 0; i < iterations; i++) {
        results += `x: ${x.toFixed(2)}, y: ${y.toFixed(4)}\n`;
        y += h * f(x, y); // Update nilai y berdasarkan fungsi dengan x dan y
        x += h; // Update nilai x
    }

    // Tampilkan hasil
    document.getElementById('results').innerText = results;
});
