<?php

defined('BASEPATH') or exit('No direct script access allowed');

/**
 *
 */
class Send_email
{

    public function send($to_email, $subject, $text)
    {
        $CI = &get_instance();
        $CI->load->library('email');

        //$this->load->library('email');

        //configuracion para gmail
        /*$configGmail = array(
        'protocol'  => 'smtp',
        'smtp_host' => 'ssl://smtp.gmail.com',
        'smtp_port' => 465,
        'smtp_user' => 'correo_gmail',
        'smtp_pass' => 'password',
        'mailtype'  => 'html',
        'charset'   => 'utf-8',
        'newline'   => "\r\n",
        );*/

        $config = array(
            'protocol'  => 'smtp',
            'smtp_host' => 'correo.cmkx.icrt.cu',
            'smtp_port' => 25,
            'smtp_user' => 'smsgateway@rbayamo.icrt.cu',
            'smtp_pass' => '12345678',
            'mailtype'  => 'html',
            'charset'   => 'utf-8',
            'newline'   => "\r\n",
        );

        //cargamos la configuración para enviar con gmail
        $CI->email->initialize($config);

        $CI->email->from($config['smtp_user']);
        $CI->email->to($to_email);
        $CI->email->subject($subject);
        $CI->email->message($text);

        //Send mail
        if ($CI->email->send()) {
            return true;
        } else {
            return false;
        }
    }
}
