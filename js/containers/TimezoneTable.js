/* @Flow */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import getTimezones from '../utils/getTimezones';
import TimezoneRow from '../components/TimezoneRow';

class TimezoneTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Region</th>
            <th>Current time</th>
          </tr>
        </thead>
        <tbody>
          {getTimezones(this.props.filter).map((timezone, i) => <TimezoneRow key={i} {...timezone} time={this.props.time} />)}
        </tbody>
      </table>
    );
  }

  static propTypes = {
    // Time in epoch format.
    time: React.PropTypes.number.isRequired
  }
}

export default connect(state => state.TimezoneTableFilter)(TimezoneTable);
