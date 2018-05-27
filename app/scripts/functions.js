export default {
	ready () {
		// Call this function each time a route visited.

		// Add blue animated border and remove with condition when focus and blur.
		if ( $('.fg-line')[0]) {
			$('body').on('focus', '.fg-line .form-control', function () {
				$(this).closest('.fg-line')
					.addClass('fg-toggled');
			});

			$('body').on('blur', '.form-control', function () {
				const ptag = $(this).closest('.form-group, .input-group');
				const itag = ptag.find('.form-control').val();

				if (ptag.hasClass('fg-float')) {
					if (itag.length === 0) {
						$(this).closest('.fg-line')
							.removeClass('fg-toggled');
					}
				}
				else {
					$(this).closest('.fg-line')
						.removeClass('.fg-toggled');
				}
			});
		}

		// Add blue border for pre0valued fg-float text feilds
		if ($('.fg-float')[0]) {
		    $('.fg-float .form-control').each( function () {
		        const ilist = $(this).val();

		        if (!ilist.length === 0) {
		            $(this).closest('.fg-line')
						.addClass('fg-toggled');
				}
			});
		}

		/*------------------------------------------------------------------
		Use Alert
		------------------------------------------------------------------*/
		$('body').on('click', '[data-user-alert', function (evt) {
			evt.preventDefault();

			const utag = $(this).data('user-alert');
			$(`.${ utag }`).tab('show');
		});

		/*
		*  Waves Animation
		*/
		Waves.attach('.btn:not(.btn-icon):not(.btn-float)');
		Waves.attach('.text-button');
		Waves.attach('.btn-icon, .btn-float', ['waves-circle', 'waves-float']);
		Waves.init();
	}
};
