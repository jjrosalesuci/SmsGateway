<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Workflow extends  REST_Controller {

    public function __construct()
    {
         parent::__construct();
         $this->load->model('workflow_model');
         $this->load->helper('date');
    }

    //////////////////
    //CRUD Workflows//
    //////////////////

    public function index_post()
    {
        
        $name = $this->input->post('name');

        if($name!=null){
                $result = $this->workflow_model->saveworkflow($name);
                if($result == true){
                    $this->response(array("success" => true));
                }else{
                    $this->response(array("error" => "No ha sido guardado"),400);
                }
        }
        else{
            $this->response(array("error" => "Faltan parámetros"), 400);
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

        $update = $this->workflow_model->updateworkflow($id, $array);

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

        $delete = $this->workflow_model->deleteworkflow($id); 

        if($delete == true){
            $this->response(array("success" => true));
        }else{
            $this->response(array("error" => "No ha sido eliminado"),400);
        }
    }

    ///////////////////////
    //CRUD WorkflowStates//
    ///////////////////////

    public function states_post()
    {
        $name = $this->input->post('name');
        $workflowid = $this->input->post('workflowid');
        $isactive = $this->input->post('isactive');

        if($name!=null && $workflowid !=null && $isactive!=null){
                $result = $this->workflow_model->savestate($name,$workflowid,$isactive);
                if($result == true){
                    $this->response(array("success" => true));
                }else{
                    $this->response(array("error" => "No ha sido insertado"),400);
                }
        }
        else{
            $this->response(array("error" => "Faltan parámetros"), 400);
        }
    }

    public function states_put()
    {   
        $params = json_decode ($this->input->raw_input_stream);

        $id = $params->id;
        $data = $params->params;

        $array = json_decode(json_encode($data), true);
        
        if(! $id  || ! $data) { 
            $this->response(NULL,400);
        }

        $update = $this->workflow_model->updatestate($id, $array);

        if($update){
            $this->response(array("success" => true), 200);
        }else{
            $this->response(array("error" => "No hay cambios"), 400);
        }    
    }

    public function states_delete()
    {
        $id = (int)$this->input->raw_input_stream;

        if(!$id){
            $this->response(NULL,400);
        }

        $delete = $this->workflow_model->deletestate($id); 

        if($delete == true){
            $this->response(array("success" => true));
        }else{
            $this->response(array("error" => "No ha sido eliminado"),400);
        }
    }

    ///////////////////////////
    //CRUD WorkflowNavigation//
    ///////////////////////////

    public function navi_post()
    {
        $workflowstateid = $this->input->post('workflowstateid');
        $nextworkflowstateid = $this->input->post('nextworkflowstateid');

        if($workflowstateid!=null && $nextworkflowstateid !=null){
                $result = $this->workflow_model->savenavi($workflowstateid,$nextworkflowstateid);
                if($result == true){
                    $this->response(array("success" => true));
                }else{
                    $this->response(array("error" => "No ha sido insertado"),400);
                }
        }
        else{
            $this->response(array("error" => "Faltan parámetros"), 400);
        }
    }

    public function navi_put()
    {   
        $params = json_decode ($this->input->raw_input_stream);

        $id = $params->id;
        $data = $params->params;

        $array = json_decode(json_encode($data), true);
        
        if(! $id  || ! $data) { 
            $this->response(NULL,400);
        }

        $update = $this->workflow_model->updatenavi($id, $array);

        if($update){
            $this->response(array("success" => true), 200);
        }else{
            $this->response(array("error" => "No hay cambios"), 400);
        }    
    }

    public function navi_delete()
    {
        $id = (int)$this->input->raw_input_stream;

        if(!$id){
            $this->response(NULL,400);
        }

        $delete = $this->workflow_model->deletenavi($id); 

        if($delete == true){
            $this->response(array("success" => true));
        }else{
            $this->response(array("error" => "No ha sido eliminado"),400);
        }
    }

    ///////////////
    //CRUD Tasks///
    ///////////////

    public function task_post()
    {
        $name = $this->input->post('name');
        $description = $this->input->post('description');
        $workflowstateid = $this->input->post('workflowstateid');

        if($name!=null && $description !=null && $workflowstateid!=null){
                $result = $this->workflow_model->savetask($name,$description,$workflowstateid);
                if($result == true){
                    $this->response(array("success" => true));
                }else{
                    $this->response(array("error" => "No ha sido insertado"),400);
                }
        }
        else{
            $this->response(array("error" => "Faltan parámetros"), 400);
        }
    }

    public function task_put()
    {   
        $params = json_decode ($this->input->raw_input_stream);

        $id = $params->id;
        $data = $params->params;

        $array = json_decode(json_encode($data), true);
        
        if(! $id  || ! $data) { 
            $this->response(NULL,400);
        }

        $update = $this->workflow_model->updatetask($id, $array);

        if($update){
            $this->response(array("success" => true), 200);
        }else{
            $this->response(array("error" => "No hay cambios"), 400);
        }    
    }

    public function task_delete()
    {
        $id = (int)$this->input->raw_input_stream;

        if(!$id){
            $this->response(NULL,400);
        }

        $delete = $this->workflow_model->deletetask($id); 

        if($delete == true){
            $this->response(array("success" => true));
        }else{
            $this->response(array("error" => "No ha sido eliminado"),400);
        }
    }

    //////////////////////////
    //CRUD TaskStateHistory///
    //////////////////////////

    public function taskstate_post()
    {
        $taskid = $this->input->post('taskid');
        $workflowstateid = $this->input->post('workflowstateid');

        if($taskid !=null && $workflowstateid!=null){
                $result = $this->workflow_model->savetaskstate($taskid,$workflowstateid);
                if($result == true){
                    $this->response(array("success" => true));
                }else{
                    $this->response(array("error" => "No ha sido insertado"),400);
                }
        }
        else{
            $this->response(array("error" => "Faltan parámetros"), 400);
        }
    }

    public function taskstate_put()
    {   
        $params = json_decode ($this->input->raw_input_stream);

        $id = $params->id;
        $data = $params->params;

        $array = json_decode(json_encode($data), true);
        
        if(! $id  || ! $data) { 
            $this->response(NULL,400);
        }

        $update = $this->workflow_model->updatetaskstate($id, $array);

        if($update){
            $this->response(array("success" => true), 200);
        }else{
            $this->response(array("error" => "No hay cambios"), 400);
        }    
    }

    public function taskstate_delete()
    {
        $id = (int)$this->input->raw_input_stream;

        if(!$id){
            $this->response(NULL,400);
        }

        $delete = $this->workflow_model->deletetaskstate($id); 

        if($delete == true){
            $this->response(array("success" => true));
        }else{
            $this->response(array("error" => "No ha sido eliminado"),400);
        }
    }

}
