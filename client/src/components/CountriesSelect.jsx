var React = require('react');

var CountriesSelect = React.createClass({

  getInitialState: function(){
    return { selectedIndex: null }
  },

  handleChange: function(event){
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    var currentCountry = this.props.countries[newIndex];
    this.props.onSelectCountry(currentCountry);
  },

  render: function(){

    // var options = [];
    // var index = 0;
    // for(var country of this.props.countries){
    //   options.push(
    //     <option> {country.name} </option>
    //   )
    //  index++
    // }

    //map does exactly the same as the for of loop above, incledes an index aswell to keep react happy so each option tag has an index for it to refer to.

    var countryOptions = this.props.countries.map(function(country, index){
        return <option key={index} value={index}> {country.name} </option>
    })

    return(
      <div>
        <h4>Select Country from Countries</h4>
        <select value={this.state.selectedIndex} onChange={this.handleChange} >
          {countryOptions}
        </select>
      </div>
    )
  }
});

module.exports = CountriesSelect;