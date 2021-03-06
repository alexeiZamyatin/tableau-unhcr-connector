angular.module('tableauUnhcrConnectorApp')
  .service('ApiService', function($log) {
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


  });
