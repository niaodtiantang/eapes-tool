---
comments: true
---

# 计算器

## 参数
<form>
<label for="in">输入要计算的内容：</label>
<textarea class="textarea-auto" type="text" name="in" id="in" oninput="eval_f()">1+1</textarea>
</form>

## 输出
<div>
    <!--输出结果-->
    <label for="output">输出结果：</label>
    <br>
    <textarea id="output" readonly class="textarea-auto"></textarea>
</div>


<script type="text/javascript">
  // 当文本框内容更改时自动计算
  function eval_f() { 
    /*自动计算*/
    document.getElementById("output").innerHTML = eval(document.getElementById('in').value);
    /*textarea 自适应高度*/
    autoResize("in");
    autoResize("output");
  }
  // 加载页面后自动首次运行脚本
  eval_f()
</script>
