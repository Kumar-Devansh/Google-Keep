import { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import NoteCard from '../components/NoteCard';
import '../styles/dashboard.css';
import '../styles/notes.css';

const Labels = () => {
  const { notes } = useContext(NoteContext);
  const [selectedLabel, setSelectedLabel] = useState(null);

  // Get all unique labels from notes
  const allLabels = Array.from(
    new Set((notes || []).flatMap((note) => note.labels || []))
  ).sort();

  // Filter notes by selected label
  const filteredNotes = selectedLabel
    ? (notes || []).filter((note) => note.labels?.includes(selectedLabel))
    : [];

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <div className='dashboard-title'>📌 Labels</div>
      </div>
      <div className='dashboard-content'>
        <div className='labels-container'>
          <div className='labels-list'>
            <h3>Labels</h3>
            {allLabels.length === 0 ? (
              <p className='no-labels'>No labels yet. Add labels to your notes!</p>
            ) : (
              <div className='label-buttons'>
                {allLabels.map((label) => (
                  <button
                    key={label}
                    className={`label-btn ${selectedLabel === label ? 'active' : ''}`}
                    onClick={() =>
                      setSelectedLabel(selectedLabel === label ? null : label)
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedLabel && (
            <div className='label-notes'>
              <h3>Notes with "{selectedLabel}"</h3>
              {filteredNotes.length === 0 ? (
                <div className='empty-state'>
                  <p>No notes with this label</p>
                </div>
              ) : (
                <div className='notes-grid'>
                  {filteredNotes.map((note) => (
                    <NoteCard key={note._id} note={note} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Labels;