import React, { useEffect, useRef, useState } from "react";
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

function DragAndDrop({toggleFileUpload}) {
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

  function useOuterClick(callback) {
    const callbackRef = useRef(); // initialize mutable callback ref
    const innerRef = useRef(); // returned to client, who sets the "border" element
  
    // update callback on each render, so second useEffect has most recent callback
    useEffect(() => { callbackRef.current = callback; });
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
      function handleClick(e) {
        if (innerRef.current && callbackRef.current && 
          !innerRef.current.contains(e.target)
        ) callbackRef.current(e);
      }
    }, []); // no dependencies -> stable click listener
        
    return innerRef; // convenience for client (doesn't need to init ref himself) 
  }

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

  const innerRef = useOuterClick(e => {
    toggleFileUpload()
  });

  return (
    <StyleWrapper ref={innerRef}>
      <StyleHeader>
        <p>PREVIEW </p>
        <span onClick={() => toggleFileUpload()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
        </span>
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
