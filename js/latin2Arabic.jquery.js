jQuery( document ).ready( function( $ ) {
    $.latin2Arabic = {
        _numerals: [
          {
            "arabic": "٠",
            "latin": "0",
            "html": "&#1632;"
          },
          {
            "arabic": "١",
            "latin": "1",
            "html": "&#1633;"
          },
          {
            "arabic": "٢",
            "latin": "2",
            "html": "&#1634;"
          },
          {
            "arabic": "٣",
            "latin": "3",
            "html": "&#1635;"
          },
          {
            "arabic": "٤",
            "latin": "4",
            "html": "&#1636;"
          },
          {
            "arabic": "٥",
            "latin": "5",
            "html": "&#1637;"
          },
          {
            "arabic": "٦",
            "latin": "6",
            "html": "&#1638;"
          },
          {
            "arabic": "٧",
            "latin": "7",
            "html": "&#1639;"
          },
          {
            "arabic": "٨",
            "latin": "8",
            "html": "&#1640;"
          },
          {
            "arabic": "٩",
            "latin": "9",
            "html": "&#1641;"
          }
      ],
      toArabic: function(number) {
          $.each(this._numerals, function(i,v) {
              number = number.replace(new RegExp(v.latin, 'g'), v.arabic);
              //console.log(number);
          });

          return number;
      }
    }
});
