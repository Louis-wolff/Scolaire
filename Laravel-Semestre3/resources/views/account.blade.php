@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>

		<h1>Hai rawr family: {{$user->user}}</h1>

		<form action="signout" method="post">
			<p>Déconnection : </p>
			<button type="submit">ici</button>
		</form>

		<form action="formpassword" method="get">
			<p>Changer le mdp : </p>
			<button type="submit">ici</button>
		</form>

		<form action="deleteuser" method="post">
			<p>Pour supprimer ce compte : </p>
			<button type="submit">ici</button>
		</form>

		<h3>Mes articles</h3>

		<form action="articlecreer" method="get">
			<p>Créer un article : </p>
			<button type="submit">ici</button>
		</form>

		<form action="myarticles" method="get">
			<p>Liste des mes articles : </p>
			<button type="submit">ici</button>
		</form>
	</body>
</html>