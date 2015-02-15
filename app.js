var _map;

function init() {

    _map = L.map('map');

    var layers = {};
    $.each(_config.layers, function(key,layer) {
        layers[layer.name] = L.tileLayer(layer.url, layer.options);
    });

    layers[_config.layers[0].name].addTo(_map);

    L.control.layers(layers,{}, {
        collapsed: false
    }).addTo(_map);

    _map.setView(_config.locations[0].center, _config.locations[0].zoom);

    $.each(_config.locations, function(key,location) {
        $('#locations').append('<li><a href="" class="location" data-id="' + key + '">' + location.name + '</a></li>');
    });

    $('.location').on('click', function() {
        var key = parseInt($(this).attr('data-id'));
        _map.setView(_config.locations[key].center, _config.locations[key].zoom);
        return false;
    });
}

$(document).ready(function() {
    setTimeout('init()',100);
});