import React, { useState } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import Box from '@material-ui/core/Box';
import fire from './../../Firebase/auth';
import { uploadImage } from '../../Server/Profile';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

export default function changePhoto({ userData }) {
  const handleUploadStart = () => {
    console.log('Upload Start');
  };
  const handleUploadError = () => {};
  const handleUploadSuccess = () => {
    uploadImage(userData);
  };
  const handleProgress = () => {};

  return (
    <div style={{ width: '100%' }}>
      <Box>
        <CustomUploadButton>
          <FileUploader
            accept="image/*"
            maxHeight={100}
            maxWidth={100}
            name="avatar"
            filename={userData.firstName}
            storageRef={fire
              .storage()
              .ref(`images/${userData.uid}/profileImage`)}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />
        </CustomUploadButton>
      </Box>
      <Box flexShrink={1}>
        <img
          style={{ width: '100%', height: '100%', marginTop: 10 }}
          src={userData.profilePicURL}
        />
      </Box>
    </div>
  );
}
