<?php
// Block direct access to the main plugin file.
defined( 'ABSPATH' ) or die( 'Are you lost?' );
?>
    <button class="ezshaToggle" onclick="ezshaToggle()"><i class="fa-solid fa-share"></i></button>
    <div class="ezsha-buttons" id="ezshaButtons">
        <table class="ezsha-table">
            <tr>
                <td><button class="ezsha-facebook" onclick="ezshaFb()" title="Share on Facebook"><i class="fa-brands fa-square-facebook"></i></button></td>
            </tr>
            <tr>
                <td><button class="ezsha-twitter" onclick="ezshaTwit()" title="Share on Twitter"><i class="fa-brands fa-square-x-twitter"></i></button></td>
            </tr>
            <tr>
                <td><button class="ezsha-whatsapp" onclick="ezshaWa()" title="Share on WhatsApp"><i class="fa-brands fa-square-whatsapp"></i></button></td>
            </tr>
            <tr>
                <td><button class="ezsha-cp" id="ezsha-cp" onclick="ezshaCp()" title="Copy Link"><i class="fa-solid fa-copy"></i></button></td>
            </tr>
        </table>
    </div>