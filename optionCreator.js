var pieChartOptions = function(actualData , actualTitle = 'Sample Title'  , actualSeriesName = 'Sample Series' , ){
    return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: actualTitle
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: actualSeriesName,
                colorByPoint: true,
                data: actualData
            }]
        };
}