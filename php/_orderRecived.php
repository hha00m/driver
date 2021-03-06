<?php
session_start();
error_reporting(0);
header('Content-Type: application/json');
require("_access.php");
access();
require("dbconnection.php");

use Violin\Violin;
require_once('../validator/autoload.php');
$v = new Violin;
$success = 0;
$error = [];
$id        = $_SESSION['userid'];
$new_price = $_REQUEST['new_price'];
$note      = $_REQUEST['note'];
$order_id     = $_REQUEST['id'];

$v->addRuleMessage('isPrice', 'المبلغ غير صحيح');

$v->addRule('isPrice', function($value, $input, $args) {
  if(preg_match("/^(0|[1-9]\d*)(\.\d{2})?$/",$value) || empty($value)){
    $x=(bool) 1;
  }
  return   $x;
});
$v->addRuleMessages([
    'required' => 'الحقل مطلوب',
    'int'      => 'فقط الارقام مسموع بها',
    'regex'    => 'فقط الارقام مسموح بها',
    'min'      => 'قصير جداً',
    'max'      => 'مسموح ب {value} رمز كحد اعلى ',
    'email'    => 'البريد الالكتروني غيز صحيح',
]);

$v->validate([
    'id'         => [$id,       'required|int'],
    'new_price'  => [$new_price,'required|isPrice'],
    'note'       => [$note,     'max(250)'],
    'order_id'   => [$order_id, "required|int"],
]);

if($v->passes()) {

   $sql = 'update orders set order_status_id =?,new_price=? where id=?';
   $result = setData($con,$sql,['4',$new_price,$order_id]);
   if($result > 0){
    $success = 1;
    $sql = 'insert into tracking (order_status_id,note,order_id) values(?,?,?)';
    $result = setData($con,$sql,['4',$note,$order_id]);
   }


}else{
  $error = [
           'id'=> implode($v->errors()->get('id')),
           'note'=> implode($v->errors()->get('note')),
           'new_price'=>implode($v->errors()->get('new_price')),
           'order_id'=>implode($v->errors()->get('order_id')),
           ];
}
echo json_encode(['success'=>$success, 'error'=>$error]);
?>