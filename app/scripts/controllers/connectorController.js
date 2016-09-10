'use strict';


angular.module('tableauUnhcrConnectorApp')
  .controller('ConnectorController', function ($q, $scope, $log, SchemaService, TimeSeriesAll) {


    var vm = this;
    var scope = $scope;
    vm.result = undefined;

    vm.stats = [
      {
        "name": "mediterranean deaths",
        "value": "mediterranean_deaths"
      }
    ];

    vm.result = TimeSeriesAll.query('AS',function () {
      vm.tableInfo = {
        id: "mediterraneandeaths",
        alias: "mediterraneandeaths"
      };
      vm.tableInfo.columns = SchemaService.createSchema(vm.result[0]);

      $log.debug(vm.tableInfo);
      alert(vm.tableInfo);
      schemaCallback([vm.tableInfo]);

    }, function (error) {
      // TODO: handle error
      vm.error = error;
    });

    // Create the connector object
    var myConnector = tableau.makeConnector();


    // Download data and determine the schema
    myConnector.getSchema = function (schemaCallback) {


      vm.result = TimeSeriesAll.query('AS',function () {
        vm.tableInfo = {
          id: "mediterraneandeaths",
          alias: "mediterraneandeaths"
        };
        vm.tableInfo.columns = SchemaService.createSchema(vm.result[0]);

        $log.debug(vm.tableInfo);
        alert(vm.tableInfo);
        schemaCallback([vm.tableInfo]);

      }, function (error) {
        // TODO: handle error
        vm.error = error;
      });

    };

    // Set the data
    myConnector.getData = function (table, doneCallback) {
        table.appendRows(vm.result);
        doneCallback();
    };

    tableau.registerConnector(myConnector);


    vm.submit = function(){
      tableau.connectionName = "Deaths"; // This will be the data source name in Tableau
      tableau.submit(); // This sends the connector object to Tableau
    };



  });
