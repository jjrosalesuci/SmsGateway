<?php

defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Sms extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('sms_model');
        $this->load->model('users_model');
        $this->load->helper('date');
    }

    public function index_get()
    {
        $start = $this->input->get('start');
        $limit = $this->input->get('limit', true);

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

    public function find_get($id)
    {

    }

    public function index_post()
    {
        $phone_no = $this->input->post('phone_no');
        $message  = $this->input->post('message');
        $from_    = $this->input->post('from_');
        $apikey   = $this->input->post('X-API-KEY');
        $user_id  = $this->users_model->findUserid($apikey);

        if ($phone_no != null && $message != null && $from_ != null) {

            //Chequeo de costo de mensaje
            $cost   = $this->sms_model->getCost($phone_no, $message);
            $credit = $this->users_model->getCredit($apikey);

            //Chequeo de credito
            if ($cost <= $credit) {

                //Si el credito es suficiente se le descuenta y se procesa el mensaje
                $result = $this->sms_model->save($phone_no, $message, $from_, $status = 0, $user_id);
                if ($result != null) {
                    $this->users_model->discountCredit($user_id, $credit, $cost, $result);
                    $this->response(array("success" => true));
                } else {
                    $this->response(array("error" => "No ha sido guardado"), 400);
                }
            } else {

                //Si no es suficiente el credito se guarda el mensaje se pone en estado -1
                $result = $this->sms_model->save($phone_no, $message, $from_, $status = -1, $user_id);
                if ($result == true) {
                    $this->response(array("error" => "El mensaje no pudo ser enviado. Su saldo es insuficiente!"));
                } else {
                    $this->response(array("error" => "No ha sido guardado"), 400);
                }
            }
        } else {
            $this->response(array("error" => "Faltan parámetros"), 400);
        }
    }

    public function index_put()
    {
        $params = json_decode($this->input->raw_input_stream);

        $id   = $params->id;
        $data = $params->params;

        $array = json_decode(json_encode($data), true);

        if (!$id || !$data) {
            $this->response(null, 400);
        }

        $update = $this->sms_model->update($id, $array);

        if ($update) {
            $this->response(array("success" => true), 200);
        } else {
            $this->response(array("error" => "No hay cambios"), 400);
        }
    }

    public function index_delete($id)
    {

    }

    public function getChartdata_get()
    {
        $apikey  = $this->input->get('X-API-KEY');
        $user_id = $this->users_model->findUserid($apikey);

        $dateback = date("Y-m-d", strtotime(date("Y-m-d", strtotime(date("Y-m-d"))) . "-1 month"));

        $array  = $this->sms_model->getSms_sended_back($dateback, $user_id);
        $array2 = array();

        foreach ($array as $key => $value) {
            $exploded = explode('-', $value['date']);
            unset($exploded[0]);
            $imploded = implode('-', $exploded);

            $value['date'] = $imploded;
            $array2[]      = $value;
        }

        if ($array[0] != "") {
            $this->response(array("success" => true, "list" => $array2), 200);
        } else {
            $this->response(array("error" => "No tiene mensajes."), 400);
        }
    }
}
