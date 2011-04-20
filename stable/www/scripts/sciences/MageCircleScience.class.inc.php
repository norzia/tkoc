<?php
/*******************************************************************************
    The Kingdoms of Chaos - An online browser text game - <http://www.tkoc.net>
    Copyright (C) 2011 - Administrators of The Kingdoms of Chaos

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Contact Information:
    Petros Karipidis  - petros@rufunka.com - <http://www.rufunka.com/>
    Anastasios Nistas - tasosos@gmail.com  - <http://tasos.pavta.com/>

    Other Information
    =================
    The exact Author of each source file should be specified after this license
    notice. If not specified then the "Current Administrators" found at
    <http://www.tkoc.net/about.php> are considered the Authors of the source
    file.

    As stated at the License Section 5.d: "If the work has interactive user
    interfaces, each must display Appropriate Legal Notices; however, if the
    Program has interactive interfaces that do not display Appropriate Legal
    Notices, your work need not make them do so.", we require you give
    credits at the appropriate section of your interface.
********************************************************************************/

// 

require_once("ScienceBase.class.inc.php");

if( !class_exists( "MageCircleScience" ) ) {

class MageCircleScience extends ScienceBase {
		var	$ADD_WIZARDS = "-25";
		
        function MageCircleScience( $scienceID ) {
                                                                        // id,name,ticks,gold,metal,description
                $this->ScienceBase( $scienceID,"magic", "Mage circle", 18, 250000, 0,
		"In legends long forgotten, there are tales of wizards linking in a powerful circle to preform witchcraft.  
		Your archmages say that this knowledge will reduce the number of wizards required to cast a spell.. <b>This will 
		effectivly reduce wizard requirements by ".abs($this->ADD_WIZARDS)." %</b>",
/* requires */
array('military' =>0, "infrastructure" => 0, "magic" => 0, "thievery" => 0),
/* Gives */
array("military" => 0, "infrastructure" => 0, "magic" => 1, "thievery" => 0)

		);    
        }
	function addWizardUse($province=NULL) {
		return $this->ADD_WIZARDS;
	}
	

}
} // end if( !class_exists() )
?>