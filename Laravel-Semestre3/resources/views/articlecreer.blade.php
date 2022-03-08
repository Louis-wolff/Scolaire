@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>

		<h1>Création d'un article:</h1>
		
		<nav>
			<ul>
				<li><a href="account">Retour au compte</a></li>
			</ul>
		</nav>
		
			<p>Titre:</p>
		<form method="post" action="newart">
  			<input type="text" name="title">
  			<p>Phrase d'accroche:</p>
  			<input type="text" name="accroche">
  			<p>Texte:</p>
  			<input type="text" name="text">
  			<p>Publié?
  			<input type="checkbox" name="pub"></p>
			<input type="submit">
		</form>
	</body>
</html>