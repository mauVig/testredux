import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Card() {
  const store = useSelector((st) => st.notes);
  const go = useNavigate();
  return (
    <>
      {store.map((notes) => (
        <div
          key={notes.id}
          className='w-52 p-4 m-4 bg-red-300 text-sm cursor-pointer'
          onClick={() => go(`/edit/${notes.id}`)}
        >
          <h2>ID: {notes.id}</h2>
          <p>{notes.note}</p>
        </div>
      ))}
    </>
  );
}
