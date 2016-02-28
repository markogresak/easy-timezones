/* @flow */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import * as TimezoneTick from '../actions/TimezoneTick';
// import styles from '../../css/app.scss';
import TimezoneTable from '../containers/TimezoneTable';

class Home extends Component {
  constructor(props) {
    super(props);
    TimezoneTick.initDispatch(this.props.dispatch);
    TimezoneTick.setTick();
  }

  render() {
    const {changeFilter} = bindActionCreators(HomeActions, this.props.dispatch);
    return (
      <main>
        <div>
          <input
            onChange={e => changeFilter(e.target.value)}
            placeholder="Filter timezones"
          />
        </div>
        <TimezoneTable time={this.props.time} />
      </main>
    );
  }

  componentWillUnmount() {
    TimezoneTick.unsetTick();
  }
}

export default connect(state => state.TimezoneTick)(Home);
