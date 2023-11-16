import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TestPage() {
  const [buildingName, setBuildingName] = useState('');
  const [images, setImages] = useState([]);

  const fetchBuildingImages = async () => {
    try {
      const response = await axios.get('http://ceprj.gachon.ac.kr:60014/file/getFolderList', {
        params: {
          folderName: `imgs/${buildingName}/`
        }
      });

      const fetchedImages = response.data;
      setImages(fetchedImages);
    } catch (error) {
      console.error(error);
      setImages([]);
    }
  };

  return (
    <div>
      <TextField
        label="Building Name"
        value={buildingName}
        onChange={(event) => setBuildingName(event.target.value)}
      />
      <Button onClick={fetchBuildingImages}>Fetch Images</Button>
      {images.length > 1 && (
        <div>
          <img
            src={`https://palgongtea.s3.ap-northeast-2.amazonaws.com/imgs/${buildingName}/${images[1]}`}
            alt={`Building 2`}
          />
        </div>
      )}
    </div>
  );
}

export default TestPage;
