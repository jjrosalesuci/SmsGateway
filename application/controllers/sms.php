<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Sms extends  REST_Controller {

    public function __construct()
    {
         parent::__construct();
         $this->load->model('sms_model');
         $this->load->helper('date');
    }
    
    public function index_get()
    {
        $start = $this->input->get('start');
        $limit = $this->input->get('limit', TRUE);

        if(is_numeric ($start) && is_numeric ($limit)){
            $sms = $this->sms_model->get($start,$limit);
        }else{
            $this->response(array("error" => "No se ha establecido el paginado"), 400);
        }

        if(!is_null($sms)){
            $this->response(array("success" => true,"list" => $sms), 200);
        }else{
            $this->response(array("error" => "No hay sms por procesar"), 200);
        }    
    }

    public function find_get($id)
    {

    }

    public function index_post($phone_no,$message,$from_)
    {
        if($phone_no!=null && $message != null && $from_ != null){
            $result = $this->sms_model->save($phone_no,$message,$from_);
            if($result == true){
                $this->response(array("success" => true));
            }else{
                $this->response(array("error" => "No ha sido guardado"),400);
            }
        }

    }

    public function index_put($id)
    {   
        if(! $this->put("sms") || ! $id){
            $this->response(NULL,400);
        }

        $update = $this->sms_model->update($id, $this->put("sms"));

        if(!is_null($update)){
            $this->response(array("success" => true), 200);
        }else{
            $this->response(array("error" => "Ha ocurrido un error"), 400);
        }    
    }

    public function index_delete($id)
    {

    }
}
