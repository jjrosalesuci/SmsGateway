
export default class Config {
    constructor() {
    }
    endPoints(endpoint){
        var list = {
            login : 'http://www.mylocal.com/SmsGateway/index.php/login',
            register:'http://www.mylocal.com/SmsGateway/index.php/users',
            passRecovery:'http://www.mylocal.com/SmsGateway/index.php/users/passrecovery'
        }
        return list[endpoint];
    }
}