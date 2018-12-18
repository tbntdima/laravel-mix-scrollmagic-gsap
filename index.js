const mix = require('laravel-mix');

class ScrollmagicGSAP {
    dependencies() {
        return ['gsap', 'scrollmagic'];
    }

    webpackConfig(webpackConfig) {
        webpackConfig.resolve.alias = Object.assign(
            webpackConfig.resolve.alias,
            {
                "TweenLite": path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/minified/TimelineLite.min.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js')
            }
        );
    }
}

mix.extend('scrollmagicGSAP', new ScrollmagicGSAP);
