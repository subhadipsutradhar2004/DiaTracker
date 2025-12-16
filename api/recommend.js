import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

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

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash-latest',
      contents: prompt,
    });

    let text = 'No response from Gemini.';
    if (
      response?.candidates?.length &&
      response.candidates[0]?.content?.parts
    ) {
      text = response.candidates[0].content.parts
        .map(p => p.text)
        .join('\n');
    }

    return res.status(200).json({ text });
  } catch (err) {
    console.error('Gemini error:', err);
    return res.status(500).json({ error: 'Gemini API failed' });
  }
}
