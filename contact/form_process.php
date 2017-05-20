<?php
	$full_name = $_POST ['full_name'];
	$email = $_POST ['email'];
	$message = $_POST ['message'];
	$to = "baumy@hotmail.com";
	$subject = "New Message from site";

	mail ($to, $subject,  "From: " . $full_name . "\n" . "Email: " . $email . "\n" . "Message: " . $message);
?>
 <!DOCTYPE html>
 <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../bootstrap.min.css" />
    <link rel="stylesheet" href="../general.css" />
    <title>Thanks for Contacting Me!</title>
    <style>
    body {
      font-family: 'Raleway', sans-serif;
      text-align: center;
      margin-top: 3%;
    }
    </style>
  </head>
  <body>
    <h1>Thanks for Getting in Contact!</h1>
    <h3>I will get back to you as soon as I can! In the meantime click <a href="../">here</a> to return to the home page.</h2>
  </body>
 </html>
