@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h1>Vos articles:</h1>

		<nav>
			<ul>
				<li><a href="account">Retour au compte</a></li>
			</ul>
		</nav>

		<section id='1'>
			<h2>{{$article->title}}</h2>
			<p>{{$article->accroche}}</p>
			<p>{{$article->datepub}}</p>

			<form action="pub" method="get">
				<input type="text" name="art" value="{{$article->art_id}}" hidden>
				<button type="submit" {{$pub}}>Publier</button>
			</form>

			<form action="depub" method="get">
				<input type="text" name="art" value="{{$article->art_id}}" hidden>
				<button type="submit" {{$depub}}>Dépublier</button>
			</form>

			<form action="modify" method="get">
				<button type="submit" {{$hide}}>Modifier</button>
				<input type="text" name="art" value="{{$article->art_id}}" hidden>
			</form>
		</section>
		<section id='2'>
			<h2>{{$article2->title}}</h2>
			<p>{{$article2->accroche}}</p>
			<p>{{$article2->datepub}}</p>

			<form action="pub" method="get">
				<input type="text" name="art" value="{{$article2->art_id}}" hidden>
				<button type="submit" {{$pub2}}>Publier</button>
			</form>

			<form action="depub" method="get">
				<input type="text" name="art" value="{{$article2->art_id}}" hidden>
				<button type="submit" {{$depub2}}>Dépublier</button>
			</form>
			
			<form action="modify" method="get">
				<input type="text" name="art" value="{{$article2->art_id}}" hidden>
				<button type="submit" {{$hide2}}>Modifier</button>
			</form>
		</section>
		<section id='3'>
			<h2>{{$article3->title}}</h2>
			<p>{{$article3->accroche}}</p>
			<p>{{$article3->datepub}}</p>

			<form action="pub" method="get">
				<input type="text" name="art" value="{{$article3->art_id}}" hidden>
				<button type="submit" {{$pub3}}>Publier</button>
			</form>

			<form action="depub" method="get">
				<input type="text" name="art" value="{{$article3->art_id}}" hidden>
				<button type="submit" {{$depub3}}>Dépublier</button>
			</form>	

			<form action="modify" method="get">
				<input type="text" name="art" value="{{$article3->art_id}}" hidden>
				<button type="submit" {{$hide3}}>Modifier</button>
			</form>
		</section>

	</body>
</html>