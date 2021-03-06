<?php
session_start();
//error_reporting(0);
header('Content-Type: application/json');
require("_access.php");
access();
require("dbconnection.php");
$id = $_SESSION['userid'];
$order_id = $_REQUEST['id'];
$note = $_REQUEST['note'];
   $success = 0;
use Violin\Violin;
require_once('../validator/autoload.php');
$v = new Violin;
$v->addRuleMessages([
    'required' => 'الحقل مطلوب',
    'int'      => 'فقط الارقام مسموع بها',
    'min'      => 'قصير جداً',
    'max'      => 'مسموح ب {250} رمز كحد اعلى '
]);

$v->validate([
    'id'            => [$id,            'required|int'],
    'note'        => [$note,       'required|max(250)'],
    'order_id'  => [$order_id, 'required|int']
]);

if($v->passes()) {

   $sql = 'update orders set order_status_id =?,new_price=?           where id=? and driver_id=?';
   $result = setData($con,$sql,['9',0,$order_id,$id]);
   if($result > 0){
    $success = 1;
    $sql = 'insert into tracking   
    (order_status_id,note,order_id) values(?,?,?)';
    $result = setData($con,$sql,['9',$note,$order_id]);
   }


}else{
  $error = [
           'id'=> implode($v->errors()->get('id')),
           'note'=> implode($v->errors()->get('note')),
           'order_id'=>implode($v->errors()->get('order_id'))
           ];
}
echo json_encode(['success'=>$success, 'error'=>$error,$_POST]);
?>
