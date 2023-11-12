---
comments: true
---

# 进制转换工具

## 参数

<form id="from" oninput="convertBase()">
<label for="from-base">转换前的进制：</label>
<textarea class="textarea-auto" name="from-base" id="from-base" rows="1">10</textarea>

<label for="to-base">转换后的进制：</label>
<textarea class="textarea-auto" name="to-base" id="to-base" rows="1">2</textarea>

<label for="text">要转换的数值（支持数字、英文字母组合，英文应统一大写或小写）：</label>
<textarea class="textarea-auto" type="text" name="text" id="text" rows="1">10</textarea>

</form>

## 输出
<!--输出结果-->
<div>
    <label for="output" id="label-output"></label>
    <textarea id="output" readonly class="textarea-auto"></textarea>
</div>

<script type="text/javascript">
/*转换进制*/
function convertBase() {
  /*去除无效字符*/
  validateNumericInput('text',/[^0-9][^A-Z][^a-z]/g);
  validateNumericInput('from-base',/[^0-9]/g);
  validateNumericInput('to-base',/[^0-9]/g);
  /*获取数据*/
  let num = document.getElementById('text').value;
  let fromBase = document.getElementById('from-base').value;
  let toBase = document.getElementById('to-base').value;
  /* 确保进制在合理范围内 */
  if (fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
    document.getElementById('output').value = "无效的进制";
  }else{
    /*将数字从原进制转换为十进制 */
    let decimal = parseInt(num, fromBase); 
    /*将十进制转换为目标进制 */
    let result = "";
    while (decimal > 0) {
      const remainder = decimal % toBase;
      result = String.fromCharCode(remainder + 48) + result;/*ASCII 值 '0' 是 48*/
      decimal = Math.floor(decimal / toBase);
    }
    document.getElementById('output').value = result;
  }
  }
/*页面打开时，自动执行一次脚本*/
convertBase();
</script>