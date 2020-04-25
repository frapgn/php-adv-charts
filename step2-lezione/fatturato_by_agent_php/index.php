<?php
    include '../data.php';
    $fatturato_by_agent = $graphs['fatturato_by_agent'];
    header('Content-Type: application/json');

    $processed_data = [];
    $processed_data['tipo'] = $fatturato_by_agent['type'];

    foreach ($fatturato_by_agent['data'] as $nomi => $fatturato) {
        $processed_data['nomi_agenti'][] = $nomi;
        $processed_data['fatturato_agenti'][] = $fatturato;
    }

    echo json_encode($processed_data);
?>
