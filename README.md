# Jquery Line Progress Bar
A light weight jquery progressbar plugin

## Demos and Docs
https://kingrayhan.github.io/LineProgressbar/demos.html






##### Include
```html
<!-- In header -->
<link rel="stylesheet" href="jquery.lineProgressbar.css">

<!-- In footer -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="jquery.lineProgressbar.min.js"></script>
```

<br>

##### Set HTML
You don't need any special markup. All you need is to give a `class` or `id` selector to a `div`. 
```html
<div id="progressbar1"></div>
```
<br>

##### Call the plugin
Now call the Line Progress Bar initializer function and your progress bar is ready.
```js
$('#progressbar1').LineProgressbar();
```


### Plugin Options
> List including all options.

| Variable | Default | Type | Description |
| --- | --- | --- | --- | 
| percentage | `null` | int | Defines the progressbar progress percentage. |
| ShowProgressCount | `true` | boolean | Defines whather you want to show percent counter or not. |
| duration  | `1000` | int | Specifies the speed of the progressing. Default value is 1000 milliseconds. <br> **Possible values:** <br> milliseconds (like 100, 1000, 5000, etc) <br> "slow" <br> "fast" <br> |
| fillBackgroundColor  | `'#3498db'` | string | Defines progressbar fill background color. |
| backgroundColor  | `'#EEEEEE'` | string | Defines progressbar background color. |
| radius  | `'0px'` | string | Defines progressbar radiusness. |
| height  | `'10px'` | string | Defines progressbar height. |
| width  | `'100%'` | string | Defines progressbar width. |


<br>
<br>
<br>
<br>

# FAQ

**Can I use it for free?** _Answer_: Yes

**Can I use it for commerce project?** _Answer_: Yes

**Has it any licence?** _Answer_: Yes , it's under **MIT LICENCE**. [Check here](https://github.com/kingRayhan/LineProgressbar/blob/master/LICENSE)

**Can i ask for a new functionality?** _Answer_: Yes! Go to Github [issues page](https://github.com/kingRayhan/LineProgressbar/issues) and ask for a feature.

**What's new in latest release?** _Answer_: See Changelog.
