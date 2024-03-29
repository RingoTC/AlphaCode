
// pages/api/chat.js
import { sendMessageToChat } from '../../lib/GeminiBackbone';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;
    try {
      const response = await sendMessageToChat(message);
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    // 处理非POST请求的情况
    res.status(405).end();
  }
}
