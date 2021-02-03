import React from 'react';
class App extends React.Component {
    state = { 
        num1:1,
        num2:1,
        score:0,
        response: ""
     }

     updateResponse=(event)=>{
         this.setState({
             response: event.target.value
         })
     }


     inputKeyPress=(event)=>{
         if(event.key==="Enter"){
             const answer = parseInt(this.state.response)
             if(this.state.num1+this.state.num2===answer){
                 this.setState(state=>({
                    score:state.score+1,
                    num1: Math.ceil(Math.random()*100),
                    num2: Math.ceil(Math.random()*100),
                    response: ""

                 }));
                 
             }
             else{
                 {
                     this.setState({
                        response: ""
                     })
                 }

            }

                 }
             }




    render(){ 
        return ( 
            <div>
                    <h1>{this.state.num1}+{this.state.num2}</h1>
                    
                    <input
                    onKeyPress={this.inputKeyPress}
                    onChange={this.updateResponse} 
                    value={this.state.response}
                     />
                    <h4>Score: {this.state.score}</h4>
                    
            </div>
         );
    }
}
 
export default App;