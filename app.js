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

            _map.setView(config.location.center, config.location.zoom);
        },
        error: function () {
            console.log('Error with json!');
        }
    });
}

$(document).ready(function() {
    setTimeout('init()', 100);
});
