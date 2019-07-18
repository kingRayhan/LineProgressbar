/**
 * jQuery Line Progressbar
 * Author: KingRayhan<rayhan095@gmail.com>
 * Author URL: https://electronthemes.com
 * Version: 1.1.2
 */

;(function($) {
    'use strict'

    $.fn.LineProgressbar = function(options) {
        options = $.extend(
            {
                percentage: 100,
                ShowProgressCount: true,
                duration: 1000,
                unit: '%',
                animation: true,
                // Styling Options
                fillBackgroundColor: '#3498db',
                backgroundColor: '#EEEEEE',
                radius: '0px',
                height: '10px',
                width: '100%',
            },
            options
        )

        $.options = options
        return this.each(function(index, el) {
            // Markup
            if ($(el).data("progress-init") === undefined)
                $(el).data("progress-init", options.percentage);

            let elementProgress = $(el).data("progress-init");            

            if (elementProgress === options.percentage) {
                $(el).html(
                    '<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>'
                )
            }

            var progressFill = $(el).find('.proggress')
            var progressBar = $(el).find('.progressbar')

            progressFill.css({
                backgroundColor: options.fillBackgroundColor,
                height: options.height,
                borderRadius: options.radius,
            })
            progressBar.css({
                width: options.width,
                backgroundColor: options.backgroundColor,
                borderRadius: options.radius,
            })

            /**
             * Progress with animation
             */
            if (options.animation) {
                // Progressing
                progressFill.animate(
                    {
                        width: options.percentage + '%',
                    },
                    {
                        step: function(x) {
                            if (options.ShowProgressCount) {
                                $(el)
                                    .find('.percentCount')
                                    .text(Math.round(x) + options.unit)
                            }
                        },
                        duration: options.duration,
                    }
                )
            } else {
                // Without animation
                progressFill.css('width', options.percentage + '%')
                $(el)
                    .find('.percentCount')
                    .text(Math.round(options.percentage) + '%')
            }
        })
    }
})(jQuery)

$('[line-progressbar]').each(function() {
    var $this = $(this)
    function LineProgressing() {
        $this.LineProgressbar({
            percentage: $this.data('percentage'),
            unit: $this.data('unit'),
            animation: $this.data('animation'),
            ShowProgressCount: $this.data('showcount'),
            duration: $this.data('duration'),
            fillBackgroundColor: $this.data('progress-color'),
            backgroundColor: $this.data('bg-color'),
            radius: $this.data('radius'),
            height: $this.data('height'),
            width: $this.data('width'),
        })
    }
    var loadOnce = 0
    $this.waypoint(
        function() {
            loadOnce += 1
            if (loadOnce < 2) {
                LineProgressing()
            }
        },
        { offset: '100%', triggerOnce: true }
    )
})
