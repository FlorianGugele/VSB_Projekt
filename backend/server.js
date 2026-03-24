import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Supabase Client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Beispiel: Daten abrufen
app.get("/api/bewerbungen", async (req, res) => {
  const { data, error } = await supabase
    .from("vsb_anmeldungen")
    .select("*");
  
  if (error) return res.status(500).json(error);
  res.json(data);
});

// Beispiel: Daten einfügen
app.post("/api/bewerbungen", async (req, res) => {
  const { data, error } = await supabase
    .from("vsb_anmeldungen")
    .insert([req.body]);
  
  if (error) return res.status(500).json(error);
  res.json(data);
});

app.listen(3001, () => console.log("Server läuft auf Port 3001"));