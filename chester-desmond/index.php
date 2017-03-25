<?php
  // HEADER
  $pageName = 'Chester Desmond | ';
  $myPath = '../';
  include_once('../dist/includes/header.inc.php');
?>

<div id="barba-wrapper" class="main-content" role="document">
   <?php
    // NAV
    include_once('../dist/includes/nav.inc.php');
  ?>

  <div class="barba-container">
    <div id="page-cover" class="page page--chester-desmond">
      <h1><span>Special Agent</span> Chester Desmond</h1>
      <h2>Her face had a sour look on it</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--chester-desmond sps">
            
     <h2><span>Meet Special Agent </span>Chester Desmond</h2>

     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-3 offset-md-1 col-lg-2 offset-lg-2 text-col bio-img-col">
            <button class="img-info-link video-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <span>
                <img src="<?php echo $root; ?>/dist/images/info-chester.jpg" alt="Black Lodge: Chester Desmond" class="bio-img">
              </span>
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>Chester Desmond</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>Fargo, North Dakota</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Coffee</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Rudeness, time wasters</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>Federal Bureau of Investigation Special Agent Chester "Chet" Desmond was called out by Regional Bureau Chief Gordon Cole to investigate the murder of a 17-year-old girl named Teresa Banks, who was found wrapped in plastic. Special Agent Dale Cooper investigated his disappearance and found Desmond's car with the words "Let's rock" scrawled across the windshield. <a href="http://twinpeaks.wikia.com/wiki/Chester_Desmond" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
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

      <a href="<?php echo $root; ?>/phillip-jefferies" class="btn-next" goto-man>
        <span><strong>Meet:</strong> Phillip Jefferies</span>
      </a>

    </div>

    <div class="video-modal">
      <button class="btn-close-video video-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/sEl8hw7tdwg?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
      </div>
    </div>

    <?php
      // CHARACTER MENU
      include('../dist/includes/character-menu.inc.php');
    ?>

  </div>
</div>


<?php
  // FOOTER
  include_once('../dist/includes/footer.inc.php');
?>