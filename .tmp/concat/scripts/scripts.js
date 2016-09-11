/*! Build Number: 2.0.8 */
!function(t){function e(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var a=i(8);a.init()},function(t,e){function i(t){for(var e in a)t[e]=a[e]}var a={phaseEnum:{interactivePhase:"interactive",authPhase:"auth",gatherDataPhase:"gatherData"},authPurposeEnum:{ephemeral:"ephemeral",enduring:"enduring"},authTypeEnum:{none:"none",basic:"basic",custom:"custom"},dataTypeEnum:{bool:"bool",date:"date",datetime:"datetime","float":"float","int":"int",string:"string"},columnRoleEnum:{dimension:"dimension",measure:"measure"},columnTypeEnum:{continuous:"continuous",discrete:"discrete"},aggTypeEnum:{sum:"sum",avg:"avg",median:"median",count:"count",countd:"count_dist"},geographicRoleEnum:{area_code:"area_code",cbsa_msa:"cbsa_msa",city:"city",congressional_district:"congressional_district",country_region:"country_region",county:"county",state_province:"state_province",zip_code_postcode:"zip_code_postcode",latitude:"latitude",longitude:"longitude"},unitsFormatEnum:{thousands:"thousands",millions:"millions",billions_english:"billions_english",billions_standard:"billions_standard"},numberFormatEnum:{number:"number",currency:"currency",scientific:"scientific",percentage:"percentage"},localeEnum:{america:"en-us",brazil:"pt-br",china:"zh-cn",france:"fr-fr",germany:"de-de",japan:"ja-jp",korea:"ko-kr",spain:"es-es"}};t.exports.apply=i},function(t,e){function i(t){this.nativeApiRootObj=t,this._initPublicInterface(),this._initPrivateInterface()}i.prototype._initPublicInterface=function(){console.log("Initializing public interface for NativeDispatcher"),this._submitCalled=!1;var t={};t.abortForAuth=this._abortForAuth.bind(this),t.abortWithError=this._abortWithError.bind(this),t.addCrossOriginException=this._addCrossOriginException.bind(this),t.log=this._log.bind(this),t.submit=this._submit.bind(this),this.publicInterface=t},i.prototype._abortForAuth=function(t){this.nativeApiRootObj.WDCBridge_Api_abortForAuth.api(t)},i.prototype._abortWithError=function(t){this.nativeApiRootObj.WDCBridge_Api_abortWithError.api(t)},i.prototype._addCrossOriginException=function(t){this.nativeApiRootObj.WDCBridge_Api_addCrossOriginException.api(t)},i.prototype._log=function(t){this.nativeApiRootObj.WDCBridge_Api_log.api(t)},i.prototype._submit=function(){return this._submitCalled?void console.log("submit called more than once"):(this._submitCalled=!0,void this.nativeApiRootObj.WDCBridge_Api_submit.api())},i.prototype._initPrivateInterface=function(){console.log("Initializing private interface for NativeDispatcher"),this._initCallbackCalled=!1,this._shutdownCallbackCalled=!1;var t={};t._initCallback=this._initCallback.bind(this),t._shutdownCallback=this._shutdownCallback.bind(this),t._schemaCallback=this._schemaCallback.bind(this),t._tableDataCallback=this._tableDataCallback.bind(this),t._dataDoneCallback=this._dataDoneCallback.bind(this),this.privateInterface=t},i.prototype._initCallback=function(){return this._initCallbackCalled?void console.log("initCallback called more than once"):(this._initCallbackCalled=!0,void this.nativeApiRootObj.WDCBridge_Api_initCallback.api())},i.prototype._shutdownCallback=function(){return this._shutdownCallbackCalled?void console.log("shutdownCallback called more than once"):(this._shutdownCallbackCalled=!0,void this.nativeApiRootObj.WDCBridge_Api_shutdownCallback.api())},i.prototype._schemaCallback=function(t,e){this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx?this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx.api(t,e||[]):this.nativeApiRootObj.WDCBridge_Api_schemaCallback.api(t)},i.prototype._tableDataCallback=function(t,e){this.nativeApiRootObj.WDCBridge_Api_tableDataCallback.api(t,e)},i.prototype._dataDoneCallback=function(){this.nativeApiRootObj.WDCBridge_Api_dataDoneCallback.api()},t.exports=i},function(t,e,i){function a(t,e,i){this.privateApiObj=e,this.globalObj=i,this._hasAlreadyThrownErrorSoDontThrowAgain=!1,this.changeTableauApiObj(t)}var n=i(5),o=i(1);a.prototype.init=function(){console.log("Initializing shared WDC"),this.globalObj.onerror=this._errorHandler.bind(this),this._initTriggerFunctions(),this._initDeprecatedFunctions()},a.prototype.changeTableauApiObj=function(t){this.tableauApiObj=t,this.tableauApiObj.makeConnector=this._makeConnector.bind(this),this.tableauApiObj.registerConnector=this._registerConnector.bind(this),o.apply(this.tableauApiObj)},a.prototype._errorHandler=function(t,e,i,a,n){if(console.error(n),this._hasAlreadyThrownErrorSoDontThrowAgain)return!0;var o=t;if(n?o+="   stack:"+n.stack:(o+="   file: "+e,o+="   line: "+i),!this.tableauApiObj||!this.tableauApiObj.abortWithError)throw o;return this.tableauApiObj.abortWithError(o),this._hasAlreadyThrownErrorSoDontThrowAgain=!0,!0},a.prototype._makeConnector=function(){var t={init:function(t){t()},shutdown:function(t){t()}};return t},a.prototype._registerConnector=function(t){for(var e=["init","shutdown","getSchema","getData"],i=e.length-1;i>=0;i--)if("function"!=typeof t[e[i]])throw"The connector did not define the required function: "+e[i];console.log("Connector registered"),this.globalObj._wdc=t,this._wdc=t},a.prototype._initTriggerFunctions=function(){this.privateApiObj.triggerInitialization=this._triggerInitialization.bind(this),this.privateApiObj.triggerSchemaGathering=this._triggerSchemaGathering.bind(this),this.privateApiObj.triggerDataGathering=this._triggerDataGathering.bind(this),this.privateApiObj.triggerShutdown=this._triggerShutdown.bind(this)},a.prototype._triggerInitialization=function(){this._wdc.init(this.privateApiObj._initCallback)},a.prototype._triggerSchemaGathering=function(){this._wdc.getSchema(this.privateApiObj._schemaCallback)},a.prototype._triggerDataGathering=function(t){if(1!=t.length)throw"Unexpected number of tables specified. Expected 1, actual "+t.length.toString();var e=t[0],i=new n(e.tableInfo,e.incrementValue,this.privateApiObj._tableDataCallback);this._wdc.getData(i,this.privateApiObj._dataDoneCallback)},a.prototype._triggerShutdown=function(){this._wdc.shutdown(this.privateApiObj._shutdownCallback)},a.prototype._initDeprecatedFunctions=function(){this.tableauApiObj.initCallback=this._initCallback.bind(this),this.tableauApiObj.headersCallback=this._headersCallback.bind(this),this.tableauApiObj.dataCallback=this._dataCallback.bind(this),this.tableauApiObj.shutdownCallback=this._shutdownCallback.bind(this)},a.prototype._initCallback=function(){this.tableauApiObj.abortWithError("tableau.initCallback has been deprecated in version 2.0.0. Please use the callback function passed to init")},a.prototype._headersCallback=function(t,e){this.tableauApiObj.abortWithError("tableau.headersCallback has been deprecated in version 2.0.0")},a.prototype._dataCallback=function(t,e,i){this.tableauApiObj.abortWithError("tableau.dataCallback has been deprecated in version 2.0.0")},a.prototype._shutdownCallback=function(){this.tableauApiObj.abortWithError("tableau.shutdownCallback has been deprecated in version 2.0.0. Please use the callback function passed to shutdown")},t.exports=a},function(t,e,i){function a(t){this.globalObj=t,this._initMessageHandling(),this._initPublicInterface(),this._initPrivateInterface()}a.prototype._initMessageHandling=function(){console.log("Initializing message handling"),this.globalObj.addEventListener("message",this._receiveMessage.bind(this),!1),this.globalObj.document.addEventListener("DOMContentLoaded",this._onDomContentLoaded.bind(this))},a.prototype._onDomContentLoaded=function(){if(this.globalObj.parent!==window&&this.globalObj.parent.postMessage(this._buildMessagePayload("loaded"),"*"),this.globalObj.opener)try{this.globalObj.opener.postMessage(this._buildMessagePayload("loaded"),"*")}catch(t){console.warn("Some versions of IE may not accurately simulate the Web Data Connector. Please retry on a Webkit based browser")}},a.prototype._packagePropertyValues=function(){var t={connectionName:this.globalObj.tableau.connectionName,connectionData:this.globalObj.tableau.connectionData,password:this.globalObj.tableau.password,username:this.globalObj.tableau.username,incrementalExtractColumn:this.globalObj.tableau.incrementalExtractColumn,versionNumber:this.globalObj.tableau.versionNumber,locale:this.globalObj.tableau.locale,authPurpose:this.globalObj.tableau.authPurpose};return t},a.prototype._applyPropertyValues=function(t){t&&(this.globalObj.tableau.connectionName=t.connectionName,this.globalObj.tableau.connectionData=t.connectionData,this.globalObj.tableau.password=t.password,this.globalObj.tableau.username=t.username,this.globalObj.tableau.incrementalExtractColumn=t.incrementalExtractColumn,this.globalObj.tableau.locale=t.locale,this.globalObj.tableau.language=t.locale,this.globalObj.tableau.authPurpose=t.authPurpose)},a.prototype._buildMessagePayload=function(t,e,i){var a={msgName:t,msgData:e,props:i,version:"2.0.8"};return JSON.stringify(a)},a.prototype._sendMessage=function(t,e){var i=this._buildMessagePayload(t,e,this._packagePropertyValues());if("undefined"!=typeof this.globalObj.webkit&&"undefined"!=typeof this.globalObj.webkit.messageHandlers&&"undefined"!=typeof this.globalObj.webkit.messageHandlers.wdcHandler)this.globalObj.webkit.messageHandlers.wdcHandler.postMessage(i);else{if(!this._sourceWindow)throw"Looks like the WDC is calling a tableau function before tableau.init() has been called.";this._sourceWindow.postMessage(i,"*")}},a.prototype._getPayloadObj=function(t){var e=null;try{e=JSON.parse(t)}catch(i){return null}return e},a.prototype._receiveMessage=function(t){console.log("Received message!");var e=this.globalObj._wdc;if(!e)throw"No WDC registered. Did you forget to call tableau.registerConnector?";var i=this._getPayloadObj(t.data);if(i){this._sourceWindow||(this._sourceWindow=t.source);var a=i.msgData;switch(this._applyPropertyValues(i.props),i.msgName){case"init":this.globalObj.tableau.phase=a.phase,this.globalObj._tableau.triggerInitialization();break;case"shutdown":this.globalObj._tableau.triggerShutdown();break;case"getSchema":this.globalObj._tableau.triggerSchemaGathering();break;case"getData":this.globalObj._tableau.triggerDataGathering(a.tablesAndIncrementValues)}}},a.prototype._initPublicInterface=function(){console.log("Initializing public interface"),this._submitCalled=!1;var t={};t.abortForAuth=this._abortForAuth.bind(this),t.abortWithError=this._abortWithError.bind(this),t.addCrossOriginException=this._addCrossOriginException.bind(this),t.log=this._log.bind(this),t.submit=this._submit.bind(this),this.publicInterface=t},a.prototype._abortForAuth=function(t){this._sendMessage("abortForAuth",{msg:t})},a.prototype._abortWithError=function(t){this._sendMessage("abortWithError",{errorMsg:t})},a.prototype._addCrossOriginException=function(t){console.log("Cross Origin Exception requested in the simulator. Pretending to work."),setTimeout(function(){this.globalObj._wdc.addCrossOriginExceptionCompleted(t)}.bind(this),0)},a.prototype._log=function(t){this._sendMessage("log",{logMsg:t})},a.prototype._submit=function(){this._sendMessage("submit")},a.prototype._initPrivateInterface=function(){console.log("Initializing private interface");var t={};t._initCallback=this._initCallback.bind(this),t._shutdownCallback=this._shutdownCallback.bind(this),t._schemaCallback=this._schemaCallback.bind(this),t._tableDataCallback=this._tableDataCallback.bind(this),t._dataDoneCallback=this._dataDoneCallback.bind(this),this.privateInterface=t},a.prototype._initCallback=function(){this._sendMessage("initCallback")},a.prototype._shutdownCallback=function(){this._sendMessage("shutdownCallback")},a.prototype._schemaCallback=function(t,e){this._sendMessage("_schemaCallback",{schema:t,standardConnections:e||[]})},a.prototype._tableDataCallback=function(t,e){this._sendMessage("_tableDataCallback",{tableName:t,data:e})},a.prototype._dataDoneCallback=function(){this._sendMessage("_dataDoneCallback")},t.exports=a},function(t,e){function i(t,e,i){this.tableInfo=t,this.incrementValue=e||"",this._dataCallbackFn=i,this.appendRows=this._appendRows.bind(this)}i.prototype._appendRows=function(t){return t?Array.isArray(t)?void this._dataCallbackFn(this.tableInfo.id,t):void console.warn("Table.appendRows must take an array of arrays or array of objects"):void console.warn("rows data is null or undefined")},t.exports=i},function(t,e){function i(t,e){for(var i in t)"function"==typeof t[i]&&(e[i]=t[i])}t.exports.copyFunctions=i},function(t,e,i){"use strict";function a(t,e,i){function o(t,e){var a=t[0],o=t[1];c[a]={connect:function(t){return"function"!=typeof t?void console.error("Bad callback given to connect to signal "+a):(c.__objectSignals__[o]=c.__objectSignals__[o]||[],c.__objectSignals__[o].push(t),void(e||"destroyed"===a||i.exec({type:n.connectToSignal,object:c.__id__,signal:o})))},disconnect:function(t){if("function"!=typeof t)return void console.error("Bad callback given to disconnect from signal "+a);c.__objectSignals__[o]=c.__objectSignals__[o]||[];var r=c.__objectSignals__[o].indexOf(t);return r===-1?void console.error("Cannot find connection of signal "+a+" to "+t.name):(c.__objectSignals__[o].splice(r,1),void(e||0!==c.__objectSignals__[o].length||i.exec({type:n.disconnectFromSignal,object:c.__id__,signal:o})))}}}function r(t,e){var i=c.__objectSignals__[t];i&&i.forEach(function(t){t.apply(t,e)})}function s(t){var e=t[0],a=t[1];c[e]=function(){for(var t,e=[],o=0;o<arguments.length;++o)"function"==typeof arguments[o]?t=arguments[o]:e.push(arguments[o]);i.exec({type:n.invokeMethod,object:c.__id__,method:a,args:e},function(e){if(void 0!==e){var i=c.unwrapQObject(e);t&&t(i)}})}}function l(t){var e=t[0],a=t[1],r=t[2];c.__propertyCache__[e]=t[3],r&&(1===r[0]&&(r[0]=a+"Changed"),o(r,!0)),Object.defineProperty(c,a,{get:function(){var t=c.__propertyCache__[e];return void 0===t&&console.warn('Undefined value in property cache for property "'+a+'" in object '+c.__id__),t},set:function(t){return void 0===t?void console.warn("Property setter for "+a+" called with undefined value!"):(c.__propertyCache__[e]=t,void i.exec({type:n.setProperty,object:c.__id__,property:e,value:t}))}})}this.__id__=t,i.objects[t]=this,this.__objectSignals__={},this.__propertyCache__={};var c=this;this.unwrapQObject=function(t){if(t instanceof Array){for(var e=new Array(t.length),n=0;n<t.length;++n)e[n]=c.unwrapQObject(t[n]);return e}if(!t||!t["__QObject*__"]||void 0===t.id)return t;var o=t.id;if(i.objects[o])return i.objects[o];if(!t.data)return void console.error("Cannot unwrap unknown QObject "+o+" without data.");var r=new a(o,t.data,i);return r.destroyed.connect(function(){if(i.objects[o]===r){delete i.objects[o];var t=[];for(var e in r)t.push(e);for(var a in t)delete r[t[a]]}}),r.unwrapProperties(),r},this.unwrapProperties=function(){for(var t in c.__propertyCache__)c.__propertyCache__[t]=c.unwrapQObject(c.__propertyCache__[t])},this.propertyUpdate=function(t,e){for(var i in e){var a=e[i];c.__propertyCache__[i]=a}for(var n in t)r(n,t[n])},this.signalEmitted=function(t,e){r(t,e)},e.methods.forEach(s),e.properties.forEach(l),e.signals.forEach(function(t){o(t,!1)});for(var t in e.enums)c[t]=e.enums[t]}var n={signal:1,propertyUpdate:2,init:3,idle:4,debug:5,invokeMethod:6,connectToSignal:7,disconnectFromSignal:8,setProperty:9,response:10},o=function(t,e){if("object"!=typeof t||"function"!=typeof t.send)return void console.error("The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: "+typeof t+", transport.send: "+typeof t.send);var i=this;this.transport=t,this.send=function(t){"string"!=typeof t&&(t=JSON.stringify(t)),i.transport.send(t)},this.transport.onmessage=function(t){var e=t.data;switch("string"==typeof e&&(e=JSON.parse(e)),e.type){case n.signal:i.handleSignal(e);break;case n.response:i.handleResponse(e);break;case n.propertyUpdate:i.handlePropertyUpdate(e);break;default:console.error("invalid message received:",t.data)}},this.execCallbacks={},this.execId=0,this.exec=function(t,e){return e?(i.execId===Number.MAX_VALUE&&(i.execId=Number.MIN_VALUE),t.hasOwnProperty("id")?void console.error("Cannot exec message with property id: "+JSON.stringify(t)):(t.id=i.execId++,i.execCallbacks[t.id]=e,void i.send(t))):void i.send(t)},this.objects={},this.handleSignal=function(t){var e=i.objects[t.object];e?e.signalEmitted(t.signal,t.args):console.warn("Unhandled signal: "+t.object+"::"+t.signal)},this.handleResponse=function(t){return t.hasOwnProperty("id")?(i.execCallbacks[t.id](t.data),void delete i.execCallbacks[t.id]):void console.error("Invalid response message received: ",JSON.stringify(t))},this.handlePropertyUpdate=function(t){for(var e in t.data){var a=t.data[e],o=i.objects[a.object];o?o.propertyUpdate(a.signals,a.properties):console.warn("Unhandled property update: "+a.object+"::"+a.signal)}i.exec({type:n.idle})},this.debug=function(t){i.send({type:n.debug,data:t})},i.exec({type:n.init},function(t){for(var o in t)var r=new a(o,t[o],i);for(var o in i.objects)i.objects[o].unwrapProperties();e&&e(i),i.exec({type:n.idle})})};t.exports={QWebChannel:o}},function(t,e,i){"use strict";function a(t,e){n.copyFunctions(t.publicInterface,window.tableau),n.copyFunctions(t.privateInterface,window._tableau),e.init()}var n=i(6),o=i(3),r=i(2),s=i(4),l=i(7);t.exports.init=function(){var t=null,e=null;window._tableau={},window.tableauVersionBootstrap?(console.log("Initializing NativeDispatcher, Reporting version number"),window.tableauVersionBootstrap.ReportVersionNumber("2.0.8"),t=new r(window)):window.qt&&window.qt.webChannelTransport?(console.log("Initializing NativeDispatcher for qwebchannel"),window.tableau={},window.channel=new l.QWebChannel(qt.webChannelTransport,function(i){console.log("QWebChannel created successfully"),window._tableau._nativeSetupCompleted=function(){t=new r(i.objects),window.tableau=i.objects.tableau,e.changeTableauApiObj(window.tableau),a(t,e)},i.objects.tableauVersionBootstrap.ReportVersionNumber("2.0.8")})):(console.log("Version Bootstrap is not defined, Initializing SimulatorDispatcher"),window.tableau={},t=new s(window)),e=new o(window.tableau,window._tableau,window),t&&a(t,e)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLm1pbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9idW5kbGUubWluLmpzIl0sIm1hcHBpbmdzIjoiO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=

'use strict';

/**
 * @ngdoc overview
 * @name tableauUnhcrConnectorApp
 * @description
 * # tableauUnhcrConnectorApp
 *
 * Main module of the application.
 */
angular
  .module('tableauUnhcrConnectorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/unhcr-connector.html',
        controller: 'ConnectorController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';


angular.module('tableauUnhcrConnectorApp')
  .controller('ConnectorController', ["$q", "$scope", "$log", "SchemaService", "Stats", "ApiService", function ($q, $scope, $log, SchemaService, Stats, ApiService) {

    var myConnector = tableau.makeConnector();

    var vm = this;
    var scope = $scope;
    vm.result = undefined;
    vm.tableSchemes = [];

    vm.error = undefined;

    vm.apiCalls = ApiService.getApis(function(){
      angular.forEach(vm.apiCalls, function(apiCall){
        apiCall.sel = false;
      });
    });

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

      var dataSelected = false;
      for(var i = 0; i < vm.apiCalls.length; i++){
        if(vm.apiCalls[i].sel == true){
          dataSelected = true;
          break;
        }
      }

      if (dataSelected) {


        tableau.connectionName = "UNHCR API"; // This will be the data source name in Tableau
        tableau.submit(); // This sends the connector object to Tableau

        //performQuery(vm.apiCalls, 0, null);
      }else{
        vm.error = "Please select at least one dataset";
      }
    };

    vm.submitAll = function () {
      angular.forEach(vm.apiCalls, function (apiCall) {
        apiCall.sel = true;
      });
      tableau.connectionName = "UNHCR API"; // This will be the data source name in Tableau
      tableau.submit(); // This sends the connector object to Tableau
    };


    function performQuery(apiCalls, index, schemaCallback) {

      if (index == apiCalls.length) {
        schemaCallback(vm.tableSchemes);
        $log.debug(vm.tableSchemes);
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

  }]);

'use strict';


angular.module('tableauUnhcrConnectorApp')
  .controller('AboutCtrl', ["$q", "$scope", "$log", "SchemaService", "Stats", "ApiService", function ($q, $scope, $log, SchemaService, Stats, ApiService) {

  }]);

"use strict";

angular.module('config', [])

  .constant('debug', true)

  .constant('UNHCR_API', 'http://data.unhcr.org/api/')

  .constant('VERSION_INFO', {version:'0.0.demo',build:'demo build'})

  .constant('DEBUG', true)

;

/**
 * Created by alexe on 09.09.2016.
 */
/**
 GET stats/country_of_residence  Returns a list of countries of residence
 GET stats/origin  Returns a list of origins
 GET stats/country_of_asylum  Returns a list of countries of asylum
 GET stats/persons_of_concern  Returns statistics for persons of concern
 GET stats/time_series  Returns statistics for time series persons of concern
 GET stats/demographics  Returns statistics for demographics of persons of concern
 GET stats/asylum_seekers  Returns statistics for asylum seekers of persons of concern
 GET stats/time_series_population_types  Returns time series' population types
 GET stats/time_series_years  Returns time series' year
 GET stats/time_series_all_years  Returns statistics for time series data for all years
 GET stats/mediterranean/countries  Returns a list of mediterranean countries
 GET stats/mediterranean/monthly_arrivals_by_country  Returns a list of arrivals by country
 GET stats/mediterranean/monthly_arrivals_by_location  Returns a list of arrivals by location
 GET stats/mediterranean/arrivals_by_year  Returns a list arrivals by year
 GET stats/mediterranean/origin  Returns a list of origin and asylum countries
 GET stats/mediterranean/demographics  Returns demographics related to Mediterranean countries (men, women, children)
 GET stats/mediterranean/deaths  Returns a list of deaths by year
 */

'use strict';
angular.module('tableauUnhcrConnectorApp')

  .service('Stats', ["$http", function ($http) {
    var vm = this;
    vm.query = function (url) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/' + url +'?',
        isArray: true
      })
    };

    vm.queryParams = function(url, param){
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/' + url + '?',
        isArray: true,
        params: param
      })
    }

  }])

  .factory('MediterraneanDeaths', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/deaths.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('MediterraneanDemographics', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/demographics.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('MediterraneanOrigin', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/origin.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('MediterraneanMonthlyArrivalsByYear', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/arrivals_by_year.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])


  .factory('MediterraneanMonthlyArrivalsByLocation', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/monthly_arrivals_by_location.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('MediterraneanMonthlyArrivalsByCountry', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/monthly_arrivals_by_country.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])


  .service('TimeSeriesAllYears', ["$http", function ($http) {
    var vm = this;
    vm.query = function (code) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/time_series_all_years.json?',
        isArray: true,
        params: {population_type_code: code}
      })
    };

  }])

  .factory('TimeSeriesAll', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/time_series_years.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .service('AsylumSeekers', ["$http", function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/asylum_seekers.json?',
        isArray: true,
        params: {year: year}
      })
    };

  }])

  .service('Demographics', ["$http", function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/demographics.json?',
        isArray: true,
        params: {year: year}
      })
    };

  }])

  .service('TimeSeries', ["$http", function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/time_series.json?',
        isArray: true,
        params: {year: year}
      })
    };

  }])

  .service('PersonsOfConcern', ["$http", function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/persons_of_concern.json?',
        isArray: true,
        params: {year: year}
      })
    };

  }])

  .factory('CountryOfAsylum', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/country_of_asylum.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('Origin', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/origin.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('CountryOfResidence', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/country_of_residence.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  /**
   * For user interface selections
   */

  .factory('MediterraneanCountries', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/countries.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

  .factory('TimeSeriesPopulationTypes', ["$resource", function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/time_series_population_types.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }])

/**
 * JSON Files
 */

  .factory('ApiCalls', ["$resource", function ($resource) {
    return $resource('json/availableApiCalls.json');
  }]);






angular.module('tableauUnhcrConnectorApp')
  .service('SchemaService', ["$log", function($log) {
    'use strict';


    this.createSchema = function(data){
      var rDate =  new RegExp("^[0-9]{4}(?:[\\-./][0-9]{1,2}){2}|(?:[0-9]{1,2}[\\-./]){2}[0-9]{4}$");
      //new RegExp("^(?:\\s*(Sun|Mon|Tue|Wed|Thu|Fri|Sat),\\s*)?(0?[1-9]|[1-2][0-9]|3[01])\\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s+(19[0-9]{2}|[2-9][0-9]{3}|[0-9]{2})\\s+(2[0-3]|[0-1][0-9]):([0-5][0-9])(?::(60|[0-5][0-9]))?\\s+([-\\+][0-9]{2}[0-5][0-9]|(?:UT|GMT|(?:E|C|M|P)(?:ST|DT)|[A-IK-Z]))(\\s*\\((\\\\\\(|\\\\\\)|(?<=[^\\\\])\\((?<C>)|(?<=[^\\\\])\\)(?<-C>)|[^\\(\\)]*)*(?(C)(?!))\\))*\\s*$");
      var rInt = new RegExp("^[-+]?[0-9]+$");
      var rFloat = new RegExp("^[-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?$");
      var rBool = new RegExp("^true|false$", 'i');

      var tableauSchema = [];

      angular.forEach(data, function(value, key) {
        var schemaObj = {
          id: key,
          alias: key
        };
        if(!angular.isObject(value)){
          if(rInt.test(value)){
            schemaObj.dataType = tableau.dataTypeEnum.int;
          }else if(rFloat.test(value)){
            schemaObj.dataType = tableau.dataTypeEnum.float;
          }else if(rBool.test(value)){
            schemaObj.dataType = tableau.dataTypeEnum.bool;
          }else if(rDate.test(value)){
            schemaObj.dataType = tableau.dataTypeEnum.date;
          }else{
            // its a string
            schemaObj.dataType = tableau.dataTypeEnum.string;
          }
          tableauSchema.push(schemaObj)
        }else{
          // TODO: in version 2
        }
      });

      return tableauSchema;
    }



  }]);

angular.module('tableauUnhcrConnectorApp')
  .service('ApiService', ["$log", function($log) {
    'use strict';


    this.apis =
      [
        {
          "name": "Country Of Residence",
          "id": "country_of_residence",
          "url": "stats/country_of_residence.json"
        },
        {
          "name": "Origin",
          "id": "origin",
          "url": "stats/origin.json"
        },

        {
          "name": "Persons Of Concern",
          "id": "persons_of_concern",
          "url": "stats/persons_of_concern.json",
          "params": {"year": 2013},
          "paramName": "Year",
          "paramValue": 2013
        },
        {
          "name": "TimeSeries",
          "id": "time_series",
          "url": "stats/time_series.json",
          "params": {"year": 2013},
          "paramName": "Year",
          "paramValue": 2013
        },
        {
          "name": "Demographics",
          "id": "demographics",
          "url": "stats/demographics.json",
          "params": {"year": 2013},
          "paramName": "Year",
          "paramValue": 2013
        },
        {
          "name": "AsylumSeekers",
          "id": "asylum_seekers",
          "url": "stats/asylum_seekers.json",
          "params": {"year": 2013},
          "paramName": "Year",
          "paramValue": 2013
        },
        {
          "name": "Time Series Population Types",
          "id": "time_series_population_types",
          "url": "stats/time_series_population_types.json"
        },

        {
          "name": "Mediterranean Countries",
          "id": "mediterranean_countries",
          "url": "stats/mediterranean/countries.json"
        },
        {
          "name": "Mediterranean Monthly Arrivals By Country",
          "id": "mediterranean_monthly_arrivals_by_country",
          "url": "stats/mediterranean/monthly_arrivals_by_country.json"
        },
        {
          "name": "Mediterranean Monthly Arrivals By Location",
          "id": "mediterranean_monthly_arrivals_by_location",
          "url": "stats/mediterranean/monthly_arrivals_by_location.json"
        },
        {
          "name": "Mediterranean Arrivals By Year",
          "id": "mediterranean_arrivals_by_year",
          "url": "stats/mediterranean/arrivals_by_year.json"
        },
        {
          "name": "Mediterranean Origin",
          "id": "mediterranean_origin",
          "url": "stats/mediterranean/origin.json"
        },
        {
          "name": "Mediterranean Demographics",
          "id": "mediterranean_demographics",
          "url": "stats/mediterranean/demographics.json"
        },
        {
          "name": "Mediterranean Deaths",
          "id": "mediterranean_deaths",
          "url": "stats/mediterranean/deaths.json"
        }
      ];



    this.getApis = function(){
      return this.apis;
    }


  }]);

angular.module('tableauUnhcrConnectorApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"row col-md-8 center-block\"> <section class=\"main-content\"> <h3> <p>Tableau UNHCR Connector can be used to import data from he UNHCR API straight into <a href=\"http://www.tableau.com/\">Tableau</a></p> <footer class=\"site-footer\"> <span class=\"site-footer-owner\"><a href=\"https://github.com/alexeiZamyatin/tableau-unhcr-connector\">Tableau-unhcr-connector</a> is maintained by <a href=\"https://github.com/alexeiZamyatin\">alexeiZamyatin</a>.</span> <span class=\"site-footer-credits\">This page was generated by <a href=\"https://pages.github.com\">GitHub Pages</a> using the <a href=\"https://github.com/jasonlong/cayman-theme\">Cayman theme</a> by <a href=\"https://twitter.com/jasonlong\">Jason Long</a>.</span> </footer> </h3> </section> </div>"
  );


  $templateCache.put('views/unhcr-connector.html',
    "<div class=\"col-xs-12 large-bot-buffer\"> <!-- /.row --> <div class=\"row col-md-8 center-block\"> <h3 class=\"text-center\">Please select the data you would like to retrieve</h3> <div class=\"col-md-12 center-block\"> <div class=\"panel panel-default col-md-6 small-margin-bot\" data-ng-repeat=\"apiCall in vm.apiCalls\"> <div class=\"panel-body clearfix small-padding\"> <div class=\"col-xs-12\"> <div class=\"col-xs-6 form-control-static\"> <label>{{apiCall.name}}</label> </div> <div class=\"col-xs-1 pull-right form-control-static\"> <input type=\"checkbox\" data-ng-click=\"apiCall.sel = true\"> </div> <div data-ng-show=\"apiCall.params\" class=\"col-xs-5 pull-right\"> <p for=\"value\" class=\"col-xs-2 control-label form-control-static\">{{apiCall.paramName}}</p> <div class=\"col-xs-9 col-xs-offset-1 text-left\"> <input type=\"text\" class=\"form-control\" id=\"value\" data-ng-model=\"apiCall.paramValue\" required> </div> </div> </div> </div> </div> <div class=\"col-xs-12 text-right small-margin-bottom\"> <label data-ng-show=\"vm.error\" class=\"red\">{{vm.error}}</label> <button type=\"submit\" class=\"btn btn-success\" data-ng-click=\"vm.submit()\">Download Selected</button> <button type=\"submit\" class=\"btn btn-success\" data-ng-click=\"vm.submitAll()\">Download All</button> </div> </div> <!-- /.col-lg-4 --> </div> <!-- /.row --> </div>"
  );

}]);
