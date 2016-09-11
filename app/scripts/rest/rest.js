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

  .service('Stats', function ($http) {
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

  })

  .factory('MediterraneanDeaths', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/deaths.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('MediterraneanDemographics', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/demographics.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('MediterraneanOrigin', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/origin.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('MediterraneanMonthlyArrivalsByYear', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/arrivals_by_year.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })


  .factory('MediterraneanMonthlyArrivalsByLocation', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/monthly_arrivals_by_location.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('MediterraneanMonthlyArrivalsByCountry', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/monthly_arrivals_by_country.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })


  .service('TimeSeriesAllYears', function ($http) {
    var vm = this;
    vm.query = function (code) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/time_series_all_years.json?',
        isArray: true,
        params: {population_type_code: code}
      })
    };

  })

  .factory('TimeSeriesAll', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/time_series_years.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .service('AsylumSeekers', function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/asylum_seekers.json?',
        isArray: true,
        params: {year: year}
      })
    };

  })

  .service('Demographics', function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/demographics.json?',
        isArray: true,
        params: {year: year}
      })
    };

  })

  .service('TimeSeries', function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/time_series.json?',
        isArray: true,
        params: {year: year}
      })
    };

  })

  .service('PersonsOfConcern', function ($http) {
    var vm = this;
    vm.query = function (year) {
      return $http({
        method: 'GET',
        url: 'http://data.unhcr.org/api/stats/persons_of_concern.json?',
        isArray: true,
        params: {year: year}
      })
    };

  })

  .factory('CountryOfAsylum', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/country_of_asylum.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('Origin', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/origin.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('CountryOfResidence', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/country_of_residence.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  /**
   * For user interface selections
   */

  .factory('MediterraneanCountries', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/mediterranean/countries.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

  .factory('TimeSeriesPopulationTypes', function ($resource) {
    return $resource('http://data.unhcr.org/api/stats/time_series_population_types.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  })

/**
 * JSON Files
 */

  .service('ApiCalls', function ($http) {
    var vm = this;
    vm.query = function () {
      return $http.jsonp('json/availableApiCalls.json?callback=JSON_CALLBACK')
    };
  });






