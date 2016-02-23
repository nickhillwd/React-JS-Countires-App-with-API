var React = require('react');

// var currentCountry = this.props.currentCountry;

var CountryDisplayBox = React.createClass({

  handleClick: function(event){
    event.preventDefault();
    var countryName = event.target.innerText;
    var country = this.props.countries.find(function(country){
      if(country.name === countryName){
        return country
      }
    })
    this.props.updateCountry(country);
  },

  render: function(){
    var countriesArray = this.props.countries;

    if(!this.props.currentCountry){ return <h4> No Country Selected </h4>}

    if(this.props.currentCountry.borders.length > 0){
      var borderingCountries = this.props.currentCountry.borders.map(function(country, index){
        var borderAlpha3 = country;
        for(country of countriesArray){
          if(borderAlpha3 === country.alpha3Code){
            return <li key={index}><a href="#" onClick={this.handleClick}> {country.name} </a></li>
          }
        }
      }.bind(this));
    }else{
      var borderingCountries = <li> This Country Has No Friends </li>
    }

    return(
      <div>
        <h4> {this.props.currentCountry.name} </h4>
        <h4>Bordering Countries:</h4>
        <ul>
          {borderingCountries}
        </ul>
      </div>
    )
  }

});

module.exports = CountryDisplayBox;