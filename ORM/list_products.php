<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 15:40
 */
require_once "bootstrap.php";

$productRepository = $entityManager -> getRepository('Product');
$products = $productRepository -> findAll();

foreach ($products as $product) {
    echo sprintf("-%s\n", $product->getName());
}
