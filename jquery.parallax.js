(function ($) {
	const defaults = { direction: 'top', ratio: 0.21 }

	$.fn.parallax = function (options) {
		if (this.length === 0) {
			return this
		}

		// support multiple elements
		if (this.length > 1) {
			this.each(function () {
				$(this).parallax(options)
			})
			return this
		}

		const parallax = {}

		// set a reference to our slider element
		const el = this

		// Return if slider is already initialized
		if ($(el).data('parallax')) {
			return
		}

		function init() {
			// Return if slider is already initialized
			if ($(el).data('parallax')) {
				return
			}
			// merge user-supplied options with the defaults
			parallax.settings = $.extend({}, defaults, options)

			$(window).on('scroll.parallax', () => {
				const value = `center ${parallax.settings.direction} ${-($(window).scrollTop() - (el.offset().top - window.innerHeight)) * parallax.settings.ratio}px`
				$(el).css('background-position', value)
			}).trigger('scroll.parallax')
		}

		init()

		$(el).data('parallax', this)

		// returns the current jQuery object
		return this
	}
})(jQuery)
