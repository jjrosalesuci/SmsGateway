<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Sms_model extends CI_Model {

    public function __construct()
    {
         parent::__construct();
    }

    public function get($start,$limit)
    {
        $query = $this->db->select("*")->from('sms')->order_by('created_at','DESC')->limit($limit,$start)->where('status', 0)->get();
        if($query->num_rows() > 0){
            return $query->result_array();
        }
        return NULL;
    }

    public function save($phone_no,$message,$from_,$status,$user_id)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');

        $this->db->set('phone_no', $phone_no);
        $this->db->set('message', $message);
        $this->db->set('from_', $from_);
        $this->db->set('status', $status);
        $this->db->set('created_at', $now);
        $this->db->set('id_user', $user_id);
        $this->db->insert('sms');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function update($id,$data)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');
        
        $this->db->set(
            $data
        )
        ->where("id" , $id)
        ->update('sms');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return false;
    }

    public function getCost($phone_no, $message){
        return 1;
    }
}
