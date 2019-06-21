var _map,
    _layers = {};

var _slider_opt = {
    start: [ 2019 ],          // most recent year +1
    direction: 'rtl',         // Put '0' at the bottom of the slider
    orientation: 'vertical',  // Orient the slider vertically
    behaviour: 'tap-drag',    // Move handle on tap, bar is draggable
    step: 150,
    range: {
        'min': [1928, 25],    // the second number are the years to the next step
        '10%': [1953, 51],
        '45%': [2004, 3],
        '55%': [2007, 3],
        '65%': [2010, 4],
        '75%': [2014, 1],
        '80%': [2015, 1],
        '85%': [2016, 1],
        '90%': [2017, 1],
        '95%': [2018, 1],
        'max': 2019
    },
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
};

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function get_json(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var json = JSON.parse(request.responseText);
        callback(json);
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}

function init_map(config) {
    _map = L.map('map');

    config.base.forEach(function(layer) {
        _layers[layer.name] = L.tileLayer(layer.url, layer.options);
    });

    _current_layer_name = 2017
    _layers[_current_layer_name].addTo(_map);

    _map.setView(config.view.center, config.view.zoom);
}

function init_slider() {
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, _slider_opt);

    slider.noUiSlider.on('set', function() {
        var new_layer_name = Math.floor(this.get())

        _map.removeLayer(_layers[_current_layer_name]);
        _map.addLayer(_layers[new_layer_name]);

        _current_layer_name = new_layer_name;
    });
}

function init_search() {
    var search = document.getElementById('search-button');
    search.addEventListener('click', function() {
        var search_string = document.getElementById('search-input').value;
        if (search_string) {
            search_string += ' Berlin';

            get_json('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(search_string), function(result) {
                    if (result.length > 0) {
                        _map.setView([result[0].lat, result[0].lon], 18)
                    }
            });
        }
    });
}

ready(function() {
    get_json('config.json', function(result) {
        init_map(result);
        init_slider();
        init_search();
    });
});
