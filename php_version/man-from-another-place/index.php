<?php
  // HEADER
  $pageName = 'The Man from Another Place | ';
  $myPath = '../';
  include_once('../dist/includes/header.inc.php');
?>

<div id="barba-wrapper" class="main-content" role="document">
   <?php
    // NAV
    include_once('../dist/includes/nav.inc.php');
  ?>

  <div class="barba-container">
    <div id="page-cover" class="page page--the-man sps">
      <h1>The Man from Another Place</h1>
      <h2>Let's rock!</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--man sps">
            
     <h2><i class="zigzag-long"></i><span>Meet</span>The Man from Another Place</h2>


     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-3 offset-md-1 col-lg-2 offset-lg-2 text-col bio-img-col">
            <button class="img-info-link video-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <span>
                <img src="<?php echo $root; ?>/dist/images/info-man.jpg" alt="Black Lodge: The Man from Another Place" class="bio-img" />
              </span>
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>The Man from Another Place</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>An alternative plane of reality</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Red suits, talking backwards, dancing</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Having his garmonbozia stolen</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>The Man from Another Place appeared in a dream had by FBI Special Agent Dale Cooper. He said "let's rock" and went to a chair to tell Cooper that the gum he liked was going to come back in style. He described the present Laura Palmer as being his cousin and said she was full of secrets. He said that where he was from, "the birds sing a pretty song and there is always music in the air." He then stood up and began dancing. Laura shared this very same dream days before Cooper. <a href="http://twinpeaks.wikia.com/wiki/The_Man_from_Another_Place" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
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

      <a href="<?php echo $root; ?>/the-giant" class="btn-next">
        <span><strong>Meet:</strong> The Giant</span>
      </a>

    </div>

    <div class="video-modal">
      <div class="video-modal-inner">
        <button class="btn-close-video video-open-close"><span class="sr-only">Close video</span>X</button>
        <!-- 16:9 aspect ratio -->
        <div class="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.youtube.com/embed/xw9bpuJRoyU?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
        </div>
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