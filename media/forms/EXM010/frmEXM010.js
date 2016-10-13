define([
    "dojo/_base/declare",
    "common/MinimalForm",
    "dojo/text!./frmEXM010.html",
    "dojo/on",
], function(declare, MinimalForm, template, on) {

    return declare([MinimalForm], {
        metag: 'EXM010',
        baseURL: 'forms/EXM010',
        templateString: template,

        startup: function() {
            this.inherited(arguments);
            var widget = this;
            on(widget.cmdTest1, 'click', function(){
                var url = widget.txtTest1.get('value')
                var data = {};
                widget.param(data,'txtTest1',['value']);
                widget.post(url,data);
            });
        },
    });
});
