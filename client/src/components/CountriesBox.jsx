var React = require('react');

var CountriesBox = React.createClass({
  
  getInitialState: function(){
    return { countries:[], currentCountry:null }
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      console.log("got API data: ", data);
    }
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h4> Countries Box </h4>
      </div>
    )
  }
});

module.exports = CountriesBox;