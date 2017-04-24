'use strict';

const l = require('./index');
const util = require('util');
const path = require('path');
const err = new Error('i am error')
const obj = {
  name: 'YT',
  test: true,
  num: 10,
  date: new Date()
};

l.l('coming anonymous');
l.i('multi value - %s:%d ', 'info', 100);
l.w('waring: %d', 10);
l.e('%s', err.message);
l.d(obj);
l.d('Hello, %s | %s \n', 'YT', 'string');


function getInfo() {
  l.i('coming getInfo');
  l.l('multi: %s | %s', 'getInfo', true);
  l.w('waring: %d', 10);
  l.e('%s', err.message);
  l.d(obj);
  l.d('Hello, %s | %s \n', 'YT', 100);
}

getInfo();

l.t('the trace info');
