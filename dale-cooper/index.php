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
    <div id="page-cover" class="page page--dale-cooper">
      <h1><span>Special Agent</span> Dale Cooper</h1>
      <h2>This is - excuse me - a damn fine cup of coffee</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--dale-cooper sps">
            
     <h2><span>Meet </span>Dale Cooper</h2>

     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-sm-2 offset-md-2 text-col bio-img-col">
            <button class="img-info-link quote-form-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <img src="<?php echo $root; ?>/dist/images/info-dale.jpg" alt="Black Lodge: Dale Cooper" class="bio-img">
            </button>
          </div>

          <div class="col-sm-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>Dale Cooper</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>Philadelphia, Pennsylvania</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Coffee, cherry pie, reasonably priced hotels</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Albert Rosenfield's treatment of Twin Peaks' citizens</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>Federal Bureau of Investigation Special Agent Dale Bartholomew Cooper is an unconventional investigator who was assigned to investigate the brutal murder of the popular high school student, Laura Palmer in the town of Twin Peaks, Washington. He ended up falling in love with the town and gained a great deal of acceptance within the normally tight-knit community. He displays an array of quirky mannerisms such as giving a 'thumbs up' when satisfied, quoting sage-like sayings, a distinct sense of humor, and a passionate love for the Double R's cherry pie and a "damn fine cup of coffee." <a href="http://twinpeaks.wikia.com/wiki/Dale_Cooper" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
            </dl>
          </div>
       </div>

     </div>

     <button class="btn-scroll btn-scroll--up">
        <span class="sr-only">Scroll up</span>
      </button>
     

    </div>

    <div class="video-modal">
      <button class="btn-close-video quote-form-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/5CREjFZ4TmA?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
      </div>
    </div>
  </div>
</div>


<?php
  // FOOTER
  include_once('../dist/includes/footer.inc.php');
?>