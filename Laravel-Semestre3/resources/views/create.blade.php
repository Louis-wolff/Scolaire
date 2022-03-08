@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>

		<h1>Création d'un compte:</h1>
		
		<nav>
			<ul>
				<li><a href="page">Page principale</a></li>
				<li><a href="signin">Connexion Auteur</a></li>
				<li><a href="create">Création de compte</a></li>
			</ul>
		</nav>
		
		<p>Login:</p>

		<form method="post" action="creer">
  		<input type="text" name="login">
  		<p>Mdp:</p>
  		<input type="password" name="mdp">
  		<p>Confirmer:</p>
  		<input type="password" name="mdpconfirm">
		<input type="submit">
	</form>

		<form method="post" action="signin">
			<p>Pour ce connecter : </p>
			<button type="submit">ici</button>
		</form>
		
	</body>
</html>