<?php
/**
 * Created by PhpStorm.
 * User: nickolay
 * Date: 18.07.18
 * Time: 18:14
 */

namespace html\Proxies;

class UserProxy extends \User implements \Doctrine\ORM\Proxy\Proxy
{
    public function addReportedBug($bug)
    {
        $this->_load();
        return parent::addReportedBug($bug); // TODO: Change the autogenerated stub
    }

    public function assignedToBug($bug)
    {
        $this->_load();
        return parent::assignedToBug($bug); // TODO: Change the autogenerated stub
    }
}