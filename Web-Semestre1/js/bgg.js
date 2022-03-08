/******************************************************************************
 * SCRIPT BGG - V1
 *****************************************************************************/

/*-----------------------------------------------------------------------------
 * Cette fonction est exÃ©cutÃ©e aprÃ¨s la fin du chargement de la page oÃ¹ le
 * script est inclut. Elle ajoute un Ã©couteur de clics au bouton de soumission
 * du formulaire de la page courante qui exÃ©cute la fonction searchGames()
 * en lui transmettant le contenu de l'input text du formulaire.
 *---------------------------------------------------------------------------*/
window.onload = function ()
{
    
    let search = document.getElementsByTagName('input')[0];
    let button = document.getElementById('bouton');

    let jeu = button.addEventListener('click',function (event){
    	event.preventDefault();
    	let feed = searchGames(search.value);

    });
    //updateFoundGames(jeu);

    
};

/*-----------------------------------------------------------------------------
 * Utilise l'API Fetch pour lancer une requÃªte vers le serveur
 * w11.iutrs.unistra.fr:3000 qui recherche tous les jeux contenant la chaine du
 * paramÃ¨tre query. Lorsque les donnÃ©es sont rÃ©ceptionnÃ©es, elles sont
 * transmises au format JSON Ã  la fonction updateFoundGames().
 * S'il y a une erreur, elle doit Ãªtre inscrite dans la console.
 *---------------------------------------------------------------------------*/
function searchGames( query )
{
    fetch('http://w11.iutrs.unistra.fr:3000/api/boardgames?search='+query)
    .then(
    	function (res){
    		if (res.ok)
    			return res.json();
    		throw new Error('Response is not OK '+ res.status);
    })
    .then(
    	function (data){
    		console.log(data);
    		updateFoundGames(data.data);
    		updateStatus(data.metadata.total);
    	}
    ).catch(function(error){
    		console.log(error);
    	}
    )
}

/*-----------------------------------------------------------------------------
 * Ajoute tous les jeux du paramÃ¨tre games (au format JSON) dans la section
 * #bgg-found. Chaque jeu est reprÃ©sentÃ© par un bouton contenent sa miniature
 * (thumbnail) et son titre.
 * S'il n'y a pas de jeux dans 'games', une erreur est dÃ©clenchÃ©e.
 *---------------------------------------------------------------------------*/
function updateFoundGames( games )
{
	if (games.length == 0){
		throw new Error("Aucun jeu trouvé.");
	}

	let contenu = "";

    for (let i = 0; i < games.length ; i++) {
    	let section = document.getElementsByTagName("section")[1];
    	section.innerHTML = "";
		
		let article = document.createElement("article");
  	 	article.innerHTML = games[i].name;
  	 	section.appendChild(article);

  	 	let img = document.createElement("img");
  	 	img.src = games[i].thumbnail;
  	 	img.height = 50;
	 	article.appendChild(img);

    }

    

    let jeu = document.getElementsByTagName("form")[0].addEventListener('click',function (event){
    	event.preventDefault();
    	let feed = selectGame(71567); 

    });
}

function updateStatus( nbGames ) {

	let p = document.getElementsByTagName("p")[0];

	p.innerHTML = "Il y a "+nbGames+" jeu(x).";
}

function selectGame( gameId ) {

	fetch('http://w11.iutrs.unistra.fr:3000/api/boardgames/'+gameId)
	.then(
    	function (res){
    		if (res.ok)
    			return res.json();
    		throw new Error('Response is not OK '+ res.status);
    })
    .then(
    	function (data){
    		console.log(data);
    		updateCurrentGAme(data);
    	}
    ).catch(function(error){
    		console.log(error);
    	}
    )

}

function updateCurrentGAme( game ) {

	let aside = document.createElement("aside");
	let verif = document.removeChild(aside);

	let sectprin = document.getElementsByTagName("section")[2];

	
	sectprin.appendChild(aside);
	let article = document.createElement("article");
	article.class ="game";
	aside.appendChild(article);

	let header = document.createElement("header");
	article.appendChild("header");
	let h3 = document.createElement("h3");
	h3.innerHTML = game.name;
	header.appendChild(h3);

	let figure = document.createElement("figure");
	article.appendChild(figure);
	let img = document.createElement("img");
	img.src = game.image;
	figure.appendChild("img");

	let secti = document.createElement("section");
	article.appendChild(secti);
	secti.appendChild(header);

	let h4 = document.createElement("h4");
	h4.innerHTML = "Caractéristiques" ;
	header.appendChild(h4);

	let table = document.createElement("table");
	secti.appendChild(table);
	let thead = document.createElement("thead");
	table.appendChild(thead);
	let tr = document.createElement("tr");
	thead.appendChild(tr);

	let th = document.createElement("th");
	th.innerHTML= "Année";
	tr.appendChild(th);
	th.innerHTML= "Joueurs";
	tr.appendChild(th);
	th.innerHTML= "Durée";
	tr.appendChild(th);

	let tbody = document.createElement("tbody");
	table.appendChild(tbody);
	tbody.appendChild(tr);

	let td = document.createElement("td");
	td.innerHTML = game.yearpublished;
	tr.appendChild(td);
	td.innerHTML = game.minplayers+"-"+game.maxplayers;
	tr.appendChild(td);
	td.innerHTML = game.maxplaytime;
	tr.appendChild(td);

	article.appendChild(secti);
	secti.appendChild(header);

	h4.innerHTML = "Description" ;
	header.appendChild(h4);

	let p = document.createElement("p");
	p.innerHTML = game.description;
	secti.appendChild(p);

}