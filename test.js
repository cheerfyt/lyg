'use strict';

const l = require('./index');
const test = require('ava').test;

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

test('## export function', t => {
  t.pass(typeof l.i === 'function');
  t.pass(typeof l.e === 'function');
  t.pass(typeof l.w === 'function');
  t.pass(typeof l.l === 'function');
  t.pass(typeof l.t === 'function');
  t.pass(typeof l.d === 'function');
})





