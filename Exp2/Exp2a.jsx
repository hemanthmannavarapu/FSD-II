import React , {Component} from "react";
class Exp2a extends Component {
    constructor(props)   {
        super(props);
        this.state ={ count : 0};
        this .incr = this.incr.bind(this);
    }incr() {
    this.setState(prevState => ({count:prevState.count+1}));
    }

render() {
    return(
        <div style = {{textAlign:"center",marginTop :"50px"}}>
            <h1>Counter App</h1>
            <p>Counter count:<strong>{this.state.count}</strong></p>
            <button onClick={this.incr}>Increment</button>
        </div>
    );
}
}
export default Exp2a 