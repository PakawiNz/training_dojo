define([
    "dojo/_base/declare",
    "common/MinimalForm",
    "dojo/text!./frmEXM010.html",
], function(declare, MinimalForm, template) {

    return declare([MinimalForm], {
        metag: 'EXM010',
        baseURL: '',
        templateString: template,

        startup: function() {
            this.inherited(arguments);
            var widget = this;
        },
    });
});
