CKEDITOR.dialog.add('ymaps', function (editor) {
    return {
        title: editor.lang.ymaps.dialog.title,
        minWidth: 200,
        minHeight: 100,
        contents: [
            {
                id: 'map',
                elements: [
                    {
                        id: 'sid',
                        type: 'text',
                        label: editor.lang.ymaps.dialog.sid,
                        width: '100%',
                        setup: function (widget) {
                            this.setValue(widget.data.sid);
                        },
                        commit: function (widget) {
                            widget.setData('sid', this.getValue());
                        }
                    },
                    {
                        id: 'height',
                        type: 'text',
                        label: editor.lang.ymaps.dialog.height,
                        width: '50%',
                        setup: function (widget) {
                            this.setValue(widget.data.height);
                        },
                        commit: function (widget) {
                            widget.setData('height', this.getValue());
                        }
                    }
                ]
            }
        ]
    };
});