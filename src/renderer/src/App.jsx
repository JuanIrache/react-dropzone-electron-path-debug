import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

function App() {
  const [filePaths, setFilePaths] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) setFilePaths(acceptedFiles.map((f) => '"' + f.path + '"'))
    else setFilePaths(['Error'])
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div className="container">
      <p style={{ marginBottom: '50px' }}>
        File paths:
        <ul>
          {filePaths.map((fp, i) => (
            <li key={i}>{fp}</li>
          ))}
        </ul>
      </p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  )
}

export default App
