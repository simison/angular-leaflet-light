(function () {
	'use strict';
	angular.module('example', ['angular-leaflet'])
	/*
	To provide default configuration to leaflet just use 
	leafletServiceProvider.settings
	 */
	.config(function config(leafletServiceProvider) {
		leafletServiceProvider.settings = {
			imagePath: '../../node_modules/leaflet/dist'
		};
	})
	.controller('ExampleCtrl', function ExampleCtrl($scope, leafletService) {
		var $ctrl = this;
		this.center = {};
		this.zoom = 0;
		this.getLeaflet = function(map) {
			this.leaflet = map;
			$ctrl.center = map.getCenter();
			$ctrl.zoom = map.getZoom();
			leafletService.on('move', onMove, map, $scope);
			leafletService.on('zoomend', onZoom, map, $scope);
		};
		this.centerOnParis = function () {
			this.leaflet.setView([48.85974578950385, 2.3448944091796875]);
		};
		function onMove(e) {
			$ctrl.center = e.target.getCenter();
		}
		function onZoom(e) {
			$ctrl.zoom = e.target.getZoom();
		}
	});
})();