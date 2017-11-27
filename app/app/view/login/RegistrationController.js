Ext.define('smsfront.view.login.RegistrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registration',

    onRegisterClose:function(){

        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        });
    },

    onSubmit: function() {
        var form = this.getView().down('form').getForm();
        var view = this.getView();

        form.submit({
            clientValidation: true,
            url: '../index.php/users',
            success: function(form, action) {
                Ext.Msg.show({
                    title: 'Success',
                    message: 'An email was sent to your mail box with some instructions. Thanks for register.',
                    //width: 300,
                    buttons: Ext.Msg.OK,
                    closable:false,
                    fn: function(btn){
                        if (btn == 'ok'){
                            view.destroy();
                            Ext.create({
                                xtype: 'login'
                            });
                        }
                    },
                    icon: Ext.window.MessageBox.INFO
                });
                
            },
            failure: function(form, action) {
                Ext.Msg.alert('Error', 'An error ocurred!!');
            }
        });
    }
});