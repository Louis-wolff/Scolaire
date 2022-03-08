@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>

		<h1>Modification d'un article:</h1>
		
		<nav>
			<ul>
				<li><a href="account">Retour au compte</a></li>
			</ul>
		</nav>
		
		<p>Titre:</p>
		<form method="post" action="putmodif">
  			<input type="text" name="title" value="{{$article->title}}">
  			<p>Phrase d'accroche:</p>
  			<input type="textarea" name="accroche" width =30 col = 10 value="{{$article->accroche}}">
  			<p>Texte:</p>
  			<input type="text" name="text" value="{{$article->texte}}">
  			<p>Publié? (Penser à cocher ceci)
  			<input type="checkbox" name="pub"></p>
  			<input type="text" name="artid" value="{{$article->art_id}}" hidden>
			<input type="submit">
		</form>
	</body>
</html>