<?php


defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Login extends  REST_Controller {

    public function __construct()
    {
         parent::__construct();
         $this->load->model('users_model');
         $this->load->helper('date');
    }
    
    public function index_post()
    {
        $params = json_decode($this->input->raw_input_stream);

        $user = $params->username;
        $pass = md5($params->password);

        if(!is_null($user) && !is_null($pass)){
            $result = $this->users_model->validatePass($user,$pass);
            if ($result) {
                $this->response(array("success" => true, "token" => "aaaaaaaa"), 200);
            }else{
                $this->response(array("error" => "Invalid credentials"), 400);
            }
        }else{
            $this->response(array("error" => "No parameters or miss"), 400);
        }
    }
}
