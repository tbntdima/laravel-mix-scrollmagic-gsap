# Description
In order to make ScrollMagic work with GSAP (TweenLite / TweenMax, TimelineLite / TimelineMax), it is nesessary to include animation.gsap.js plugin ([scrollmagic docs](http://scrollmagic.io/docs/animation.GSAP.html)).

However sometimes it gets a bit tricky with webpack.

In order to save you time to configure webpack, I've created this extension.

# Installation & Usage
* Install extension with npm:
```
npm i laravel-mix-scrollmagic-gsap
```
* In your webpack.mix.js file:
```
require('laravel-mix-scrollmagic-gsap');

mix.scrollmagicGSAP();
```
* In your javascript file:
```
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// For development only
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
```
And that's it. You can freely use ScrollMagic with GSAP:
```
// Example
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
      duration: 50,
      offset: 50,
      triggerHook: 'onLeave'
})
.setTween(".foo", 2, {css: {y: 100}})
// For development only
.addIndicators({name: "2 (duration: 50)"})
.addTo(controller);
```
