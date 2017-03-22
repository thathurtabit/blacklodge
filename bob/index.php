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
    <div id="page-cover" class="page page--bob">
      <h1>Bob</h1>
      <h2>I'll catch you with my death bag</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--bob sps">
            
     <h2><span>Meet</span>Bob</h2>

     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-2 offset-md-2 text-col bio-img-col">
            <button class="img-info-link quote-form-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <img src="<?php echo $root; ?>/dist/images/info-bob.jpg" alt="Black Lodge: Bob" class="bio-img">
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>Bob (aka Killer Bob)</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>An alternative plane of reality</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Murder, fire, garmonbozia, denim</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Getting caught</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>Bob is an entity from the Black Lodge, a realm of pure evil which exists on an alternate plane of reality. He spends most of his time on Earth possessing human beings, although he also travels in the form of an owl. While possessing humans, he commits horrible acts to elicit pain, fear, and suffering from those around him; these feelings, which Black Lodge residents refer to collectively as "garmonbozia", act as a form of nourishment. <a href="http://twinpeaks.wikia.com/wiki/BOB" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
            </dl>
          </div>
       </div>

     </div>

     <button class="btn-scroll btn-scroll--up">
        <span class="sr-only">Scroll up</span>
      </button>

      <a href="<?php echo $root; ?>/mike" class="btn-next" goto-mike>
        <span><strong>Meet:</strong> Mike</span>
      </a>

    </div>


    <div class="video-modal">
      <button class="btn-close-video quote-form-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->

      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/c5WC0TW_0qc?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
      </div>
    </div>


  </div>
</div>


<?php
  // FOOTER
  include_once('../dist/includes/footer.inc.php');
?>