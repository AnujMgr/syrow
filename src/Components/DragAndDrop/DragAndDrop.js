import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import {
  StyleThumbsContainer,
  StyleThumb,
  StyleThumbInner,
  StyleThumbImg,
  StyleContainer,
  StyleWrapper,
  StyleHeader,
  StyleFooter,
  StyleDropArea
} from "./style";

import { StyleSecondaryButton } from "../../Style";

function DragAndDrop(props) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles([
        ...files,
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ]);
    }
  });

  const handleDelete = deleteFile => {
    console.log(deleteFile);
    setFiles(files.filter((file, index) => index !== deleteFile));
  };

  const thumbs = files.map((file, index) => (
    <StyleThumb key={file.name}>
      <StyleThumbInner onClick={() => handleDelete(index)}>
        <StyleThumbImg src={file.preview} />
        <span>
          <i className="icon-close"></i>
        </span>
      </StyleThumbInner>
    </StyleThumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <StyleWrapper>
      <StyleHeader>
        <span onClick={() => props.toggleFileUpload()}>
          <i className="ti-close right-side-toggle"></i>
        </span>
        <p>PREVIEW </p>
        <div>dfd</div>
      </StyleHeader>

      <StyleContainer>
        <StyleDropArea {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </StyleDropArea>
        <StyleThumbsContainer>{thumbs}</StyleThumbsContainer>
      </StyleContainer>

      <StyleFooter>
        <StyleSecondaryButton
          padding="5px 10px"
          bgColor="#7068e0"
          color="#fff"
          margin="0 20px"
        >
          Send
        </StyleSecondaryButton>
      </StyleFooter>
    </StyleWrapper>
  );
}

export default DragAndDrop;
