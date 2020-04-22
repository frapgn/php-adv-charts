<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <canvas id="line-chart" data-database=""></canvas>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    
    <script>
        $.ajax({
            url: 'server.php',
            method: 'GET',
            success: function(database) {
                buildLineChart(database);
            },
            error: function() {

            }
        });

        function buildLineChart(database) {
            var ctx = $('#line-chart');
            var lineChart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        label: 'Boh',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: database
                    }]
                }
            });
        }
    </script>


</body>
</html>

<?php



?>
