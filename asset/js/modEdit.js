var text_enter_url="Enter the complete URL for the hyperlink",text_enter_url_name="Enter the title of the webpage",text_enter_email="Enter the email address",error_no_url="You must enter a URL",error_no_title="You must enter a title",error_no_email="You must enter an email address";function contentWrite(b){document.mform.content.value+=b;document.mform.content.focus()}function Modbold(){add="<strong></strong>";contentWrite(add)}function Moditalic(){add="<em></em>";contentWrite(add)} function Modunder(){add="<u></u>";contentWrite(add)}function Modstrike(){add="<s></s>";contentWrite(add)}function ModInsImg(b,c,d){window.opener.document.mform.content.value+="<img src='"+b+"' width='"+c+"' height='"+d+"' />"}function ModInsFile(b,c){window.opener.document.mform.content.value+="<a href='"+b+"'>"+c+"</a>"} function ModInsMov(b,c,d){var a="<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' codebase='http://www.apple.com/qtactivex/qtplugin.cab' width='"+c+"' height='"+d+"'>";a=a+"<param name='src' value='"+b+"' />";a+="<param name='controller' value='true' />";a+="<param name='autoplay' value='true' />";a+="<!--[if !IE]>--\>";a=a+"<object type='video/quicktime' data='"+b+"' width='"+c+"' height='"+d+"'>";a+="<param name='autoplay' value='true' />";a+="<param name='controller' value='true' />"; a+="</object>";a+="<!--<![endif]--\>";a+="</object>";window.opener.document.mform.content.value+=a} function ModInsJAR(b,c,d){var a="<!--<![code to display applets]--\>";a+="<!--[if !IE]> --\>";a=a+"<object classid='java:"+b+".class' type='application/x-java-applet' archive='"+b+"' width='"+c+"' height='"+d+"' standby='Loading Processing software...' >";a=a+"<param name='archive' value='"+b+"' />";a+="<param name='mayscript' value='true' />";a+="<param name='scriptable' value='true' />";a+="<param name='boxmessage' value='Loading Processing software...' />";a+="<param name='boxbgcolor' value='#FFFFFF' />"; a+="<param name='test_string' value='outer' />";a+="<!--<![endif]--\>";a=a+"<object classid='clsid:8AD9C840-044E-11D1-B3E9-00805F499D93' codebase='http://java.sun.com/update/1.4.2/jinstall-1_4_2_12-windows-i586.cab' width='"+c+"' height='"+d+"' standby='Loading Processing software...' >";a=a+"<param name='code' value='"+b+"' />";a=a+"<param name='archive' value='"+b+"' />";a+="<param name='mayscript' value='true' />";a+="<param name='scriptable' value='true' />";a+="<param name='boxmessage' value='Loading Processing software...' />"; a+="<param name='boxbgcolor' value='#FFFFFF' />";a+="<param name='test_string' value='inner' />";a+="<p><strong>This browser does not have a Java Plug-in.<br />";a+="<a href='http://java.sun.com/products/plugin/downloads/index.html' title='Download Java Plug-in'>Get the latest Java Plug-in here.</a>";a+="</strong></p>";a+="</object>";a+="<!--[if !IE]> --\>";a+="</object>";a+="<!--<![endif]--\>";a+="<!--<![code to display applets]--\>";window.opener.document.mform.content.value+=a} function ModInsMP3(b){var c="<object type='audio/mpeg' data='"+b+"' width='200' height='20'>";c=c+"<param name='src' value='"+b+"'>";c+="<param name='autoplay' value='true'>";c+="<param name='autoStart' value='0'>";c=c+"alt : <a href='"+b+"'>"+b+"</a>";c+="</object>";window.opener.document.mform.content.value+=c}function ModInsChar(b){window.opener.document.mform.content.value+=b} function ModInsLink(b,c){if(document.mformpop.selectType.value=="1")var d="<a href='"+b+"'>"+c+"</a>";if(document.mformpop.selectType.value=="2")d="<a href='mailto:"+b+"'>"+c+"</a>";window.opener.document.mform.content.value+=d}function ModSysLink(b){window.opener.document.mform.content.value+=b} function ModTable(){var b=document.mformpop.rows.value,c=document.mformpop.cols.value,d="";d=d+"<table width='"+document.mformpop.width.value+"' cellspacing='"+document.mformpop.cells.value+"' cellpadding='"+document.mformpop.cellp.value+"' align='"+document.mformpop.align.options[document.mformpop.align.selectedIndex].value+"' border='"+document.mformpop.border.value+"'>\r\n";for(i=0;i<b;i++){d+="<tr>\r\n";for(j=0;j<c;j++)d+="<td valign='top' align='left'>&nbsp;</td>\r\n";d+="</tr>\r\n"}d+="</table>"; window.opener.document.mform.content.value+=d;window.close()}function ModList(){var b=document.mformpop.type.options[document.mformpop.type.selectedIndex].value,c=document.mformpop.rows.value,d="";d=d+"<"+b+">\r\n";for(i=0;i<c;i++)d+="<li>&nbsp;</li>\r\n";window.opener.document.mform.content.value+=d+"</"+b+">";window.close()} function ModInsFlash(b,c,d){var a="<object type='application/x-shockwave-flash' data='"+b+"' width='"+c+"' height='"+d+"'>";a=a+"<param name='movie' value='"+b+"' />";a=a+"<div style='width: "+c+"px; height: "+d+"px;'>";a+="<a href='http://www.adobe.com/go/gntray_dl_getflashplayer'>";a+="Get Flash player to view this content";a+="</a>";a+="</div>";a+="</object>";window.opener.document.mform.content.value+=a} function tag_url(){var b="",c=prompt(text_enter_url,"http://"),d=prompt(text_enter_url_name,"My Webpage");c||(b+=" "+error_no_url);d||(b+=" "+error_no_title);if(b)alert("Error!"+b);else{ToAdd="<a href='"+c+"'>"+d+"</a>";contentWrite(ToAdd)}}function tag_email(){var b=prompt(text_enter_email,""),c=prompt("Enter an email name","");if(b){ToAdd="<a mailto='"+b+"'>"+c+"</a>";contentWrite(ToAdd)}else alert(error_no_email)};