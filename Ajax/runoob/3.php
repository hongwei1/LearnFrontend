<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <title>菜鸟教程在线编辑器</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css"> 
    <script src="//cdn.staticfile.org/codemirror/5.40.2/codemirror.min.js"></script>
    <link rel="shortcut icon" href="//static.runoob.com/images/favicon.ico" mce_href="//static.runoob.com/images/favicon.ico" type="image/x-icon" >
	<link rel="stylesheet" href="//cdn.staticfile.org/codemirror/5.40.2/codemirror.min.css">
	<script src="//cdn.staticfile.org/codemirror/5.40.2/mode/htmlmixed/htmlmixed.min.js"></script>
	<script src="//cdn.staticfile.org/codemirror/5.40.2/mode/css/css.min.js"></script>
	<script src="//cdn.staticfile.org/codemirror/5.40.2/mode/javascript/javascript.min.js"></script>
	<script src="//cdn.staticfile.org/codemirror/5.40.2/mode/xml/xml.min.js"></script>
	<script src="//cdn.staticfile.org/codemirror/5.40.2/addon/edit/closetag.min.js"></script>
	<script src="//cdn.staticfile.org/codemirror/5.40.2/addon/edit/closebrackets.min.js"></script> 
	<!--[if lt IE 9]>
	<script src="//cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
	<![endif]-->
</head>
<body>

<style>
body{min-height:300px;padding-top:90px;background: #f6f6f6;}.container{width:98%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.CodeMirror{min-height:300px;;font-family: Menlo,Monaco,Consolas,"Andale Mono","lucida console","Courier New",monospace;}#textareaCode{min-height:300px}#iframeResult{display: block;overflow: hidden;border:0!important;min-width:100px;width:100%;min-height:300px;background-color:#fff}@media screen and (max-width:768px){#textareaCode{height:300px}.CodeMirror{height:300px;font-family: Menlo,Monaco,Consolas,"Andale Mono","lucida console","Courier New",monospace;}#iframeResult{height:300px}.form-inline{padding:6px 0 2px 0}}.logo h1{background-image:url(/images/logo-domain-white.png);background-repeat:no-repeat;text-indent:-9999px;width:160px;height:39px;margin-top:10px;display:block}
</style>
<nav class="navbar navbar-default navbar-fixed-top" style="background: #96b97d;">
  <div class="container">
    <div class="navbar-header logo"><h1 onClick="window.open('//www.runoob.com')">RUNOOB.COM</h1>
    </div>
  </div>
</nav>
<div class="container" >
    <div class="row">
     
    <div class="col-sm-6">
	<div class="panel panel-default"> 
		<div class="panel-heading">
			<form class="form-inline"> 
      <div class="row"> 
          <div class="col-xs-6">
               <button type="button" onclick="resetCode()" class="btn btn-default">源代码 <small>(<a class="text-danger" href="/try/try-cdnjs.php?filename=tryajax_suggest">显示异常</a>)</small>：</button>
            </div>
            <div class="col-xs-6 text-right">
              <button type="button" class="btn btn-success" onclick="submitTryit()" id="submitBTN"><span class="glyphicon glyphicon-send"></span> 点击运行</button>
          </div>
      </div>
			</form>
		</div>
		<div class="panel-body">
			<textarea class="form-control"  id="textareaCode" name="textareaCode">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;script&gt;
function showHint(str)
{
  var xmlhttp;
  if (str.length==0)
  { 
    document.getElementById(&quot;txtHint&quot;).innerHTML=&quot;&quot;;
    return;
  }
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 &amp;&amp; xmlhttp.status==200)
    {
      document.getElementById(&quot;txtHint&quot;).innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open(&quot;GET&quot;,&quot;/try/ajax/gethint.php?q=&quot;+str,true);
  xmlhttp.send();
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h3&gt;在输入框中尝试输入字母 a:&lt;/h3&gt;
&lt;form action=&quot;&quot;&gt; 
输入姓名: &lt;input type=&quot;text&quot; id=&quot;txt1&quot; onkeyup=&quot;showHint(this.value)&quot; /&gt;
&lt;/form&gt;
&lt;p&gt;提示信息: &lt;span id=&quot;txtHint&quot;&gt;&lt;/span&gt;&lt;/p&gt; 

&lt;/body&gt;
&lt;/html&gt;</textarea>
		</div>
	</div>
	</div>

	<div class="col-sm-6">
	<div class="panel panel-default"> 
		<div class="panel-heading"><form class="form-inline"> <button type="button" class="btn btn-default">运行结果</button></form></div>
		<div class="panel-body"><div id="iframewrapper"></div></div>
	</div>
	</div>
	
	</div>

	<footer>
		<div class="row">
			<div class="col-sm-12">
      <div style="text-align: center;">
   
     <a data-tt="2480092" href="https://datayi.cn/w/j9y6danR" target="_blank"><img style="max-width:100%; height: auto;" src="https://static.runoob.com/images/re/try-2070.png"></a>        <hr>

				<p>Copyright © 2013-2020<a target="_blank" href="//www.runoob.com/">菜鸟教程</a></p>
         </div>
			</div>
		</div>
	</footer>
</div>
<script>
var mixedMode = {
name: "htmlmixed",
scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
               mode: null},
              {matches: /(text|application)\/(x-)?vb(a|script)/i,
               mode: "vbscript"}]
};
var editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
	mode: mixedMode,
	selectionPointer: true,
	lineNumbers: false,
	matchBrackets: true,
	indentUnit: 4,
	indentWithTabs: true
});

