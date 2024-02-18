var z=Object.defineProperty;var P=(r,a,e)=>a in r?z(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var k=(r,a,e)=>(P(r,typeof a!="symbol"?a+"":a,e),e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const m={template:`
      <div id="intro" class="text-center p-5">
        <p>
          Tetris és un videojoc de tipus trencaclosques. Fou inventat per
          l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre
          treballava a l'Acadèmia de Ciències de Moscou.
        </p>
        <h2>Instruccions:</h2>
        <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
        <p>Amb la fletxa avall pots girar la peça</p>
        <p>
          '<strong>Ñ</strong>' per canviar la peça actual per la peça que està a
          punt de sortir (que pots veure a la columna de la dreta)
        </p>
        <p>
          Al final de la partida podràs desar la teva puntuació, i veure el
          ranking de jugadors
        </p>
        <button id="jugarBtn" class="btn btn-success fs-1 mt-5">JUGAR</button>
        <hr />
      </div>`},b=[{nombre:"Palo",color:"Rojo",matriz:[[[1],[1],[1],[1]],[[1,1,1,1]],[[1],[1],[1],[1]],[[1,1,1,1]]]},{nombre:"Tumaba-Izq",color:"Azul",matriz:[[[1,0,0,0],[1,1,1,1]],[[1,1],[1,0],[1,0],[1,0]],[[1,1,1,1],[0,0,0,1]],[[0,1],[0,1],[1,1]]]},{nombre:"Tumaba-Der",color:"Azul",matriz:[[[0,0,0,1],[1,1,1,1]],[[1,0],[1,0],[1,0],[1,1]],[[1,1,1,1],[1,0,0,0]],[[1,1],[0,1],[0,1]]]},{nombre:"Cuadrado",color:"Amarillo",matriz:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]]},{nombre:"Z-Izq",color:"Verde",matriz:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]]},{nombre:"T",color:"Morado",matriz:[[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]],[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]]]},{nombre:"Z-Der",color:"Cian",matriz:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]]}];class j{constructor(a,e,i=0,s=0){k(this,"puntuacion",0);console.log("Has creado una instancia de la clase ModeloPieza"),this.modelo=a,this.angulo=e,this.x=i,this.y=s,this.matriz=b[this.modelo].matriz[this.angulo],this.longitud=b[this.modelo].matriz[this.angulo][0].length,this.altura=b[this.modelo].matriz[this.angulo].length}girar(a){return this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=b[this.modelo].matriz[this.angulo],this.longitud=b[this.modelo].matriz[this.angulo][0].length,this.altura=b[this.modelo].matriz[this.angulo].length,a}puntos(a){puntuacion+=a}}function L(r){const a=r[0]+r[1],e=r[3]+r[4],i=parseInt(r[6]+r[7],10),s=r.substring(9,17),t=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][parseInt(e,10)-1];return`${i} ${t} 20${a} - ${s}`}function M(r){const a=new Date(r),e=a.getFullYear().toString().slice(-2),i=(a.getMonth()+1).toString().padStart(2,"0"),s=a.getDate().toString().padStart(2,"0"),o=a.getHours().toString().padStart(2,"0"),t=a.getMinutes().toString().padStart(2,"0"),u=a.getSeconds().toString().padStart(2,"0");return e+"/"+i+"/"+s+"T"+o+":"+t+":"+u}const d={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],pintaPanel(){let r='<div id="juegoPrincipal">';for(let a=0;a<d.matriz.length;a++){r+='<div class="fila bg-dark d-flex">';for(let e=0;e<d.matriz[a].length;e++)d.matriz[a][e]==1?r+='<div class="columna bg-primary">1</div>':d.matriz[a][e]==0&&(r+='<div class="columna bg-dark">0</div>');r+="</div>"}return r+="</div>",r},crearNuevaPieza(){let r=Math.floor(Math.random()*7),a=Math.floor(Math.random()*(9-b[r].matriz[0].length)+1);const e=new j(r,0,a,0);return console.log("Nueva pieza generada:",e),e},nuevaPieza:null,insertarPieza(){for(let a=0;a<d.nuevaPieza.altura;a++)for(let e=0;e<d.nuevaPieza.longitud;e++){const i=d.nuevaPieza.matriz[a][e];i&&(d.matriz[a+d.nuevaPieza.y][e+d.nuevaPieza.x]=i)}const r=document.querySelector("#juegoPrincipal");r.innerHTML=this.pintaPanel()},borrarPieza(){for(let a=0;a<d.nuevaPieza.altura;a++)for(let e=0;e<d.nuevaPieza.longitud;e++)d.nuevaPieza.matriz[a][e]&&(d.matriz[a+d.nuevaPieza.y][e+d.nuevaPieza.x]=0);const r=document.querySelector("#juegoPrincipal");r.innerHTML=this.pintaPanel()},moverDer(){d.borrarPieza();const r=d.nuevaPieza.x+1;for(let e=0;e<d.nuevaPieza.altura;e++)for(let i=0;i<d.nuevaPieza.longitud;i++){const s=d.nuevaPieza.matriz[e][i];if(d.matriz[e+d.nuevaPieza.y][i+r]==1)return;s&&(d.matriz[e+d.nuevaPieza.y][i+r]=s)}d.nuevaPieza.x=r;const a=document.querySelector("#juegoPrincipal");a.innerHTML=this.pintaPanel()},moverIzq(){d.borrarPieza();const r=d.nuevaPieza.x-1;for(let e=0;e<d.nuevaPieza.altura;e++)for(let i=0;i<d.nuevaPieza.longitud;i++){const s=d.nuevaPieza.matriz[e][i];if(d.matriz[e+d.nuevaPieza.y][i+r]==1)return;s&&(d.matriz[e+d.nuevaPieza.y][i+r]=s)}d.nuevaPieza.x=r;const a=document.querySelector("#juegoPrincipal");a.innerHTML=this.pintaPanel()},moverAbaj(){d.borrarPieza();const r=d.nuevaPieza.y+1;for(let e=0;e<d.nuevaPieza.altura;e++)for(let i=0;i<d.nuevaPieza.longitud;i++){const s=d.nuevaPieza.matriz[e][i];if(d.matriz[d.nuevaPieza.y+d.nuevaPieza.altura][d.nuevaPieza.x+i]==1){d.insertarPieza(),d.nuevaPieza=d.crearNuevaPieza(),this.acabarPartida();return}s&&(d.matriz[e+r][i+d.nuevaPieza.x]=s)}d.nuevaPieza.y=r;const a=document.querySelector("#juegoPrincipal");a.innerHTML=this.pintaPanel()},moverArrib(){d.borrarPieza();const r=d.nuevaPieza.y-1;for(let e=0;e<d.nuevaPieza.altura;e++)for(let i=0;i<d.nuevaPieza.longitud;i++){const s=d.nuevaPieza.matriz[e][i];s&&(d.matriz[e+r][i+d.nuevaPieza.x]=s)}d.nuevaPieza.y=r;const a=document.querySelector("#juegoPrincipal");a.innerHTML=this.pintaPanel()},controlTeclas(){document.addEventListener("keydown",r=>{switch(r.code){case"ArrowRight":console.log("derecha"),this.borrarPieza(),this.moverDer(),this.actualizarPuntuacion(10);break;case"ArrowLeft":console.log("izquierda"),this.borrarPieza(),this.moverIzq(),this.actualizarPuntuacion(10);break;case"ArrowDown":console.log("abajo"),this.borrarPieza(),this.moverAbaj(),this.actualizarPuntuacion(10);break;case"ArrowUp":console.log("Arriba"),this.borrarPieza(),this.nuevaPieza.girar(this.nuevaPieza.angulo),this.insertarPieza(this.nuevaPieza),this.actualizarPuntuacion(20),this.actualizarPuntuacion==100&&this.nuevoNick();break}})},actualizarPuntuacion(r){const a=document.getElementById("puntosJuego");a.innerHTML=parseInt(a.innerHTML)+r,console.log("puntos",a.innerHTML)},iniciarMovimiento(){setInterval(function(){d.moverAbaj()},1e3)},acabarPartida(){clearInterval(d.intervalo),confirm("QUIERES GUARDAR LA PARTIDA?")&&(document.querySelector("#panel").innerHTML=`
      <div class="bg-dark p-5 m-5">
        <label for="nick">Nick:</label>
        <input type="text" id="nick" name="nick">
        <button class="bg-success text-light mt-3 botonGuardar" id="botonGuardar">GUARDAR</button>
      </div>
    `,document.querySelector("#botonGuardar").addEventListener("click",function(){const a=M(new Date().toISOString()),e=L(a),i={avatar:'<img width=50 src="img/avatar4.svg">',nick:document.querySelector("#nick").value,puntos:d.puntos,fecha:e};d.partidaGuardada=i,document.querySelector("main").innerHTML=x.template,x.script(d.partidaGuardada)}))}},x={template:`<main class="container mt-5 bg-opacity-50 bg-dark p-2">
        <!-- Pantalla de introducción -->
        <div id="intro" class="text-center p-5">
            <button id="boton" class="btn btn-success fs-1 mt-5">JUGAR</button>
            <hr>
        </div>
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark"></div>
            <div id="partidas" class="m-5 p-5 bg-dark"></div>
        </div>
        <!-- Pantalla del juego -->
        <div id="juego" class="d-none">
            <!-- ... (rest of your HTML code for the game screen) ... -->
        </div>
    </main>`,script:r=>{document.getElementById("boton").addEventListener("click",e);function e(c,l){c.preventDefault();let v=`<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fs-2">1</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            <td class="fs-2">2</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            <td class="fs-2">3</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>`;console.log(v),document.getElementById("ranking").innerHTML=v}const i={avatar:'<img width=100px src="img/user2.svg" alt="user">',nick:"MANUEL",puntos:100,fecha:"21 MAYO 2023"},s=[{avatar:'<img width=100px src="img/user1.svg" alt="user">',nick:"ADRI",puntos:100,fecha:"2023-09-27"},{avatar:'<img width=100px src="img/user2.svg" alt="user">',nick:"VICENTE",puntos:150,fecha:"2023-09-28"},{avatar:'<img width=100px src="img/user3.svg" alt="user">',nick:"JAVI",puntos:150,fecha:"2023-09-28"}];o(s),u(i);function o(c){let l=`<h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                    <button id="buscar">BUSCAR</button>
                    <input
                        id="texto-buscar"
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Buscador"
                        aria-describedby="button-addon2"
                    />
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Nick <i id="nickIcono" class="bi bi-arrow-up-square"></i></td>
                            <td>Puntuación <i id="puntosIcono" class="bi bi-arrow-up-square"></i></td>
                            <td>Fecha <i id="fechaIcono" class="bi bi-arrow-up-square"></i></td>
                        </tr>
                    </thead>
                    <tbody>`;c.forEach((n,g)=>{l+=`<tr>
                    <td>${n.avatar}</td>
                    <td>${n.nick}</td>
                    <td>${n.puntos}</td>
                    <td>${n.fecha}</td>
                </tr>`}),l+="</tbody><tfoot></tfoot></table>",document.getElementById("partidas").innerHTML=l,console.log(l),document.getElementById("buscar").addEventListener("click",v);function v(){const n=document.getElementById("texto-buscar").value.toLowerCase(),g=c.filter(h=>h.nick.toLowerCase().includes(n));o(g),console.log(c),console.log(g)}}function t(c){console.log("Datos de la partida"),s.push(c),console.log(c)}function u(c,l){const v=`¿Deseas guardar la partida?

Avatar: ${c.avatar}
Nick: ${c.nick}
Puntos: ${c.puntos}
Fecha: ${c.fecha}`;confirm(v)?(t(c),console.log("Partida guardada"),o(s)):console.log("Partida no guardada")}function y(c,l){const v=document.querySelector(`#${c}Icono`);v.className=`bi bi-arrow-${l==="up"?"down":"up"}-square-fill`,s.sort((n,g)=>l==="up"?n[c]>g[c]?1:-1:n[c]<g[c]?1:-1),o(s)}document.getElementById("nickIcono").addEventListener("click",function(){y("nick","up")}),document.getElementById("puntosIcono").addEventListener("click",function(){y("puntos","up")}),document.getElementById("fechaIcono").addEventListener("click",function(){y("fecha","up")})}},f={template:`
    <div id="juego" class="">
				<div class="row">
					<!-- Panel izquierda -->
					<div
						class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
					>
						<h4>Nivel: <span>2</span></h4>
						<h4>Tiempo: <span>5:22</span></h4>
						<h4>Lineas: <span>2</span></h4>
						<h4>Puntos: <span id="puntoJuego">0</span></h4>
					</div>
					<!-- Panel central -->
					<div class="col-4 d-flex justify-content-center">
						<div id="panel" class="p-5">
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
							<div class="fila d-flex justify-content-center">
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
								<div class="celda bg-dark border-secondary">x</div>
							</div>
						</div>
					</div>
					<!-- Panel derecha -->
					<div
						class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
					>
						<div id="piezaSiguiente">
							<h4>Pieza siguiente:</h4>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
							<div class="piezaSiguiente m-2">
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-dark border-secondary">x</div>
								</div>
								<div class="fila d-flex justify-content-center">
									<div class="celda bg-primary bg-gradient border-dark">x</div>
									<div class="celda bg-primary bg-gradient border-dark">x</div>
								</div>
							</div>
						</div>
						<hr />
						<div id="piezaGuardada">
							<h4>Pieza guardada:</h4>
							<div class="piezaGuardada">
								<div class="piezaSiguiente m-2">
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-warning bg-gradient border-dark">x</div>
										<div class="celda bg-warning border-secondary">x</div>
									</div>
									<div class="fila d-flex justify-content-center">
										<div class="celda bg-warning bg-gradient border-dark">x</div>
										<div class="celda bg-warning border-secondary">x</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button class="btn btn-success fs-1 mt-5" id="botonHome">HOME</button>
			</div>
    `,script:()=>{const r=document.querySelector("#panel");r.innerHTML=d.pintaPanel(),d.crearNuevaPieza(),d.nuevaPieza=d.crearNuevaPieza(),d.insertarPieza(d.nuevaPieza),d.controlTeclas(),d.iniciarMovimiento()}},p={template:`<nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>`,script:()=>{document.getElementById("vistaHome").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()}),document.getElementById("vistaRanking").addEventListener("click",()=>{document.querySelector("main").innerHTML=x.template,x.script()}),document.getElementById("vistaJuego").addEventListener("click",()=>{document.querySelector("main").innerHTML=f.template,f.script()})}};document.querySelector("header").innerHTML=p.template;p.script();
