import React from 'react'
 
class TextForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }
    render(){
        return(
            <div >
                <textarea className="form-control" rows="8">cdswefcwef</textarea>
            </div>
        );
    }
}
export default TextForm;