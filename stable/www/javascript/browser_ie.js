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
q58="style.visibility=\"visible\"";q59="style.visibility=\"hidden\"";q82=null;q93=null;q94=null;q95=null;strict=(q147)&&(document.compatMode=="CSS1Compat");if((q150)&&(document.doctype)){tval=document.doctype.name.toLowerCase();if((tval.indexOf("dtd")>-1)&&((tval.indexOf("http")>-1)||(tval.indexOf("xhtml")>-1)))strict=true;}if((navigator.appVersion.toLowerCase().indexOf("msie 5.0")> -1)||(strict)||(q150)){dqm__sub_menu_effect="none";  dqm__sub_item_effect="none";}sub_q98=q97(true);item_q98=q97();off_y=0;off_x=0;if(q150){if(!q151){off_x=dqm__os9_ie5mac_offset_X;off_y=dqm__os9_ie5mac_offset_Y;}else {off_x=dqm__osx_ie5mac_offset_X;off_y=dqm__osx_ie5mac_offset_Y;}}document.onmousemove=dqm__handleMousemove;if(!window.dqm__cancel_onload){onresize=dqm__handleResize;onload=dqm__handleOnload;}q18=q100();for(var m=0;m<q18;m++)if(q105[m])q0(m+"");for(var j=0;j<q19.length;j++)q0(q19[j]);q83="";for(var j=0;j<q18;j++){if(q121[j]){imgwh=q33(q16("dqm__rollover_wh"+j));q83+="<img id=qmim"+j+" style='position:absolute;cursor:hand;z-index:9;visibility:hidden;' src='"+q16("dqm__rollover_image"+j)+"' width="+imgwh[0]+" height="+imgwh[1]+" border='0' onclick=\"q32('"+j+"')\">"; }}document.write(q83);;function q0(mindex){level=0;i=0;while((i=mindex.indexOf("_",i+1))>-1)level++;bw=q15("dqm__border_width",0,mindex);q50=q15("dqm__sub_menu_width",0,mindex);bc=q15("dqm__border_color",0,mindex);       hltc=q15("dqm__hl_textcolor",0,mindex);       q144=q15("dqm__textcolor",0,mindex);sd="<div id=qm"+mindex+" style='z-index:900"+level+";position:absolute;top:"+0+"px;left:"+0+"px;visibility:hidden;width:"+q50+"px;";if(bc!="transparent")sd+=" background-color:"+bc+";";sd+=sub_q98;(sub_q98.indexOf("filter")>-1)? t_val="":t_val="filter:";if(dqm__sub_menu_opacity<100)sd+=" "+t_val+"progid:DXImageTransform.Microsoft.Alpha(opacity="+dqm__sub_menu_opacity+");";if(dqm__dropshadow_color.toLowerCase()!="none")sd+=" "+t_val+"progid:DXImageTransform.Microsoft.dropshadow(color="+dqm__dropshadow_color+",offx="+dqm__dropshadow_offx+",offy="+dqm__dropshadow_offy+");";sd+="'>";i=0;while(window["dqm__subdesc"+mindex+"_"+i]){id=mindex+"_"+i;if(window["dqm__subdesc"+id+"_0"])q19=q19.concat(new Array(id));iid=-1;tval=window["dqm__icon_index"+mindex+"_"+i];if((tval || tval==0)&& window["dqm__icon_image"+tval]){iid=tval;q52=q33(q16("dqm__icon_image_wh"+iid));q51=window["dqm__icon_rollover"+iid];}smargin=0;if(strict)smargin=dqm__margin_left+dqm__margin_right;q47="style='position:absolute;cursor:hand;left:"+bw+"px;top:"+bw+"px;width:"+(q50-(bw*2)-smargin)+"px;";q48=" font-style:"+dqm__fontstyle+";font-weight:"+dqm__fontweight+";font-size:"+dqm__fontsize+"px;font-family:"+dqm__fontfamily+";padding-left:"+dqm__margin_left+"px;padding-right:"+dqm__margin_right+"px;padding-top:"+dqm__margin_top+"px;padding-bottom:"+dqm__margin_bottom+"px;";q49="";if(iid>-1)q49="' border=0 width='"+q52[0]+"' height='"+q52[1]+"'>";q92=q15("dqm__menu_bgcolor",0,mindex);mbgc_hl=q15("dqm__hl_bgcolor",0,mindex);q130=q15("dqm__text_alignment",0,mindex);sd+="<div align='"+q130+"' id=qmitemst"+id+" "+q47+" background-color:"+q92+";";sd+=q48+" text-decoration:"+dqm__textdecoration+";color:"+q144+";'>";q125="";if(iid>-1)q125="<img src='"+q16("dqm__icon_image"+iid)+q49;tval=q16("dqm__subdesc"+id);(q130=="right")? sd+=tval+q125:sd+=q125+tval;q131="";q132="";q129="";q134="";tval=window["dqm__2nd_icon_index"+mindex+"_"+i];if((tval || tval==0)&& window["dqm__2nd_icon_image"+tval]){q126=tval;q127=q33(q16("dqm__2nd_icon_image_wh"+q126));q128=q33(q16("dqm__2nd_icon_image_xy"+q126));q129=q16("dqm__2nd_icon_rollover"+q126);q134=q16("dqm__2nd_icon_image"+q126);(q130=="left")? tval=(q50-(bw*2)-dqm__margin_right-q127[0]+q128[0]):tval=bw+dqm__margin_left+q128[0];q131="<div style='position:absolute;top:"+q128[1]+"px;left:"+tval+"px;'><img src='";q132="' width='"+q127[0]+"' height='"+q127[1]+"'></div>";}sd+=q131+q134+q132+"</div><div align='"+q130+"' id=qmitemhl"+id+" "+q47+" visibility:hidden;background-color:"+mbgc_hl+";";sd+=q48+" text-decoration:"+dqm__hl_textdecoration+";color:"+hltc+";"+item_q98;sd+="' onclick=\"q32('"+id+"')\">";q125="";if(iid>-1)q125+="<img src='"+q51+q49;tval=q15("dqm__hl_subdesc"+id,q16("dqm__subdesc"+id));(q130=="right")? sd+=tval+q125:sd+=q125+tval;sd+=q131+q129+q132+"</div>";i++;}document.write(sd+"</div>");};function q97(main){q98="";tval="q98=\" filter:progid:DXImageTransform.Microsoft.";q115="duration=";q108=dqm__sub_item_effect_duration;q114=dqm__sub_item_effect.toLowerCase();if(main){q114=dqm__sub_menu_effect.toLowerCase();q108=dqm__sub_menu_effect_duration;}if(q114!="none"){if(q114=="fade")q16(tval+"Fade("+q115+q108+")\"");else  if(q114=="pixelate")q16(tval+"Pixelate("+q115+q108+",maxSquare="+dqm__effect_pixelate_maxsqare+")\"");else  if(q114=="iris")q16(tval+"Iris("+q115+q108+",irisStyle="+dqm__effect_iris_irisstyle+")\"");else  if(q114=="slide")q16(tval+"slide("+q115+q108+",slideStyle=PUSH)\"");else  if(q114=="gradientwipe")q16(tval+"GradientWipe("+q115+q108+",gradientSize=1.0,motion=FORWARD)\"");else  if(q114=="checkerboard")q16(tval+"CheckerBoard("+q115+q108+",direction="+dqm__effect_checkerboard_direction+",SquaresX="+dqm__effect_checkerboard_squaresx+",SquaresY="+dqm__effect_checkerboard_squaresY+")\"");else  if(q114=="radialwipe")q16(tval+"RadialWipe("+q115+q108+")\"");else  if(q114=="randombars")q16(tval+"RandomBars("+q115+q108+")\"");else  if(q114=="randomdissolve")q16(tval+"RandomDissolve("+q115+q108+")\"");else  if(q114=="stretch")q16(tval+"Stretch("+q115+q108+",stretchStyle=PUSH)\"");}return q98;};function q1(id,main){sub=q16("qm"+id);q113=sub.style;subc=sub.children;bw=q15("dqm__border_width",0,id);dh=q15("dqm__divider_height",0,id);ih=bw;for(j=0;j<subc.length;j=j+2){subc[j].style.top=ih+"px";subc[j+1].style.top=ih+"px";ih+=subc[j].offsetHeight+dh;if(j>subc.length-3)ih -=dh;}ih+=bw;q113.height=ih+"px";sxy=q33(q15("dqm__sub_xy"+id,dqm__sub_xy));if(main){if(eval("document.menu"+id)){q85=q16("document.menu"+id);tc=q17(q85);q113.left=(tc.x+sxy[0]+q85.offsetWidth+off_x)+"px";q113.top=(tc.y+sxy[1]+off_y)+"px";}}else {psub=q16("qm"+id.substring(0,id.lastIndexOf("_")));q113.left=(psub.offsetLeft+psub.offsetWidth+sxy[0]+off_x)+"px";q113.top=(psub.offsetTop+q16("qmitemst"+id).offsetTop+sxy[1]+off_y)+"px";}};function q103(id){if((q121[id])&&(eval("document.menu"+id))){q87=q17(q16("document.menu"+id));q88=q16("qmim"+id);q88.style.left=(q87.x+off_x)+"px";q88.style.top=(q87.y+off_y)+"px";}};function q4(menu){q16("q16(qmitemhl"+menu.lasthl+")."+q59);q122(true);menu.lasthl=null;};function q5(menu,hl_id){q30(menu);if(item_q98!="" &&(sub_q98=="" || menu.filters[0].status!=2)){tval=q16("q16(qmitemhl"+hl_id+")."+"filters[0]");tval.apply();tval.play();}q16("q16(qmitemhl"+hl_id+")."+q58);q122(false,hl_id);q86=menu.q60;if(q86!=null && hl_id.indexOf(q86)<0){q16("q16(qmitemhl"+q86+")."+q59);q6(q86);}menu.q60=null;if(popIt(hl_id))menu.q60=hl_id;menu.lasthl=hl_id;q95=menu;};function detectSource(o){if(o.id==null || o.id==""){q64=o.parentElement;while(q64 !=null){if(q64.id!="")return q64.id;q64=q64.offsetParent;}return "";}return o.id;};function dqm__handleMousemove(e){if(!q61)return;if((q81=detectSource(event.srcElement)).indexOf("menu")>-1){q111();q79(q81.substring(4));}else {if((q82!=null)&&(q81.indexOf("qm")<0)){q122(true); q94=q82;if(q95!=null)q30(q95);q111();(q105[q94])? q93=setTimeout("q96()",dqm__mouse_off_delay):q96();return;}if(q81.indexOf("qmim")>-1){q111();q84=q81.substring(4);q122(false,q84);if(q105[q84])q89(q84);return;}q111();q84=q81.substring(8);if(q81.indexOf("qmitemst")>-1)q5(q16("qm"+q84.substring(0,q84.lastIndexOf("_"))),q84);else  if(q81.indexOf("qmitemhl")>-1){q90=q16('qm'+q84.substring(0,q84.lastIndexOf('_')));if(q90.q60!=null){q122(false,q84);q89(q84);}}}};function q89(index){if((q91=q16("qm"+index))!=null){q6(q91.q60);q91.q60=null;}q30(q91);};function q79(id){if(q82!=id){q122(false,id);if(q82!=null){if(window["dqm__subdesc"+q82+"_0"])q6(q82);q27(q82);}if(q121[id])q16("q16(qmim"+id+")."+q58);popIt(id);q82=id;q16(window["dqm__showmenu_code"+q82]);}};function popIt(id){if(q15("dqm__subdesc"+id+"_0",null)!=null){t_obj=q16("qm"+id);if(dqm__sub_menu_effect.toLowerCase()!="none"){t_obj.filters[0].apply();t_obj.filters[0].play();}q16("t_obj."+q58);return true;}};function q96(){q6(q94);q27(q82);q82=null;};function q6(id){if(window["dqm__subdesc"+id+"_0"]){tm=q16("qm"+id);q16("tm."+q59);if(tm.lasthl!=null)q16("q16(qmitemhl"+tm.lasthl+")."+q59);if((ts=tm.q60)!=null){q16("q16(qmitemhl"+tm.q60+")."+q59);tm.q60=null;q6(ts);}}};function hideMenu(){};function showMenu(){};function q15(pname,rv,id){tindex="";if(id || id==0){tindex=id;rv=q16(pname);}if(window[pname+tindex])return q16(pname+tindex);else return rv;};function q16(id){return eval(id);};function q111(){if(q93!=null)clearTimeout(q93);};function dqm__handleResize(){for(i=0;i<q18;i++){if(q105[i])q1(i,true);q103(i);}for(i=0;i<q19.length;i++)q1(q19[i],false);};function q17(o){q70=new Object();q70.x=o.offsetLeft;q70.y=o.offsetTop;q64=o.offsetParent;while(q64 !=null){q70.y+=q64.offsetTop;q70.x+=q64.offsetLeft;q64=q64.offsetParent;}return q70;};function dqm__handleOnload(){if(q61)return;if(q146 && !q29())q28();dqm__handleResize();q61=true;onload_finished=true;eval(window.dqm__onload_code);};function q27(uid){if(q121[uid])eval("q16(qmim"+uid+")."+q59);eval(eval("window.dqm__hidemenu_code"+uid));}
