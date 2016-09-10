'use strict';


angular.module('tableauUnhcrConnectorApp')
  .controller('ConnectorController', function ($q, $scope, $log, SchemaService, Stats, ApiCalls) {


    var vm = this;
    var scope = $scope;
    vm.result = undefined;


    vm.apiCalls = ApiCalls.query(function () {
      vm.selected = [].concat(angular.copy(vm.apiCalls));

      vm.tableSchemes = [];

      vm.promises = [];

      performQuery(vm.selected, 0);

    });

    vm.selectedData = {};


    // Create the connector object
    var myConnector = tableau.makeConnector();


    // Download data and determine the schema
    myConnector.getSchema = function (schemaCallback) {

      var tableSchemes = [];

      var promises = [];
      angular.forEach(vm.selected, function (apiCall) {

        var params = {};
        if (apiCall.params) {
          params = apiCall.params;
        }

        vm.result = Stats.queryParams(apiCall.url, params);
        vm.result.success(function (data) {

          vm.selectedData[apiCall.id] = data;

          var tableInfo = {
            id: apiCall.id,
            alias: apiCall.name
          };
          tableInfo.columns = SchemaService.createSchema(data[0]);
          tableSchemes.push(tableInfo);

        }).error(function (error) {
          // TODO: handle error
          vm.error = error;
        });

        promises.push(vm.result);
      });

      $q.all(promises).then(
        function () {
          schemaCallback(tableSchemes)
        }
      );
    };


    // Set the data
    myConnector.getData = function (table, doneCallback) {

      table.appendRows(vm.selectedData[table.tableInfo.id]);
      doneCallback();
    };

    tableau.registerConnector(myConnector);


    vm.submit = function () {
      tableau.connectionName = "UNHCR API"; // This will be the data source name in Tableau
      tableau.submit(); // This sends the connector object to Tableau
    };


    function performQuery(apiCalls, index){

      if(index == apiCalls.length) {
        //schemaCallback(vm.tableSchemes)
        return;
      }

      var apiCall = apiCalls[index];

      var params = {};
      if (apiCall.params) {
        params = apiCall.params;
      }

      var result = Stats.queryParams(apiCall.url, params);
      result.success(function (data) {

        vm.selectedData[apiCall.id] = data;

        var tableInfo = {
          id: apiCall.id,
          alias: apiCall.name
        };
        $log.debug(data[0]);
        tableInfo.columns = SchemaService.createSchema(data[0]);
        vm.tableSchemes.push(tableInfo);

        performQuery(apiCalls, index + 1)
      }).error(function (error) {
        // TODO: handle error
        vm.error = error;
        performQuery(apiCalls, index + 1)
      });


    }

  });
