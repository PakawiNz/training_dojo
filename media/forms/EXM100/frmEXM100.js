define([
    "dojo/_base/declare",
    "common/MinimalForm",
    "dojo/text!./frmEXM100.html",
    "dojo/on",
], function(declare, MinimalForm, template, on) {

    return declare([MinimalForm], {
        metag: 'EXM100',
        baseURL: 'EXM100',
        templateString: template,

        startup: function() {
            this.inherited(arguments);
            var widget = this;
            on(widget.cmdTest1, 'click', function(){
                // var int1 = widget.txtint1.get('value')
                // var int2 = widget.txtint2.get('value')
                var data = {};
                widget.param(data,'txtint1',['value']);
                widget.param(data,'txtint2',['value']);
                widget.post('LCM',data,function(result){
                    
                widget.txtresult.set('value',result.lcm)
                });
            });

            on(widget.cmdTest2, 'click', function(){
                // var int1 = widget.txtint1.get('value')
                // var int2 = widget.txtint2.get('value')
                var data = {};
                widget.param(data,'txtint1',['value']);
                widget.param(data,'txtint2',['value']);
                widget.post('GCD',data,function(result){
                    
                    widget.txtresult.set('value',result.gcd)
                });
            });

            on(widget.cmdclr, 'click', function(){
                // var int1 = widget.txtint1.get('value')
                // var int2 = widget.txtint2.get('value')
              
                widget.txtint1.set('value',"")
                widget.txtint2.set('value',"")
                widget.txtresult.set('value',"")
            });

            on(widget.cmdclk, 'click', function(){
                // var int1 = widget.txtint1.get('value')
                // var int2 = widget.txtint2.get('value')
                var data = {};
                widget.param(data,'txt1',['value']);
                widget.param(data,'txt2',['value']);
                widget.post('WORDCOU',data,function(result){
                    
                    widget.txtresult2.set('value',result.word)
                });
            });

        },
    });
});
