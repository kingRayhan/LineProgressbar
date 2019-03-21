/**
 * jQuery Line Progressbar
 * Author: KingRayhan<rayhan095@gmail.com>
 * Author URL: https://electronthemes.com
 * Version: 1.1.0
 */

;(function($) {
    'use strict'

    $.fn.LineProgressbar = function(options) {
        options = $.extend(
            {
                percentage: null,
                ShowProgressCount: true,
                duration: 1000,

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
            $(el).html(
                '<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>'
            )

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
                                .text(Math.round(x) + '%')
                        }
                    },
                    duration: options.duration,
                }
            )
        })
    }
})(jQuery)

$('[line-progressbar]').each(function() {
    var $this = $(this)
    function LineProgressing() {
        $this.LineProgressbar({
            percentage: $this.data('percentage'),
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
