<?php
  // HEADER
  $pageName = '';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--home">
            
           <h1>404</h1>
           <h2>What the hell kind of two-bit operation they running out of this treehouse, Cooper? </h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          
          <a href="<?php echo $root; ?>/" class="btn-next" goto-bob>
            <span><strong>Meet:</strong> The Black Lodge</span>
          </a>
        </div>
      </main><!-- /.main -->
                                     
      
<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>