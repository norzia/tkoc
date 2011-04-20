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
?>
<?php 
/*=======================================================================
// File:	JPGRAPH_SCATTER.PHP
// Description: Scatter (and impuls) plot extension for JpGraph
// Created: 	2001-02-11
// Author:	Johan Persson (johanp@aditus.nu)
// Ver:		$Id: jpgraph_scatter.php,v 1.31 2003/03/09 18:24:06 aditus Exp $
//
// License:	This code is released under QPL
// Copyright (C) 2001,2002 Johan Persson
//========================================================================
*/


//===================================================
// CLASS FieldArrow
// Description: Draw an arrow at (x,y) with angle a
//===================================================
class FieldArrow {
    var $iSize=10;  // Length in pixels for  arrow
    var $iArrowSize = 2;
    var $iColor='black';
    var $isizespec = array(
	array(2,1),array(3,2),array(4,3),array(6,4),array(7,4),array(8,5),array(10,6),array(12,7),array(16,8),array(20,10));
    function FieldArrow() {
    }

    function SetSize($aSize,$aArrowSize=2) {
	$this->iSize = $aSize;
	$this->iArrowSize = $aArrowSize;
    }

    function SetColor($aColor) {
	$this->iColor = $aColor;
    }

    function Stroke($aImg,$x,$y,$a) {
	$old_origin = $aImg->SetCenter($x,$y);
	$old_a = $aImg->SetAngle(-$a);

	$dx = round($this->iSize/2);
	$c = array($x-$dx,$y,$x+$dx,$y);
	$x += $dx;

	list($dx,$dy) = $this->isizespec[$this->iArrowSize];
	$ca = array($x,$y,$x-$dx,$y-$dy,$x-$dx,$y+$dy,$x,$y);

	$aImg->SetColor($this->iColor);
	$aImg->Polygon($c);
	$aImg->FilledPolygon($ca);

	$aImg->SetCenter($old_origin[0],$old_origin[1]);
	$aImg->SetAngle($old_a);
    }
}

//===================================================
// CLASS FieldPlot
// Description: Render a field plot
//===================================================
class FieldPlot extends Plot {
    var $iAngles;
    var $iCallback='';
    function FieldPlot($datay,$datax,$angles) {
	if( (count($datax) != count($datay)) )
	    JpGraphError::Raise("Fieldplots must have equal number of X and Y points.");
	if( (count($datax) != count($angles)) )
	    JpGraphError::Raise("Fieldplots must have an angle specified for each X and Y points.");
	
	$this->iAngles = $angles;

	$this->Plot($datay,$datax);
	$this->value->SetAlign('center','center');
	$this->value->SetMargin(15);

	$this->arrow = new FieldArrow();
    }

    function SetCallback($aFunc) {
	$this->iCallback = $aFunc;
    }

    function Stroke(&$img,&$xscale,&$yscale) {

	// Remeber base color and size
	$bc = $this->arrow->iColor;
	$bs = $this->arrow->iSize;
	$bas = $this->arrow->iArrowSize;

	for( $i=0; $i<$this->numpoints; ++$i ) {
	    // Skip null values
	    if( $this->coords[0][$i]==="" )
		continue;

	    $f = $this->iCallback;
	    if( $f != "" ) {
		list($cc,$cs,$cas) = $f($this->coords[1][$i],$this->coords[0][$i],
					$this->iAngles[$i]);
		// Fall back on global data if the callback isn't set
		if( $cc  == "" ) $cc = $bc;
		if( $cs  == "" ) $cs = $bs;
		if( $cas == "" ) $cas = $bas;
		//echo "f=$f, cc=$cc, cs=$cs, cas=$cas<br>";
		$this->arrow->SetColor($cc);	    
		$this->arrow->SetSize($cs,$cas);
	    }

	    $xt = $xscale->Translate($this->coords[1][$i]);
	    $yt = $yscale->Translate($this->coords[0][$i]);	

	    $this->arrow->Stroke($img,$xt,$yt,$this->iAngles[$i]);
	    $this->value->Stroke($img,$this->coords[0][$i],$xt,$yt);
	}
    }
	
