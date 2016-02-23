var React = require('react');

var CountriesSelect = React.createClass({

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

    var options = this.props.countries.map(function(country, index){
        return <option key={index}> {country.name} </option>
    })

    console.log(options)

    return(
      <div>
        <h4>Select Country from Countries</h4>
        <select>
          { options }
        </select>
      </div>
    )
  }
});

module.exports = CountriesSelect;