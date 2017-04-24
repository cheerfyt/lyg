lyg.js
========

lyg.js is console tool;

## usage

```javascirpt
'use strict';

const l = require('lyg');
const err = new Error('i am error')
l.l('log: %s', 'world');
l.i('info, %s-%d', 'info', 100);
l.w('waring: %d', 10);
l.e('err', err.message);
l.t('trace');
l.d({dir: 'YT'});
```

![screen](https://github.com/Tate-fan/lyg/blob/master/screenshot_01.png)

    l => log, i => info, w => warn, e => error, t => trace, d => dir
