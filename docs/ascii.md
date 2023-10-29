---
comments: true
---
# ASCII转换工具

<label for="input">输入字符串：</label>
<input id="input" type="text" value="Hello World!" onchange="ascii()">


<label for="separator">分隔符：</label>
<input id="separator" type="text" value="," onchange="ascii()">

<label for="base">进制：</label>
<input id="base" type="number" value="10" onchange="ascii()">

<form id="what" onchange="ascii()">
  <input type="radio" name="what" value="1" id="what1">
  <label for="what1">ASCII转字符串</label>
  <input type="radio" name="what" value="2" id="what2">
  <label for="what2">字符串转ASCII</label>
</form>

<button class="btn btn-primary" onclick="asciiToString()">ASCII转字符串</button>
<button class="btn" onclick="stringToAscii()">字符串转ASCII</button>


<div>
    <label for="output">输出结果：</label>
    <br>
    <textarea id="output" rows="4" readonly></textarea>
</div>

<script>
    function asciiToString() {
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
      if (document.getElementById('input').value=="1"){
        asciiToString()
      }else if (document.getElementById('input').value=="2"){
        stringToAscii()
      }
    }
</script>