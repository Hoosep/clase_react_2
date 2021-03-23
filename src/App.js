import "./styles.css";
import Counter from "./Counter";
import Notas from "./Notas.js";
import Cursos from "./Cursos.js";

// const es un tipo de declaración de variable
// que nos dice que la variable es la misma
// en todo su tiempo de vida.

// Let es un tipo de declaración de variable
// que nos dice que la variable PUEDE cambiar
// en el transcurso de su vida.
const notes = [
  {
    id: 1,
    content: "HTML es muy fácil",
    date: "2020-01-01",
    important: true
  },
  {
    id: 2,
    content: "Los navagadores solo pueden ejecutar Javascript, HTML y CSS.",
    date: "2020-01-20",
    important: false
  },
  {
    id: 3,
    content:
      "Para hacer peticiones REST los métodos más usados son GET y POST.",
    date: "2020-02-11",
    important: false
  }
];

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

export default function App() {
  return (
    <div>
      <Counter />
      <Notas notes={notes} />
      <Cursos courses={courses} />
    </div>
  );
}
