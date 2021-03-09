import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';

const Post = () => {
  const [content, setContent] = useState({
    correo: undefined,
  })
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = async () => {
    const { correo } = content;
    await axios.post('/api/entry', { correo, slug: dashify(correo) });
  }
  return (
    <div>
      <label htmlFor="correo">Correo</label>
      <input
        name="correo"
        value={content.correo}
        onChange={onChange}
      />
      <button onClick={onSubmit}>POST</button>
    </div>
  );
};

export default Post;