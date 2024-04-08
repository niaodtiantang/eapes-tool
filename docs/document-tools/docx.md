# 在线生成docx文件

<!-- 引入docx.js库 -->
<script src="../3rd-party/docx/index.js"></script>
<style>
    /* 进度条的样式 */
    #progressBar {
        width: 100%;
        background-color: #ddd;
    }

    #progressBar div {
        height: 20px;
            background-color: #4CAF50;
            text-align: center;
            line-height: 20px;
            color: white;
        }
</style>


<h1>在线生成docx文件</h1>
<form id="docxForm">
    <label for="repeatCount">重复次数:</label>
    <input type="number" id="repeatCount" name="repeatCount" required>
    <br>
    <label for="textContent">重复内容:</label>
    <input type="text" id="textContent" name="textContent" required>
    <br>
    <button type="submit">生成并下载</button>
</form>
<div id="progressBar">
    <div id="progress" style="width: 0%;">0%</div>
    </div>
<script>
// 处理表单提交事件
        document.getElementById('docxForm').onsubmit = async (event) => {
            event.preventDefault();
            const repeatCount = document.getElementById('repeatCount').value;
            const textContent = document.getElementById('textContent').value;

            // 创建一个新的docx文档
            const doc = new docx.Document();

            // 更新进度条
            let currentProgress = 0;
            const updateProgress = (progress) => {
                document.getElementById('progress').style.width = `${progress}%`;
                document.getElementById('progress').textContent = `${progress}%`;
            };

            // 分批添加内容以更新进度条
            const batchSize = 10;
            for (let i = 0; i < repeatCount; i += batchSize) {
                const end = Math.min(i + batchSize, repeatCount);
                for (let j = i; j < end; j++) {
                    doc.addSection({
                        properties: {},
                        children: [new docx.Paragraph(textContent)],
                    });
                }
                currentProgress = Math.floor((i / repeatCount) * 100);
                updateProgress(currentProgress);
                await new Promise((resolve) => setTimeout(resolve, 100)); // 模拟异步操作
            }

            // 生成docx文件
            const blob = await docx.Packer.toBlob(doc);
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };
</script>
