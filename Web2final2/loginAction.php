<?php
	require_once ("includes/connection.php");
	

 // print_r($_POST);
	session_start();
$username = $_POST['username'];
$password = $_POST['password'];


	if($username == "" || $password =="") {

		header("location:error.php");
	} else {
		if(checkLogin($username,$password)) {
			header("location:products.php");

		} else {

		header("location:error.php");

		}
		$_SESSION['username'] = $username;
	}







?>