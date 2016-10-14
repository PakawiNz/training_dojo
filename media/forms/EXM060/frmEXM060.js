define([
    "dojo/_base/declare",
    "common/MinimalForm",
    "dojo/text!./frmEXM060.html",
    "dojo/on",
], function(declare, MinimalForm, template, on) {

    return declare([MinimalForm], {
        metag: 'EXM060',
        baseURL: 'EXM060',
        templateString: template,

        startup: function() {
            this.inherited(arguments);
            var widget = this;
            on(widget.cmdTest1, 'click', function(){
                
                var data = {};
                widget.param(data,'txtTest1',['value']);
                widget.param(data,'txtTest2',['value']);
                widget.post('word',data,function(result){
                    widget.txtTest3.set('value',result.result);

                });
            });
        },

    });
});
