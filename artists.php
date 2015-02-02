<!DOCTYPE HTML>
<html lang='ru'>
  <head>
    <title>Артисты</title>
    <meta content='text/html' charset='utf-8'>
    <link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,700italic,300,300italic,400italic,700' rel='stylesheet' type='text/css'>
    <link href='_/styles/style.min.css' rel='stylesheet' type='text/css'>
    <script src='_/javascripts/main.min.js' type='text/javascript'></script>
  </head>
  <body id='artists' data-spy='scroll' data-target='.scrollspy'>
    <section class='container'>
      <div class='content row'>
        <?php include "_/views/layouts/header.php"; ?>
        <section class='col col-lg-8 main'>
          <?php include "_/views/layouts/article-artist_list.php" ?>
        </section>
        <section class='col col-lg-4 sidebar'>
          <?php include "_/views/layouts/aside-register.php" ?>
          <?php include "_/views/layouts/aside-lastyear.php" ?>
          <?php include "_/views/layouts/aside-accordion.php" ?>
        </section>
        <?php include "_/views/layouts/footer.php"; ?>
      </div>
    </section>
  </body>
</html>