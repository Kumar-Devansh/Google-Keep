import { useContext } from "react";

import { NoteContext }
from "../context/NoteContext";

import NoteCard
from "../components/NoteCard";

const Archive = () => {

const { notes } =
useContext(NoteContext);

const archivedNotes =
notes.filter(
note => note.archived
);

return ( <div>

```
  <h1>Archive</h1>

  {
    archivedNotes.map(note => (
      <NoteCard
        key={note._id}
        note={note}
      />
    ))
  }

</div>
```

);
};

export default Archive;
import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import NoteCard from '../components/NoteCard';

const Archive = () => {
  const { notes } = useContext(NoteContext);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h1>Archive</h1>
      {archivedNotes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Archive;
