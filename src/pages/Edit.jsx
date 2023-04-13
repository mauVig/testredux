import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Edit() {
  const param = useParams();
  const store = useSelector((st) => st.notes);
  const [text, setText] = useState({});
  useEffect(() => {
    setText(store.find((st) => st.id === parseInt(param.id)));
  }, []);

  return (
    <div className='flex justify-center'>
      <Link to='/'>Volver</Link>
      <div className=' flex  flex-wrap'>
        <form className='mt-4 flex flex-col'>
          <textarea
            className='bg-indigo-500'
            name='notesTex'
            value={text.note}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type='submit' className='bg-red-400 '>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
