



function restore(ID) {
    document.getElementById(ID + "A").innerHTML = empty;
    document.getElementById(ID + "N").innerHTML = empty;
}



function fill_up(ID) {
    L = Stapel.length;
    document.getElementById(ID + "A").innerHTML = ""
    for (i = 0; i < L; i++) { document.getElementById(ID + "A").innerHTML += Stapel[i] + "<br>"; }
    document.getElementById(ID + "N").innerHTML = L
}


function trans() {
    if (document.getElementById("PA").innerHTML != "&nbsp;") { fill_up("T"); restore("P"); }
}


function hand_out() {

    if (document.getElementById("TA").innerHTML != "&nbsp;") {

        restore("T");
        document.getElementById("AA0").innerHTML = "";
        document.getElementById("AA1").innerHTML = "";

        sum0 = 0; sum1 = 0;

        for (i = 0; i < L; i++) {
            if (Stapel[i] == AL[0]) {
                document.getElementById("AA0").innerHTML += Stapel[i] + "<br>";
                sum0 += 1;
            }
            else {
                document.getElementById("AA1").innerHTML += Stapel[i] + "<br>";
                sum1 += 1
            }
        }

        document.getElementById("AAN0").innerHTML = sum0;
        document.getElementById("AAN1").innerHTML = sum1;
    }
}
AL = new Array("Riese", "Zwerg");

Stapel = new Array(AL[0], AL[1], AL[0], AL[1], AL[0], AL[0], AL[0], AL[0], AL[0], AL[1], AL[0], AL[1], AL[0], AL[0], AL[0], AL[0]);

empty = "&nbsp"

fill_up("P");





head =new Arrey( "Jahr","TK25","TK50","WK","Summe")
L = head.length

document.write("<table class='tab'>");

document.write("<tr>");

for( i=0; i<L; i++) {
    document.write("<td>"+ head[i] + "</td>");

    document.write("</tr>");

    document.write("</table>");
}
