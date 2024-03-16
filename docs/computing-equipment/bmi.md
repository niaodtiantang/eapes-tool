# BMI计算器

身体质量指数，是BMI（Body Mass Index）指数，简称体质指数，是国际上常用地衡量人体胖瘦程度以及是否健康的一个标准。
计算公式为：BMI=体重÷身高²。（体重单位：千克；身高单位：米。）
BMI由19世纪中期的比利时通才朗伯·阿道夫·雅克·凯特勒最先提出。

***

## 你的身高体重

<form>
<label for="height">身高（米）：</label>
<textarea class="textarea-auto80" type="text" name="height" id="height" oninput="bmi()" rows="1"></textarea>M
<br>
<label for="weight">体重（千克）：</label>
<textarea class="textarea-auto80" type="text" name="weight" id="weight" oninput="bmi()" rows="1"></textarea>KG
</form>

## 结果

<div>
    <!--输出结果-->
    <label for="output">输出结果：</label>
    <br>
    <textarea id="output" readonly class="textarea-auto"></textarea>
</div>

<script type="text/javascript">
  // 当文本框内容更改时自动计算
  function bmi() { 
    /*自动计算*/
    document.getElementById("output").innerHTML = eval(document.getElementById('weight').value + "/(" + document.getElementById('height').value + "**2)");
    /*textarea 自适应高度*/
    autoResize("weight");
    autoResize("height");
    autoResize("output");
  }
  // 加载页面后自动首次运行脚本
  bmi()
</script>