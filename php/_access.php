<?php
if(!isset($_SESSION)){
session_start();
}
function access(){
  if(!isset($_SESSION['userid'])){
    header("location:".$_SERVER['HOST_NAME']."/delivery/login.php");
    die("<h1>لاتمتلك صلاحيات الوصول لهذه الصفحة  (<a href='login.php'>سجل الدخول</a>)</h1>");
  }
}
?>