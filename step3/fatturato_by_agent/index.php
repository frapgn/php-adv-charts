<?php
    include '../permissions_filter.php';

    if (!empty($_GET)) {
        $fatturato_by_agent = $filtered['fatturato_by_agent'];
        header('Content-Type: application/json');
        echo json_encode($fatturato_by_agent);
    }
?>
