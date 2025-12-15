import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   GEMINI SETUP
========================= */
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/* =========================
   ANALYZE PATIENT (NO AUTH)
========================= */
app.post('/api/recommend', async (req, res) => {
  try {
    const patientData = req.body;

    const prompt = `
You are a nephrology clinical assistant.
Analyze the patient data and provide:
1. Risk summary (2–3 sentences)
2. Problems identified
3. Practical recommendations (no drug names)

Patient data:
${JSON.stringify(patientData, null, 2)}
`;

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
    } catch (geminiError) {
      console.error('Gemini API Error:', geminiError);
      return res.status(500).json({
        error: 'Gemini API failed',
      });
    }

    let text = 'No response from Gemini.';
    if (
      response?.candidates &&
      response.candidates.length > 0 &&
      response.candidates[0]?.content?.parts
    ) {
      text = response.candidates[0].content.parts
        .map((p) => p.text)
        .join('\n');
    }

    res.json({ text });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
