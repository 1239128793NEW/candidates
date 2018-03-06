<?php

if(isset($_POST['email']) && trim($_POST['email']) &&
   isset($_POST['name']) && trim($_POST['name']) &&
   isset($_POST['number'])) {

	file_put_contents('users.txt', $_POST['email'] . ' - ' . $_POST['number'] . " (" . $_POST['name'] . ")" . "\r\n", FILE_APPEND);
	echo json_encode(['success' => true]);

} else {
	echo json_encode(['error' => 'request params missing']);
}

?>