<?php
/**
 * COMMON Footer Partial
 * Variables:
 *   $innerPage  (bool) — inner pages (menu/info) set this to true
 */
$footerClass = !empty($innerPage) ? 'footer footer--inside' : 'footer';
?>
<div class="<?= $footerClass ?>">
    <span class="footer-logo">COMMON</span>
    <div class="copyright">
        Copyright &copy; 2023 surcuisine, All Rights Reserved
    </div>
</div>
