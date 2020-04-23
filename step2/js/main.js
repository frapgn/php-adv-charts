$.ajax({
    url: 'fatturato/',
    method: 'GET',
    success: function(fatturato) {
        var fatt = fatturato[0].data;
        console.log(fatt);
        buildLineChart(fatt);
    },
    error: function() {

    }
});

function buildLineChart(data) {
    var ctx = $('#line-chart');
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: data,
            datasets: [{
                label: 'Boh',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        }
    });
}
