<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 15:45
 */
require_once "bootstrap.php";

$id = $argv[1];
$product = $entityManager -> find('Product', $id);

if (is_null($product)) {
    echo "No Product";
    exit(1);
}

echo sprintf("-%s\n", $product->getName());