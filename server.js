const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // กำหนด port ใหม่เป็น 3000

// ให้ Express สามารถให้บริการไฟล์ static เช่น CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// หน้า Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// หน้า About me
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// โปรเจค 1
app.get("/project1", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'project1.html'));
});

// โปรเจค 2
app.get("/project2", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'project2.html'));
});

// โปรเจค 3
app.get("/project3", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'project3.html'));
});

// หน้า Projects หลัก (อาจแสดงรายการโปรเจค หรือเปลี่ยนไปหน้าแรกของโปรเจค)
app.get("/project", (req, res) => {
    res.redirect("/project1"); // หรือคุณอาจต้องการให้ไปที่หน้าอื่น
});

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // เปลี่ยน port ในข้อความ log ด้วย
});