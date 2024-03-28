import express, { Request, Response } from 'express';
import fs from 'fs';
import { spawn } from 'child_process';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/update-jsx', (req: Request, res: Response) => {
  const jsxCode = req.body.jsxCode;

  // 写入JSX代码到./next-container/src/App.jsx
  fs.writeFileSync('./next-container/src/App.jsx', jsxCode);

  // 在./next-container目录下执行npm run build
  const buildProcess = spawn('npm', ['run', 'build'], { cwd: './next-container' });

  buildProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  buildProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  buildProcess.on('close', (code) => {
    if (code === 0) {
      // build成功后,执行npm run start
      const startProcess = spawn('npm', ['run', 'start'], { cwd: './next-container' });

      startProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      startProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      startProcess.on('close', (code) => {
        if (code === 0) {
          res.status(200).send('Next.js已经执行成功');
        } else {
          res.status(500).send('执行npm run start失败');
        }
      });
    } else {
      res.status(500).send('执行npm run build失败');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});