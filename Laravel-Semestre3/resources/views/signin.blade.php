@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h1>My Logging Site: Dragons</h1>

		<nav>
			<ul>
				<li><a href="page">Page principale</a></li>
				<li><a href="signin">Connexion Auteur</a></li>
				<li><a href="create">Création de compte</a></li>
			</ul>
		</nav>
		
		<p>Login:</p>
		<form method="post" action="authenticate">
  		<input type="text" name="login">
  		<p>Mdp:</p>
  		<input type="password" name="mdp">
		<input type="submit">
		</form>

		<form action="create" method="post">
			<p>Pour créer un compte : </p>
			<button type="submit">ici</button>
		</form>
	</body>
</html>