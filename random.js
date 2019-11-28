let datos = []
datos[0] = 'La canción "Jingle Bells" fue escrita para el día de acción de gracias, no para navidad.'
datos[1] = 'La nariz roja de el reno Rodolfo es probablemente el resultado de una infección parasitaria de su sistema respiratorio.'
datos[2] = 'En los Países Bajos, Sinterklaas (la versión holandesa de Santa Claus) llega desde España, no desde el Polo Norte.'
datos[3] = 'En Alemania, Polonia y Ucrania, se cree que encontrar una araña o una telaraña en un árbol de Navidad es un presagio de buena suerte.'
datos[4] = 'Santa estira el tiempo como una banda elástica, para entregar todos los regalos en una noche.'
datos[5] = 'Dos semanas antes de Navidad es uno de los dos momentos más populares para que las parejas se separen.'
datos[6] = 'Los japoneses usualmente van a KFC en nochebuena.'
datos[7] = 'El primer árbol de navidad artificial no era un árbol en absoluto. Fue creado con plumas de ganso teñidas de verde.'
datos[8] = 'Islandia tiene 13 Santas y una anciana que secuestra niños.'
datos[9] = 'En Alemania, se dice que Heiligabend, o Nochebuena, es un momento mágico cuando los puros de corazón pueden escuchar a los animales hablar.'
datos[10] = 'La pelicula Santa Clausula es la mejor pelicula navideña.'
datos[11] = 'El reno Rodolfo original no tenía la nariz roja'
datos[12] = 'Los colores tradicionales de navidad son el rojo, el verde y el dorado.'

function datosRaros (){
    const datosRandom = Math.floor(Math.random()*(datos.length))
    document.getElementById("random").innerHTML = datos[datosRandom]
}