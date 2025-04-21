let dia = prompt("¿Qué día de la semana es hoy? 📅").toLowerCase();
if (dia === "sábado" || dia === "domingo") {
alert("¡Fiesta! 🥳 Es fin de semana, relájate y disfruta 🍕🎮");
} else if (
dia === "lunes" ||
dia === "martes" ||
dia === "miércoles" ||
dia === "jueves" ||
dia === "viernes"
) {
alert("Es día laborable 😓 ¡Ánimo, tú puedes con todo! ☕💻");
} else {
alert("Hmm... eso no parece un día válido 🤔 ¿Estás inventando días?");
}