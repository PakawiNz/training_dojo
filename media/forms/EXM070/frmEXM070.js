define([
    "dojo/_base/declare",
    "common/MinimalForm",
    "dojo/text!./frmEXM070.html",
    "dojo/on",
], function(declare, MinimalForm, template, on) {

    return declare([MinimalForm], {
        metag: 'EXM070',
        baseURL: 'EXM070',
        templateString: template,

        startup: function() {
            this.inherited(arguments);
            var widget = this;
            on(widget.cmdCalculator, 'click', function(){
                var url = 'calc'

                // var url = widget.txtTest1.get('value')
                var data = {};
                widget.param(data,'txtEle1',['value']);
                widget.param(data,'txtEle2',['value']);
                widget.param(data,'operator',['value']);
                widget.post(url,data,function (result) {
                    // body...

                    widget.txtResult.set('value', result);
                });


            });
            on(widget.txtEle1,'keydown',function(e){
                if (e.keyCode == 13) {
                    widget.txtEle2.focus();
                }
            });

            on(widget.txtEle2,'keydown',function(e){
                if (e.keyCode == 13) {
                    widget.cmdCalculator.onClick();
                }
            });
        },
    });
});
