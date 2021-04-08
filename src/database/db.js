const Database = require("sqlite-async");

//pedindo para o banco de dados (SQLITE) abra o DIRNAME(diretório)
//e coloque na pasta um arquivo chamado database.sqlite

function execute(db) {
  return db.exec(`
        
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );

    `)
}


//module pega o RETURN db
module.exports = Database.open(__dirname + "/database.sqlite").then(execute) // resultado = db

