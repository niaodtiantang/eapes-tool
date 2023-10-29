---
comments: true
---
<!-- 控制宽度的自动适应 -->  
<style type="text/css">  
.textarea-auto {
        width: 100%;
        overflow: auto;
        word-break: break-all; //解决兼容问题
    } 
</style>  

# ASCII转换工具
<form id="what_from" onchange="ascii()">
<!--用于获取用户输入的信息-->
<!--用于获取要转换的字符串-->
<label for="input">输入字符串：</label>
<input id="input" type="text" value="Hello World!" onchange="ascii()">
<br>
<!--用于获取分隔符-->
<label for="separator">分隔符：</label>
<input id="separator" type="text" value="," onchange="ascii()">
<br>
<!--用于获取需要采用的进制-->
<label for="base">进制：</label>
<input id="base" type="number" value="10" onchange="ascii()">
<br>
<!--用于获取模式-->
<input type="radio" name="what" value="1" id="what1"  onchange="ascii()">
<label for="what1">ASCII转字符串</label>
<input type="radio" name="what" value="2" id="what2"  onchange="ascii()" checked>
<label for="what2">字符串转ASCII</label>
</form>

<div>
    <!--输出结果-->
    <label for="output">输出结果：</label>
    <br>
    <textarea id="output" readonly rows="4" class="textarea-auto"></textarea>
</div>

<script>
    function asciiToString() {/*用于把ASCII编码转换为字符串的*/
        let input = document.getElementById('input').value;
        let separator = document.getElementById('separator').value;
        let base = parseInt(document.getElementById('base').value);

        let codes = input.split(separator);
        let result = "";

        codes.forEach(function(code) {
            if (base === 10) {
                result += String.fromCharCode(parseInt(code));
            } else {
                result += String.fromCharCode(parseInt(code, base));
            }
        });

        document.getElementById('output').value = result;
    }

    function stringToAscii() {
        let input = document.getElementById('input').value;
        let separator = document.getElementById('separator').value;
        let base = parseInt(document.getElementById('base').value);

        let result = "";

        for (let i = 0; i < input.length; i++) {
            if (base === 10) {
                result += input.charCodeAt(i);
            } else {
                result += input.charCodeAt(i).toString(base);
            }

            if (i < input.length - 1) {
                result += separator;
            }
        }

        document.getElementById('output').value = result;
    }
    
    function ascii() {
      /* 
      当表单发生改变，自动启动，更改内容
      */
      if (what_from.what['value']==="1"){
        asciiToString();
      }else if (what_from.what['value']==="2"){
        stringToAscii();
      }
    }
    //页面打开时，自动执行一次脚本
    ascii();
</script>