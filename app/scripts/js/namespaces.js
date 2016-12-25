var $__app_47_scripts_47_js_47_namespaces_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts/js/namespaces.js";
  var orsNamespaces = {};
  orsNamespaces.xls = 'http://www.opengis.net/xls';
  orsNamespaces.sch = 'http://www.ascc.net/xml/schematron';
  orsNamespaces.gml = 'http://www.opengis.net/gml';
  orsNamespaces.wps = 'http://www.opengis.net/wps/1.0.0';
  orsNamespaces.ows = 'http://www.opengis.net/ows/1.1';
  orsNamespaces.xlink = 'http://www.w3.org/1999/xlink';
  orsNamespaces.xsi = 'http://www.w3.org/2001/XMLSchema-instance';
  orsNamespaces.ascc = 'http://www.ascc.net/xml/schematron';
  orsNamespaces.aas = 'http://www.geoinform.fh-mainz.de/aas';
  orsNamespaces.gpx = 'http://www.topografix.com/GPX/1/1';
  orsNamespaces.xml = 'http://www.w3.org/XML/1998/namespace';
  orsNamespaces.xsd = 'http://www.w3.org/2001/XMLSchema';
  orsNamespaces.tcx = 'http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2';
  orsNamespaces.gml32 = 'http://www.opengis.net/gml/3.2';
  orsNamespaces.xs = 'http://www.w3.org/2001/XMLSchema';
  orsNamespaces.kml = 'http://www.opengis.net/kml/2.2';
  orsNamespaces.atom = 'http://www.w3.org/2005/Atom';
  orsNamespaces.xal = 'urn:oasis:names:tc:ciq:xsdschema:xAL:2.0';
  orsNamespaces.schemata = {
    directoryService: 'http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/DirectoryService.xsd',
    analyseService: 'http://www.geoinform.fh-mainz.de/aas',
    gatewayService: 'http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/GatewayService.xsd',
    locationUtilityService: 'http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/LocationUtilityService.xsd',
    presentationService: 'http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/PresentationService.xsd',
    routeService: 'http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/RouteService.xsd',
    wpsService: 'http://www.opengis.net/xls http://schemas.opengis.net/wps/1.0.0/wpsExecute_request.xsd',
    lineStringService: 'http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/base/geometryBasic0d1d.xsd',
    gpxService: 'http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd',
    tcxService: 'http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2 http://www.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd',
    kmlService: 'http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd'
  };
  orsNamespaces.services = {
    geocoding: 'http://129.206.228.124/geocoding',
    routing: 'http://129.206.228.124/routing',
    tmc: 'http://129.206.228.124/routing?tmc',
    analyse: 'http://129.206.228.124/analysis'
  };
  orsNamespaces.metadata = {
    name: 'OpenRouteService Route',
    description: 'Route exported using GIScience Universität Heidelberg OpenRouteService',
    authorName: 'GIScience Universität Heidelberg',
    authorEmailId: 'some_person',
    authorEmailDomain: 'geog.uni-heidelberg.de',
    copyright: 'OpenRouteService - GIScience Universität Heidelberg',
    license: 'MIT',
    link: 'http://www.geog.uni-heidelberg.de/gis/index_en.html',
    keywords: 'OpenRouteService. Routing. GIS. Universität Heidelberg',
    src: 'Route point logged using OpenRouteService'
  };
  orsNamespaces.layerWms = 'http://129.206.228.72/cached/osm?';
  orsNamespaces.layerMapSurfer = {};
  orsNamespaces.layerMapSurfer.url = 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}';
  orsNamespaces.layerMapSurfer.attribution = 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, powered by <a href="http://mapsurfernet.com/">MapSurfer.NET</a>';
  orsNamespaces.layerHs = 'http://korona.geog.uni-heidelberg.de/tiles/asterh/x={x}&y={y}&z={z}';
  orsNamespaces.layerOSM = {};
  orsNamespaces.layerOSM.url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  orsNamespaces.layerOSM.attribution = 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors';
  orsNamespaces.layerOSMCycle = {};
  orsNamespaces.layerOSMCycle.url = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';
  orsNamespaces.layerOSMCycle.attribution = 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors';
  orsNamespaces.layerStamen = {};
  orsNamespaces.layerStamen.url = 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';
  orsNamespaces.layerStamen.attribution = 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors';
  orsNamespaces.overlayTmc = {};
  orsNamespaces.overlayHillshade = {};
  orsNamespaces.overlayHillshade.url = 'http://korona.geog.uni-heidelberg.de/tiles/asterh/x={x}&y={y}&z={z}';
  return {};
})();
