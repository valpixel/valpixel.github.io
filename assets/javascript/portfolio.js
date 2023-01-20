'use strict';

window.addEventListener("load", function () {
    app.titleChanger(['-', 'v',
        'v-', 'va',
        'va-', 'val',
        'val-', 'valp',
        'valp-', 'valpi',
        'valpi-', 'valpix',
        'valpix-', 'valpixe',
        'valpixe-', 'valpixel',
        'valpixe-', 'valpixe',
        'valpix-', 'valpix',
        'valpi-', 'valpi',
        'valp-', 'valp',
        'val-', 'val',
        'va-', 'va',
        'v-', 'v'], 250);

    const typed = new Typed('#anim_text', {
        strings: app.description,
        typeSpeed: 100,
        loop: true,
        shuffle: true,
    });
});