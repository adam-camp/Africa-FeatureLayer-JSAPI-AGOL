require([
  "esri/Map", 
  "esri/views/MapView",  
  "esri/widgets/Legend",
  "esri/layers/FeatureLayer"
], (
  Map, 
  MapView, 
  Legend,
  FeatureLayer) => {
   var map = new Map({
       basemap: "topo-vector"
        });

    var view = new MapView({
        map: map, 
        container: "viewDiv",
        center: [0, -1],
        zoom: 3
      });
          view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
    
  var featureLayer_1 = new FeatureLayer({
    url: "https://services8.arcgis.com/zNrTBuYXV2f35M0U/arcgis/rest/services/Africa_Countries/FeatureServer"
  });
    map.add(featureLayer_1);

 });
