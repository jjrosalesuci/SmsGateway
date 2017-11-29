Ext.define('smsfront.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick:function(){
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        var data = this.getView().down('form').getValues();
        
        App.security.Firewall.login(data.username, data.password).then(function() {
            this.getView().destroy();
        
            Ext.create({
                xtype: 'app-main'
            });
            }.bind(this), function(data) {
            Ext.Msg.alert('Error', data.message || 'An error occurred while logging in.');
        });
        
    },
    onRegister:function(){
        this.getView().destroy();

        Ext.create({
            xtype: 'registration'
        });
    }
});
