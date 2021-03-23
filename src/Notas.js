import React from "react";

const Nota = (props) => {
  const { note } = props;

  return <li>{note.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;
  // Ecmascript 6
  // Map
  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notes.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notas;