    // Framework function
    function Legend(&$aGraph) {
	if( $this->legend != "" ) {
	    $aGraph->legend->Add($this->legend,$this->mark->fill_color,$this->mark,0,
				 $this->legendcsimtarget,$this->legendcsimalt);
	}
    }	
}

//===================================================
// CLASS ScatterPlot
// Description: Render X and Y plots
//===================================================
class ScatterPlot extends Plot {
    var $impuls = false;
    var $linkpoints = false, $linkpointweight=1, $linkpointcolor="black";
//---------------
// CONSTRUCTOR
    function ScatterPlot($datay,$datax=false) {
	if( (count($datax) != count($datay)) && is_array($datax))
	    JpGraphError::Raise("Scatterplot must have equal number of X and Y points.");
	$this->Plot($datay,$datax);
	$this->mark = new PlotMark();
	$this->mark->SetType(MARK_SQUARE);
	$this->mark->SetColor($this->color);
	$this->value->SetAlign('center','center');
	$this->value->SetMargin(0);
    }

//---------------
// PUBLIC METHODS	
    function SetImpuls($f=true) {
	$this->impuls = $f;
    }   

    // Combine the scatter plot points with a line
    function SetLinkPoints($aFlag=true,$aColor="black",$aWeight=1) {
	$this->linkpoints=$aFlag;
	$this->linkpointcolor=$aColor;
	$this->linkpointweight=$aWeight;
    }

    function Stroke(&$img,&$xscale,&$yscale) {

	$ymin=$yscale->scale_abs[0];
	if( $yscale->scale[0] < 0 )
	    $yzero=$yscale->Translate(0);
	else
	    $yzero=$yscale->scale_abs[0];
	    
	$this->csimareas = '';
	for( $i=0; $i<$this->numpoints; ++$i ) {

	    // Skip null values
	    if( $this->coords[0][$i]==="" )
		continue;

	    if( isset($this->coords[1]) )
		$xt = $xscale->Translate($this->coords[1][$i]);
	    else
		$xt = $xscale->Translate($i);
	    $yt = $yscale->Translate($this->coords[0][$i]);	


	    if( $this->linkpoints && isset($yt_old) ) {
		$img->SetColor($this->linkpointcolor);
		$img->SetLineWeight($this->linkpointweight);
		$img->Line($xt_old,$yt_old,$xt,$yt);
	    }

	    if( $this->impuls ) {
		$img->SetColor($this->color);
		$img->SetLineWeight($this->weight);
		$img->Line($xt,$yzero,$xt,$yt);
	    }
	
	    if( !empty($this->csimtargets[$i]) ) {
	        $this->mark->SetCSIMTarget($this->csimtargets[$i]);
	        $this->mark->SetCSIMAlt($this->csimalts[$i]);
	    }
	    
	    if( isset($this->coords[1]) ) {
		$this->mark->SetCSIMAltVal($this->coords[0][$i],$this->coords[1][$i]);
	    }
	    else {
		$this->mark->SetCSIMAltVal($this->coords[0][$i],$i);
	    }

	    $this->mark->Stroke($img,$xt,$yt);
	
	    $this->csimareas .= $this->mark->GetCSIMAreas();
	    $this->value->Stroke($img,$this->coords[0][$i],$xt,$yt);

	    $xt_old = $xt;
	    $yt_old = $yt;
	}
    }
	
    // Framework function
    function Legend(&$aGraph) {
	if( $this->legend != "" ) {
	    $aGraph->legend->Add($this->legend,$this->mark->fill_color,$this->mark,0,
				 $this->legendcsimtarget,$this->legendcsimalt);
	}
    }	
} // Class
/* EOF */
?>