import React from "react";

class Clock extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {date : new Date()};
    // }

    state = {date : new Date()};    // Constructor and this single line same.

    componentDidMount(){
        this.clearTimer = setInterval(()=>{
            this.tick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clearTimer);
    }

    tick(){
        this.setState({
            date : new Date(),
        });
    }

    render(){
        const { date } = this.state;
        const {locale} = this.props;
        return(
            <h1 className="heading">
                {/* <span className="text">{this.state.date.toLocaleTimeString(this.props.locale)}</span> */}
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>
        );
    }
}

export default Clock;
