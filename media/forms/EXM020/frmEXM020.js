define([
    "dojo/_base/declare",
    "common/MinimalForm",
    "dojo/text!./frmEXM020.html",
], function(declare, MinimalForm, template) {

    return declare([MinimalForm], {
        metag: 'EXM020',
        baseURL: '',
        templateString: template,

        startup: function() {
            this.inherited(arguments);
            var widget = this;
        },
    });
});
