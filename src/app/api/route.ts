import { NextRequest } from "next/server";

const fs = require('fs');
const { exec, spawn } = require('child_process');

export async function POST(request: Request | NextRequest) {
  try {
    const res = await request.text();
    
    // 覆盖 /next-container/src/page.jsx 文件内容

    const containerPath = process.cwd() + '/next-container/';

    fs.writeFileSync(containerPath + "/src/app/page.tsx", res, 'utf8');

    return new Response(JSON.stringify({ message: 'Build initiated' }), { status: 200 });
  } catch (err) {
    return new Response('Invalid request body', { status: 400 });
  }
}
