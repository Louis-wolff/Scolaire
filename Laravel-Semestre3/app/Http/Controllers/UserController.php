<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\UserEloquent;
use App\Models\Articles;
use Carbon\Carbon;
//use App\Models\MyUser;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /*
 	* Show the signin page
 	*
 	* @param  \Illuminate\Http\Request  $request
 	* @return \Illuminate\Http\Response
 	*/
	public function signin( Request $request ){
		//$message = $_SESSION['message'] ?? null;
		//return view('signin',['message' => $message]);
		return view('signin');
	}

	public function signout( Request $request ){
		//session_destroy();
		$request->session()->flush();
		return redirect()->route('signin');
	}

	public function create( Request $request ){
		return view('create');
	}

	public function authenticate( Request $request ){

		if(!($request->session()->exists('id'))){
			$un = 1;
			$request->session()->put('id',$un);
		}

		$mdp = $request->input('mdp');
		$login = $request->input('login');

		if($login == null){
			$login = "";
			$mdp = "";
		} else if ($mdp == null){
			$mdp = "";
		}

		if (strlen($login) == 0){
			$request->session()->put('message','Bah, vous êtes un fantôme?');
			return redirect()->route('signin');
		}

		try
		{
			$user = UserEloquent::where('user',$request->login)->firstOrFail();
		}
		catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e)
		{
			$request->session()->put('message','Login inconnu.');
			return redirect()->route('signin');
		}

		if ( !Hash::check($mdp,$user->password) ){
			$request->session()->put('message','Mauvais mdp.');
			return redirect()->route('signin');
		}

		$request->session()->put('login',$user);
		//$request->session()->put('login',$obj->getLogin());
		$request->session()->forget('message');
		return redirect()->route('account');
	}

	public function account( Request $request ){
		$user = $request->session()->get('login');
		return view('account',['user' => $user]);
	}

	public function formpassword(Request $request){
		return view('formpassword');
	}

	public function changepassword(Request $request){
		$new = $request->input('newmdp');
		$mdp = $request->input('cmdp');

		if($mdp != $new){
			$request->session()->put('message','Le mot de passe tapé dans la section confirmer ne correspond pas à celui de la section Mdp!');
			return redirect()->route('formpassword');
		}

		if($new == null){
				$new = "";
		}

		try
		{
			$user = $request->session()->get('login');
			$user->password = Hash::make($new);
			$user->save();
		}
		catch (\Illuminate\Database\QueryException $e)
		{
			$request->session()->put('message','Erreur!');
			return redirect()->route('formpassword');
		}
				//$obj = new MyUser(session('login'),'');
				//$obj->changePassword($new);

		$request->session()->put('message','Mdp changé.');
		return redirect()->route('formpassword');
	}

	public function creer(Request $request){

		if($request->isMethod('post')){
			$chem = 'create';
		} else {
			$chem = 'creat';
		}

		$mdp = $request->input('mdp');
		$log = $request->input('login');
		$com = $request->input('mdpconfirm');


		if($log == null){
			$log = "";
			$mdp = "";
			$com = "";
		} 

		if (strlen($log) == 0){
			//$_SESSION['message'] = "Bah, vous êtes un fantôme?";
			$request->session()->put('message','Bah, vous êtes un fantôme?');
			return redirect()->route($chem);
		}

		if($mdp != $com){
			//$_SESSION['message'] = "Le mot de passe tapé dans la section confirmer ne correspond pas à celui de la section Mdp!";
			$request->session()->put('message','Le mot de passe tapé dans la section confirmer ne correspond pas à celui de la section Mdp!');
			return redirect()->route($chem);
		}

		if ($mdp == null) {
			$mdp = "";
			$com = "";
		}
		//A partir d'ici tp 8
		$user = new UserEloquent;
		$user->user = $log;
		$user->password = Hash::make($mdp);

		//if($obj->exists()){
			//$request->session()->put('message','Hmm... Il semble que cet utilisateur existe déjà.');
			//return redirect()->route($chem);
		//} else {	$obj->create();
		try
		{
			$user->save();
		}
		catch (\Illuminate\Database\QueryException $e)
		{
			$request->session()->put('message','Hmm... Il semble que cet utilisateur existe déjà.');
			return redirect()->route($chem);
		}

		$request->session()->put('message','Succès! Connectez vous.');
		return redirect()->route($chem);
		//Kjari Jaw Mig Drg Rqn Dergycute
	}

	public function delete(Request $request){
		//if(!($request->session()->exists('login')) || strlen(session('login')) == 0){
		//	$request->session()->put('message','Erreur lors de la supression???');
		//	return redirect()->route('signin',['message' => $request->session()->get('message')]);
		//}
		//$obj = new MyUser(session('login'),'');
		//$obj->delete();

		try
		{
			$request->session()->get('login')->delete();
		}
		catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e)
		{
			$request->session()->put('message','Erreur lors de la supression???');
			return redirect()->route('account');
		}

		//$request->session()->forget('user');
		$request->session()->forget('login');
		$request->session()->put('message','Compte supprimé.');
		return redirect()->route('signin',['message' => $request->session()->get('message')]);
	}

	//////////////////////////////////////////////////////::

	public function page(Request $request){

		/*for ($i = 0; $i < 3 ; $i++){ //Pour les derniers, i = 2, i >= 0 ; i--
			try
			{
				$max = DB::table('Articles')->max('art_id');
				$articlelist[$i] = Articles::where('art_id',$max-$i)->firstOrFail(); //max-$i
				$request->session()->put('message','');
			}
			catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e)
			{	
				$request->session()->put('message','Articles insuffisants, ou manquants...');
				$article = new Articles;
				$article->art_id = 0;
				$article->title = '';
				$article->accroche = '';
				$article->status = 'pub';
				$articlelist[$i] = $article;
			}
		}*/
		$tour = 0;
		foreach (Articles::where('status','pub')->orderBy('art_id','desc')->cursor() as $val) {
			if($tour <= 2){
				$articlelist[$tour] = $val;
				$tour++;
			}
			if($tour <= -1){
				break;
			}
		}

		for($i = $tour; $i <= 2; $i++){
			$article = new Articles;
			$article->art_id = 0;
			$article->title = '';
			$article->accroche = '';
			$article->status = 'pub';
			$articlelist[$i] = $article;
		}
		

		return view('page',['article' => $articlelist[0], 'article2' => $articlelist[1], 'article3' => $articlelist[2]]);
	}

	public function newart(Request $request){

		$user = $request->session()->get('login');
		$author = $user->user;

		$article = new Articles;

		$article->author = $author;
		$article->title = $request->input('title');
		$article->datepub = Carbon::now()->toDate();
		$article->datemod = Carbon::now()->toDate();
		$article->accroche = $request->input('accroche');
		$article->texte = $request->input('text');
		if($request->input('pub') == 'on'){
			$article->status = 'pub';
		} else {
			$article->status = 'nonpub';
		}

		try
		{
			$article->save();
			$request->session()->put('message','Succès');
		}
		catch (\Illuminate\Database\QueryException $e)
		{
			$request->session()->put('message','Hmm... problème de sauvegarde.');
			$request->session()->put('message',$article);
		}

		return redirect()->route('articlecreer');
	}

	public function articlecreer(Request $request){
		return view('articlecreer');
	}

	/*************** voir article *****/

	public function articleview1(Request $request){
		$counter = 1;

		foreach (Articles::where('status','pub')->orderBy('art_id','desc')->cursor() as $val) {
			if($counter == 1){
				$article = $val;
			}
			$counter++;
		}

		return view('articleview',['article' => $article]);
	}

	public function articleview2(Request $request){
		$counter = 1;

		foreach (Articles::where('status','pub')->orderBy('art_id','desc')->cursor() as $val) {
			if($counter == 2){
				$article = $val;
			}
			$counter++;
		}

		return view('articleview',['article' => $article]);
	}

	public function articleview3(Request $request){
		$counter = 1;

		foreach (Articles::where('status','pub')->orderBy('art_id','desc')->cursor() as $val) {
			if($counter == 3){
				$article = $val;
			}
			$counter++;
		}

		return view('articleview',['article' => $article]);
	}

	/*************************Voir article ************/
	public function myarticles(Request $request){
		$user = $request->session()->get('login'); // Avec l'username...
		$tour = 0;

		foreach (Articles::where('author',$user->user)->orderBy('art_id','desc')->cursor() as $val) {
			if($tour <= 2){
				$articlelist[$tour] = $val;
				$hide[$tour] = ' ';
				if($val->status == 'pub'){
					$depub[$tour] = ' ';
					$pub[$tour] = 'hidden';
				} else {
					$pub[$tour] = ' ';
					$depub[$tour] = 'hidden';
				}
				$tour++;
			}
			if($tour >= 3){
				break;
			}
		}

		for($i = $tour; $i <= 2; $i++){ // Problèmes
			$article = new Articles;
			$article->art_id = -1;
			$article->title = '';
			$article->accroche = '';
			$article->status = 'pub';
			$articlelist[$i] = $article;
			$hide[$i] = 'hidden';
			$pub[$i] = 'hidden';
			$depub[$i] = 'hidden';
		}

		return view('myarticles',['article' => $articlelist[0], 'article2' => $articlelist[1], 'article3' => $articlelist[2], 
			'hide' => $hide[0], 'hide2' => $hide[1], 'hide3' => $hide[2]
			,'pub' => $pub[0], 'pub2' => $pub[1], 'pub3' => $pub[2]
			,'depub' => $depub[0], 'depub2' => $depub[1], 'depub3' => $depub[2]]);
	}

	//////////
	public function depub(Request $request){
		$artid = $request->input('art');

		try{
			$article = Articles::where('art_id',$artid)->firstOrFail();
			$article->status = 'nonpub';
			$article->save();
			$request->session()->put('message','Votre article à été dépublié.');
		} catch (\Illuminate\Database\QueryException $e){
			$request->session()->put('message','Votre article est buggé.');
		}

		return redirect()->route('myarticles');
	}

	public function pub(Request $request){
		$artid = $request->input('art');

		try{
			$article = Articles::where('art_id',$artid)->firstOrFail();
			$article->status = 'pub';
			$article->save();
			$request->session()->put('message','Votre article à été publié.');
		} catch (\Illuminate\Database\QueryException $e){
			$request->session()->put('message','Votre article est buggé.');
		}

		return redirect()->route('myarticles');
	}

	////
	public function modify(Request $request){
		$artid = $request->input('art');
		try{
			$article = Articles::where('art_id',$artid)->firstOrFail();
		} catch (\Illuminate\Database\QueryException $e){

		}

		return view('modify',['article' => $article]);
	}
	//////////////

	public function putmodif(Request $request){

		$artid = $request->input('artid');

		$article = Articles::where('art_id',$artid)->firstOrFail();

		$article->title = $request->input('title');
		$article->datemod = Carbon::now()->toDate();
		$article->accroche = $request->input('accroche');
		$article->texte = $request->input('text');
		if($request->input('pub') == 'on'){
			$article->status = 'pub';
		} else {
			$article->status = 'nonpub';
		}

		try
		{
			$article->save();
			$request->session()->put('message','Article modifié');
		}
		catch (\Illuminate\Database\QueryException $e)
		{
			$request->session()->put('message','Hmm... problème de modifications.');
			$request->session()->put('message',$article);
		}

		return redirect()->route('myarticles');
	}
}
