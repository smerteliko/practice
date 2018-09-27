<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 18:08
 */

require_once "bootstrap.php";

$theBugId = $argv[1];

$bug = $entityManager->find('Bug', (int)$theBugId);

echo 'Bug'.$bug->getDescription()."\n";
echo 'Engineer'.$bug->getEngineer()->getName()."\n";