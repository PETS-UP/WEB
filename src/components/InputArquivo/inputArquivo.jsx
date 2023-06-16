import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineFileText } from "react-icons/ai"
import { FiUpload } from "react-icons/fi"

export default function InputArquivo({ onFileUploaded }) {

    const [file, setFile] = useState();
    
    const onDrop = useCallback(acceptedFiles => {
        const fileSingle = acceptedFiles[0];

        setFile(fileSingle)

        onFileUploaded(fileSingle);
    }, [onFileUploaded])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                file
                    ?
                    <p>
                        <AiOutlineFileText size={30} />
                        {file.path}
                    </p>
                    :
                    <p>
                        <FiUpload size={30} />
                        Arquivo da diarista
                    </p>
            }
        </div>
    )
}