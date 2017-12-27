<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Users_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
    }

    public function get($start, $limit)
    {
        $query = $this->db->select("*")->from('users')->order_by('created_at', 'DESC')->limit($limit, $start)->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        }
        return null;
    }

    public function save($user, $password, $email, $name, $credit, $auth_token)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');

        if (is_null($credit)) {
            $credit = 0;
        }

        $this->db->set('user', $user);
        $this->db->set('auth_token', $auth_token);
        $this->db->set('password', $password);
        $this->db->set('email', $email);
        $this->db->set('name', $name);
        $this->db->set('credit', $credit);
        $this->db->set('created_at', $now);
        $this->db->insert('users');

        if ($this->db->affected_rows() === 1) {
            return true;
        }
        return null;
    }

    public function update($id, $data)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');

        $this->db->set(
            $data
        )
            ->where("id", $id)
            ->update('users');

        if ($this->db->affected_rows() === 1) {
            return true;
        }
        return null;
    }

    public function delete($id)
    {

        $this->db->where("id", $id)->delete("users");

        if ($this->db->affected_rows() === 1) {
            return true;
        }
        return null;
    }

    public function getCredit($id)
    {

        $query  = $this->db->select("credit")->from('users')->where('id', $id)->get();
        $credit = $query->row('credit');

        if ($query->num_rows() > 0) {
            return $credit;
        }
        return null;
    }

    public function discountCredit($id, $cost, $sms_id)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now    = date('Y-m-d H:i:s');
        $credit = $this->getCredit($id) - $cost;
        $this->db->set('credit', $credit, false);
        $this->db->where('id', $id);
        $this->db->update('users');

        if ($this->db->affected_rows() === 1) {
            //Log del costo del mensaje
            $this->db->set('user_id', $id);
            $this->db->set('date', $now);
            $this->db->set('spended', $cost);
            $this->db->set('sms_id', $sms_id);
            $this->db->insert('spended');
            if ($this->db->affected_rows() === 1) {
                return true;
            }
        }
        return null;
    }

    public function validatePass($user, $pass)
    {

        $query     = $this->db->select('password, active')->from('users')->where('user', $user)->get();
        $password  = $query->row('password');
        $is_active = $query->row('active');

        if ($query->num_rows() > 0) {
            if ($password === $pass && $is_active != 0) {
                return true;
            }
            return null;
        }
        return null;
    }

    public function spendMonth($user_id, $month)
    {
        //$this->db->select('(SELECT SUM(payments.amount) FROM payments WHERE payments.invoice_id=4) AS amount_paid', false);
        $this->db->select('(SELECT sum(spended.spended) FROM spended WHERE spended.user_id = ' . $user_id . ' and month(date) = ' . $month . ') as month_spended', false);
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->row('month_spended');
        }
        return null;
    }
}
