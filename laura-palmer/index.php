<?php
  // HEADER
  $pageName = 'Laura Palmer | ';
  $myPath = '../';
  include_once('../dist/includes/header.inc.php');
?>

<div id="barba-wrapper" class="main-content" role="document">
   <?php
    // NAV
    include_once('../dist/includes/nav.inc.php');
  ?>

  <div class="barba-container">
    <div id="page-cover" class="page page--laura-palmer">
      <h1>Laura Palmer</h1>
      <h2>Sometimes my arms bend back</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--laura-palmer sps">
            
     <h2><span>Meet</span>Laura Palmer</h2>

     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-3 offset-md-1 col-lg-2 offset-lg-2 text-col bio-img-col">
            <button class="img-info-link video-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <span>
                <img src="<?php echo $root; ?>/dist/images/info-laura.jpg" alt="Black Lodge: Laura Palmer" class="bio-img" />
              </span>
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>Laura Palmer</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>Twin Peaks, Washington</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Sex, boys, drugs, ponies</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Bob</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>Laura Palmer was a high school student whose death shook the town of Twin Peaks, Washington and sparked an investigation led by FBI Special Agent Dale Cooper. She was Donna Hayward's best friend and the girlfriend of Bobby Briggs. On February 24, 1989 she was found dead, wrapped in plastic. <a href="http://twinpeaks.wikia.com/wiki/Laura_Palmer" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
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

      <a href="<?php echo $root; ?>/chester-desmond" class="btn-next" goto-man>
        <span><strong>Meet:</strong> Chester Desmond</span>
      </a>

    </div>

    <div class="video-modal">
      <button class="btn-close-video video-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/BL57-9171pk?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
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