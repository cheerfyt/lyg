'use strict';
const l = require('./index');
const err = new Error('i am error')

l.l('log: %s', 'world');
l.i('info, %s-%d', 'info', 100);
l.w('waring: %d', 10);
l.e('err', err.message);
l.t('trace');
l.d({dir: 'YT'});
l.d('Hello, %s', 'YT');
