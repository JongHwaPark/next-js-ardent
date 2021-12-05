import React, { useState, Fragment, useEffect, useRef } from 'react';
import * as RobotApi from '../../lib/Robot';
import { setBattery, setStatus } from '../../modules/reducers/monitoringData';

class DataCollector {
  constructor() {
    this.init();
    this.prevBetterData = {
      voltage: 0,
      current: 0,
      percent: 0,
      chargeTime: 0,
      dischargeTime: 0,
      temperature: 0
    };
  }

  init() {
    try {
      this.batteryInfo();
      this.statusInfo();
      setInterval(this.batteryInfo.bind(this), 5000);
      setInterval(this.statusInfo.bind(this), 1000);
    } catch (err) {
      console.log(err);
    }
  }

  isEqualData(prev, current) {
    for (let key in prev) {
      if (prev[key] !== current[key]) return false;
    }
    return true;
  }

  async batteryInfo() {
    const battery = await RobotApi.battery();
    if (!this.isEqualData(this.prevBetterData, battery)) {
      this.store.dispatch(setBattery(battery));
      this.prevBetterData = battery;
    }
  }

  async statusInfo() {
    const status = await RobotApi.status();
    this.store.dispatch(setStatus(status));
  }

  injectStore(store) {
    this.store = store;
    console.log('injectStore', store)
    console.log(this);
  };
}

export default new DataCollector();
