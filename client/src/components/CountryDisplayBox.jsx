var React = require('react');

// var currentCountry = this.props.currentCountry;

var CountryDisplayBox = React.createClass({

  render: function(){
    var countriesArray = this.props.countries;

    if(!this.props.currentCountry){ return <h4> No Country Selected </h4>}

    if(this.props.currentCountry.borders.length > 0){
      var borderingCountries = this.props.currentCountry.borders.map(function(country, index){
        var borderAlpha3 = country;
        for(country of countriesArray){
          if(borderAlpha3 === country.alpha3Code){
            return country.name
          }
        }
        return <li key={index}> {country.name} </li>
      });
    }else{
      var borderingCountries = <li> This Country Has No Friends </li>
    }

    return(
      <div>
        <h4> {this.props.currentCountry.name} </h4>
        <ul>
          {borderingCountries}
        </ul>
      </div>
    )
  }

});

module.exports = CountryDisplayBox;