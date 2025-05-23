 var loop = true;// a prescindere 
 class Personaggio {
		constructor(nome, 
		anno, sesso, libro, regnoUnito, nobel, matematico, astronauta, fisico, imprenditore, medico, chimico, biologo, neuroscienziato, 
		scienziato, astronomo, farmacologo, informatico, attore, neurologo, astrofisico, domandaSpecifica) {
			this.nome = nome;
			this.eliminato = false;
			this.attributi = [
				anno,// frequenze degli attributi
				sesso,// l'array capisce da se la sua dimensione
				libro,
				regnoUnito,
				nobel,
				matematico,
				astronauta,
				fisico,
				imprenditore,
				medico,
				chimico,
				biologo,
				neuroscienziato,
				scienziato,
				astronomo,
				farmacologo,
				informatico,
				attore,
				neurologo,
				astrofisico,
				domandaSpecifica
			]
		}

		static ultimoRimasto() {// 4 piu intelligente
			var cont = 0;
			var ultimoPersonaggio = null;
			for(let i = 0; i < personaggi.length; i++) {
				if(personaggi[i].eliminato == false) {
					cont++;
					ultimoPersonaggio = personaggi[i];
				}
			}

			if(cont == 1) {
				loop = false;
				return ultimoPersonaggio;
			} else { 
				return null;
			}
		}
	}

	const personaggi = [
		new Personaggio("Ada Lovelace", false, false, true, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, "Il tuo personaggio ha progettato il primo computer?"),
		new Personaggio("Samantha Cristoforetti", true, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio è mai stato nello spazio?"),
		new Personaggio("Stephen Hawking", true, true, false, true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, "Il tuo personaggio ha contribuito alla teoria dei buchi neri?"),
		new Personaggio("Steve Jobs", true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha fondato Apple?"),
		new Personaggio("Adele Goldberg", true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha contribuito allo sviluppo di Smalltalk?"),
		new Personaggio("Albert Einstein", false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio è il padre della teoria della relatività?"),
		new Personaggio("Anita Borg", true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, "Il tuo personaggio è stato un pioniere nell'informatica?"),
		new Personaggio("Charles Darwin", false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio è stato un naturalista famoso per la teoria dell'evoluzione?"),
		new Personaggio("Craig Venter", true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio è un biologo noto per il sequenziamento del genoma umano?"),
		new Personaggio("Edward Jenner", false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha sviluppato il vaccino per il vaiolo?"),
		new Personaggio("Fabiola Gianotti", true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio è una fisica nota per aver diretto il CERN?"),
		new Personaggio("Gertrude Elion", true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha vinto il premio Nobel per la medicina?"),
		new Personaggio("Hedy Lamarr", true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, "Il tuo personaggio è stata un'attrice che ha contribuito allo sviluppo della tecnologia delle comunicazioni?"),
		new Personaggio("Isaac Newton", false, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha formulato la legge della gravitazione universale?"),
		new Personaggio("Jonas Salk", true, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, "Il tuo personaggio ha sviluppato il vaccino contro la polio?"),
		new Personaggio("Margherita Hack", true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, "Il tuo personaggio è stata un'astrofisica nota per la divulgazione scientifica?"),
		new Personaggio("Marie Curie", false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha vinto il premio Nobel per la fisica e la chimica?"),
		new Personaggio("May Britt Moser", true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, "Il tuo personaggio è una neuroscienziata nota per la scoperta dei neuroni del posizionamento?"),
		new Personaggio("Rita Levi Montalcini", true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, "Il tuo personaggio ha vinto il premio Nobel per la medicina?"),
		new Personaggio("Rosalind Franklin", true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha contribuito alla scoperta della struttura del DNA?"),
		new Personaggio("Niels Bohr", false, true, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, "Il tuo personaggio è stato un fisico noto per uno dei modelli atomici?"),
		new Personaggio("Peter Higgs", true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha previsto l'esistenza del bosone di Higgs?"),
		new Personaggio("Radia Perlman", false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, "Il tuo personaggio è conosciuto come la 'madre di Internet'?"),
		new Personaggio("Renato Dulbecco", true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, "Il tuo personaggio ha vinto il premio Nobel per la medicina?"),
		new Personaggio("Galileo Galilei", false, true, true, false, false, true, false, true, false, false, false, false, false, true, true, false, false, false, false, false, "Il tuo personaggio è stato un astronomo e fisico noto per aver difeso il sistema eliocentrico?"),
		new Personaggio("Leonardo da Vinci",false, true, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false,"Il tuo personaggio ha disegnato la Gioconda?"),
		new Personaggio("Nikola Tesla",false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,"Il tuo personaggio ha scoperto la corrente alternata?"),
		new Personaggio("James Gosling",true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false, false, false, false,"Ha inventato il Linguaggio Java?"),
		new Personaggio("Alan Turing", true,true,false,true,false,true,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false, false, false, false,"Il tuo personaggio ha dato le basi dell'informatica?"),
		new Personaggio("Alessandro Volta", false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,"Il tuo personaggio ha inventato la pila?")
	];
// l da vinci e modifica true e i false se corretti e dom casuali
	const domande = [
		"Il tuo personaggio è nato dopo il 1900?",
		"Il tuo personaggio è un uomo?",
		"Il tuo personaggio ha scritto un libro?",
		"Il tuo personaggio è nato nel Regno Unito?",
		"Il tuo personaggio ha vinto un premio premio Nobel?",
		"Il tuo personaggio è un matematico?",
		"Il tuo peronsaggio è un astronauta?",
		"Il tuo personaggio è un fisico?",
		"Il tuo personaggio è un imprenditore?",
		"Il tuo personaggio è un medico?",
		"Il tuo personaggio è un chimico?",
		"Il tuo personaggio è un biologo?",
		"Il tuo personaggio è un neuroscienziato?",
		"Il tuo personaggio è uno scienziato?",
		"Il tuo personaggio è un astronomo?",
		"Il tuo personaggio è un farmacologo?",
		"Il tuo personaggio è un informatico?",
		"Il tuo personaggio è un attore?",
		"Il tuo personaggio è un neurologo?",
		"Il tuo personaggio è un astrofisico?",
		"Domande Terminate"
	];

	const foto = [
		"../img/pg/ada_lovelace.jpg",
		"../img/pg/samantha_cristoforetti.jpg",
		"../img/pg/stephen_hawking.jpg",
		"../img/pg/steve_jobs.jpg",
		"../img/pg/adele_goldberg.jpg",
		"../img/pg/albert_einstein.jpg",
		"../img/pg/anita_borg.jpg",
		"../img/pg/charles_darwin.jpg",
		"../img/pg/craig_venter.jpg",
		"../img/pg/edward_jenner.jpg",
		"../img/pg/fabiola_gianotti.jpg",
		"../img/pg/gertrude_elion.jpg",
		"../img/pg/hedy_lamarr.jpg",
		"../img/pg/isaac_newton.jpg",
		"../img/pg/jonas_salk.jpg",
		"../img/pg/margherita_hack.jpg",
		"../img/pg/marie_curie.jpg",
		"../img/pg/moser.jpg",
		"../img/pg/rita_levi_montalcini.jpg",
		"../img/pg/rosalind_franklin.jpg",
		"../img/pg/niels_bohr.jpg",
		"../img/pg/peter_higgs.jpg",
		"../img/pg/radia_perlman.jpg",
		"../img/pg/renato_dulbecco.jpg",
		"../img/pg/galileo_galilei.jpg",
		"../img/pg/Davinci.jpg",
		"../img/pg/nikola_tesla.jpg",
		"../img/pg/james_gosling.jpg",
		"../img/pg/alan_turing.jpg",
		"../img/pg/alessandro_volta.jpg"
	];

	function showImage(index) {
		if (index >= 0 && index < foto.length) {
			var imgElement = document.getElementById('myImage');
			imgElement.src = foto[index];
			imgElement.style.display = 'block';
		} else {
			console.log("Indice fuori dai limiti dell'array");
		}
	}

	window.onload = function() {
		var conditionMet = true; 
		if (conditionMet) {
			var imageIndex = 1;
			showImage(imageIndex);
		}
	};

	var domandaCorrente = 0;
	function nuovaDomanda() { // 2
		let j,k;
		console.log("domanda corrente "+domandaCorrente);
		do
		{
		j=conteggioTrue(domandaCorrente);
		k=conteggioRimasti();
		if(j==0 || k==j)//se j == 0 vuol dire che tutti i concorerenti rimasti hanno false sulla domanda corrente (non specifica) se invece k == j vuol dire che tutti i personaggi rimasti hanno true sulla domanda corrente(non specifica)
		{
			domandaCorrente++;
		}
		}while(j==0 || k==j);
		document.getElementById("testoDomanda").innerHTML = domande[domandaCorrente];
		domandaCorrente++;
		if(domandaCorrente > domande.length-1)// per non sforare nell array perchè alla 20esima + 1 è 21 e non piu 20
			loop = false;
	}

	function rispostaDomanda(risp) { //3
		if(risp == "SI" && loop) { // e loop == true 
			for(let i = 0; i < personaggi.length; i++) {
				if(personaggi[i].attributi[domandaCorrente-1] == false) {
					personaggi[i].eliminato = true;
				}
			}
		} else if(risp == "NO" && loop) {
			for(let i = 0; i < personaggi.length; i++) {
				if(personaggi[i].attributi[domandaCorrente-1] == true) {
					personaggi[i].eliminato = true;
				}        
			}
		}

		document.getElementById("personaggio").innerHTML = "";
		var ultimoPersonaggio = Personaggio.ultimoRimasto();
		if(ultimoPersonaggio) { // se sei rimasto con un personaggio solo altrimenti finisce il gioco va a riga 179( se true o diverso da null)
			document.getElementById("personaggio").innerHTML = "Il tuo personaggio è: " + ultimoPersonaggio.nome;
			mostraImmaginePersonaggio(ultimoPersonaggio);
			document.getElementById("divTestoDomanda").style.display="none";
		}
		if(loop)// ALTRIMENTI NUOVA DOMANDA
			nuovaDomanda();
	}

	function mostraImmaginePersonaggio(personaggio) {
		var index = personaggi.indexOf(personaggio);
		if (index !== -1) {
			showImage(index);
		}
	}

	function reset() {
		domandaCorrente = 1;
		loop = true;
		for(let i = 0; i < personaggi.length; i++) {
			personaggi[i].eliminato = false;
		}
		document.getElementById('myImage').style.display = 'none';
		document.getElementById("personaggio").innerHTML = "";
		nuovaDomanda();
	}
	function conteggioTrue(indice)// sarebbe domandaCorrente
	{
		let j=0;
		for(let i=0;i<personaggi.length;i++)
		{
			if(personaggi[i].attributi[indice]==true && personaggi[i].eliminato==false)
			{
				j++;
			}
		}
		console.log("True tra i rimasti "+j)
		return j;
	}
	function conteggioRimasti()
	{
		let j=0;
		for(let i=0;i<personaggi.length;i++)
		{
			if(personaggi[i].eliminato==false)
			{
				j++;
			}
		}
		console.log("Personaggi rimasti "+j);
		return j;
	}
	window.onload = function() { //  1 nel momento che carichi la finestra la prima cosa che fa è richiamare la funzione nuovadomanda
		nuovaDomanda();
	};