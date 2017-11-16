<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Workflow_model extends CI_Model {

    public function __construct()
    {
         parent::__construct();
    }

    //////////////////
    //CRUD Workflows//
    //////////////////

    public function saveWorkflow($name)
    {
        $this->db->set('name', $name);
        $this->db->insert('workflows');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function updateWorkflow($id,$data)
    {
        $this->db->set(
            $data
        )
        ->where("id" , $id)
        ->update('workflows');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function deleteWorkflow($id){
        
        $this->db->where("id", $id)->delete("workflows");

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    ///////////////////////
    //CRUD WorkflowStates//
    ///////////////////////

    public function saveState($name,$workflowid,$isactive)
    {
        $this->db->set('name', $name);
        $this->db->set('workflowid', $workflowid);
        $this->db->set('isactive', $isactive);
        $this->db->insert('workflowstates');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function updateState($id,$data)
    {
        $this->db->set(
            $data
        )
        ->where("id" , $id)
        ->update('workflowstates');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function deleteState($id){
        
        $this->db->where("id", $id)->delete("workflowstates");

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    ///////////////////////////
    //CRUD WorkflowNavigation//
    ///////////////////////////

    public function saveNavi($workflowstateid,$nextworkflowstateid)
    {
        $this->db->set('workflowstateid', $workflowstateid);
        $this->db->set('nextworkflowstateid', $nextworkflowstateid);
        $this->db->insert('workflownavigation');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function updateNavi($id,$data)
    {
        $this->db->set(
            $data
        )
        ->where("id" , $id)
        ->update('workflownavigation');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function deleteNavi($id){
        
        $this->db->where("id", $id)->delete("workflownavigation");

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    //////////////
    //CRUD Tasks//
    //////////////

    public function saveTask($name,$description,$workflowstateid)
    {
        $this->db->set('name', $name);
        $this->db->set('description', $description);
        $this->db->set('workflowstateid', $workflowstateid);
        $this->db->insert('tasks');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function updateTask($id,$data)
    {
        $this->db->set(
            $data
        )
        ->where("id" , $id)
        ->update('tasks');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function deleteTask($id){
        
        $this->db->where("id", $id)->delete("tasks");

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    //////////////////////////
    //CRUD TasksStateHistory//
    //////////////////////////

    public function saveTaskstate($taskid,$workflowstateid)
    {
        date_default_timezone_set('America/Havana'); # add your city to set local time zone
        $now = date('Y-m-d H:i:s');

        $this->db->set('taskid', $taskid);
        $this->db->set('workflowstateid', $workflowstateid);
        $this->db->set('createddate', $now);
        $this->db->insert('taskstatehistory');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function updateTaskstate($id,$data)
    {
        $this->db->set(
            $data
        )
        ->where("id" , $id)
        ->update('taskstatehistory');

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }

    public function deleteTaskstate($id){
        
        $this->db->where("id", $id)->delete("taskstatehistory");

        if($this->db->affected_rows() === 1)
        {
            return true;
        }
        return NULL;
    }
}
