Ext.define('App.security.Firewall', {
    singleton: true,
    requires: [
        'App.security.TokenStorage'
    ],

    login: function(username, password) {
        var deferred = new Ext.Deferred();

        Ext.Ajax.request({
            url: 'http://localhost/SmsGateway/index.php/login/',
            method: 'POST',
            headers: {
                //'Access-Control-Allow-Origin': '*'
                //'Access-Control-Allow-Headers': '*'
                //'Access-Control-Allow-Credentials': true
            },
            jsonData: {
                'username': username,
                'password': password
            },

            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.token) {
                    App.security.TokenStorage.save(data.token);

                    deferred.resolve(data, response);
                } else {
                    deferred.reject(data, response);
                }
            },

            failure: function (response) {
                var data = Ext.decode(response.responseText);

                App.security.TokenStorage.clear();

                deferred.reject(data, response);
            }
        });

        return deferred.promise;
    },

    logout: function(callback) {
        App.security.TokenStorage.clear();

        callback();
    },

    isLoggedIn: function(){
        if(App.security.TokenStorage.retrieve()){
            return true;
        }   
        return false;
    }
}, function () {
    Ext.Ajax.on('beforerequest', function(conn, options) {
        if (App.security.Firewall.isLoggedIn()) {
            options.headers = options.headers || {};
            options.headers['Authorization'] = 'Bearer ' + App.security.TokenStorage.retrieve();
        }
    });
});