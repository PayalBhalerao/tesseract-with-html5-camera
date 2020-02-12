import React from 'react';
import { createWorker } from 'tesseract.js';
import PropTypes from 'prop-types';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App(props) {

  const handleTakePhoto = (dataUri) => {
    doOCR(dataUri);
   }

  const worker = createWorker({
    logger: m => { if(props.showLogsOnConsole) { console.log(m) } },
  });

  const doOCR = async (imageData) => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(imageData);
    props.onTextRecognize(text)
  };

  return (
    <div className="App">
      <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        isFullscreen= {props.isFullscreen}
        isImageMirror= {props.isImageMirror}
        imageType= {props.imageType}
        onCameraStart= {props.onCameraStart}
        onCameraStop= {props.onCameraStop}
        onCameraError= {props.onCameraError}
       />
    </div>
  );
}

App.propTypes = {
  showLogsOnConsole: PropTypes.bool,
  onTextRecognize: PropTypes.func,
  isFullscreen: PropTypes.bool,
  isImageMirror: PropTypes.bool,
  imageType: PropTypes.string,
  onCameraStart: PropTypes.func,
  onCameraStop: PropTypes.func,
  onCameraError: PropTypes.func,
}

App.defaultProps = {
  showLogsOnConsole: true,
  onTextRecognize: (text) => {console.log('Text: ', text)},
  isImageMirror: false,
  isFullscreen: false,
  imageType: 'png',
  onCameraStart: () => {},
  onCameraStop: () => {},
  onCameraError: () => {},
}

export default App;
