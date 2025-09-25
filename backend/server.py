// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";

// Carregar variáveis do .env
dotenv.config();

const app = express();
app.use(express.json());

// Configuração do CORS
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : ["*"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Conexão com o MongoDB
const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);
let db;

(async () => {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("✅ Conectado ao MongoDB");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    process.exit(1);
  }
})();

// Rotas da API
const router = express.Router();

// Rota raiz
router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Modelo básico (StatusCheck)
function createStatusCheck(data) {
  return {
    id: uuidv4(),
    client_name: data.client_name,
    timestamp: new Date(),
  };
}

// POST /api/status
router.post("/status", async (req, res) => {
  try {
    const statusObj = createStatusCheck(req.body);
    await db.collection("status_checks").insertOne(statusObj);
    res.status(201).json(statusObj);
  } catch (err) {
    console.error("Erro ao criar status:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// GET /api/status
router.get("/status", async (req, res) => {
  try {
    const statusChecks = await db
      .collection("status_checks")
      .find()
      .limit(1000)
      .toArray();
    res.json(statusChecks);
  } catch (err) {
    console.error("Erro ao buscar status:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.use("/api", router);

// Encerrar conexão ao fechar
process.on("SIGINT", async () => {
  console.log("🛑 Encerrando servidor...");
  await client.close();
  process.exit(0);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

