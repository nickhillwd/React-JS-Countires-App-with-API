var React = require('react');

// var currentCountry = this.props.currentCountry;

var CountryDisplayBox = React.createClass({

  render: function(){
    if(!this.props.currentCountry){ return <h4> No Country Selected </h4>}

    if(this.props.currentCountry.borders.length > 0){
      var borderingCountries = this.props.currentCountry.borders.map(function(country, index){
        return <p key={index}> {country} </p>
      })
    }else{
      var borderingCountries = <p>This Country Has No Friends</p>
    }

    return(
      <div>
        <h4> {this.props.currentCountry.name} </h4>
        {borderingCountries}
      </div>
    )
  }

});

module.exports = CountryDisplayBox;