import React, { Component } from 'react';
import { connect } from "react-redux";
import Device from '../components/Device';
import { DEVICES } from '../actions';
import ListOPtions from '../components/ListOptions';
import { filter } from '../methods'


class ListDevices extends Component {
  componentDidMount() {
    this.props.getDevices()
  }

  render() {
    const { devices, filter_by} = this.props
    const arr = filter(devices,"type", filter_by)
    console.log(this.props.globalstate)

    return (
      <div className="list-box">
        <ListOPtions />
        <div className="list-devices-main">
          <div className="list-devices">
            {
              arr.map((device) => <Device data={device} key={device.id} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  globalstate: state,
  devices: state.devicesReducer.devices,
  fil_devices: state.devicesReducer.fil_devices,
  filter_by: state.devicesReducer.filter_by,
});
const mapDispatchToProps = dispatch => DEVICES(dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListDevices);