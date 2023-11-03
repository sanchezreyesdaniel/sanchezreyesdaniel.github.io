console.log('hola')

const menusSemana = [
    {
        dia: "Domingo",
        primerPlato: ["No se trabaja"],
        segundoPlato: ["No se trabaja"],
        postre: ["No se trabaja"]
    },
    {
        dia: "Lunes",
        primerPlato: ["Sopa de lentejas", "Ensalada César", "Risotto de champiñones"],
        segundoPlato: ["Lomo de cerdo a la parrilla con salsa de mostaza", "Salmón a la plancha con puré de patatas", "Espaguetis a la bolognesa"],
        postre: ["Tarta de chocolate con helado de vainilla", "Fruta fresca de temporada", "Tiramisú"]
    },
    {
        dia: "Martes",
        primerPlato: ["Sopa de tomate", "Ensalada griega", "Paella de mariscos"],
        segundoPlato: ["Pollo al curry con arroz basmati", "Bacalao a la vizcaína", "Ratatouille"],
        postre: ["Flan de caramelo", "Manzana asada", "Helado de fresa"]
    },
    {
        dia: "Miércoles",
        primerPlato: ["Gazpacho", "Tabulé", "Crema de espárragos"],
        segundoPlato: ["Entrecot a la pimienta con patatas gratinadas", "Merluza en salsa verde", "Pasta primavera"],
        postre: ["Pastel de queso con frutos rojos", "Pera en almíbar", "Mousse de limón"]
    },
    {
        dia: "Jueves",
        primerPlato: ["Sopa de calabaza", "Ensalada de aguacate", "Arroz con setas"],
        segundoPlato: ["Costillas de cerdo a la barbacoa con maíz asado", "Trucha a la plancha con puré de calabacín", "Canelones de espinacas y ricotta"],
        postre: ["Tarta de manzana", "Kiwi fresco", "Helado de vainilla"]
    },
    {
        dia: "Viernes",
        primerPlato: ["Sopa de cebolla", "Ensalada de quinoa", "Tortilla española"],
        segundoPlato: ["Pechuga de pollo a la naranja con arroz salvaje", "Bacalao al pil-pil", "Lasaña de carne"],
        postre: ["Tiramisú", "Mango maduro", "Flan de vainilla"]
    },
    {
        dia: "Sabado",
        primerPlato: ["No se trabaja"],
        segundoPlato: ["No se trabaja"],
        postre: ["No se trabaja"]
    }
];

const fechaActual = new Date() //  dia de hoy
const titulo = document.querySelector('#titulo') //titulo
menu(fechaActual.getDay())

function menu(x){
    titulo.innerHTML="Menú del Restaurante: "+ menusSemana[x].dia
    plato1.innerHTML=menusSemana[x].primerPlato[0]
    plato2.innerHTML=menusSemana[x].primerPlato[1]
    plato3.innerHTML=menusSemana[x].primerPlato[2]
    plato4.innerHTML=menusSemana[x].segundoPlato[0]
    plato5.innerHTML=menusSemana[x].segundoPlato[1]
    plato6.innerHTML=menusSemana[x].segundoPlato[2]
    postre1.innerHTML=menusSemana[x].postre[0]
    postre2.innerHTML=menusSemana[x].postre[1]
    postre3.innerHTML=menusSemana[x].postre[2]
}

//pintar de verde

const buscador = document.getElementById("buscador")
const menuItems = document.querySelectorAll(".list-group-item")

const botonBusqueda = document.getElementById("botonBusqueda")
botonBusqueda.addEventListener("click", resaltarPalabra)

function resaltarPalabra() {
    const palabraBuscada = buscador.value

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i]
        const contenidoItem = item.textContent
        
        if (contenidoItem.includes(palabraBuscada)) {
            // Elimina cualquier resaltado verde previo
            item.innerHTML = contenidoItem
            
            // Resalta la palabra buscada en verde
            item.innerHTML = contenidoItem.split(palabraBuscada).join(`<span style="background-color: #79ff00;">${palabraBuscada}</span>`)
        } else {
            // Si la palabra no se encuentra, restaura el contenido original
            item.innerHTML = contenidoItem
        }
    }
}



const horarioApertura = document.querySelector('#horarioApertura')
const horarioCierre = document.querySelector('#horarioCierre')
const registro = document.querySelector('#registro')
const resultado = document.querySelector('#resultado')

registro.addEventListener('click', function () {
    // Obtiene los valores de los campos de entrada de tiempo
    const horarioA = horarioApertura.value;
    const horarioC = horarioCierre.value;

    // Divide las cadenas en horas y minutos
    const [horasApertura, minutosApertura] = horarioA.split(':')
    const [horasCierre, minutosCierre] = horarioC.split(':')

    // Obtiene la fecha y hora actuales
    const horaActual = fechaActual.getHours()
    const minutosActuales = fechaActual.getMinutes()

    // Convierte las horas y minutos a números enteros
    const horasAperturaEntero = parseInt(horasApertura, 10)
    const minutosAperturaEntero = parseInt(minutosApertura, 10)
    

    let diferenciaHoras
    let diferenciaMinutos
    let mensaje

    if (horaActual < horasApertura) {
        // Si la hora actual es anterior a la hora de apertura, calcula el tiempo restante hasta la apertura
        diferenciaHoras = (24+ horasAperturaEntero - horaActual)%24
        diferenciaMinutos = (60+ minutosAperturaEntero - minutosActuales)%60
        mensaje = `Para abrir quedan: ${diferenciaHoras} horas y ${diferenciaMinutos} minutos`
    }
    if(horaActual > horasApertura){
        diferenciaHoras =  24-(horaActual-horasAperturaEntero)
        diferenciaMinutos = (60 + minutosActuales- minutosAperturaEntero)%60
        mensaje = `Para abrir quedan: ${diferenciaHoras} horas y ${diferenciaMinutos} minutos`
    }
    if(horaActual==horasApertura){
        mensaje=`Acaba de abrir: 0 horas`
    }
    resultado.innerHTML = mensaje
});


//selector


const selectorDiaSemana = document.querySelector('#selectorDiaSemana')
selectorDiaSemana.addEventListener('click',function(){
    if(selectorDiaSemana.value=="Lunes"){
       menu(1)
    }
    if(selectorDiaSemana.value=="Martes"){
        menu(2)
    }
    if(selectorDiaSemana.value=="Miércoles"){
        menu(3)
    }
    if(selectorDiaSemana.value=="Jueves"){
        menu(4)
    }
    if(selectorDiaSemana.value=="Viernes"){
        menu(5)
    }
    if(selectorDiaSemana.value=="Seleccionar..."){
        menu(fechaActual.getDay())
    }
})






