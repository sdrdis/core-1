<?php
/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */

namespace Nos;

class Permission_Driver
{
    protected $identifier;
    protected $application;
    protected $label;

    public function __construct($application, $identifier, $label, $options = array())
    {
        $this->application = $application;
        $this->identifier  = $identifier;
        $this->label       = $label;

        $this->set_options($options);
    }

    public function set_option()
    {
        return;
    }

    public function check_permission()
    {
        return false;
    }

    public function display($role)
    {
        return '';
    }

    public function save($role, $data)
    {
        return;
    }
}
