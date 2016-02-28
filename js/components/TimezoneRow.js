/* @Flow */

import React, {Component} from 'react';
import moment from 'moment-timezone';
import styles from '../../css/app.scss';

moment.locale(navigator.language);
const MOMENT_TIME_FORMAT = 'LT';

export default class TimezoneRow extends Component {
  timezoneFormattedTime({timezoneString, date = Date.now()}) {
    return moment(date).tz(timezoneString).format(MOMENT_TIME_FORMAT);
  }

  render() {
    return (
      <tr>
        <td>{this.props.city}</td>
        <td>{this.props.region}</td>
        <td>{this.timezoneFormattedTime(this.props)}</td>
      </tr>
    );
  }

  static propTypes = {
    city: React.PropTypes.string.isRequired,
    region: React.PropTypes.string.isRequired,
    timezoneString: React.PropTypes.string.isRequired,
    time: React.PropTypes.number.isRequired
  }
}
