requirejs.config({
    paths:{
        jquery: 'vendor/jquery',
        foundation: 'foundation/foundation',
        modernizr: 'vendor/custom.modernizr',
        dropdown: 'foundation/foundation.dropdown',
        alert: 'foundation/foundation.alerts',
        clearing: 'foundation/foundation.clearing',
        forms: 'foundation/foundation.forms',
        joyride: 'foundation/foundation.joyride',
        magellan: 'foundation/foundation.magellan',
        orbit: 'foundation/foundation.orbit',
        placeholder: 'foundation/foundation.placeholder',
        reveal: 'foundation/foundation.reveal',
        section: 'foundation/foundation.section',
        tooltips: 'foundation/foundation.tooltips',
        topbar: 'foundation/foundation.topbar'
    },
    shim: {
        foundation: {
            exports: 'Foundation',
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        },
        modernizr: {
            exports: 'Modernizr'
        },
        dropdown: {
            deps: ['foundation']
        },
        alert: {
            deps: ['foundation']
        },
        clearing: {
            deps: ['foundation']
        },
        forms: {
            deps: ['foundation']
        },
        joyride: {
            deps: ['foundation']
        },
        magellan: {
            deps: ['foundation']
        },
        orbit: {
            deps: ['foundation']
        },
        placeholder: {
            deps: ['foundation']
        },
        reveal: {
            deps: ['foundation']
        },
        section: {
            deps: ['foundation']
        },
        tooltips: {
            deps: ['foundation']
        },
        topbar: {
            deps: ['foundation']
        }
    }
});


define(function(require){
    var $ = require('jquery'),
        foundation = require('foundation'),
        Modernizr = require('modernizr'),
        alerts = require('alert'),
        clearing = require('clearing'),
        dropdown = require('dropdown'),
        fforms = require('forms'),
        fjoyride = require('joyride'),
        fmagellan = require('magellan'),
        forbit = require('orbit'),
        fplaceholder = require('placeholder'),
        freveal = require('reveal'),
        fsection = require('section'),
        ftooltips = require('tooltips'),
        ftopbar = require('topbar');
    $(document).foundation();

    // All your code comes here.

    return function() {};
});