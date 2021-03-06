<?php
if(!isset($_SESSION)){
  session_start();
}
$access_roles = [1];
if(! in_array($_SESSION['login'],$access_roles)){
    header("location: login.php");
    die();
}
require_once("config.php");
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
<title>شركة النهر للحلول البرمجية</title>
<link href="https://fonts.googleapis.com/css?family=Cairo:300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" type="text/css" href="styles/framework.css">
<link rel="stylesheet" type="text/css" href="styles/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="fonts/css/fontawesome-all.min.css">
<!--<link rel="manifest" href="manifest.json"> -->

</head>

<body class="theme-light" data-background="none" data-highlight="red2">
<style type="text/css">
.bg-div1 {
 background-color: #5500cc;
}
.bg-div2 {
 background-color: #4411cc;
}
.bg-div3 {
 background-color: #3322cc;
}
.bg-div4 {
 background-color: #2233cc;
}
.bg-div5 {
 background-color: #1144cc;
}
.returned{
  height: 5rem;
  background-color: #FF0000;
}
.posponded{
  height: 5rem;
  background-color: #FFCC33;
}
.recived{
  height: 5rem;
  background-color: #66CC33;
}
.all {
  height: 5rem;
}
.waiting {
  height: 5rem;
}

.last span{
    display: block;
    width:100%;
    min-height: 22px;
}

</style>
<div id="page">

    <div id="page-preloader">
        <div class="loader-main"><div class="preload-spinner border-highlight"></div></div>
    </div>

	<div class="header header-fixed header-logo-center">
        <a href="index.php" class="header-title"> شركة النهر</a>
		<a href="#" class="back-button header-icon header-icon-1"><i class="fas fa-arrow-left"></i></a>
		<a href="logout.php" data-toggle-theme-switch class="header-icon header-icon-4">خروج</a>
	</div>

    <div id="footer-menu" class="footer-menu-3-icons footer-menu-style-2">
        <a href="index.php" class="active-nav"><i class="fa fa-home"></i><span>الرئسية</span></a>
        <a href="notfcation.php"><i class="fa fa-bell"></i><span>الاشعارات</span></a>
        <a href="profile.php"><i class="fa fa-user"></i><span>الصفحة الشخصية</span></a>
        <div class="clear"></div>
    </div>

    <div class="page-content header-clear-medium">
        <div class="content-boxed">
        <div class="content caption  bottom-20">
              <div  class="one-half last all">
                     <span class="text-center font-22" id="">طلبيات اليوم</span>
                     <span class="text-center font-22" id="today">0</span>
              </div>
              <div  class="one-half last last-column waiting">
                     <span class="text-center font-22">قيد الانتظار</span>
                     <span class="text-center font-22" id="wating">0</span>
              </div>
              <div  class="one-third last returned">
                     <span class="text-center font-22" id="returned">0</span>
                     <span class="text-center font-22">الرواجع</span>
              </div>
              <div  class="one-third last posponded">
                    <span class="text-center font-22" id="posponded">0</span>
                    <span class="text-center font-22" id="">المؤجلات</span>
              </div>
              <div data-height="70" class="one-third last-column last recived">
                   <span class="text-center font-22" id="recived">0</span>
                   <span class="text-center font-22" id="">المستلمة</span>
              </div>
        </div>
        <div class="divider bg-blue2-dark"></div>
        <div class="clear">
        <a href="orders.php">
            <div data-instant-id="instant-1" data-height="100" class="bg-div1 caption caption-margins round-medium shadow-large">
                <div class="caption-center">
                    <h1 class="center-text color-white bolder font-22">الطلبيات</h1>
                    <p class="center-text color-white under-heading">البحث و عرض الطلبيات</p>
                </div>
                <div class="caption-bottom">
                    <p class="center-text color-white opacity-30">انقر للعرض</p>
                </div>

                <div class="caption-overlay  opacity-80"></div>
            </div>
            </a>
        </div>
        <div class="one-half">
           <a href="returned.php">
           <div data-instant-id="instant-2" data-height="100" class="bg-div2 caption caption-margins round-medium shadow-large">
                <div class="caption-center">
                    <h1 class="center-text color-white bolder font-22">الرواجع</h1>
                    <p class="center-text color-white under-heading">تقرير بالرواجع</p>
                </div>
                <div class="caption-bottom">
                    <p class="center-text color-white opacity-30"></p>
                </div>

                <div class="caption-overlay opacity-80"></div>
            </div>
            </a>
        </div>

        <div class="one-half">
            <a href="posponded.php">
            <div data-instant-id="instant-3" data-height="100" class="bg-div3 caption caption-margins round-medium shadow-large">
                <div class="caption-center">
                    <h1 class="center-text color-white bolder font-22">المؤجلات</h1>
                    <p class="center-text color-white under-heading">تقرير بجميع المؤجلات</p>

                </div>
                <div class="caption-bottom">
                    <p class="center-text color-white opacity-30"></p>
                </div>
                <div class="caption-overlay opacity-80"></div>
            </div>
            </a>
        </div>

        <div class="clear">
            <a href="earnings.php">
            <div data-instant-id="instant-4" data-height="100" class="bg-div4 caption caption-margins round-medium shadow-large">
                <div class="caption-center">
                    <h1 class="center-text color-white bolder font-22">الارباح</h1>
                    <p class="center-text color-white under-heading">تقرير بالارباح ضمن فترات زمنية محددة</p>

                </div>
                <div class="caption-bottom">
                    <p class="center-text color-white opacity-30"></p>
                </div>
                <div class="caption-overlay opacity-80"></div>
            </div>
            </a>
        </div>

        <div class="clear last-column">
            <a href="charts.php">
            <div data-instant-id="instant-5" data-height="100" class="bg-div5 caption caption-margins round-medium shadow-large">
                <div class="caption-center">
                    <h1 class="center-text color-white bolder font-22">احصائيات</h1>
                    <p class="center-text color-white under-heading">تقرير احصائي بالطلبيات المؤجلة والراجعة والمستلمة</p>

                </div>
                <div class="caption-bottom">
                    <p class="center-text color-white opacity-30"></p>
                </div>
                <div class="caption-overlay opacity-80"></div>
            </div>
            </a>
        </div>
       </div>

</div>
</div>
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/plugins.js"></script>
<script type="text/javascript" src="scripts/custom.js"></script>

<script type="text/javascript">
function static(){
  $.ajax({
  url:"php/_static.php",
  type:"POST",
  data:$("#searchForm").serialize(),
  success:function(res){
    console.log(res);
    $.each(res.data,function(){
      $("#today").text(this.today);
      $("#waiting").text(this.waiting);
      $("#returned").text(this.returned);
      $("#poponded").text(this.poponded);
      $("#recived").text(this.recived);
    })
  },
  error:function(e){
    console.log(e);
  }
});
}
static();
</script>
</body>
</html>
