define([],function(){
	var type_mapper = {
		"Border"  : "dijit/layout/BorderContainer",
		"Pane"    : "dijit/layout/ContentPane",
		"TextBox" : "dijit/form/TextBox",
		"Button"  : "dijit/form/Button",
		"CheckBox"  : "dijit/form/CheckBox",
		"ComboAuto"  : "dijit/form/ComboBox",
		"DateTextAuto"  : "dijit/form/DateTextBox",
		"Radio"  : "dijit/form/RadioButton",
		"TextArea"  : "dijit/form/SimpleTextarea",
	}
	return function(tagName){
		return type_mapper[tagName];
	}
});
