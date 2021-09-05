var cartas = [
	{
		numero:1,
		nome: "Midizinho",
		atributos: {
			forca: 10,
			defesa: 10,
			magia: 10
		},
		url:"https://scontent.fcgb1-1.fna.fbcdn.net/v/t1.6435-9/72827597_2413080638745749_7421239124213891072_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGwY0j1AygfvxJCezvRtItudjkalVsgBI12ORqVWyAEjWdWOHSmwyjNjps7O9xWIRYSv4BOVqWe4Sa8UvWRE2aD&_nc_ohc=qrplCx2JWBgAX81wbOs&_nc_ht=scontent.fcgb1-1.fna&oh=cfb1d73f38cddb93e8bf45be61bc09dd&oe=615B4909"
	},
	{
		numero:2,
		nome: "NEGAO DA PICONA",
		atributos: {
			forca: 101,
			defesa: 0,
			magia: 0
		},
		url:"data:image/jpeg;base64,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"
	},
	{
		numero:3,
		nome: "Markus real",
		atributos: {
			forca: 10,
			defesa: 10,
			magia: 11
		},
		url:"//lh3.googleusercontent.com/E5FTm6B_H_gqJxS-riIrtpo58cEK3jqLtAsqER79Ax7zwzUvglZF-M6agVhaRheF0BTd=s85"
	},
	{
		numero:4,
		nome: "O LENDARIO",
		atributos: {
			forca: 0,
			defesa: 0,
			magia: 999
		},
		url:"//lh3.googleusercontent.com/jwI-4lic5T8Y1zPGRc4ZkE9PpQeKv6re-0K4VpEv3v-_lbc1Un4nW2mJcF9yF42FMohksA=s85"
	},
	{
		numero:5,
		nome: "XUPAKU",
		atributos: {
			forca: 1,
			defesa: 1,
			magia: 1
		},
		url:"data:image/jpeg;base64,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"
	},
	{
		numero:6,
		nome: "The Akatsuki",
		atributos: {
			forca: 9,
			defesa: 9,
			magia: 0
		},
		url:"https://scontent.fcgb1-1.fna.fbcdn.net/v/t1.6435-9/117960871_3100727866647686_8903073672216725545_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGuwXPmebq6dW9a8ytsXtsMJvu8HFlXkukm-7wcWVeS6dv61q_upgChmM48KCCRT1G2XB3slXweraJ7HzLSE8kk&_nc_ohc=IgrrXNsmbKMAX_Xm-8Z&_nc_ht=scontent.fcgb1-1.fna&oh=bc7e058eee79d94219a651cdf80c7c34&oe=615AA422"
	},
	{
		numero:7,
		nome: "Midzinho tatakae",
		atributos: {
			forca: 0,
			defesa: 0,
			magia: 0
		},
		url:"https://scontent.fcgb1-1.fna.fbcdn.net/v/t1.6435-9/64371871_2185001618220320_3408235366044401664_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGOWhyclSgkD2CMKLZ5IdJCkmgFwQS3YgaSaAXBBLdiBs1arVKKqaXXx78yJFKl5Dqmq81KUpTDnjixeEhzlh2a&_nc_ohc=7P6_0s7KqbsAX9jCu8I&_nc_ht=scontent.fcgb1-1.fna&oh=3a11e39ce451cbe8a5cae18fab1c21ee&oe=61593E03"
	},
	{
		numero:8,
		nome: "O SCAM",
		atributos: {
			forca: 0,
			defesa: 0,
			magia: 0
		},
		url:"https://lh3.googleusercontent.com/8e-vSvzHP_xBulT1ey1SWYAa7X8kvmQSCiq7ekBiV1ARbEgBs4_7wlcZ8vYxX6lTr9Ww=s85"
	},
	{
		numero:9,
		nome: "A REUNIÃO DE JUDAS",
		atributos: {
			forca: 0,
			defesa: 80,
			magia: 0
		},
		url:"https://scontent.fcgb1-1.fna.fbcdn.net/v/t1.6435-9/67399644_899012410448390_1018310082724626432_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFAhpoYlf1ovsquwCl9VCdMlPRm3K6LwvyU9GbcrovC_L1jXyagjlWiTYIhFIf-Sp0b4GkP3GxDLBkmRbwMW-bk&_nc_ohc=PMsrsMPKlSwAX9iHZ03&_nc_ht=scontent.fcgb1-1.fna&oh=34b48cfc0573abf610cd4ade2dc2c1e6&oe=615B47F9"
	},
	{
		numero:10,
		nome: "mikitos",
		atributos: {
			forca: 200,
			defesa: 00,
			magia: 00
		},
		url:"https://scontent.fcgb1-1.fna.fbcdn.net/v/t1.6435-9/77410283_2477098189010660_4882504614340984832_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFzA2F9GbAydpGZzMUveotQag11GtwyV3xqDXUa3DJXfCC0WfA_3fpwnOibzQ2VuRqnOjZiuhvSor5UZ5LsPBDI&_nc_ohc=GE35Rwsqj20AX9sgODL&_nc_ht=scontent.fcgb1-1.fna&oh=c0af5f12ef948bb1c1e67e387f02322b&oe=615B33E6"
	},
	{
		numero:11,
		nome: "PALADINOBOY",
		atributos: {
			forca: 100,
			defesa: 100,
			magia: 100
		},
		url:"https://3.bp.blogspot.com/-PO9NEtVkfj8/VZFKNfqDZDI/AAAAAAAAeZM/EiIZ0paQg78/s1600/Seto%2BKaiba.jpg"
	},
	{
		numero:12,
		nome: "PALADINO REAL",
		atributos: {
			forca: 8,
			defesa: 7,
			magia: 50
		},
		url:"https://pbs.twimg.com/media/EKjaPAjWsAA8aGT.jpg"
	},
	]
