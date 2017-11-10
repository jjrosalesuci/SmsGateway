<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Sms_model extends CI_Model {

    public function __construct()
    {
         parent::__construct();
    }

    public function get($start,$limit)
    {
        $query = $this->db->select("*")->from('sms')->limit($limit,$start)->where('status', 0)->get();
        if($query->num_rows() > 0){
            return $query->result_array();
        }
        return NULL;
    }

    public function save($phone_no,$message,$from_)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');

        $this->db->set('phone_no', $phone_no);
        $this->db->set('message', $message);
        $this->db->set('from_', $from_);
        $this->db->set('status', 0);
        $this->db->set('created_at', $now);
        $this->db->insert('sms');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function update($id,$sms)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');
        
        $this->db->set(
            $this->_setSms($sms)
        )
        ->where("id" , $id)
        ->update('sms');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function _setSms($sms){
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');
        return array(
            "phone_no" => $sms['phone_no'],
            "message" => $sms['message'],
            "from_" => $sms['phone_no'],
            "status" => $sms['status'],
            "update_at" => $now
        );
    }
}
