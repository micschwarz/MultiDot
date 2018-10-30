# MultiDot
Small libary for multiline elipsis (Compatible with jQuery)

## Get Started (Use)

### HTML

```html
<div id="multidot">
    <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet eligendi eos ex praesentium qui quisquam
        tempore. Laborum quisquam repudiandae sapiente. Aut, consequuntur dolor eius harum minima non reiciendis.
        Beatae?
    </div>
</div>

<!-- STYLE -->
<style>
#multidot {
    width    : 150px;
    height   : 100px;
    overflow : hidden;
}
</style>

```

### Javascript
```js
// Vanilla JS
new MultiDot(document.getElementById('multidot'));

// jQuery
new MultiDot($('#multidot'));
```

## Get Started (Developement)

Run `npm install --only-dev` (Node & NPM required)

## Build

- With ES5-Compatibility (IE supported): `npm run build`
- Without ES5-Compatibility (smaller file): `npm run buildbabelless`
