<?php
// NOTE: You'll need to change this on the live server

$root = "http://localhost/blacklodge";

$pageURL = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$currentPage = basename($pageURL);
if ($currentPage === "bob") {
  $currentPage1 = "active";
} elseif ($currentPage === "mike") {
  $currentPage2 = "active";
} elseif ($currentPage === "man-from-another-place") {
  $currentPage3 = "active";
} elseif ($currentPage === "the-giant") {
  $currentPage4 = "active";
} elseif ($currentPage === "laura-palmer") {
  $currentPage5 = "active";
} elseif ($currentPage === "chester-desmond") {
  $currentPage6 = "active";
} elseif ($currentPage === "phillip-jefferies") {
  $currentPage7 = "active";
} elseif ($currentPage === "dale-cooper") {
  $currentPage8 = "active";
}


?>

<nav class="navbar navbar-toggleable-sm fixed-top navbar-light">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-bar"></span>
  </button>
  <a class="navbar-brand nav-link" href="<?php echo $root ?>" data-animation="false" data-toggle="tooltip" data-placement="right" title="Black Lodge"><h1 class="sr-only">Black Lodge - "It will utterly annihilate your soul."</h1></a>

  <div class="collapse navbar-collapse" id="navbarToggler">
    <ul class="navbar-nav">
      <li class="nav-item nav-bob <?php if (isset($currentPage1)) { echo $currentPage1; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/bob" data-animation="false" data-toggle="tooltip" data-placement="right" title="Bob"><span class="hidden-md-up">Bob</span></a>
      </li>
      <li class="nav-item nav-mike <?php if (isset($currentPage2)) { echo $currentPage2; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/mike" data-animation="false" data-toggle="tooltip" data-placement="right" title="Mike"><span class="hidden-md-up">Mike</span></a>
      </li>
      <li class="nav-item nav-man <?php if (isset($currentPage3)) { echo $currentPage3; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/man-from-another-place" data-animation="false" data-toggle="tooltip" data-placement="right" title="Man from another place"><span class="hidden-md-up">Man from another place</span></a>
      </li>
      <li class="nav-item nav-giant <?php if (isset($currentPage4)) { echo $currentPage4; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/the-giant" data-animation="false" data-toggle="tooltip" data-placement="right" title="The Giant"><span class="hidden-md-up">The Giant</span></a>
      </li>
      <li class="nav-item nav-laura <?php if (isset($currentPage5)) { echo $currentPage5; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/laura-palmer" data-animation="false" data-toggle="tooltip" data-placement="right" title="Laura Palmer"><span class="hidden-md-up">Laura Palmer</span></a>
      </li>
      <li class="nav-item nav-chester <?php if (isset($currentPage6)) { echo $currentPage6; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/chester-desmond" data-animation="false" data-toggle="tooltip" data-placement="right" title="Chester Desmond"><span class="hidden-md-up">Chester Desmond</span></a>
      </li>
      <li class="nav-item nav-phillip <?php if (isset($currentPage7)) { echo $currentPage7; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/phillip-jefferies" data-animation="false" data-toggle="tooltip" data-placement="right" title="Phillip Jefferies"><span class="hidden-md-up">Phillip Jefferies</span></a>
      </li>
      <li class="nav-item nav-dale <?php if (isset($currentPage8)) { echo $currentPage8; } ?>">
        <a class="nav-link" href="<?php echo $root ?>/dale-cooper" data-animation="false" data-toggle="tooltip" data-placement="right" title="Dale Cooper"><span class="hidden-md-up">Dale Cooper</span></a>
      </li>
      
    </ul>
  </div>
</nav>