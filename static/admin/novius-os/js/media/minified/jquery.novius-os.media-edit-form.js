/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
define("jquery-nos-media-edit-form",["jquery-nos","static/novius-os/admin/config/media/seo_compliant"],function(a){a.fn.extend({nosMediaEditForm:function(){return this.each(function(){var f=a(this),c=f.find(":file[name=media]"),d=f.find("input[name=media_title]"),e=f.find("input[name=media_file]"),b=f.find("input[data-id=same_title]");c.change(function(){var g=c.val();g=g.replace(/^.*[\/\\]/g,"");g=g.split(".");if(g.length>1){g.pop()}g=g.join(".");g=g.replace(/[^a-z0-9A-Z]/g," ").replace(/\s+/g," ");g=g.replace(/^([a-z])|\s+([a-z])/g,function(h){return h.toUpperCase()});d.val(g).triggerHandler("change")});d.bind("change keyup",function(){if(b.is(":checked")){e.val(a.seoCompliant(d.val()))}});b.change(function(){if(a(this).is(":checked")){e.attr("readonly",true).addClass("ui-state-disabled").removeClass("ui-state-default");d.triggerHandler("change")}else{e.removeAttr("readonly").addClass("ui-state-default").removeClass("ui-state-disabled")}}).triggerHandler("change");f.find("form").bind("ajax_success",function(){a(this).nosDialog("close")})})}});return a});