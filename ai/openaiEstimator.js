const OpenAI = require("openai");
require("dotenv").config();

// Inisialisasi OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Pastikan API key ada di .env
});

async function predictProjectDuration(projectDescription) {
  try {
    const prompt = `Berdasarkan deskripsi proyek berikut, perkirakan berapa lama proyek ini akan selesai dalam hari:\n\n"${projectDescription}"\n\nJawaban hanya berupa angka tanpa penjelasan tambahan.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 10,
      temperature: 0.5,
    });

    const estimatedDays = parseInt(response.choices[0].message.content.trim(), 10);
    return isNaN(estimatedDays) ? "Estimasi tidak tersedia" : estimatedDays;
  } catch (error) {
    console.error("Error dari OpenAI:", error);
    return "Gagal mendapatkan estimasi";
  }
}

module.exports = { predictProjectDuration };
