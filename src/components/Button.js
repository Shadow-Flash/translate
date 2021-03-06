import React from 'react'
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends React.Component{
    static contextType = LanguageContext;


    render() {
        const text = this.context === 'english' ? 'Submit' : "Voorlenggen";
        return (
            <button className="ui button primary">
                {text}
            </button>
        )
    }
}
