const fs = require('fs');
const { spawn } = require('child_process');

export async function POST(request) {
  try {
    const res = await request.text();
    
    // 覆盖 /next-container/src/page.jsx 文件内容

    const containerPath = process.cwd() + '/next-container/';

    fs.writeFileSync(containerPath + "/src/app/page.tsx", res, 'utf8');

    // 执行 npm run build
    const buildProcess = spawn('npm', ['run', 'build'], { cwd: containerPath });

    // buildProcess.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });

    // buildProcess.stderr.on('data', (data) => {
    //   console.error(`stderr: ${data}`);
    // });

    // buildProcess.on('close', (code) => {
    //   if (code !== 0) {
    //     console.error(`Build process exited with code ${code}`);
    //     return new Response('Error building Next.js application', { status: 500 });
    //   }

    //   try {
    //     // 复制 /next-container/out 下的所有内容到 /public/preview
    //     fs.rmSync('./public/preview', { recursive: true, force: true }); // 首先删除目标文件夹
    //     fs.cpSync('./next-container/out', './public/preview', { recursive: true }); // 复制文件夹
    //   } catch (err) {
    //     console.error('Error copying files:', err);
    //     return new Response('Error in file operations', { status: 500 });
    //   }
    // });

    return new Response(JSON.stringify({ message: 'Build initiated' }), { status: 200 });
  } catch (err) {
    return new Response('Invalid request body', { status: 400 });
  }
}
