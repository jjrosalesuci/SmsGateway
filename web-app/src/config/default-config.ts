
export default class Config {
    constructor() {
    }
    endPoints(endpoint){
        var list = {
            login : 'http://www.mylocal.com/SmsGateway/index.php/login',
            register:'http://www.mylocal.com/SmsGateway/index.php/users',
            passRecovery:'http://www.mylocal.com/SmsGateway/index.php/users/passrecovery',
            authkey: 'ba8de3d182594ace64158b4284af3be7',
            getCredit: 'http://www.mylocal.com/SmsGateway/index.php/users/getCredit',
        }
        return list[endpoint];
    }
}