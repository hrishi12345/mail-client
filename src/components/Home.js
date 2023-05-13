import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Home.css';
import { useSelector } from 'react-redux';


function Home() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const sender=useSelector((state)=>state.auth.email)
  

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const submitHandler = () => {
    const contentState = editorState.getCurrentContent();
    console.log(contentState)
    const plainText = convertToRaw(contentState).blocks.map(block => block.text).join('\n');
    console.log(to, subject, plainText);
    const receiver=to.replace('@gmail.com','')
    console.log(sender)
    // Send the data to your backend here...
    fetch(`https://hris-9fdcd-default-rtdb.firebaseio.com/mails/${receiver}.json`,{
        method:'POST',
        body:JSON.stringify({
          sender:sender,
          receiver: to,
          subject: subject,
          message: plainText,
          timestamp: new Date().toISOString()
        })
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      
    }
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor='to'>To:</label>
        <input className='form-control' id='to' type='text' value={to} onChange={handleToChange} />
      </div>
      <div className="form-group">
        <label htmlFor='subject'>Subject:</label>
        <input className='form-control' id='subject' type='text' value={subject} onChange={handleSubjectChange} />
      </div>
      <div className="form-group">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorStateChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </div>
      <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default Home;