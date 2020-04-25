<?php
    include '../data.php';
    $fatturato = $graphs['fatturato'];
    header('Content-Type: application/json');
    echo json_encode($fatturato);
?>
