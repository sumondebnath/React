import Emoji from "./Emoji";

export default class Text extends Emoji{
    constructor(props){
        super(props);
    }

    render(){
        const decoratedText = this.addEmoji("This is the React Inheritance Text!", '💗');

        return super.render(decoratedText);
    }
}