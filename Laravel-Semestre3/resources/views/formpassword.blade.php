@include('layouts.app')

<!DOCTYPE html>
<html lang="fr" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h1>My Logging Site: Dragons </h1>
		
		<p>Changez votre mot de passe:</p>

		<form method="post" action="changepassword">
  		<input type="text" name="newmdp">
  		<p>Confirmer:</p>
  		<input type="text" name="cmdp">
		<input type="submit">
		</form>

		<form method="get" action="account">
			<p>Pour se retourner (lol) : </p>
			<button type="submit">ici</button>
		</form>
	</body>
</html>