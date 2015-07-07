# qiita-team-tracker

qiita-team-tracker send tracking request to MixPanel on Qiita Team


## Usage

define `_QTT` variable for mixpanel token and load script file like below

```js

# contents
hello world


<script>var _QTT = {token: "<your mixpanel token>"};</script>
<script src="https://rawgit.com/evalphobia/qiita-team-tracker/master/tracker.js"></script>
```
