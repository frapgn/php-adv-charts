<?php
    include '../data.php';
    $team_efficiency = $graphs['team_efficiency'];
    header('Content-Type: application/json');
    echo json_encode($team_efficiency);
?>
