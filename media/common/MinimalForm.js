define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Evented",
    "dojo/request",
    "dojo/cookie",
    "./type_mapper",
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented, request, cookie, type_mapper) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
        metag: '',            // must be overrided by inherited form
        baseURL: '',          // must be overrided by inherited form
        templateString: '',   // must be overrided by inherited form

        buildRendering: function(){
            var replaced = this.templateString.replace(/(?:\<)(\/?)([A-Z]\w+)/g,function(match,closing,tagName){
                var dojoType = type_mapper(tagName);
                if (dojoType && closing) {
                    return '</div'
                } else if (dojoType) {
                    return '<div data-dojo-type="' + dojoType + '"';
                } else {
                    return match;
                }
            });
            this.templateString = replaced;
            return this.inherited(arguments);
        },
        _processTemplateNode: function(baseNode, getAttrFunc, attachFunc){
            if (!baseNode.domNode && getAttrFunc(baseNode, "wid")){
                baseNode.setAttribute('data-dojo-attach-point',getAttrFunc(baseNode, "wid"));
                baseNode.removeAttribute('wid');
            }
            return this.inherited(arguments);
        },
        startup: function() {
            this.inherited(arguments);
            var widget = this;
        },

        post: function(method, data, callback){
            var widget = this;
            var url = '/' + widget.baseURL + '/' + method + '/';
            return request.post(url, {
                data: JSON.stringify(data),
                handleAs: 'json',
                headers : {
                    'X-CSRFToken': cookie('csrftoken'),
                },
            }).then(function(result){
                alert('FINISHED\n' + JSON.stringify(result));
            },function(error){
                alert('FAILED\n' + error);
            });
        },
        param: function(data, attach_point, keys){
            var widget = this;
            if (typeof keys != 'object') keys = [keys];
            data[attach_point] = data[attach_point] || {}
            keys.forEach(function(key){
                data[attach_point][key] = widget[attach_point].get(key);
            });
        },
    });
});
