AL = new Array("Riese", "Zwerg");

Stapel = new Array(AL[0], AL[1], AL[0], AL[1], AL[0], AL[0], AL[0], AL[0], AL[0], AL[1], AL[0], AL[1], AL[0], AL[0], AL[0], AL[0]);

L = Stapel.lenght;

for (i = 0; i < L; i++) { document.getElementById("PA").innerHTML += Stapel[i] + "<br>;" }
