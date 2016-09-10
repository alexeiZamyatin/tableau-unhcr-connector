angular.module('tableauUnhcrConnectorApp')
  .service('SchemaService', function($log) {
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



  });
