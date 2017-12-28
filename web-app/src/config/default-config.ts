
export default class Config {
    constructor() {
    }
    endPoints(endpoint){
        var list = {
            login : 'http://localhost/SmsGateway/index.php/login',
            register:'http://localhost/SmsGateway/index.php/users',
            passRecovery:'http://localhost/SmsGateway/index.php/users/passrecovery'
        }
        return list[endpoint];
    }
}