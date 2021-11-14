// anu
    let reg = /(p|hi|hai|halo|hola|bot)/i
    let isAnu = reg.exec(m.text)
    if (isAnu && !m.fromMe) {
        m.reply(`Ya, ada yang bisa saya bantu? kalo bingung ketik #menu ya kak`)
    }
