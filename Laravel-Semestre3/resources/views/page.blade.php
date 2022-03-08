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

		<section id='1'>
			<h2><a href="articleview1">{{$article->title}}</a></h2>
			<p>{{$article->accroche}}</p>
			<p>{{$article->datepub}}</p>
		</section>
		<section id='2'>
			<h2><a href="articleview2">{{$article2->title}}</a></h2>
			<p>{{$article2->accroche}}</p>
			<p>{{$article2->datepub}}</p>
			<a href="articleview2"></a>
		</section>
		<section id='3'>
			<h2><a href="articleview3">{{$article3->title}}</a></h2>
			<p>{{$article3->accroche}}</p>
			<p>{{$article3->datepub}}</p>
		</section>

	</body>
</html>