window.addEventListener("resize", autodivheight);

var x = 0;
function autodivheight(){
    var winHeight=0;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight;
    }
    height = winHeight*0.68
    editor.setSize('100%', height);
    document.getElementById("iframeResult").style.height= height +"px";
}
function resetCode() {
  var initCode = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<script>\nfunction showHint(str)\n{\n  var xmlhttp;\n  if (str.length==0)\n  { \n    document.getElementById(\"txtHint\").innerHTML=\"\";\n    return;\n  }\n  if (window.XMLHttpRequest)\n  {\n    \/\/ IE7+, Firefox, Chrome, Opera, Safari \u6d4f\u89c8\u5668\u6267\u884c\u4ee3\u7801\n    xmlhttp=new XMLHttpRequest();\n  }\n  else\n  {\n    \/\/ IE6, IE5 \u6d4f\u89c8\u5668\u6267\u884c\u4ee3\u7801\n    xmlhttp=new ActiveXObject(\"Microsoft.XMLHTTP\");\n  }\n  xmlhttp.onreadystatechange=function()\n  {\n    if (xmlhttp.readyState==4 && xmlhttp.status==200)\n    {\n      document.getElementById(\"txtHint\").innerHTML=xmlhttp.responseText;\n    }\n  }\n  xmlhttp.open(\"GET\",\"\/try\/ajax\/gethint.php?q=\"+str,true);\n  xmlhttp.send();\n}\n<\/script>\n<\/head>\n<body>\n\n<h3>\u5728\u8f93\u5165\u6846\u4e2d\u5c1d\u8bd5\u8f93\u5165\u5b57\u6bcd a:<\/h3>\n<form action=\"\"> \n\u8f93\u5165\u59d3\u540d: <input type=\"text\" id=\"txt1\" onkeyup=\"showHint(this.value)\" \/>\n<\/form>\n<p>\u63d0\u793a\u4fe1\u606f: <span id=\"txtHint\"><\/span><\/p> \n\n<\/body>\n<\/html>"  
  editor.getDoc().setValue(initCode);
  submitTryit();
}
function submitTryit() {
  var text = editor.getValue();
  var patternHtml = /<html[^>]*>((.|[\n\r])*)<\/html>/im
  var patternHead = /<head[^>]*>((.|[\n\r])*)<\/head>/im
  var array_matches_head = patternHead.exec(text);
  var patternBody = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
  
  var array_matches_body = patternBody.exec(text);
  var basepath_flag = 1;
  var basepath = '';
  if(basepath_flag) {
    basepath = '<base href="//www.runoob.com/try/demo_source/" target="_blank">';
  }
  if(array_matches_head) {
    text = text.replace('<head>', '<head>' + basepath );
  } else if (patternHtml) {
    text = text.replace('<html>', '<head>' + basepath + '</head>');
  } else if (array_matches_body) {
    text = text.replace('<body>', '<body>' + basepath );
  } else {
    text = basepath + text;
  }
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");  
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);
 
  var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
  ifrw.document.open();
  ifrw.document.write(text);  
  ifrw.document.close();
  autodivheight();
}
submitTryit();
autodivheight();
</script>
<div style="display:none;">
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3eec0b7da6548cf07db3bc477ea905ee";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84264393-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-84264393-2');
</script>

</div></body>
</html>
