var React = require('react');

// var currentCountry = this.props.currentCountry;

var CountryDisplayBox = React.createClass({

  render: function(){
    if(!this.props.currentCountry){ return <h4> No Country Selected </h4>}
    return(
      <div>
        <h4> {this.props.currentCountry.name} </h4>
      </div>
    )
  }

});

module.exports = CountryDisplayBox;