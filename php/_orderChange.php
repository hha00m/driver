<?php
session_start();
error_reporting(0);
header('Content-Type: application/json');
require("_access.php");
access();
require("dbconnection.php");
$id = $_SESSION['userid'];
$order_id = $_REQUEST['id'];
$address = $_REQUEST['address'];
use Violin\Violin;
require_once('../validator/autoload.php');
$v = new Violin;
$v->addRuleMessages([
    'required' => 'الحقل مطلوب',
    'int'      => 'فقط الارقام مسموع بها',
    'min'      => 'قصير جداً',
    'max'      => 'مسموح ب {value} رمز كحد اعلى ',
]);

$v->validate([
    'id'         => [$id,       'required|int'],
    'address'    => [$address,'required|max(250)'],
    'order_id'   => [$order_id, "required|int"],
]);

if($v->passes()) {

   $sql = 'update orders set order_status_id =? where id=? and driver_id=?';
   $result = setData($con,$sql,['8',$order_id,$id]);
   if($result > 0){
    $success = 1;
    $sql = 'insert into tracking (order_status_id,note,order_id,new_address) values(?,?,?,?)';
    $result = setData($con,$sql,['8','تغير العنوان',$order_id,$address]);
   }


}else{
  $error = [
           'id'=> implode($v->errors()->get('id')),
           'address'=> implode($v->errors()->get('address')),
           'order_id'=>implode($v->errors()->get('order_id')),
           ];
}
echo json_encode(['success'=>$success, 'error'=>$error,$_POST]);
?>