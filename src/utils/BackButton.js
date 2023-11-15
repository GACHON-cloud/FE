import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <IconButton color="inherit" onClick={handleGoBack}>
        <ArrowBackIcon />
      </IconButton>
    </div>
  );
};

export default BackButton;