//---------------------------------
// Arceus = n 11

var cartaMaquina;
var cartaJogador;
var pontosJogador = 0;
var pontosMaquina = 0;
var deck = [];
var frenteDaCarta1;
var frenteDaCarta2;
var flipCardAudio = document.querySelector("#flipCard");
var winAudio = document.querySelector("#win");
var loseAudio = document.querySelector("#lose");
for(var i = 0; i < cartas.length; i++){
	deck.push(cartas[i]);
}
var state = 0;
var flipCard1 = document.querySelector(".flip-card1");
var flipCard2 = document.querySelector(".flip-card2");
var flipCardInner1 = document.querySelector(".flip-card-inner1");
var flipCardInner2 = document.querySelector(".flip-card-inner2");
var cartasNoDeck = document.querySelector(".cards");
updateDeck()

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * deck.length);
  cartaMaquina = deck[numeroCartaMaquina];
	deck.splice(numeroCartaMaquina, 1);
  
  var numeroCartajogador = parseInt(Math.random() * deck.length);
  cartaJogador = deck[numeroCartajogador];
	deck.splice(numeroCartajogador, 1);
  
  document.querySelector('.sortear').style.display = "none";
  
	updateDeck()
	updateData()
	exibirOpcoes()
	
	
}

function updateDeck(){
	var cartasNoBaralho = deck.length;
	cartasNoDeck.innerText = cartasNoBaralho;
}

function updateData(){	
	var nomeCard1 = document.querySelector(".frontCardTitulo1");
	var nomeCard2 = document.querySelector(".frontCardTitulo2");
	var imgCard1 = document.querySelector(".frontCardImage1");
	var imgCard2 = document.querySelector(".frontCardImage2");
	var forca1 = document.querySelector(".forca1");
	var defesa1 = document.querySelector(".defesa1");
	var magia1 = document.querySelector(".magia1");
	var forca2 = document.querySelector(".forca2");
	var defesa2 = document.querySelector(".defesa2");
	var magia2 = document.querySelector(".magia2");
	
	nomeCard1.innerText = cartaJogador.nome;
	imgCard1.src = cartaJogador.url;
	forca1.innerText = cartaJogador.atributos.forca;
	defesa1.innerText = cartaJogador.atributos.defesa;
	magia1.innerText = cartaJogador.atributos.magia;
	
	nomeCard2.innerText = cartaMaquina.nome;
	imgCard2.src = cartaMaquina.url;
	forca2.innerText = cartaMaquina.atributos.forca;
	defesa2.innerText = cartaMaquina.atributos.defesa;
	magia2.innerText = cartaMaquina.atributos.magia;
	
	flipCard1.classList.add("pulse");
	flipCardInner1.style.transform = "rotateY(180deg)";
	flipCardAudio.play();
	state = 0;
	
	frenteDaCarta1 = document.querySelector(".flip-card-inner-front1");
	frenteDaCarta2 = document.querySelector(".flip-card-inner-front2");
	
	if(cartaJogador.numero == 11){
		frenteDaCarta1.classList.add("brilhante");
	} else if(cartaMaquina.numero == 11){
		frenteDaCarta2.classList.add("brilhante");
	} else if(cartaJogador.numero != 11 && cartaMaquina.numero != 11){
		frenteDaCarta1.classList.remove("brilhante");
		frenteDaCarta2.classList.remove("brilhante");
	}
	
	
}

function exibirOpcoes(){
  var opcoes = document.querySelector(".options");
  var opcoesTexto = "";
  for(var atributo in cartaJogador.atributos){
		opcoesTexto += `<button id="btn${atributo}" class="btnatributo">${atributo}</button>`;
  }
	
	var template = `<p>Que atributo você deseja comparar?</p><br>
	${opcoesTexto}`;
  opcoes.innerHTML = template;
	adicionarEventos();
}

function adicionarEventos(){
	var btns = document.querySelectorAll(".btnatributo");
	btns.forEach(button => {
		button.addEventListener("click", ()=>{
			obtemAtributoSelecionado(button.innerText);
		})
	})
}

