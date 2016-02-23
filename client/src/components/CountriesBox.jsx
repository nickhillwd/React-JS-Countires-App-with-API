var React = require('react');

var CountriesSelect = require('./CountriesSelect.jsx');
var CountryDisplayBox = require('./CountryDisplayBox.jsx');

var CountriesBox = React.createClass({
  
  getInitialState: function(){
    return { countries:[], currentCountry:null }
  },

  setCurrentCountry: function(country){
    this.setState({currentCountry: country});
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      // console.log("got API data: ", data);
      // console.log("CountriesBox this: ", this);
      this.setState( {countries: data, currentCountry: data[0]} );
    }.bind(this);
    //bind this makes sure this is kept as the state, rather than the response.onload
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h4> Countries Box </h4>
        <CountriesSelect onSelectCountry={this.setCurrentCountry} countries={this.state.countries}> </CountriesSelect>
        <CountryDisplayBox currentCountry={this.state.currentCountry} countries={this.state.countries}></CountryDisplayBox>
      </div>
    )
  }
});

module.exports = CountriesBox;