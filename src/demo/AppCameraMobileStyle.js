import React, { Component } from 'react';
import {CameraMobileStyle, FACING_MODES} from '../lib';
import './AppCameraMobileStyle.css';

class AppCamera extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      dataUri: ""
    };
  }

  componentDidMount(){

  }

  onCameraError = (error) => {
    let {code, message, name} = error;
    let strError = `
      Camera Error:
        code: ${code}
        message: ${message}
        name: ${name}`;
    console.error(strError);
  }

  onCameraStop = () => {
    console.log('camera stop');
    this.setState({
      isCameraRunning: false
    });
  }

  _playClickAudio() {
    let audio = new Audio('click.mp3');
    audio.play();
  }

  onTakePhoto = () => {
    this._playClickAudio();
  }

  render() {

    return (
      <div className="App">
        <CameraMobileStyle
          onCameraError = {this.onCameraError}
          onCameraStop = {this.onCameraStop}
          onTakePhoto = {()=>{
            this.onTakePhoto();
          }}
          autoPlay={true}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          idealResolution={{width:640, height:480}}
        />
      </div>
    );
  }
}

export default AppCamera;