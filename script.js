
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

let display = document.getElementById("display");

        // Funktion, um Zeichen zum Display hinzuzufügen
        function appendToDisplay(value) {
            // Verhindert, dass der Benutzer mehrere Operatoren hintereinander eingibt
            if (value === "+" || value === "-" || value === "*" || value === "/") {
                // Wenn der letzte Charakter bereits ein Operator ist, nichts tun
                if (display.value.slice(-1) === "+" || display.value.slice(-1) === "-" || display.value.slice(-1) === "*" || display.value.slice(-1) === "/") {
                    return;
                }
            }
            display.value += value;
        }

        // Funktion, um das Display zu löschen
        function clearDisplay() {
            display.value = "";
        }

        // Funktion, um die Berechnung durchzuführen
        function calculateResult() {
            try {
                // Überprüfung der Eingabe und Berechnung
                display.value = evaluateExpression(display.value);
            } catch (e) {
                display.value = "Fehler";
            }
        }

        // Berechnungslogik unter Verwendung von eval(), aber mit einer besseren Validierung der Eingabe
        function evaluateExpression(expr) {
            // Nur zulässige Zeichen erlauben (Ziffern, Operatoren, Klammern und Dezimalpunkte)
            if (/[^0-9+\-*/().]/.test(expr)) {
                throw new Error("Ungültige Eingabe");
            }
            return Function("return " + expr)();  // sicherere Auswertung der mathematischen Ausdrucks
        }