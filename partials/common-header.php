<?php
/**
 * COMMON Header Partial
 * Variables:
 *   $innerPage  (bool) — inner pages (menu/info) set this to true
 */
$headerClass = !empty($innerPage) ? 'header header--inside' : 'header';
?>
<div class="<?= $headerClass ?>">
    <ul class="navList">
        <li class="openNav">
            <div class="openNavBar"></div>
        </li>
    </ul>
    <a href="index.html" class="logo">COMMON</a>
    <a target="_blank" href="#" class="button">
        <div class="button__BG">
            <div class="button__BG__content">Shop</div>
        </div>
        <div class="button__content">Shop</div>
    </a>
</div>
