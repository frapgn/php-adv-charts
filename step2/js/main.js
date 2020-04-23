$.ajax({
    url: 'fatturato/',
    method: 'GET',
    success: function(fatturato) {
        var type = fatturato[0].type;
        var fatt = fatturato[0].data;
        buildLineChart(type, fatt);
    },
    error: function() {

    }
});

$.ajax({
    url: 'fatturato_by_agent/',
    method: 'GET',
    success: function(fatturato_by_agent) {
        var type = fatturato_by_agent[0].type;
        var fatt4Agent = fatturato_by_agent[0].data;
        console.log(fatt4Agent);

        var names = [];
        var fatt = [];
        for (var name in fatt4Agent) {
            names.push(name);
            fatt.push(fatt4Agent[name]);
        }
        var colors = [];

        //iterare n volte dove n = lunghezza dell'oggetto
        //colors.push(getRandomColor);
        
        buildPieChart(type, fatt, names, colors);
    },
    error: function() {

    }
});

function buildLineChart(type, data) {
    var ctx = $('#line-chart');
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Boh',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        }
    });
}

function buildPieChart(type, data, labels, bgColors) {
    var ctx = $('#pie-chart');
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,
        data: {
            datasets: [{
                data: data,
                backgroundColor: bgColors
            }],
            labels: labels
        }
    });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
