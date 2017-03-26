<?php
  // HEADER
  $pageName = 'Mike | ';
  $myPath = '../';
  include_once('../dist/includes/header.inc.php');
?>

<div id="barba-wrapper" class="main-content" role="document">
   <?php
    // NAV
    include_once('../dist/includes/nav.inc.php');
  ?>

  <div class="barba-container">
    <div id="page-cover" class="page page--mike sps">
      <h1>Mike</h1>
      <h2>Fire... walk with me</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--mike sps">
            
     <h2><span>Meet</span>Mike</h2>


     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-3 offset-md-1 col-lg-2 offset-lg-2 text-col bio-img-col">
            <button class="img-info-link video-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <span>
                <img src="<?php echo $root; ?>/dist/images/info-mike.jpg" alt="Black Lodge: Mike" class="bio-img" />
              </span>
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>Mike</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>An alternative plane of reality</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Shoes, Religion, Stopping Bob</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Tattoos, Left Arms</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>MIKE is a spirit who can inhabit a human host, similar to BOB, who was his partner in serial murder. After committing several rape/murders with BOB, MIKE claims to have had a religious epiphany and repented, cutting off his own arm to rid himself of a "FIRE WALK WITH ME" tattoo, which symbolized being touched by "the devilish one". BOB, however, would not repent. MIKE has spent years trying to find and stop BOB. He currently inhabits shoe salesman Philip Michael Gerard. <a href="http://twinpeaks.wikia.com/wiki/MIKE" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
            </dl>
          </div>
       </div>

       <div class="svg-content-border-wrap">
         <svg class="svg-content-border">
            <rect width="100%" height="100%" />
          </svg>
        </div>

     </div>

     <button class="btn-scroll btn-scroll--up">
        <span class="sr-only">Scroll up</span>
      </button>

      <a href="<?php echo $root; ?>/man-from-another-place" class="btn-next" goto-man>
        <span><strong>Meet:</strong> The Man from Another Place</span>
      </a>

    </div>

    <div class="video-modal">
      <button class="btn-close-video video-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/kIzimmrDtTg?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
      </div>
    </div>

    <?php
      // CHARACTER MENU
      include('../dist/includes/character-menu.inc.php');
    ?>
    
  </div>
</div>

<button class="characters-open-close btn-open-modal">
    <span class="sr-only">View characters</span>OPEN
</button>
<?php
  // FOOTER
  include_once('../dist/includes/footer.inc.php');
?>