<?php
  // HEADER
  $pageName = 'The Giant | ';
  $myPath = '../';
  include_once('../dist/includes/header.inc.php');
?>

<div id="barba-wrapper" class="main-content" role="document">
   <?php
    // NAV
    $currentPage4 = "active";
    include_once('../dist/includes/nav.inc.php');
  ?>

  <div class="barba-container">
    <div id="page-cover" class="page page--the-giant">
      <h1>The Giant</h1>
      <h2>It is happening... again</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--the-giant sps">
            
     <h2><span>Meet</span>The Giant</h2>


     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-3 offset-md-1 col-lg-2 offset-lg-2 text-col bio-img-col">
            <button class="img-info-link video-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <img src="<?php echo $root; ?>/dist/images/info-giant.jpg" alt="Black Lodge: The Giant" class="bio-img">
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>The Giant</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>An alternative plane of reality</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Warm milk, bow ties</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Forgetting things</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>In March 1989, the Giant appeared at the Great Northern Hotel in FBI Special Agent Dale Cooper's room to tell him three things that he said would come true: "there's a man in a smiling bag," "the owls are not what they seem," and "without chemicals, he points." He then took Cooper's ring and said he would give it back when these things came true. He also said "Leo locked inside hungry horse" and that there was a clue at Leo's home. After telling the special agent he would require medical attention for his gunshot wound, he disappeared. <a href="http://twinpeaks.wikia.com/wiki/The_Giant" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
            </dl>
          </div>
       </div>

     </div>

     <button class="btn-scroll btn-scroll--up">
        <span class="sr-only">Scroll up</span>
      </button>

      <a href="<?php echo $root; ?>/laura-palmer" class="btn-next" goto-man>
        <span><strong>Meet:</strong> Laura Palmer</span>
      </a>

    </div>

    <div class="video-modal">
      <button class="btn-close-video video-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/pWa0dZMHYeE?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
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