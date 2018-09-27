<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 18:27
 */

require_once "bootstrap.php";

$theBugId = $argv[1];

$bug = $entityManager->find("Bug", (int)$theBugId);
$bug -> close();

$entityManager -> flush();