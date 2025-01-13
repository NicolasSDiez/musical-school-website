import Activity from "../models/Activity";

export const createActivity = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newActivity = await Activity.create({ name, description });
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la actividad" });
  }
};
