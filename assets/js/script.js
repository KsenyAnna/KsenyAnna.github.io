/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

/**
 * Modules
 */

const app = {
  ready() {},
  load() {},
  resize() {},
  scroll() {},
};

$(() => {
  app.ready();

  $(window)
    .on('load', app.load)
    .on('resize', app.resize)
    .on('scroll', app.scroll);
});
