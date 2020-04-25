var mesi = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

$.ajax({
    url: 'fatturato/',
    method: 'GET',
    success: function(fatturato) {
        console.log(fatturato);
        var type = fatturato[0].type;
        var fatt = fatturato[0].data;
        var color = getRandomColor();
        buildLineChart(type, mesi, fatt, color);
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
        // console.log(fatturato_by_agent[0].data);

        var names = [];
        var fatt = [];
        for (var name in fatt4Agent) {
            names.push(name);
            fatt.push(fatt4Agent[name]);
        }
        console.log(names, fatt);
        var colors = [];

        for (var i = 0; i < names.length; i++) {
            colors.push(getRandomColor());
        }
        console.log(colors);

        buildPieChart($('#pie-chart'), type, names, fatt, colors);
    },
    error: function() {

    }
});

$.ajax({
    url: 'fatturato_by_agent_php/',
    method: 'GET',
    success: function(fatturato_by_agent_php) {
        console.log('fatturato_by_agent_php');
        console.log(fatturato_by_agent_php);

        var colors = [];

        for (var i = 0; i < 10; i++) {
            colors.push(getRandomColor());
        }

        buildPieChart($('#pie-chart-php'), fatturato_by_agent_php.tipo, fatturato_by_agent_php.nomi_agenti, fatturato_by_agent_php.fatturato_agenti, colors);
    },
    error: function() {

    }
});

var lol = "#"+((1<<24)*Math.random()|0).toString(16); // colore random da record

function buildLineChart(type, labels, data, bgColor) {
    var ctx = $('#line-chart');
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: 'Boh',
                backgroundColor: bgColor,
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        }
    });
}

function buildPieChart(selettore, type, labels, data, bgColors) {
    var ctx = selettore;
    console.log(selettore);
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
