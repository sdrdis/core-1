/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
define("jquery-nos-renderer-datetimepicker",["jquery-nos","jquery-ui.datepicker.i18n","jquery-ui.datetimepicker.i18n"],function(a){var b=void (0);a.widget("nos.nosDatetimePicker",{options:{wrapper:null},_create:function(){var d=this,g=d.options;var h=this.element,f=h.data("datepicker-options");a.datepicker.setDefaults(a.datepicker.regional[a.nosLang.substr(0,2)]);var e=h.val();if(g.wrapper!==null){h.wrap(g.wrapper)}h.datetimepicker(f);h.datetimepicker("setDate",e);h.datetimepicker("option","altField","");h.datetimepicker("option","onSelect",function(){h.datetimepicker("option","altField",f.altField);h.datetimepicker("setDate",h.datetimepicker("getDate"));h.datetimepicker("option","altField","")});var c=a(f.altField).on("focus",function(){h.datetimepicker("show")});c.on("keyup",function(m){try{var l=a(this);var j=a.datepicker.parseDateTime(f.altFormat,f.altTimeFormat,l.val());var i=h.datetimepicker("getDate");if(j&&(i-j)!=0){var n=d.doGetCaretPosition(l[0]);h.datetimepicker("setDate",j);d.setCursor(l[0],n)}}catch(k){m.stopPropagation();return}})},setCursor:function(d,e){var d=(typeof d=="string"||d instanceof String)?document.getElementById(d):d;if(!d){return false}else{if(d.createTextRange){var c=d.createTextRange();c.collapse(true);c.moveEnd(e);c.moveStart(e);c.select();return true}else{if(d.setSelectionRange){d.setSelectionRange(e,e);return true}}}return false},doGetCaretPosition:function(d){var e=0;if(document.selection){d.focus();var c=document.selection.createRange();c.moveStart("character",-d.value.length);e=c.text.length}else{if(d.selectionStart||d.selectionStart=="0"){e=d.selectionStart}}return(e)}});return a});