function obtemAtributoSelecionado(atributo){
  jogar(atributo);
}

function jogar(atributoSelecionado){
	var placarJogador = document.querySelector("#placarJogador");
	var placarMaquina = document.querySelector("#placarMaquina");
	
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    mostraResultado("Você venceu!");
		pontosJogador++;
		placarJogador.innerText = pontosJogador;
		winAudio.play();
  } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    mostraResultado("Você perdeu!");
		pontosMaquina++;
		placarMaquina.innerText = pontosMaquina;
		loseAudio.play();
  } else {
    mostraResultado("Empatou!");
  }
	
	if(state == 0){
		flipCard2.classList.add("pulse");
		flipCardInner2.style.transform = "rotateY(180deg)";
		flipCardAudio.play();
 		state = 1;
 	}
}

function mostraResultado(msg){
	var resultado = document.querySelector(".comandos");
	var template = `<h1>${msg}</h1><br><button class="jogarNovamente">Jogar Novamente</button>`;
	resultado.innerHTML = template;
	var jogarNovamente = document.querySelector(".jogarNovamente");
	jogarNovamente.addEventListener("click", proximoRound);
}

function proximoRound(){
	winAudio.load();
	loseAudio.load();
	if(deck.length != 0){
		flipCardInner1.style.transform = "rotateY(0deg)";
		flipCardInner2.style.transform = "rotateY(0deg)";
		flipCard1.classList.remove("pulse");
		flipCard2.classList.remove("pulse");
		state = 0;

		var comandos = document.querySelector(".comandos");
		var template = `<button class="sortear" onclick="sortearCarta()">Sortear carta</button>
				<div class="options"></div>
				`;

		setTimeout(()=>{
			comandos.innerHTML = template;
		}, 500)
	}else{
		updateDeck()
		var split = document.querySelector(".split");
		var vencedor;
		if(pontosJogador > pontosMaquina){
			vencedor = "Uhul! Você venceu o jogo!";
		} else if(pontosJogador < pontosMaquina){
			vencedor = "Que pena. A máquina venceu o jogo!";
		}else{
			vencedor = "O jogo empatou!";
		}
		var template = `
		<div class="msgFinal">
		<h1 class="msgGrande">${vencedor}</h1>
		<h1 class="msg">Acabaram as Cartas!</h1>
		<button class="novoJogo">Novo jogo!</button>
		</div>`;
		split.innerHTML = template;
		
		var novoJogo = document.querySelector(".novoJogo");
		novoJogo.addEventListener("click", iniciarNovoJogo);
	}
}

function iniciarNovoJogo(){
	pontosMaquina = 0;
	pontosJogador = 0;
	placarJogador.innerText = pontosJogador;
	placarMaquina.innerText = pontosMaquina;
	
	
	for(var i = 0; i < cartas.length; i++){
		deck.push(cartas[i]);
	}
	
	updateDeck()
	var split = document.querySelector(".split");
	var template = `
	<div class="flip-card1">
  <div class="flip-card-inner1">
    <div class="flip-card-inner-back1">
      <img class="cardImageBack1" src="https://wallpapercave.com/wp/wp2866512.jpg" alt="Card Back" >
    </div>
    <div class="flip-card-inner-front1">
      <h1 class="frontCardTitulo1">Goku</h1>
			<img class="frontCardImage1" src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/05/09/goku2.jpg" alt="">
      <ul class="frontCardAtributos1">
      	<li class="atributoForca1">Forca <span class="forca1">5</span></li>
      	<li class="atributoDefesa1">Defesa <span class="defesa1">5</span></li>
      	<li class="atributoMagia1">Magia <span class="magia1">5</span></li>
      </ul>
    </div>
  </div>
</div>
		
		<div class="comandos">
			<button class="sortear" onclick="sortearCarta()">Sortear carta</button>
			<div class="options"></div>
			
		</div>
		
		<div class="flip-card2">
  <div class="flip-card-inner2">
    <div class="flip-card-inner-back2">
      <img class="cardImageBack2" src="https://wallpapercave.com/wp/wp2866512.jpg" alt="Card Back" >
    </div>
    <div class="flip-card-inner-front2">
      <h1 class="frontCardTitulo2">Goku</h1>
			<img class="frontCardImage2" src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/05/09/goku2.jpg" alt="">
      <ul class="frontCardAtributos2">
      	<li class="atributoForca2">Forca <span class="forca2">5</span></li>
      	<li class="atributoDefesa2">Defesa <span class="defesa2">5</span></li>
      	<li class="atributoMagia2">Magia <span class="magia2">5</span></li>
      </ul>
    </div>
  </div>
</div>
`;

	split.innerHTML = template;
	flipCard1 = document.querySelector(".flip-card1");
	flipCard2 = document.querySelector(".flip-card2");
	flipCardInner1 = document.querySelector(".flip-card-inner1");
	flipCardInner2 = document.querySelector(".flip-card-inner2");
}