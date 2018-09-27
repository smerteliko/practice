<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 15:03
 */
require_once "bootstrap.php";

return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet($entityManager);