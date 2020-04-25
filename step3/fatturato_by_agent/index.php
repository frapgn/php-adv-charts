<?php
    include '../permissions_filter.php';

    // include '../data.php';
    // $fatturato_by_agent = $graphs['fatturato_by_agent'];

    if (!empty($_GET)) {
        $fatturato_by_agent = $filtered['fatturato_by_agent'];
        header('Content-Type: application/json');
        echo json_encode($fatturato_by_agent);
    }
?>
