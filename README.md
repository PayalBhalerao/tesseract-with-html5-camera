# tesseract-with-html5-camera

The objective of this package is to recongnize text from captured image from mobile camera or webcam.
This package also have same look and feel of a native mobile camera app but with a react component.

## Requirement
- react: >=16.8.0
- react-dom: >=16.8.0

## Demo link
- http://PayalBhalerao.github.io/tesseract-with-html5-camera-demo

## Required Working Environment for getUserMedia()

- **https or localhost** : The `getUserMedia()` method is only available in secure contexts `(https or localhost)`. If a document isn't loaded in a secure context, the navigator.mediaDevices property is undefined, making access to getUserMedia() impossible. Attempting to access `getUserMedia()` in this situation will result in a TypeError. See [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Privacy_and_security)

- **iOS >= 11 WebRTC issue with webkit (Chrome & Firefox)** : Apple restricts WebRTC to **Safari only** so it mean that you can't use the `getUserMedia()` with Firefox and Chrome. So `getUserMedia()` is not supported yet, for "security reasons". See [Stackoverflow](https://stackoverflow.com/questions/45055329/does-webkit-in-ios-11-beta-support-webrtc)


## Installation

```bash
npm install --save tesseract-with-html5-camera
```

```bash
yarn add tesseract-with-html5-camera
```

Both Yarn and npm download packages from the npm registry.

## Getting started

parameter | Description
--- | ---
**onTextRecognize(text):** | Event function called when a photo is taken and text get recognized . the text is passed as a parameter.

**Minimum ES6 example**
```js
import React from 'react';
import CameraTesseract from 'tesseract-with-html5-camera/dist/lib/index.js';

function App (props) {
  const handleTakePhoto = (text) => {
    // Do stuff with recognized text...
    console.log('Recognize text: ', text);
  }

  return (
    <>
      <h3>Check result in console</h3>
      <CameraTesseract
        onTextRecognize = { (text) => { handleTakePhoto(text); } }
      />
    </>
  );
}

export default App;
```

## API

### PropTypes
Properties | Type | Default | Description
--- | --- | --- | ---
**onTextRecognize(text):** (Optional) | Event || The function called when a photo is taken. the text is passed as a parameter after recognizing the text.
**showLogsOnConsole:** (optional) | Boolean | true | If true, Show text recognizing logs in console
**isFullscreen:** (Optional) | Boolean | false | If true, Show full screen camera view
**isImageMirror:** (Optional) | Boolean | true | If is true, the camera image will be mirror.
**imageType:**: (Optional) | String | png | String used to get the desired image type between `jpg` or `png`. to specify the imageType use the constant IMAGE_TYPES, for example to specify jpg format use IMAGE_TYPES.JPG. Use `IMAGE_TYPES` constant to get the right image type Example:. IMAGE_TYPES.JPG or IMAGE_TYPES.PNG
**onCameraError(error):** (Optional) | Event || Callback called with the error object as parameter when error occur while opening the camera. Often the permission.
**onCameraStart():** (optional) | Event || Callback called when the camera is started.
**onCameraStop():** (optional) | Event || Callback called when the camera is stopped.
