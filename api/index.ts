import express, { Request, Response } from "express";
import cors from "cors";
// Datas importés depuis le fichier datas.json, il fera office de base de données
import Datas from "./datas.json";

const app = express();
const PORT = 3000;

// Définition des options CORS
const corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
	res.status(200).json({ message: "Hello World!" });
});

app.get("/api/items", (req: Request, res: Response): void => {
	if (!Datas || Datas.length === 0) {
		res.status(404).json({ message: "Aucune donnée disponible" });
		return;
	}
	res.status(200).json(Datas);
});

app.get("/api/items/:id([0-9]+)", (req: Request, res: Response): void => {
	// Récupérer l'ID de l'URL que je convertis en nombre
	const id = parseInt(req.params.id);

	if (!Datas || Datas.length === 0) {
		res.status(404).json({ message: "Aucune donnée disponible" });
		return;
	}

	// Si l'ID n'est pas un nombre ou est inférieur ou égal à 0
	if (isNaN(id) || id <= 0) {
		res.status(400).json({ message: "ID invalide" });
		return;
	}

	/**
	 * Dans ma liste de données, je cherche l'item qui a l'ID correspondant
	 * Evidemment que je suis obligé de faire une logique de vérification, car n'ayant pas de base de données, je ne peux pas faire de requête SQL.
	 */
	const item = Datas.find((data: any) => data.id === id);
	if (!item) {
		res.status(404).json({ message: `Aucun item trouvé pour l'ID ${id}` });
		return;
	}

	res.status(200).json(item);
});

app.post("/api/items", (req: Request, res: Response): void => {
	const { title, content, author, date } = req.body;

	if (!title || !content || !author || !date) {
		res.status(400).json({ message: "Tous les champs sont obligatoires" });
		return;
	}

	const id = Datas.length + 1;
	const newItem = { id, title, content, author, date };
	Datas.push(newItem);

	res.status(201).json(newItem);
});

app.put("/api/items/:id([0-9]+)", (req: Request, res: Response): void => {
	const id = parseInt(req.params.id);
	const { title, content, author, date } = req.body;

	if (!Datas || Datas.length === 0) {
		res.status(404).json({ message: "Aucune donnée disponible" });
		return;
	}

	if (isNaN(id) || id <= 0) {
		res.status(400).json({ message: "ID invalide" });
		return;
	}

	const item = Datas.find((data: any) => data.id === id);
	if (!item) {
		res.status(404).json({ message: `Aucun item trouvé pour l'ID ${id}` });
		return;
	}

	item.title = title;
	item.content = content;
	item.author = author;
	item.date = date;

	res.status(200).json(item);
});

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`🚀 Serveur prêt sur http://localhost:${PORT} ⭐️`);
});

export default app;
