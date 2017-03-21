<?php
  // HEADER
  $myPath = '../';
  include_once('../dist/includes/header.inc.php');
?>

<div id="barba-wrapper" class="main-content" role="document">
   <?php
    // NAV
    include_once('../dist/includes/nav.inc.php');
  ?>

  <div class="barba-container">
    <div id="page-cover" class="page page--mike">
      <h1>Mike</h1>
      <h2>Fire... walk with me</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--mike sps">
            
     <h2>Mike Info</h2>

     <button class="btn-scroll btn-scroll--up">
        <span class="sr-only">Scroll up</span>
      </button>

    </div>
  </div>
</div>


<?php
  // FOOTER
  include_once('../dist/includes/footer.inc.php');
?>