<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Sms extends REST_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('sms_model');
        $this->load->model('users_model');
        $this->load->helper('date');
    }

    public function index_get() {
        $start = $this->input->get('start');
        $limit = $this->input->get('limit', TRUE);

        if (is_numeric($start) && is_numeric($limit)) {
            $sms = $this->sms_model->get($start, $limit);
        } else {
            $this->response(array("error" => "No se ha establecido el paginado"), 400);
        }

        if (!is_null($sms)) {
            $this->response(array("success" => true, "list" => $sms), 200);
        } else {
            $this->response(array("error" => "No hay sms por procesar"), 200);
        }
    }

    public function find_get($id) {
        
    }

    public function index_post() {
        $phone_no = $this->input->post('phone_no');
        $message = $this->input->post('message');
        $from_ = $this->input->post('from_');
        $user_id = $this->input->post('user_id');

        if ($phone_no != null && $message != null && $from_ != null && $user_id != null) {
            //Chequeo de costo de mensaje
            $cost = $this->sms_model->getCost($phone_no, $message);

            //Chequeo de credito
            if ($cost <= $this->users_model->getCredit($user_id)) {
                //Si el credito es suficiente se le descuenta y se procesa el mensaje
                $this->users_model->discountCredit($user_id, $cost);
                $result = $this->sms_model->save($phone_no, $message, $from_, $status = 0, $user_id);
                if ($result == true) {
                    $this->response(array("success" => true));
                } else {
                    $this->response(array("error" => "No ha sido guardado"), 400);
                }
            } else {
                //Si no es suficiente el credito el mensaje se pone en estado -1
                $result = $this->sms_model->save($phone_no, $message, $from_, $status = -1, $user_id);
                if ($result == true) {
                    $this->response(array("success" => true));
                } else {
                    $this->response(array("error" => "No ha sido guardado"), 400);
                }
            }
        } else {
            $this->response(array("error" => "Faltan parámetros"), 400);
        }
    }

    /*
      {
      "id":1,
      "params": {
      "status": 1
      }
      }
     */

    public function index_put() {
        // Esta es la forma de obtener los parametros por put pero obtiene un string por eso se lleva a una 
        // clase standart.
        $params = json_decode($this->input->raw_input_stream);

        $id = $params->id;
        $data = $params->params;

        // convertir a arreglo el StdClas para que funcione en el modelo que usa  un array
        $array = json_decode(json_encode($data), true);

        if (!$id || !$data) {
            $this->response(NULL, 400);
        }

        $update = $this->sms_model->update($id, $array);

        if ($update) {
            $this->response(array("success" => true), 200);
        } else {
            $this->response(array("error" => "No hay cambios"), 400);
        }
    }

    public function index_delete($id) {
        
    }

}
