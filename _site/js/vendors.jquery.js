jQuery( document ).ready( function( $ ) {
    $.vendors = {
        _vendors: null,
        _html: '',
        _config: {
            amazon: {
                imgActive: "images/amazon_active.png",
                imgPassive: "images/amazon_passive.png",
                classes: "vendor amazon"
            },
            ebay: {
                imgActive: "images/ebay_active.png",
                imgPassive: "images/ebay_passive.png",
                classes: "vendor ebay"
            },
            wordery: {
                imgActive: "images/wordery_active.png",
                imgPassive: "images/wordery_passive.png",
                classes: "vendor wordery"
            },
            youtube: {
                imgActive: "images/youtube_active.png",
                imgPassive: "images/youtube_passive.png",
                classes: "vendor youtube"
            },
            onedrive: {
                imgActive: "images/onedrive_active.png",
                imgPassive: "images/onedrive_passive.png",
                classes: "vendor onedrive"
            },
            other: {
                imgActive: "",
                imgPassive: "",
                classes: "vendor other"
            },
        },
        init: function(vendors) {
            this._vendors = vendors;
            this.render();
        },
        render: function() {
            var w = this;

            $.each(this._vendors, function (i,v) {
                if (v.type === 'other') {
                    w.generateButton(v);
                } else {
                    w.generateMarkup(v);
                }
            });

            $('#vendors').html(this._html);
        },
        generateMarkup: function(v) {
            this._html += '<span>';
            this._html += '<a target="_blank" href="' + v.url + '" title="' + v.title + '">';
            this._html += '<img height="60" class="' + this._config[v.type]['classes'] + '" src="' + this._config[v.type]['imgPassive'] + '" alt="' + v.alt + '" />';
            this._html += '</a></span> ';
        },
        generateButton: function(v) {
            this._html += '<span>';
            this._html += '<a target="_blank" href="' + v.url + '" title="' + v.title + '" class="btn btn-info">';
            this._html +=  v.title;
            this._html += '</a></span> ';
        }

    }
});
