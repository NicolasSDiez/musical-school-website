const activities = [
  {
    id: 1,
    name: "Clases de Piano",
    description: "Clases de piano principiante",
  },
  {
    id: 2,
    name: "Clases de Guitarra",
    description: "Clases de guitarra intermedio",
  },
];

const activitiesController = () => {
  try {
    // Iterar sobre cada actividad y mapear los datos
    const RespActivities = activities.map((activity) => ({
      id: activity.id,
      nombre: activity.name,
      descripcion: activity.description,
    }));

    return RespActivities; // Devuelve las actividades transformadas
  } catch (error) {
    throw new Error("Error al obtener las actividades");
  }
};

export default activitiesController;
