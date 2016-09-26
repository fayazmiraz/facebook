var displayTimeAdoption = function(containerId) {
    var url = '/node/activity/2/column';
    d3.json(url, function(something) {

        var chart = c3.generate({
            bindto: containerId,
            data: {
                x: 'x',
                columns: something,
                names: {
                    timeline: "Posts recorded",
                    refreshes: "Feed refreshes",
                    supporters: "Users don't coming back",
                    users: "Users submitting data"
                },
                axes: { 
                    timeline: 'y',
                    refreshes: 'y',
                    supporters: 'y2', 
                    users: 'y2' 
                },
                types: {
                    timeline: 'line',
                    refreshes: 'area',
                    supporters: 'bar',
                    users: 'spline'
                },
                labels: true,
                colors: {
                    timeline: '#afa3ae',
                    refreshes: '#8b9dc3',
                    supporters: '#ff6961',
                    users: '#3b5998'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                },
                y2: { show: true }
            }
        });
    });
};
