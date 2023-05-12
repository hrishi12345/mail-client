import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Home(){
    return(
        <>
        <h2>Welcome to mail</h2>
        <Editor
  toolbarOnFocus
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
/>
        </>
    )
}
export default Home