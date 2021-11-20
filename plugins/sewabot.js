let handler = async m => m.reply(`
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _5k/grup (1 minggu)_
❒ Sewa = _7k/grup (1 bulan)_
❒ Sewa = _10k/grup (Permanent)_
❒ Free = _24 jam Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _GOPAY_
❒ _OVO_
❒ _DANA_

◪ *KEUNTUNGAN SEWA BOT*

❒ _Fitur Premium Terbuka_
❒ _Limit UNLIMITED_
❒ _Bisa Menyuruh Bot Buka/Tutup Group_
❒ _Kick Orang_
❒ _Add Orang_
❒ _Anti Link On_
❒ _Fitur Game Banyak Sepuas Nya Main_
❒ _Bisa Memasukkan Bot Ke dalam Grup_

◪ *Jika Minat Hubungi owner*
◪ *Syarat gratis invite bot,Follow ig Owner*
_https://www.instagram.com/_aryagilang/_

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewabot', 'buypremium']
handler.tags = ['main']
handler.command = /^(sewabot|buypremium)$/i

handler.limit = false

module.exports = handler
