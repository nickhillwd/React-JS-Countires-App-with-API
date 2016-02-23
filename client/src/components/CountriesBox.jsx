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
      console.log("CountriesBox this: ", this);
      this.setState( {countries: data} );
    }.bind(this);
    //bind this makes sure this is kept as the state, rather than the response.onload
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