jQuery( document ).ready( function( $ ) {
    $.aboutOverlay = {
        _openButtonId: '#about_open',
        _closeButtonId: '#about_close',
        _overlayId: '#about',
        init: function() {
            $('#about').popup({
                color: 'white',
                opacity: 1,
                transition: '0.3s',
                scrolllock: true
            });
            this.monitor();
            $(this._overlayId).removeClass('hidden');
        },
        monitor: function() {
            var w = this;
            $(this._openButtonId).on('click', function() {
                $(w._overlayId).popup('show');
            });
            $(this._closeButtonId).on('click', function() {
                $(w._overlayId).popup('hide');
            });
        }
    }
});
