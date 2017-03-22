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
    <div id="page-cover" class="page page--phillip-jefferies">
      <h1>Phillip Jefferies</h1>
      <h2>Who do you think this is, there?</h2>

      <button class="btn-scroll btn-scroll--down">
        <span class="sr-only">Scroll down</span>
      </button>
    </div>
    <div id="page-info" class="page-info page-info--phillip-jefferies sps">
            
     <h2><span>Meet </span>Phillip Jefferies</h2>

     <div class="page-info-content bio container-fluid">
       <div class="row">
          <div class="col-md-2 offset-md-2 text-col bio-img-col">
            <button class="img-info-link quote-form-open-close" data-animation="false" data-toggle="tooltip" data-placement="right" title="View video">
              <img src="<?php echo $root; ?>/dist/images/info-phillip.jpg" alt="Black Lodge: Phillip Jefferies" class="bio-img">
            </button>
          </div>

          <div class="col-md-6 text-col">
            <dl>
              <dt>Name:</dt>
              <dd>Phillip Jefferies</dd>
            </dl>

            <dl>
              <dt>From:</dt>
              <dd>Philadelphia, Pennsylvania</dd>
            </dl>

            <dl>
              <dt>Likes:</dt>
              <dd>Colourful shirts</dd>
            </dl>

            <dl>
              <dt>Dislikes:</dt>
              <dd>Getting lost in alternative planes of reality</dd>
            </dl>
            
            <dl>
              <dt>Bio:</dt>
              <dd>In 1987, Jeffries was in a hotel in Buenos Aires, Argentina, when he suddenly disappeared after receiving a letter from a young woman who may be "Miss Judy", passing a bellhop and entering an elevator. On February 16 1989, Jeffries suddenly appeared out of an elevator in the Philadelphia office of the FBI wearing the same clothes. He hurried to the office of his former superior, Regional Bureau Chief Gordon Cole and started raving in a loud and disturbed manner, speaking of an individual named Judy and referring at one stage to Special Agent Dale Cooper and yelling "Who do you think this is, there?" <a href="http://twinpeaks.wikia.com/wiki/Phillip_Jeffries" title="Source" target="_blank" class="btn-info-ext">Src</a></dd>
            </dl>
          </div>
       </div>

     </div>

     <button class="btn-scroll btn-scroll--up">
        <span class="sr-only">Scroll up</span>
      </button>

      <a href="<?php echo $root; ?>/dale-cooper" class="btn-next" goto-man>
        <span><strong>Meet:</strong> Dale Cooper</span>
      </a>

    </div>

    <div class="video-modal">
      <button class="btn-close-video quote-form-open-close"><span class="sr-only">Close video</span>X</button>
      <!-- 16:9 aspect ratio -->
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/aMszCiYdtts?controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe>
      </div>
    </div>
  </div>
</div>


<?php
  // FOOTER
  include_once('../dist/includes/footer.inc.php');
?>