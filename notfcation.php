<!DOCTYPE HTML>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, viewport-fit=cover" />
<meta name="description" content="notification for driver">
<title>شركة النهر للحلول البرمجية</title>
<link href="https://fonts.googleapis.com/css?family=Cairo:300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" type="text/css" href="styles/framework.css">
<link rel="stylesheet" type="text/css" href="styles/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="fonts/css/fontawesome-all.min.css">
<link rel="manifest" href="pwa/site.webmanifest">


</head>

<body class="theme-light" data-background="none" data-highlight="red2">
<style type="text/css">
.bg-div1 {
 background-color: #CC0011;
}
.bg-div2 {
 background-color: #CC1122;
}
.bg-div3 {
 background-color: #CC2233;
}
.bg-div4 {
 background-color: #CC3344;
}
.bg-div5 {
 background-color: #CC4455;
}

</style>
<div id="page">

    <div id="page-preloader">
        <div class="loader-main"><div class="preload-spinner border-highlight"></div></div>
    </div>

	<div class="header header-fixed header-logo-center">
        <a href="index.php" class="header-title"> شركة النهر</a>
		<a href="index.php" aria-label="back" class="back-button header-icon header-icon-1"><i class="fas fa-arrow-left"></i></a>
		<a href="logout.php" data-toggle-theme-switch class="header-icon header-icon-4">خروج</a>
	</div>

    <div id="footer-menu" class="footer-menu-3-icons footer-menu-style-2">
        <a href="index.php"><i class="fa fa-home"></i><span>الرئسية</span></a>
        <a href="notfcation.php" class="active-nav"><i class="fa fa-bell"></i><span>الاشعارات</span></a>
        <a href="profile.php" ><i class="fa fa-user"></i><span>الصفحة الشخصية</span></a>
        <div class="clear"></div>
    </div>

    <div class="page-content header-clear-medium">
        <div data-height="200" class="caption shadow-large caption-margins top-30 round-medium shadow-huge">
            <div class="caption-top top-30">
                <h1 id="head-name" class="center-text color-white bolder fa-4x">الاشعارات قرياً</h1>
            </div>
            <div class="caption-overlay bg-black opacity-80"></div>
            <div class="caption-bg bg-14"></div>
        </div>



</div>

</div>
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/plugins.js"></script>
<script type="text/javascript" src="scripts/custom.js"></script>
<script type="text/javascript" src="sw_reg.js"></script>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-messaging.js"></script>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAzTYiQCf5Fu5JC6S4A9hBLJN67_8S9sXE",
    authDomain: "alnahr-b255e.firebaseapp.com",
    databaseURL: "https://alnahr-b255e.firebaseio.com",
    projectId: "alnahr-b255e",
    storageBucket: "alnahr-b255e.appspot.com",
    messagingSenderId: "353217059672",
    appId: "1:353217059672:web:20fcd9e0cc8c8155ca232d",
    measurementId: "G-HY7454GTGJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
<script >
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BAqjdyrRA95Q3TaCYidMN3XWlni3S21zsjiP3VENE8FeuCxJ_AXrVVuhU2LDwre-_mko_k10DLapoZMdT930DC4");

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  } else {
    console.log('Unable to get permission to notify.');
  }
});

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    console.log(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
});

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    console.log(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});
</script>

</body>
</html>
