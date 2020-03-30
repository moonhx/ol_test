
// 创建地图
function getMap (target) {
    return new ol.Map({
        target: target,
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: [0, 0],
            zoom: 4
        }),
        controls: ol.control.defaults({
            attribution: false
        })
    });
}