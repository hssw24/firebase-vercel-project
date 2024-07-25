const express = require('express');
const database = require('./firebase');

const app = express(); 
app.use(express.json());

app.post('/add', (req, res) => {
  const newData = req.body;
  database.ref('path/to/your/data').push(newData)
    .then(() => res.status(200).send("Datensatz hinzugefügt."))
    .catch((error) => res.status(500).send("Fehler beim Hinzufügen des Datensatzes: " + error));
});

app.put('/edit/:id', (req, res) => {
  const updateData = req.body;
  const dataId = req.params.id;
  database.ref('path/to/your/data/' + dataId).update(updateData)
    .then(() => res.status(200).send("Datensatz aktualisiert."))
    .catch((error) => res.status(500).send("Fehler beim Aktualisieren des Datensatzes: " + error));
});

app.delete('/delete/:id', (req, res) => {
  const dataId = req.params.id;
  database.ref('path/to/your/data/' + dataId).remove()
    .then(() => res.status(200).send("Datensatz gelöscht."))
    .catch((error) => res.status(500).send("Fehler beim Löschen des Datensatzes: " + error));
});

app.delete('/delete-all', (req, res) => {
  database.ref('path/to/your/data').remove()
    .then(() => res.status(200).send("Alle Datensätze gelöscht."))
    .catch((error) => res.status(500).send("Fehler beim Löschen der Datensätze: " + error));
});

app.delete('/delete-database', (req, res) => {
  database.ref('/').remove()
    .then(() => res.status(200).send("Gesamte Datenbank gelöscht."))
    .catch((error) => res.status(500).send("Fehler beim Löschen der gesamten Datenbank: " + error));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
