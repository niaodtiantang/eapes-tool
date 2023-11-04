---
comments: true
---

# 计算器

## 参数
输入要计算的内容：<input type="text" name="in" id="in" onchange="eval_f()" value="1+1"><br>

## 输出
<p id="output"></p>

<script type="text/javascript">
  // 当文本框内容更改时自动计算
  function eval_f() { 
      document.getElementById("output").innerHTML = eval(document.getElementById('in').value);
  }
  // 加载页面后自动首次运行脚本
  eval_f()
</script>
