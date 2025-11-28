const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Mengatur folder 'public' sebagai tempat file statis (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route utama untuk mengirimkan index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server bynusa.dev berjalan di http://localhost:${port}`);
});