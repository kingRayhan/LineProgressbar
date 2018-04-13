/**
* jQuery Line Progressbar
* Author: KingRayhan<rayhan095@gmail.com>
* Author URL: http://rayhan.info
* Version: 1.0.0
*/

(function ($) {
  'use strict';
  
  $.fn.LineProgressbar = function (options) {

    options = $.extend({
      percentage: null,
      min: null,
      max: null,
      value: null,
      unit: null,
      ShowProgressCount: true,
      duration: 1000,

      // Styling Options
      fillBackgroundColor: '#3498db',
      backgroundColor: '#EEEEEE',
      radius: '0px',
      height: '10px',
      width: '100%'
    }, options);

    $.options = options;
    return this.each(function (index, el) {
      // Markup
      $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');

      var progressFill = $(el).find('.proggress');
      var progressBar = $(el).find('.progressbar');

      progressFill.css({
        backgroundColor: options.fillBackgroundColor,
        height: options.height,
        borderRadius: options.radius
      });
      progressBar.css({
        width: options.width,
        backgroundColor: options.backgroundColor,
        borderRadius: options.radius
      });

      var widthValue = null;
      if(options.percentage != null) {
        widthValue = options.percentage
      } else {
        widthValue = ((options.value - options.min) / (options.max - options.min)) * 100
      }

      // Progressing
      progressFill.animate(
        {
          width: widthValue + "%"
        },
        {
          step: function (x) {
            if (options.ShowProgressCount) {
              if (options.percentage != null) {
                $(el).find(".percentCount").text(Math.round(x) + "%");
              } else {
                $(el).find(".percentCount").text(Math.round(x/100*(options.max - options.min)+options.min) + options.unit);
              }
            }
          },
          duration: options.duration
        }
      );
      ////////////////////////////////////////////////////////////////////
    });
  }
  $.fn.progressTo = function (options) {

    options = $.extend({
      percentage: null,
      min: null,
      max: null,
      value: null,
      unit: null,
      ShowProgressCount: true,
      duration: 1000,

      // Styling Options
      fillBackgroundColor: '#3498db',
      backgroundColor: '#EEEEEE',
      radius: '0px',
      height: '10px',
      width: '100%'
    }, options);

    $.options = options;
    return this.each(function (index, el) {

      var progressFill = $(el).find('.proggress');
      var progressBar = $(el).find('.progressbar');

      var widthValue = null;
      if(options.percentage != null) {
        widthValue = options.percentage
      } else {
        widthValue = ((options.value - options.min) / (options.max - options.min)) * 100
      }

      progressFill.animate(
        {
          width: widthValue + "%"
        },
        {
          step: function (x) {
            if (options.ShowProgressCount) {
              if (options.percentage != null) {
                $(el).find(".percentCount").text(Math.round(x) + "%");
              } else {
                $(el).find(".percentCount").text(Math.round(x/100*(options.max - options.min)+options.min) + options.unit);
              }
            }
          },
          duration: options.duration
        }
      );
      ////////////////////////////////////////////////////////////////////
    });
  }

})(jQuery);
