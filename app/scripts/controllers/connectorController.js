'use strict';


angular.module('tableauUnhcrConnectorApp')
  .controller('ConnectorController', function ($q, $scope, $log, SchemaService, Stats, ApiCalls) {

    var myConnector = tableau.makeConnector();

    var vm = this;
    var scope = $scope;
    vm.result = undefined;
    vm.tableSchemes = [];

    vm.error = undefined;

    vm.apiCalls = ApiCalls.query();

    vm.selectedData = {};

    vm.workingSet = [];


    // Create the connector object


    // Download data and determine the schema
    myConnector.getSchema = function (schemaCallback) {

      performQuery(vm.apiCalls, 0, schemaCallback);

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

      //performQuery(vm.workingSet, 0, null);
    };

    vm.submitAll = function () {
      angular.forEach(vm.apiCalls, function (apiCall) {
        apiCall.selected = true;
      });
      vm.submit();
    };


    function performQuery(apiCalls, index, schemaCallback) {

      if (index == apiCalls.length) {
        schemaCallback(vm.tableSchemes);
        return;
      }

      var apiCall = apiCalls[index];

      var params = {};
      if (apiCall.params) {
        params = {};
        params[apiCall.paramName.toLowerCase()] = apiCall.paramValue;
      }

      var result = Stats.queryParams(apiCall.url, params);
      result.success(function (data) {

        vm.selectedData[apiCall.id] = data;

        var tableInfo = {
          id: apiCall.id,
          alias: apiCall.name
        };
        tableInfo.columns = SchemaService.createSchema(data[0]);
        vm.tableSchemes.push(tableInfo);

        performQuery(apiCalls, index + 1, schemaCallback)
      }).error(function (error) {
        // TODO: handle error
        vm.error = error;
        performQuery(apiCalls, index + 1, schemaCallback)
      });
    }

  });
