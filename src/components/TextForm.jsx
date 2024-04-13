import React from 'react';
import './TextForm.css';
import Ucase from '../assets/upper.png';
import Lcase from '../assets/lower.png';
import speak from '../assets/sound.png';
import clear from '../assets/clear.png';
import bold from '../assets/bold.png';
import italic from '../assets/italic.png';
import underline from '../assets/underline.png';

class TextForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChange = (event) => {
        this.setState({ 
            text: event.target.value 
        });
    };
    handleClickUppercase = () => {
        this.setState({
            text: this.state.text.toUpperCase()
        });
    };
    handleClickLowercase = () => {
        this.setState({
            text: this.state.text.toLowerCase()
        });
    };
    handleClickSpeak = () => {
        const msg = new SpeechSynthesisUtterance(this.state.text);
        speechSynthesis.speak(msg);
    };
    handleClickClear = () => {
        this.setState({
            text: ''
        });
    };
    handleClickBold = () => {
        this.setState({
            text: this.state.text.bold()
        });
    };
    handleClickItalic = () => {
        this.setState({
            text: this.state.text.italic()
        });
    };

    render(){
        return(
            <div>
                <textarea className="form-control mb-2" rows="20" value={this.state.text}  onChange={this.handleChange}></textarea>
                <div className='img-wrapper'>
                <img src={Ucase} onClick={this.handleClickUppercase} alt='Uppercase'/>
                <img src={Lcase} onClick={this.handleClickLowercase} alt='Lowercase'/>
                <img src={speak} onClick={this.handleClickSpeak} alt='Speak'/>
                <img src={clear} onClick={this.handleClickClear} alt='Clear'/>
                <img src={bold} onClick={this.handleClickBold} alt='bold'/>
                <img src={italic} onClickitalic={this.handleClickItalic} alt='italic'/>
                <img src={underline} onClick={this.handleClickUnderline} alt='underline'/>

                </div>
            </div>
        );
    }
}
export default TextForm;