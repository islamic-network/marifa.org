jQuery( document ).ready( function( $ ) {
    $.quoter = {
        _rtl: [
            "fa-IR",
            "ar-AE"
        ],
        _names: {
            "English" : "en-US",
            "Persian": "fa-IR",
            "Arabic": "ar-AE",
            "French": "fr-FR",
            "German" : "de-DE"
        },
        _cssIdQuote: '#quote',
        _cssIdSource: '#source',
        _cssIdLanguage: '#languagepicker',
        _currentLanguage: 'en-US',
        _quoteObj: null,
        init: function(quoteObj) {
            this._quoteObj = quoteObj;
            this.render();
            this.languageMonitor();
        },
        languageMonitor: function() {
            var w = this;
            $(this._cssIdLanguage).on('changed.bs.select', function () {
                w._currentLanguage = w._names[$(this).val()];
                w.render();
            });
        },
        render: function() {
            var w = this;
            if (w._currentLanguage == 'en-US') {                
                $(this._cssIdQuote).text(this._quoteObj.text);
                $(this._cssIdSource).text('-- ' + this._quoteObj.reference);
                w.rtlRenderer();
                w.fontRenderer();
            } else {
                $.each(w._quoteObj.translations, function(i, v) {
                    if (w._currentLanguage == v.languages_code) {
                        $(w._cssIdQuote).text(v.text);
                        //$(w._cssIdSource).text('-- ' + v.reference);
                        w.rtlRenderer();
                        w.fontRenderer();
                        return false;
                    }
                });
            }
        },
        rtlRenderer: function()
        {
            var w = this;
            if($.inArray(w._currentLanguage, w._rtl) !== -1) {
                // That means this is an rtl
                $(this._cssIdQuote).css('direction','rtl');
                $(this._cssIdSource).css('direction','rtl');
            } else {
                $(this._cssIdQuote).css('direction','ltr');
                $(this._cssIdSource).css('direction','ltr');
            }
        },
        fontRenderer: function() {
            var w = this;
            if (w._currentLanguage == 'ar-AE') {
                $(this._cssIdQuote).addClass('ar').removeClass('fa').removeClass('en').removeClass('fr').removeClass('de');
                $(this._cssIdSource).addClass('ar').removeClass('fa').removeClass('en').removeClass('fr').removeClass('de');;
            } else if (w._currentLanguage == 'fa-IR') {
                $(this._cssIdQuote).addClass('fa').removeClass('ar').removeClass('en').removeClass('fr').removeClass('de');
                $(this._cssIdSource).addClass('fa').removeClass('ar').removeClass('en').removeClass('fr').removeClass('de');;
            } else {
                $(this._cssIdQuote).addClass('en').removeClass('ar').removeClass('fa').removeClass('fr').removeClass('de');
                $(this._cssIdSource).addClass('en').removeClass('ar').removeClass('fa').removeClass('fr').removeClass('de');;
            }
        }
    }
});
