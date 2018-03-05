<?php

$link = mysql_connect('localhost', 'user', 'password');
mysql_select_db('project_users');

if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['number']) && !empty($_POST['number'])) {
	$result = mysql_query("select * from users where email = '" . $_POST['email'] . "' and number = '" . $_POST['number']) . "'";

	if(mysql_fetch_row($result)) {
		echo json_encode(['user_found' => true]);
	} else {
		mysql_query("insert into users (email, number) values ('" . $_POST['email'] . "', '" . $_POST['number']) . "'";
		echo json_encode(['user_found' => false]);
	}
} else {
	echo json_encode(['error' => 'request params missing']);
}

mysql_close($link);