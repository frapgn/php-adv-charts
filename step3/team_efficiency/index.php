<?php
    include '../permissions_filter.php';
    $team_efficiency = $filtered['team_efficiency'];
    header('Content-Type: application/json');
    echo json_encode($team_efficiency);
?>
