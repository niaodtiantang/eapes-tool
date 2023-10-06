# 计算器

## 参数
输入要计算的内容：<input type="text" name="in" id="in" onchange="eval_f()"><br>

## 输出
<p id="output"></p>

<script type="text/javascript">
  function eval_f() { 
      document.getElementById("output").innerHTML = eval(document.getElementById('in').value);
  }
</script>
