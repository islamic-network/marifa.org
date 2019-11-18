jQuery( document ).ready( function( $ ) {
    $.dateRenderer = {
        _cssIdGregorian: '#gDate',
        _cssIdHijri: '#hDate',
        _dateObj: null,
        init: function(dateObj) {
            this._dateObj = dateObj;
            this.render();
        },

        render: function() {
            this.renderHijri();
            this.renderGregorian();
        },
        renderHijri: function() {
            $(this._cssIdHijri).text($.latin2Arabic.toArabic(this._dateObj.hijri.day + ' ' + this._dateObj.hijri.month.ar + ' ' + this._dateObj.hijri.year));
        },
        renderGregorian: function() {
            $(this._cssIdGregorian).text(this._dateObj.gregorian.day + ' ' + this._dateObj.gregorian.month.en + ' ' + this._dateObj.gregorian.year);
        }
    }
});
