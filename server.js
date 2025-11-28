const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// KONFIGURASI PENTING: { extensions: ['html'] }
// Ini membuat server otomatis mencari file .html jika URL tidak memilikinya.
// Contoh: Buka '/privacy' -> Server akan menyajikan 'privacy.html'
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

// Route Utama (Home)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan Server
app.listen(port, () => {
    console.log(`Server bynusa.dev berjalan di http://localhost:${port}`);
});