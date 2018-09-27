<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 01.08.18
 * Time: 13:37
 */

if(!isset($_POST['login']) || !isset($_POST['password']))
    header('HTTP/1.1 500 Internal Server Error');

$login = strrev($_POST['login']);
$password = strrev($_POST['password']);
$data = array("login"=>$login, "password"=>$password);
header('Content-Type: application/json');
echo json_encode($data);

