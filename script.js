
function updateUhr() {
    const jetzt = new Date(); // Aktuelles Datum und Uhrzeit
    let stunden = jetzt.getHours(); // Stunden
    let minuten = jetzt.getMinutes(); // Minuten
    let sekunden = jetzt.getSeconds(); // Sekunden

    // Stunden, Minuten und Sekunden immer zweiziffrig anzeigen
    stunden = stunden < 10 ? '0' + stunden : stunden;
    minuten = minuten < 10 ? '0' + minuten : minuten;
    sekunden = sekunden < 10 ? '0' + sekunden : sekunden;

    // Uhrzeit im Format hh:mm:ss
    const zeitString = `${stunden}:${minuten}:${sekunden}`;

    // Uhrzeit mit zusätzlichen Beschriftungen
    const beschriftung = `${zeitString} (Stunden, Minuten, Sekunden)`;

    // Uhrzeit in das HTML-Element einfügen
    document.getElementById('uhr').textContent = beschriftung;
}
// Jede Sekunde die Uhrzeit aktualisieren
setInterval(updateUhr, 1000);

// Initiales Aufrufen der Funktion, um die Uhr sofort anzuzeigen
updateUhr();

