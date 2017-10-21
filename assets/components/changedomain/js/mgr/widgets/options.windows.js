changeDomain.window.CreateOptions = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'changedomain-options-window-create';
    }
    Ext.applyIf(config, {
        title: _('changedomain_options_create'),
        width: 650,
        autoHeight: true,
        url: changeDomain.config.connector_url,
        action: 'mgr/item/options/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    changeDomain.window.CreateOptions.superclass.constructor.call(this, config);
};
Ext.extend(changeDomain.window.CreateOptions, MODx.Window, {


    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('changedomain_option_name'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('changedomain_option_key'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('changedomain_option_value'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }]
    },

    loadDropZones: function () {
    }

});
Ext.reg('changedomain-options-window-create', changeDomain.window.CreateOptions);


changeDomain.window.UpdateOptions = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'changedomain-optionsm-window-update';
    }
    Ext.applyIf(config, {
        title: _('changedomain_options_update'),
        width: 550,
        autoHeight: true,
        url: changeDomain.config.connector_url,
        action: 'mgr/item/options/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    changeDomain.window.UpdateOptions.superclass.constructor.call(this, config);
};
Ext.extend(changeDomain.window.UpdateOptions, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('changedomain_city_name'),
            name: 'name',
            anchor: '99%',
            allowBlank: false,
        }]
    },

    loadDropZones: function () {
    }

});
Ext.reg('changedomain-options-window-update', changeDomain.window.UpdateOptions);