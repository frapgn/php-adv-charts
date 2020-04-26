<?php
    include '../permissions_filter.php';
    $fatturato = $filtered['fatturato'];
    header('Content-Type: application/json');
    echo json_encode($fatturato);
?>
