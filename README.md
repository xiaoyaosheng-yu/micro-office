A micro office store.

## install
```
npm i micro-office
```

## Quick Start
```
import Vue from 'vue'
import MicroOffice from 'micro-office'

Vue.prototype.MicroOffice = new MicroOffice()
```

Or you can use it like this
```
import MicroOffice from 'micro-office'

const el = document.getElementById('table')
const microOffice = new MicroOffice()
microOffice.export({
  el,
  filename: '测试'
})
```

And you can use it like this
```
<script src="./dist/js/micro-office.js"></script>

var el = document.getElementsByTagName('table')[0];
var microOffice= new MicroOffice();
document.getElementById('excel').onclick = function () {
  microOffice.export({
    el,
    filename: '测试'
  });
}
```

The resources you can get from 'https://github.com/xiaoyaosheng-yu/Export-Excel/tree/master/dist/js'


## More functions are continuously updated, please wait.
......

If you find Element useful, please give me a star, thank you! Your appreciation is my best effort
