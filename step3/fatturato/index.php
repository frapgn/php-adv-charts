<?php
    include '../permissions_filter.php';
    
    if (!empty($_GET)) {
        $fatturato = $filtered['fatturato'];
        header('Content-Type: application/json');
        echo json_encode($fatturato);
    }
?>
