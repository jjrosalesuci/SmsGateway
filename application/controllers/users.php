<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Users extends  REST_Controller {

    public function __construct()
    {
         parent::__construct();
         $this->load->model('users_model');
         $this->load->helper('date');
    }
    
    public function index_get()
    {
        $start = $this->input->get('start');
        $limit = $this->input->get('limit', TRUE);

        if(is_numeric ($start) && is_numeric ($limit)){
            $users = $this->users_model->get($start,$limit);
        }else{
            $this->response(array("error" => "No se ha establecido el paginado"), 400);
        }

        if(!is_null($users)){
            $this->response(array("success" => true,"list" => $users), 200);
        }else{
            $this->response(array("error" => "No hay sms por procesar"), 400);
        }    
    }

    public function index_post()
    {
        $user = $this->input->post('user');
        $password = md5($this->input->post('password'));
        $email  = $this->input->post('email');
        $name = $this->input->post('name');
        $credit = $this->input->post('credit');

        if($user!=null && $password != null && $email != null && $name != null /*&& $credit != null*/){
            $result = $this->users_model->save($user,$password,$email,$name,$credit);
            if($result == true){
                $this->response(array("success" => true));
            }else{
                $this->response(array("error" => "No ha sido guardado"),400);
            }
        }
    }


    public function index_put()
    {   
        $params = json_decode ($this->input->raw_input_stream);

        $id = $params->id;
        $data = $params->params;

        $array = json_decode(json_encode($data), true);
        
        if(! $id  || ! $data) { 
            $this->response(NULL,400);
        }

        if(array_key_exists("password",$array)){
            $array["password"] = md5($array['password']);
        }

        $update = $this->users_model->update($id, $array);

        if($update){
            $this->response(array("success" => true), 200);
        }else{
            $this->response(array("error" => "No hay cambios"), 400);
        }    
    }

    public function index_delete()
    {
        $id = (int)$this->input->raw_input_stream;

        if(!$id){
            $this->response(NULL,400);
        }

        $delete = $this->users_model->delete($id); 

        if($delete == true){
            $this->response(array("success" => true));
        }else{
            $this->response(array("error" => "No ha sido eliminado"),400);
        }

    }
}
