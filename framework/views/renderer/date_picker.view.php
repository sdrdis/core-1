<?php
/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
?>
<script type="text/javascript">
    require(
        [
            'jquery-nos',
            'jquery-ui.datepicker.i18n'
        ],
        function($) {
            $(function() {
                var $input = $('input#<?= $id ?>');
                $.datepicker.setDefaults($.datepicker.regional[$.nosLang.substr(0, 2)]);
                $input<?= !empty($wrapper) ? '.wrap('.\Format::forge()->to_json($wrapper).')' : '' ?>.datepicker($input.data('datepicker-options'));
            });
        });
</script>
