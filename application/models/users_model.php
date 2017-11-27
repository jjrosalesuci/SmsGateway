<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Model {

    public function __construct()
    {
         parent::__construct();
    }

    public function get($start,$limit)
    {
        $query = $this->db->select("*")->from('users')->order_by('created_at','DESC')->limit($limit,$start)->get();
        if($query->num_rows() > 0){
            return $query->result_array();
        }
        return NULL;
    }

    public function save($user,$password,$email,$name,$credit)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');

        if (is_null($credit)) {
            $credit = 0;
        }

        $this->db->set('user', $user);
        $this->db->set('password', $password);
        $this->db->set('email', $email);
        $this->db->set('name', $name);
        $this->db->set('credit', $credit);
        $this->db->set('created_at', $now);
        $this->db->insert('users');

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
        ->update('users');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function delete($id){
        
        $this->db->where("id", $id)->delete("users");

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function getCredit($id){

        $query = $this->db->select("credit")->from('users')->where('id', $id)->get();
        $credit = $query->row('credit');

        if($query->num_rows() > 0){
            return $credit;
        }
        return NULL;
    }

    public function discountCredit($id, $cost)
    {
        $credit = $this->getCredit($id) - $cost; 
        $this->db->set('credit', $credit , FALSE);
        $this->db->where('id', $id);
        $this->db->update('users');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function validatePass($user,$pass){

        $query = $this->db->select('password, active')->from('users')->where('user', $user)->get();
        $password = $query->row('password');
        $is_active = $query->row('active');

        if($query->num_rows() > 0){
            if($password === $pass && $is_active != 0){
                return true;
            }
            return NULL;
        }
        return NULL;
    }
}
