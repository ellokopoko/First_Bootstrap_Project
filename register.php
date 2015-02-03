<!DOCTYPE HTML>
<html lang='ru'>
  <head>
    <title>Регистрация</title>
    <meta content='text/html' charset='utf-8'>
    <link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,700italic,300,300italic,400italic,700' rel='stylesheet' type='text/css'>
    <link href='_/styles/style.min.css' rel='stylesheet' type='text/css'>
    <script src='_/javascripts/main.min.js' type='text/javascript'></script>
  </head>
  <body id='register'>
    <section class='container'>
      <div class='content row'>
        <?php include "_/views/layouts/header.php"; ?>
        <section class='col col-lg-8 main'>
          <?php include "_/views/layouts/article-registration_form.php" ?>
        </section>
        <section class='col col-lg-4 sidebar'>
          <?php include "_/views/layouts/aside-register.php" ?>
          <?php include "_/views/layouts/aside-accordion.php" ?>
        </section>
        <?php include "_/views/layouts/footer.php"; ?>
      </div>
    </section>
  </body>
</html>