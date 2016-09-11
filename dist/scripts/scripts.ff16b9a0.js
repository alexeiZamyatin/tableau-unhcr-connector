!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){var d=c(8);d.init()},function(a,b){function c(a){for(var b in d)a[b]=d[b]}var d={phaseEnum:{interactivePhase:"interactive",authPhase:"auth",gatherDataPhase:"gatherData"},authPurposeEnum:{ephemeral:"ephemeral",enduring:"enduring"},authTypeEnum:{none:"none",basic:"basic",custom:"custom"},dataTypeEnum:{bool:"bool",date:"date",datetime:"datetime","float":"float","int":"int",string:"string"},columnRoleEnum:{dimension:"dimension",measure:"measure"},columnTypeEnum:{continuous:"continuous",discrete:"discrete"},aggTypeEnum:{sum:"sum",avg:"avg",median:"median",count:"count",countd:"count_dist"},geographicRoleEnum:{area_code:"area_code",cbsa_msa:"cbsa_msa",city:"city",congressional_district:"congressional_district",country_region:"country_region",county:"county",state_province:"state_province",zip_code_postcode:"zip_code_postcode",latitude:"latitude",longitude:"longitude"},unitsFormatEnum:{thousands:"thousands",millions:"millions",billions_english:"billions_english",billions_standard:"billions_standard"},numberFormatEnum:{number:"number",currency:"currency",scientific:"scientific",percentage:"percentage"},localeEnum:{america:"en-us",brazil:"pt-br",china:"zh-cn",france:"fr-fr",germany:"de-de",japan:"ja-jp",korea:"ko-kr",spain:"es-es"}};a.exports.apply=c},function(a,b){function c(a){this.nativeApiRootObj=a,this._initPublicInterface(),this._initPrivateInterface()}c.prototype._initPublicInterface=function(){console.log("Initializing public interface for NativeDispatcher"),this._submitCalled=!1;var a={};a.abortForAuth=this._abortForAuth.bind(this),a.abortWithError=this._abortWithError.bind(this),a.addCrossOriginException=this._addCrossOriginException.bind(this),a.log=this._log.bind(this),a.submit=this._submit.bind(this),this.publicInterface=a},c.prototype._abortForAuth=function(a){this.nativeApiRootObj.WDCBridge_Api_abortForAuth.api(a)},c.prototype._abortWithError=function(a){this.nativeApiRootObj.WDCBridge_Api_abortWithError.api(a)},c.prototype._addCrossOriginException=function(a){this.nativeApiRootObj.WDCBridge_Api_addCrossOriginException.api(a)},c.prototype._log=function(a){this.nativeApiRootObj.WDCBridge_Api_log.api(a)},c.prototype._submit=function(){return this._submitCalled?void console.log("submit called more than once"):(this._submitCalled=!0,void this.nativeApiRootObj.WDCBridge_Api_submit.api())},c.prototype._initPrivateInterface=function(){console.log("Initializing private interface for NativeDispatcher"),this._initCallbackCalled=!1,this._shutdownCallbackCalled=!1;var a={};a._initCallback=this._initCallback.bind(this),a._shutdownCallback=this._shutdownCallback.bind(this),a._schemaCallback=this._schemaCallback.bind(this),a._tableDataCallback=this._tableDataCallback.bind(this),a._dataDoneCallback=this._dataDoneCallback.bind(this),this.privateInterface=a},c.prototype._initCallback=function(){return this._initCallbackCalled?void console.log("initCallback called more than once"):(this._initCallbackCalled=!0,void this.nativeApiRootObj.WDCBridge_Api_initCallback.api())},c.prototype._shutdownCallback=function(){return this._shutdownCallbackCalled?void console.log("shutdownCallback called more than once"):(this._shutdownCallbackCalled=!0,void this.nativeApiRootObj.WDCBridge_Api_shutdownCallback.api())},c.prototype._schemaCallback=function(a,b){this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx?this.nativeApiRootObj.WDCBridge_Api_schemaCallbackEx.api(a,b||[]):this.nativeApiRootObj.WDCBridge_Api_schemaCallback.api(a)},c.prototype._tableDataCallback=function(a,b){this.nativeApiRootObj.WDCBridge_Api_tableDataCallback.api(a,b)},c.prototype._dataDoneCallback=function(){this.nativeApiRootObj.WDCBridge_Api_dataDoneCallback.api()},a.exports=c},function(a,b,c){function d(a,b,c){this.privateApiObj=b,this.globalObj=c,this._hasAlreadyThrownErrorSoDontThrowAgain=!1,this.changeTableauApiObj(a)}var e=c(5),f=c(1);d.prototype.init=function(){console.log("Initializing shared WDC"),this.globalObj.onerror=this._errorHandler.bind(this),this._initTriggerFunctions(),this._initDeprecatedFunctions()},d.prototype.changeTableauApiObj=function(a){this.tableauApiObj=a,this.tableauApiObj.makeConnector=this._makeConnector.bind(this),this.tableauApiObj.registerConnector=this._registerConnector.bind(this),f.apply(this.tableauApiObj)},d.prototype._errorHandler=function(a,b,c,d,e){if(console.error(e),this._hasAlreadyThrownErrorSoDontThrowAgain)return!0;var f=a;if(e?f+="   stack:"+e.stack:(f+="   file: "+b,f+="   line: "+c),!this.tableauApiObj||!this.tableauApiObj.abortWithError)throw f;return this.tableauApiObj.abortWithError(f),this._hasAlreadyThrownErrorSoDontThrowAgain=!0,!0},d.prototype._makeConnector=function(){var a={init:function(a){a()},shutdown:function(a){a()}};return a},d.prototype._registerConnector=function(a){for(var b=["init","shutdown","getSchema","getData"],c=b.length-1;c>=0;c--)if("function"!=typeof a[b[c]])throw"The connector did not define the required function: "+b[c];console.log("Connector registered"),this.globalObj._wdc=a,this._wdc=a},d.prototype._initTriggerFunctions=function(){this.privateApiObj.triggerInitialization=this._triggerInitialization.bind(this),this.privateApiObj.triggerSchemaGathering=this._triggerSchemaGathering.bind(this),this.privateApiObj.triggerDataGathering=this._triggerDataGathering.bind(this),this.privateApiObj.triggerShutdown=this._triggerShutdown.bind(this)},d.prototype._triggerInitialization=function(){this._wdc.init(this.privateApiObj._initCallback)},d.prototype._triggerSchemaGathering=function(){this._wdc.getSchema(this.privateApiObj._schemaCallback)},d.prototype._triggerDataGathering=function(a){if(1!=a.length)throw"Unexpected number of tables specified. Expected 1, actual "+a.length.toString();var b=a[0],c=new e(b.tableInfo,b.incrementValue,this.privateApiObj._tableDataCallback);this._wdc.getData(c,this.privateApiObj._dataDoneCallback)},d.prototype._triggerShutdown=function(){this._wdc.shutdown(this.privateApiObj._shutdownCallback)},d.prototype._initDeprecatedFunctions=function(){this.tableauApiObj.initCallback=this._initCallback.bind(this),this.tableauApiObj.headersCallback=this._headersCallback.bind(this),this.tableauApiObj.dataCallback=this._dataCallback.bind(this),this.tableauApiObj.shutdownCallback=this._shutdownCallback.bind(this)},d.prototype._initCallback=function(){this.tableauApiObj.abortWithError("tableau.initCallback has been deprecated in version 2.0.0. Please use the callback function passed to init")},d.prototype._headersCallback=function(a,b){this.tableauApiObj.abortWithError("tableau.headersCallback has been deprecated in version 2.0.0")},d.prototype._dataCallback=function(a,b,c){this.tableauApiObj.abortWithError("tableau.dataCallback has been deprecated in version 2.0.0")},d.prototype._shutdownCallback=function(){this.tableauApiObj.abortWithError("tableau.shutdownCallback has been deprecated in version 2.0.0. Please use the callback function passed to shutdown")},a.exports=d},function(a,b,c){function d(a){this.globalObj=a,this._initMessageHandling(),this._initPublicInterface(),this._initPrivateInterface()}d.prototype._initMessageHandling=function(){console.log("Initializing message handling"),this.globalObj.addEventListener("message",this._receiveMessage.bind(this),!1),this.globalObj.document.addEventListener("DOMContentLoaded",this._onDomContentLoaded.bind(this))},d.prototype._onDomContentLoaded=function(){if(this.globalObj.parent!==window&&this.globalObj.parent.postMessage(this._buildMessagePayload("loaded"),"*"),this.globalObj.opener)try{this.globalObj.opener.postMessage(this._buildMessagePayload("loaded"),"*")}catch(a){console.warn("Some versions of IE may not accurately simulate the Web Data Connector. Please retry on a Webkit based browser")}},d.prototype._packagePropertyValues=function(){var a={connectionName:this.globalObj.tableau.connectionName,connectionData:this.globalObj.tableau.connectionData,password:this.globalObj.tableau.password,username:this.globalObj.tableau.username,incrementalExtractColumn:this.globalObj.tableau.incrementalExtractColumn,versionNumber:this.globalObj.tableau.versionNumber,locale:this.globalObj.tableau.locale,authPurpose:this.globalObj.tableau.authPurpose};return a},d.prototype._applyPropertyValues=function(a){a&&(this.globalObj.tableau.connectionName=a.connectionName,this.globalObj.tableau.connectionData=a.connectionData,this.globalObj.tableau.password=a.password,this.globalObj.tableau.username=a.username,this.globalObj.tableau.incrementalExtractColumn=a.incrementalExtractColumn,this.globalObj.tableau.locale=a.locale,this.globalObj.tableau.language=a.locale,this.globalObj.tableau.authPurpose=a.authPurpose)},d.prototype._buildMessagePayload=function(a,b,c){var d={msgName:a,msgData:b,props:c,version:"2.0.8"};return JSON.stringify(d)},d.prototype._sendMessage=function(a,b){var c=this._buildMessagePayload(a,b,this._packagePropertyValues());if("undefined"!=typeof this.globalObj.webkit&&"undefined"!=typeof this.globalObj.webkit.messageHandlers&&"undefined"!=typeof this.globalObj.webkit.messageHandlers.wdcHandler)this.globalObj.webkit.messageHandlers.wdcHandler.postMessage(c);else{if(!this._sourceWindow)throw"Looks like the WDC is calling a tableau function before tableau.init() has been called.";this._sourceWindow.postMessage(c,"*")}},d.prototype._getPayloadObj=function(a){var b=null;try{b=JSON.parse(a)}catch(c){return null}return b},d.prototype._receiveMessage=function(a){console.log("Received message!");var b=this.globalObj._wdc;if(!b)throw"No WDC registered. Did you forget to call tableau.registerConnector?";var c=this._getPayloadObj(a.data);if(c){this._sourceWindow||(this._sourceWindow=a.source);var d=c.msgData;switch(this._applyPropertyValues(c.props),c.msgName){case"init":this.globalObj.tableau.phase=d.phase,this.globalObj._tableau.triggerInitialization();break;case"shutdown":this.globalObj._tableau.triggerShutdown();break;case"getSchema":this.globalObj._tableau.triggerSchemaGathering();break;case"getData":this.globalObj._tableau.triggerDataGathering(d.tablesAndIncrementValues)}}},d.prototype._initPublicInterface=function(){console.log("Initializing public interface"),this._submitCalled=!1;var a={};a.abortForAuth=this._abortForAuth.bind(this),a.abortWithError=this._abortWithError.bind(this),a.addCrossOriginException=this._addCrossOriginException.bind(this),a.log=this._log.bind(this),a.submit=this._submit.bind(this),this.publicInterface=a},d.prototype._abortForAuth=function(a){this._sendMessage("abortForAuth",{msg:a})},d.prototype._abortWithError=function(a){this._sendMessage("abortWithError",{errorMsg:a})},d.prototype._addCrossOriginException=function(a){console.log("Cross Origin Exception requested in the simulator. Pretending to work."),setTimeout(function(){this.globalObj._wdc.addCrossOriginExceptionCompleted(a)}.bind(this),0)},d.prototype._log=function(a){this._sendMessage("log",{logMsg:a})},d.prototype._submit=function(){this._sendMessage("submit")},d.prototype._initPrivateInterface=function(){console.log("Initializing private interface");var a={};a._initCallback=this._initCallback.bind(this),a._shutdownCallback=this._shutdownCallback.bind(this),a._schemaCallback=this._schemaCallback.bind(this),a._tableDataCallback=this._tableDataCallback.bind(this),a._dataDoneCallback=this._dataDoneCallback.bind(this),this.privateInterface=a},d.prototype._initCallback=function(){this._sendMessage("initCallback")},d.prototype._shutdownCallback=function(){this._sendMessage("shutdownCallback")},d.prototype._schemaCallback=function(a,b){this._sendMessage("_schemaCallback",{schema:a,standardConnections:b||[]})},d.prototype._tableDataCallback=function(a,b){this._sendMessage("_tableDataCallback",{tableName:a,data:b})},d.prototype._dataDoneCallback=function(){this._sendMessage("_dataDoneCallback")},a.exports=d},function(a,b){function c(a,b,c){this.tableInfo=a,this.incrementValue=b||"",this._dataCallbackFn=c,this.appendRows=this._appendRows.bind(this)}c.prototype._appendRows=function(a){return a?Array.isArray(a)?void this._dataCallbackFn(this.tableInfo.id,a):void console.warn("Table.appendRows must take an array of arrays or array of objects"):void console.warn("rows data is null or undefined")},a.exports=c},function(a,b){function c(a,b){for(var c in a)"function"==typeof a[c]&&(b[c]=a[c])}a.exports.copyFunctions=c},function(a,b,c){"use strict";function d(a,b,c){function f(a,b){var d=a[0],f=a[1];j[d]={connect:function(a){return"function"!=typeof a?void console.error("Bad callback given to connect to signal "+d):(j.__objectSignals__[f]=j.__objectSignals__[f]||[],j.__objectSignals__[f].push(a),void(b||"destroyed"===d||c.exec({type:e.connectToSignal,object:j.__id__,signal:f})))},disconnect:function(a){if("function"!=typeof a)return void console.error("Bad callback given to disconnect from signal "+d);j.__objectSignals__[f]=j.__objectSignals__[f]||[];var g=j.__objectSignals__[f].indexOf(a);return-1===g?void console.error("Cannot find connection of signal "+d+" to "+a.name):(j.__objectSignals__[f].splice(g,1),void(b||0!==j.__objectSignals__[f].length||c.exec({type:e.disconnectFromSignal,object:j.__id__,signal:f})))}}}function g(a,b){var c=j.__objectSignals__[a];c&&c.forEach(function(a){a.apply(a,b)})}function h(a){var b=a[0],d=a[1];j[b]=function(){for(var a,b=[],f=0;f<arguments.length;++f)"function"==typeof arguments[f]?a=arguments[f]:b.push(arguments[f]);c.exec({type:e.invokeMethod,object:j.__id__,method:d,args:b},function(b){if(void 0!==b){var c=j.unwrapQObject(b);a&&a(c)}})}}function i(a){var b=a[0],d=a[1],g=a[2];j.__propertyCache__[b]=a[3],g&&(1===g[0]&&(g[0]=d+"Changed"),f(g,!0)),Object.defineProperty(j,d,{get:function(){var a=j.__propertyCache__[b];return void 0===a&&console.warn('Undefined value in property cache for property "'+d+'" in object '+j.__id__),a},set:function(a){return void 0===a?void console.warn("Property setter for "+d+" called with undefined value!"):(j.__propertyCache__[b]=a,void c.exec({type:e.setProperty,object:j.__id__,property:b,value:a}))}})}this.__id__=a,c.objects[a]=this,this.__objectSignals__={},this.__propertyCache__={};var j=this;this.unwrapQObject=function(a){if(a instanceof Array){for(var b=new Array(a.length),e=0;e<a.length;++e)b[e]=j.unwrapQObject(a[e]);return b}if(!a||!a["__QObject*__"]||void 0===a.id)return a;var f=a.id;if(c.objects[f])return c.objects[f];if(!a.data)return void console.error("Cannot unwrap unknown QObject "+f+" without data.");var g=new d(f,a.data,c);return g.destroyed.connect(function(){if(c.objects[f]===g){delete c.objects[f];var a=[];for(var b in g)a.push(b);for(var d in a)delete g[a[d]]}}),g.unwrapProperties(),g},this.unwrapProperties=function(){for(var a in j.__propertyCache__)j.__propertyCache__[a]=j.unwrapQObject(j.__propertyCache__[a])},this.propertyUpdate=function(a,b){for(var c in b){var d=b[c];j.__propertyCache__[c]=d}for(var e in a)g(e,a[e])},this.signalEmitted=function(a,b){g(a,b)},b.methods.forEach(h),b.properties.forEach(i),b.signals.forEach(function(a){f(a,!1)});for(var a in b.enums)j[a]=b.enums[a]}var e={signal:1,propertyUpdate:2,init:3,idle:4,debug:5,invokeMethod:6,connectToSignal:7,disconnectFromSignal:8,setProperty:9,response:10},f=function(a,b){if("object"!=typeof a||"function"!=typeof a.send)return void console.error("The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: "+typeof a+", transport.send: "+typeof a.send);var c=this;this.transport=a,this.send=function(a){"string"!=typeof a&&(a=JSON.stringify(a)),c.transport.send(a)},this.transport.onmessage=function(a){var b=a.data;switch("string"==typeof b&&(b=JSON.parse(b)),b.type){case e.signal:c.handleSignal(b);break;case e.response:c.handleResponse(b);break;case e.propertyUpdate:c.handlePropertyUpdate(b);break;default:console.error("invalid message received:",a.data)}},this.execCallbacks={},this.execId=0,this.exec=function(a,b){return b?(c.execId===Number.MAX_VALUE&&(c.execId=Number.MIN_VALUE),a.hasOwnProperty("id")?void console.error("Cannot exec message with property id: "+JSON.stringify(a)):(a.id=c.execId++,c.execCallbacks[a.id]=b,void c.send(a))):void c.send(a)},this.objects={},this.handleSignal=function(a){var b=c.objects[a.object];b?b.signalEmitted(a.signal,a.args):console.warn("Unhandled signal: "+a.object+"::"+a.signal)},this.handleResponse=function(a){return a.hasOwnProperty("id")?(c.execCallbacks[a.id](a.data),void delete c.execCallbacks[a.id]):void console.error("Invalid response message received: ",JSON.stringify(a))},this.handlePropertyUpdate=function(a){for(var b in a.data){var d=a.data[b],f=c.objects[d.object];f?f.propertyUpdate(d.signals,d.properties):console.warn("Unhandled property update: "+d.object+"::"+d.signal)}c.exec({type:e.idle})},this.debug=function(a){c.send({type:e.debug,data:a})},c.exec({type:e.init},function(a){for(var f in a)var g=new d(f,a[f],c);for(var f in c.objects)c.objects[f].unwrapProperties();b&&b(c),c.exec({type:e.idle})})};a.exports={QWebChannel:f}},function(a,b,c){"use strict";function d(a,b){e.copyFunctions(a.publicInterface,window.tableau),e.copyFunctions(a.privateInterface,window._tableau),b.init()}var e=c(6),f=c(3),g=c(2),h=c(4),i=c(7);a.exports.init=function(){var a=null,b=null;window._tableau={},window.tableauVersionBootstrap?(console.log("Initializing NativeDispatcher, Reporting version number"),window.tableauVersionBootstrap.ReportVersionNumber("2.0.8"),a=new g(window)):window.qt&&window.qt.webChannelTransport?(console.log("Initializing NativeDispatcher for qwebchannel"),window.tableau={},window.channel=new i.QWebChannel(qt.webChannelTransport,function(c){console.log("QWebChannel created successfully"),window._tableau._nativeSetupCompleted=function(){a=new g(c.objects),window.tableau=c.objects.tableau,b.changeTableauApiObj(window.tableau),d(a,b)},c.objects.tableauVersionBootstrap.ReportVersionNumber("2.0.8")})):(console.log("Version Bootstrap is not defined, Initializing SimulatorDispatcher"),window.tableau={},a=new h(window)),b=new f(window.tableau,window._tableau,window),a&&d(a,b)}}]),angular.module("tableauUnhcrConnectorApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/unhcr-connector.html",controller:"ConnectorController",controllerAs:"vm"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("tableauUnhcrConnectorApp").controller("ConnectorController",["$q","$scope","$log","SchemaService","Stats","ApiService",function(a,b,c,d,e,f){function g(a,b,f){if(b==a.length)return f(i.tableSchemes),void c.debug(i.tableSchemes);var h=a[b],j={};h.params&&(j={},j[h.paramName.toLowerCase()]=h.paramValue);var k=e.queryParams(h.url,j);k.success(function(c){i.selectedData[h.id]=c;var e={id:h.id,alias:h.name};e.columns=d.createSchema(c[0]),i.tableSchemes.push(e),g(a,b+1,f)}).error(function(c){i.error=c,g(a,b+1,f)})}var h=tableau.makeConnector(),i=this;i.result=void 0,i.tableSchemes=[],i.error=void 0,i.apiCalls=f.getApis(function(){angular.forEach(i.apiCalls,function(a){a.sel=!1})}),i.selectedData={},i.workingSet=[],h.getSchema=function(a){g(i.apiCalls,0,a)},h.getData=function(a,b){a.appendRows(i.selectedData[a.tableInfo.id]),b()},tableau.registerConnector(h),i.submit=function(){for(var a=!1,b=0;b<i.apiCalls.length;b++)if(1==i.apiCalls[b].sel){a=!0;break}a?(tableau.connectionName="UNHCR API",tableau.submit()):i.error="Please select at least one dataset"},i.submitAll=function(){angular.forEach(i.apiCalls,function(a){a.sel=!0}),tableau.connectionName="UNHCR API",tableau.submit()}}]),angular.module("tableauUnhcrConnectorApp").controller("AboutCtrl",["$q","$scope","$log","SchemaService","Stats","ApiService",function(a,b,c,d,e,f){}]),angular.module("config",[]).constant("debug",!0).constant("UNHCR_API","http://data.unhcr.org/api/").constant("VERSION_INFO",{version:"0.0.demo",build:"demo build"}).constant("DEBUG",!0),angular.module("tableauUnhcrConnectorApp").service("Stats",["$http",function(a){var b=this;b.query=function(b){return a({method:"GET",url:"http://data.unhcr.org/api/"+b+"?",isArray:!0})},b.queryParams=function(b,c){return a({method:"GET",url:"http://data.unhcr.org/api/"+b+"?",isArray:!0,params:c})}}]).factory("MediterraneanDeaths",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/deaths.json",{},{query:{method:"GET",isArray:!0}})}]).factory("MediterraneanDemographics",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/demographics.json",{},{query:{method:"GET",isArray:!0}})}]).factory("MediterraneanOrigin",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/origin.json",{},{query:{method:"GET",isArray:!0}})}]).factory("MediterraneanMonthlyArrivalsByYear",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/arrivals_by_year.json",{},{query:{method:"GET",isArray:!0}})}]).factory("MediterraneanMonthlyArrivalsByLocation",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/monthly_arrivals_by_location.json",{},{query:{method:"GET",isArray:!0}})}]).factory("MediterraneanMonthlyArrivalsByCountry",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/monthly_arrivals_by_country.json",{},{query:{method:"GET",isArray:!0}})}]).service("TimeSeriesAllYears",["$http",function(a){var b=this;b.query=function(b){return a({method:"GET",url:"http://data.unhcr.org/api/stats/time_series_all_years.json?",isArray:!0,params:{population_type_code:b}})}}]).factory("TimeSeriesAll",["$resource",function(a){return a("http://data.unhcr.org/api/stats/time_series_years.json",{},{query:{method:"GET",isArray:!0}})}]).service("AsylumSeekers",["$http",function(a){var b=this;b.query=function(b){return a({method:"GET",url:"http://data.unhcr.org/api/stats/asylum_seekers.json?",isArray:!0,params:{year:b}})}}]).service("Demographics",["$http",function(a){var b=this;b.query=function(b){return a({method:"GET",url:"http://data.unhcr.org/api/stats/demographics.json?",isArray:!0,params:{year:b}})}}]).service("TimeSeries",["$http",function(a){var b=this;b.query=function(b){return a({method:"GET",url:"http://data.unhcr.org/api/stats/time_series.json?",isArray:!0,params:{year:b}})}}]).service("PersonsOfConcern",["$http",function(a){var b=this;b.query=function(b){return a({method:"GET",url:"http://data.unhcr.org/api/stats/persons_of_concern.json?",isArray:!0,params:{year:b}})}}]).factory("CountryOfAsylum",["$resource",function(a){return a("http://data.unhcr.org/api/stats/country_of_asylum.json",{},{query:{method:"GET",isArray:!0}})}]).factory("Origin",["$resource",function(a){return a("http://data.unhcr.org/api/stats/origin.json",{},{query:{method:"GET",isArray:!0}})}]).factory("CountryOfResidence",["$resource",function(a){return a("http://data.unhcr.org/api/stats/country_of_residence.json",{},{query:{method:"GET",isArray:!0}})}]).factory("MediterraneanCountries",["$resource",function(a){return a("http://data.unhcr.org/api/stats/mediterranean/countries.json",{},{query:{method:"GET",isArray:!0}})}]).factory("TimeSeriesPopulationTypes",["$resource",function(a){return a("http://data.unhcr.org/api/stats/time_series_population_types.json",{},{query:{method:"GET",isArray:!0}})}]).factory("ApiCalls",["$resource",function(a){return a("json/availableApiCalls.json")}]),angular.module("tableauUnhcrConnectorApp").service("SchemaService",["$log",function(a){"use strict";this.createSchema=function(a){var b=new RegExp("^[0-9]{4}(?:[\\-./][0-9]{1,2}){2}|(?:[0-9]{1,2}[\\-./]){2}[0-9]{4}$"),c=new RegExp("^[-+]?[0-9]+$"),d=new RegExp("^[-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?$"),e=new RegExp("^true|false$","i"),f=[];return angular.forEach(a,function(a,g){var h={id:g,alias:g};angular.isObject(a)||(c.test(a)?h.dataType=tableau.dataTypeEnum["int"]:d.test(a)?h.dataType=tableau.dataTypeEnum["float"]:e.test(a)?h.dataType=tableau.dataTypeEnum.bool:b.test(a)?h.dataType=tableau.dataTypeEnum.date:h.dataType=tableau.dataTypeEnum.string,f.push(h))}),f}}]),angular.module("tableauUnhcrConnectorApp").service("ApiService",["$log",function(a){"use strict";this.apis=[{name:"Country Of Residence",id:"country_of_residence",url:"stats/country_of_residence.json"},{name:"Origin",id:"origin",url:"stats/origin.json"},{name:"Persons Of Concern",id:"persons_of_concern",url:"stats/persons_of_concern.json",params:{year:2013},paramName:"Year",paramValue:2013},{name:"TimeSeries",id:"time_series",url:"stats/time_series.json",params:{year:2013},paramName:"Year",paramValue:2013},{name:"Demographics",id:"demographics",url:"stats/demographics.json",params:{year:2013},paramName:"Year",paramValue:2013},{name:"AsylumSeekers",id:"asylum_seekers",url:"stats/asylum_seekers.json",params:{year:2013},paramName:"Year",paramValue:2013},{name:"Time Series Population Types",id:"time_series_population_types",url:"stats/time_series_population_types.json"},{name:"Mediterranean Countries",id:"mediterranean_countries",url:"stats/mediterranean/countries.json"},{name:"Mediterranean Monthly Arrivals By Country",id:"mediterranean_monthly_arrivals_by_country",url:"stats/mediterranean/monthly_arrivals_by_country.json"},{name:"Mediterranean Monthly Arrivals By Location",id:"mediterranean_monthly_arrivals_by_location",url:"stats/mediterranean/monthly_arrivals_by_location.json"},{name:"Mediterranean Arrivals By Year",id:"mediterranean_arrivals_by_year",url:"stats/mediterranean/arrivals_by_year.json"},{name:"Mediterranean Origin",id:"mediterranean_origin",url:"stats/mediterranean/origin.json"},{name:"Mediterranean Demographics",id:"mediterranean_demographics",url:"stats/mediterranean/demographics.json"},{name:"Mediterranean Deaths",id:"mediterranean_deaths",url:"stats/mediterranean/deaths.json"}],this.getApis=function(){return this.apis}}]),angular.module("tableauUnhcrConnectorApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html",'<div class="row col-md-8 center-block"> <section class="main-content"> <h3> <p>Tableau UNHCR Connector can be used to import data from he UNHCR API straight into <a href="http://www.tableau.com/">Tableau</a></p> <footer class="site-footer"> <span class="site-footer-owner"><a href="https://github.com/alexeiZamyatin/tableau-unhcr-connector">Tableau-unhcr-connector</a> is maintained by <a href="https://github.com/alexeiZamyatin">alexeiZamyatin</a>.</span> <span class="site-footer-credits">This page was generated by <a href="https://pages.github.com">GitHub Pages</a> using the <a href="https://github.com/jasonlong/cayman-theme">Cayman theme</a> by <a href="https://twitter.com/jasonlong">Jason Long</a>.</span> </footer> </h3> </section> </div>'),a.put("views/unhcr-connector.html",'<div class="col-xs-12 large-bot-buffer"> <!-- /.row --> <div class="row col-md-8 center-block"> <h3 class="text-center">Please select the data you would like to retrieve</h3> <div class="col-md-12 center-block"> <div class="panel panel-default col-md-6 small-margin-bot" data-ng-repeat="apiCall in vm.apiCalls"> <div class="panel-body clearfix small-padding"> <div class="col-xs-12"> <div class="col-xs-6 form-control-static"> <label>{{apiCall.name}}</label> </div> <div class="col-xs-1 pull-right form-control-static"> <input type="checkbox" data-ng-click="apiCall.sel = true"> </div> <div data-ng-show="apiCall.params" class="col-xs-5 pull-right"> <p for="value" class="col-xs-2 control-label form-control-static">{{apiCall.paramName}}</p> <div class="col-xs-9 col-xs-offset-1 text-left"> <input type="text" class="form-control" id="value" data-ng-model="apiCall.paramValue" required> </div> </div> </div> </div> </div> <div class="col-xs-12 text-right small-margin-bottom"> <label data-ng-show="vm.error" class="red">{{vm.error}}</label> <button type="submit" class="btn btn-success" data-ng-click="vm.submit()">Download Selected</button> <button type="submit" class="btn btn-success" data-ng-click="vm.submitAll()">Download All</button> </div> </div> <!-- /.col-lg-4 --> </div> <!-- /.row --> </div>')}]);