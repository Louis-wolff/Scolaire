@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h1>Dragon's articles</h1>

		<nav>
			<ul>
				<li><a href="page">Page principale</a></li>
				<li><a href="signin">Connexion Auteur</a></li>
				<li><a href="create">Création de compte</a></li>
			</ul>
		</nav>

		<h1>{{$article->title}}</h1>

		<p>{{$article->accroche}}</p>
		<p>{{$article->texte}}</p>
		<p>Ecrit par {{$article->author}}.</p>
		<p>Publication : {{$article->datepub}}</p>
		<p>Modification : {{$article->datemod}}</p>


	</body>
</html>