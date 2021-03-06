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

$ownAcres = (int)$_GET["attacker"];
$targetAcres = (int)$_GET["defender"];

if ($ownAcres >= 0.75*$targetAcres && $ownAcres <= 1.45*$targetAcres)
	$stolenPercent = gauss (0.10225, -2, $ownAcres, $targetAcres, 1.1);
else
	$stolenPercent = gauss (0.25, -6.2, $ownAcres, $targetAcres, 1.20);
	
//$stolenPercent = gauss (0.15, -5.2, $ownAcres, $targetAcres, 1.1); // - Old gaussian

$acresStolen = $targetAcres*$stolenPercent;

$acresStolen *= mt_rand (95,105) / 100;
if ($acresStolen < 10)
	$acresStolen = 10;
	
if ($acresStolen > $targetAcres) {
		echo "You have been killed";
		$acresStolen = $targetAcres;
	}
echo "Acres Stolen= $acresStolen<br />"; 

if ($stolenPercent < 0.03675)
	$stolenPercent = 0.03675;
					
$moraleLoss = round (1.47/$stolenPercent);

echo "moraleLost=$moraleLoss<br />";

function gauss ($peak, $distribution, $ownAcres, $targetAcres, $optimalRatio) {
	$ePower = $distribution * pow ((($optimalRatio*$ownAcres)-$targetAcres)/$ownAcres , 2);
	
	return $peak * exp($ePower);
}

?>