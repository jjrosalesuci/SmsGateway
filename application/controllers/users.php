<?php

defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Users extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('users_model');
        $this->load->helper('date');
    }

    public function index_get()
    {
        $start = $this->input->get('start');
        $limit = $this->input->get('limit', true);

        if (is_numeric($start) && is_numeric($limit)) {
            $users = $this->users_model->get($start, $limit);
        } else {
            $this->response(array("error" => "No se ha establecido el paginado"), 400);
        }

        if (!is_null($users)) {
            $this->response(array("success" => true, "list" => $users), 200);
        } else {
            $this->response(array("error" => "No hay sms por procesar"), 400);
        }
    }

    public function index_post()
    {
        $user     = $this->input->post('user');
        $password = md5($this->input->post('password'));
        $email    = $this->input->post('email');
        $name     = $this->input->post('name');
        $credit   = $this->input->post('credit');

        if ($user != null && $password != null && $email != null && $name != null/*&& $credit != null*/) {
            $result = $this->users_model->save($user, $password, $email, $name, $credit);
            if ($result == true) {
                $this->response(array("success" => true));
            } else {
                $this->response(array("error" => "No ha sido guardado"), 400);
            }
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

        if (array_key_exists("password", $array)) {
            $array["password"] = md5($array['password']);
        }

        $update = $this->users_model->update($id, $array);

        if ($update) {
            $this->response(array("success" => true), 200);
        } else {
            $this->response(array("error" => "No hay cambios"), 400);
        }
    }

    public function index_delete()
    {
        $id = (int) $this->input->raw_input_stream;

        if (!$id) {
            $this->response(null, 400);
        }

        $delete = $this->users_model->delete($id);

        if ($delete == true) {
            $this->response(array("success" => true));
        } else {
            $this->response(array("error" => "No ha sido eliminado"), 400);
        }

    }

    public function spendMonth_post()
    {
        $user_id = $this->input->post('user_id');
        $month   = $this->input->post('month');

        if (!$user_id && !$month) {
            $this->response(null, 400);
        }

        $spended = (float) $this->users_model->spendMonth($user_id, $month);

        if ($spended) {
            $this->response(array("success" => true, "spended" => $spended));
        } else {
            $this->response(array("error" => "El usuario no tiene gastos este mes"), 400);
        }
    }

    public function getCredit_post()
    {
        $user_id = $this->input->post('user_id');

        if (!$user_id) {
            $this->response(null, 400);
        }

        $credit = $this->users_model->getCredit($user_id);

        if ($credit != null) {
            $this->response(array("success" => true, "credit" => $credit));
        } else {
            $this->response(array("error" => "El usuario no existe"), 400);
        }
    }

    public function passRecovery_post()
    {
        $email = $this->input->post('user_email');

    }
}
