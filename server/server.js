import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load GOOGLE_API_KEY from .env

const app = express();

// ✅ Middleware
app.use(cors()); // Allow all origins for dev; restrict in production
app.use(express.json());

// Enhance artwork/story description with Google Gemini
app.post("/enhance", async (req, res) => {
  try {
    const userInput = req.body.description?.trim();

    if (!userInput) {
      return res.status(400).json({ error: "No input text provided" });
    }

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Rewrite and enhance this artwork description in a rich, storytelling style. 
Create exactly 2 options, each a short story or narrative about the artwork, about 3-5 sentences each. 
Return plain text only, in this format:

Option 1: <story text>
Option 2: <story text>
Description: "${userInput}"`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Google Gemini API Error: ${response.status} - ${text}`);
    }

    const data = await response.json();

    // Parse response safely
    const enhancedText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    if (!enhancedText) {
      throw new Error("Empty response from Gemini");
    }

    // ✅ Return clean enhanced text
    res.json({ enhancedText });
  } catch (err) {
    console.error("Gemini API Error:", err);

    // Send user-friendly error
    res.status(500).json({
      error: "AI service unavailable. Please try again later.",
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
