var _map;

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

            base[config.base[0].name].addTo(_map);

            L.control.layers(base, overlay, {
                collapsed: false
            }).addTo(_map);

            _map.setView(config.locations[0].center, config.locations[0].zoom);

            $.each(config.locations, function(key,location) {
                $('.locations').append('<li><a href="#" class="location" data-id="' + key + '">' + location.name + '</a></li>');
            });

            $('.location').on('click', function() {
                var key = parseInt($(this).attr('data-id'), 10);
                _map.setView(config.locations[key].center, config.locations[key].zoom);
            });

            $('.zoom').text('Zoom level ' + _map.getZoom());
            _map.on('zoomend', function() {
                $('.zoom').text('Zoom level ' + _map.getZoom());
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
