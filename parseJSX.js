const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const { exec } = require('child_process');

app.use(bodyParser.text({ type: 'text' }));


app.post('/update', (req, res) => {
  // 接收浏览器发送的 JSX 代码
  const jsx = req.body;

  console.log('Received JSX:', jsx);

  // 覆盖 /next-container/src/page.jsx 文件内容
  fs.writeFileSync('./next-container/src/app/page.jsx', jsx, 'utf8');

  // 执行 npm run build
  exec('npm run build', { cwd: './next-container' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Error building Next.js application');
    }

    // 复制 /next-container/out 下的所有内容到 /public/preview
    fs.rmSync('./public/preview', { recursive: true, force: true }); // 首先删除目标文件夹
    fs.cpSync('./next-container/out', './public/preview', { recursive: true }); // 复制文件夹

    console.log('Successfully updated preview');
    res.send('http://localhost:3000/preview');
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});