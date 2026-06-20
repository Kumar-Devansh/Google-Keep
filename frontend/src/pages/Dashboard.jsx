import { useContext, useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import CreateNote from '../components/CreateNote';
import NoteCard from '../components/NoteCard';
import { NoteContext } from '../context/NoteContext';
import '../styles/dashboard.css';
import '../styles/notes.css';

const Dashboard = () => {
  const { notes } = useContext(NoteContext);
  const [search, setSearch] = useState('');

  const visibleNotes = (notes || []).filter((note) => !note.archived);
  const filteredNotes = visibleNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Sidebar />
      <SearchBar search={search} setSearch={setSearch} />
      <CreateNote />
      <div className='notes-grid'>
        {filteredNotes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
