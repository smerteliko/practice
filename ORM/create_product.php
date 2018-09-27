<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 15:35
 */

require_once "bootstrap.php";

$newProductName = $argv[1];

$product = new Product();
$product ->setName($newProductName);

$entityManager -> persist($product);
$entityManager -> flush();

echo "Created Product with ID " . $product->getId() . "\n";