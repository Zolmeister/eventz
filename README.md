# Eventz

```html
<script src='eventz.js'></script>
```

```js
Events.on('test', function(t) {
  t === 123
})
Events.emit('test', 123)
Events.off('test')

// Specific functions can also be removed
var a = function(){}
Events.off('single', a)
```

### min

261 bytes (min)
186 bytes (min+gzip)


```
!function(){var n,t,e={};this.Events={on:function(n,t){(e[n]=e[n]||[]).push(t)},off:function(f,i){for(t=e[f]||[],n=t.length;n--;)i==t[n]&&t.splice(n,1);i||delete e[f]},emit:function(f){for(t=e[f]||[],n=t.length;n--;)t[n].apply(1,[].slice.call(arguments,1))}}}()
```
