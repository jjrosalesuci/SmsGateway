<?php

defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Login extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('users_model');
        $this->load->helper('date');
    }

    public function index_post()
    {
        $user = $this->input->post('username');
        $pass = md5($this->input->post('password'));

        if (!is_null($user) && !is_null($pass)) {
            $result = $this->users_model->validatePass($user, $pass);
            if ($result != null) {
                $array = explode(':', $result);
                $this->response(array("success" => true, "token" => $array[0], "credit" => $array[1]), 200);
            } else {
                $this->response(array("error" => "Invalid credentials"), 400);
            }
        } else {
            $this->response(array("error" => "No parameters or miss"), 400);
        }
    }
}
