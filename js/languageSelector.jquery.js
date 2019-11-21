jQuery( document ).ready( function( $ ) {
    $.languageSelector = {
        _flags: {
            "fa": "ir",
            "ar": "ae",
            "en": "gb",
            "fr": "fr",
            "de": "de"
        },
        _names: {
            "en": "English",
            "fa": "Persian",
            "ar": "Arabic",
            "fr": "French",
            "de": "German"
        },
        _cssIdentifier: '#languagepicker',
        _parentDivCssIdentifier: '#languageselector',
        _defaultLang: 'en',
        _languages: null,
        init: function(translations) {
            var languages = [];
            languages.push('en');
            $.each(translations, function(i,v) {
                languages.push(v.language_code);
            });
            this._languages = languages;
            this.generateHtml();
            this.render();
        },
        generateHtml: function() {
            var w = this;
            var html = '';
            var usedLangs = [];
            $.each(w._languages, function(i,v) {
                var flag = w._flags[v];
                var name = w._names[v];
                if (!usedLangs.includes(name)) {
                    html += "<option data-content='<span class=\"flag-icon flag-icon-" + flag + "\"></span> " + name + "'>" + name + "</option>";
                }
                usedLangs.push(name);
            });
            w._html = html;
        },
        render: function() {
            var w = this;
            if (w._languages.length > 1) {
                $(w._cssIdentifier).html(w._html);
                $(w._cssIdentifier).selectpicker();
                $(w._parentDivCssIdentifier).removeClass('hidden');
            } else {
                $(w._cssIdentifier).hide();
            }

        }
    }
});
