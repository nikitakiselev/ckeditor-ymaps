CKEDITOR.plugins.add('ymaps', {
    requires: 'widget,dialog',
    lang: ['en', 'ru'],
    icons: 'ymaps',

    init: function (editor) {
        var pluginDirectory = this.path;
        editor.addContentsCss(pluginDirectory + 'contents.css');
        CKEDITOR.dialog.add('ymaps', pluginDirectory + 'dialogs/ymaps.js');

        var createYandexMap = function(sid) {
            return '<script class="script" type="text/javascript" charset="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=' + sid + '"></script>';
        };

        editor.widgets.add('ymaps', {
            button: 'Insert yandex map',
            dialog: 'ymaps',

            template: '<div class="row ymaps">' +
            '<div class="col-md-8 ymaps-text">Text</div>' +
            '<div class="col-md-4 ymaps-map">' +
            '</div>' +
            '</div>',

            editables: {
                text: {
                    selector: '.ymaps-text'
                }
            },

            allowedContent: 'div(row,ymaps,col-md-4,col-md-8,ymaps-text,ymaps-map){*}[data-*]; script[type,charset,src,class]',
            requiredContent: 'div(row,ymaps)',

            upcast: function (element) {
                return element.name == 'div' && element.hasClass('ymaps');
            },

            init: function() {
                var ymaps = this.element,
                    map = ymaps.findOne('.ymaps-map'),
                    height = map.getStyle('height'),
                    sid = map.data('sid');

                if (height) {
                    this.setData('height', height);
                }

                if (sid) {
                    this.setData('sid', sid);
                }
            },

            data: function() {
                var mapWrapper = this.element.findOne('.ymaps-map');

                if (this.data.height == '') {
                    this.data.height = '300px';
                }

                mapWrapper.setStyle('height', this.data.height);
                mapWrapper.data('sid', this.data.sid);
                mapWrapper.setHtml(
                    createYandexMap(this.data.sid)
                );
            }
        });
    }
});