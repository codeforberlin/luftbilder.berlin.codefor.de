var _map;

var _slider_opt = {
    start: [ 2018 ],          // most recent year +1
    direction: 'rtl',         // Put '0' at the bottom of the slider
    orientation: 'vertical',  // Orient the slider vertically
    behaviour: 'tap-drag',    // Move handle on tap, bar is draggable
    step: 150,
    range: {
        'min': [1928, 25],    // the second number are the years to the next step
        '10%': [1953, 51],
        '35%': [2004, 3],
        '50%': [2007, 3],
        '65%': [2010, 4],
        '80%': [2014, 2],
        '90%': [2016, 1],
        'max': 2017
    },
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
};

function init() {
    $.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function (config) {
            _map = L.map('map');

            var base = {};
            $.each(config.base, function(key, layer) {
                base[layer.name] = L.tileLayer(layer.url, layer.options);
            });

            var overlay = {};
            $.each(config.overlay, function(key,layer) {
                overlay[layer.name] = L.tileLayer(layer.url, layer.options);
            });

            var current_layer_name = config.base[0].name;
            base[current_layer_name].addTo(_map);

            var slider = document.getElementById('slider');

            noUiSlider.create(slider, _slider_opt);

            slider.noUiSlider.on('set', function() {
                var new_layer_name = Math.floor(this.get())

                _map.removeLayer(base[current_layer_name]);
                _map.addLayer(base[new_layer_name]);

                current_layer_name = new_layer_name;
            })

            _map.setView(config.location.center, config.location.zoom);

            $('#search > button').on('click', function() {
                var search_string = $('#search input').val();

                if (search_string) {
                    search_string += ' Berlin';
                    $.ajax({
                        url: 'https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(search_string),
                        dataType: 'json',
                        success: function (result) {
                            if (result.length > 0) {
                                _map.setView([result[0].lat, result[0].lon], 18)
                            }
                        }
                    });
                }
            });
        },
        error: function () {
            console.log('Error with json!');
        }
    });
}

$(document).ready(function() {
    setTimeout('init()', 100);
});
