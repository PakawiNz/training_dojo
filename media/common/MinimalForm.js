define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_AttachMixin",
    "dojo/Evented",
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _AttachMixin, Evented) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _AttachMixin, Evented], {
        metag: '',            // must be overrided by inherited form
        baseURL: '',          // must be overrided by inherited form
        templateString: '',   // must be overrided by inherited form

        startup: function() {
            this.inherited(arguments);
            var widget = this;

            setTimeout(function() {
                widget.resizeChildren();
            }, 100)
        },
        post :function(attach_point, data, callback){
            return false;
        },
        atomic :function(attach_point, data, callback){
            return false;
        },
        param :function(object, attach_point, keys){
            return false;
        },
        resizeChildren: function(domNode) {
            var target = (domNode) ? domNode : this.domNode;
            var widgets = dojo.query("[widgetid]", target).map(dijit.byNode).filter(function(wid){ return wid;})

            widgets.forEach(function(widget){
                try {
                    widget.resize();
                } catch(e) {
                    console.error(e);
                }
            })
        },
    });
});
