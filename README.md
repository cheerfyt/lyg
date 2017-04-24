<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [lyg.js](#lygjs)
  - [usage](#usage)
  - [API](#api)
  - [format](#format)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

lyg.js
========

- lyg.js is a useful console logger tool;
- show time, level, shortFileName, lineNumber, functionName, Message

## usage

```javascirpt
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
```

![screen](https://github.com/Tate-fan/lyg/blob/master/screenshot_01.png?raw=true)

## API

```bash
$ l.i = console.info
$ l.l = console.log
$ l.e = console.error
$ l.w = console.warn
$ l.d = console.dir
$ l.t = console.trace
```

## format

```bash
$ [time]-[level]-[fileName]-[line]-[functionName]-msg: [message]
```
