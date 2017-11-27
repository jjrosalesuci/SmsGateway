Ext.define('smsfront.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'smsfront.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Please Login',
    closable: false,
    autoShow: true,
    resizable: false,

    items: {
        xtype: 'form',
        id: 'login_form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            minLength: 6,
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            minLength: 8,
            allowBlank: false
        }],
        buttons: [{
            text: 'Register',
            listeners: {
                click: 'onRegister'
            }
        },{
            text: 'Login',
            formBind: true,
            listeners: {
                params: {user: this.username, pass: this.password},
                click: 'onLoginClick'
            }
        }]
    }
});