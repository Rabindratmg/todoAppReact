import React, { Component } from 'react';
class Data extends Component {
    state = { 
        tasks:[],
        input:""
     }
     handleChange=(event)=>{
         this.setState({
             input: event.target.value

             }
         )
     }
     addTask=(event)=>{
         this.setState(state=>(
             {
                tasks:[...state.tasks,state.input],
                input:""
             }
         ))
         
     }

     deleteTask=(index)=>{
         this.setState(state=>
             {
                 const task = [...this.state.tasks];
                 task.splice(index,1)
                 return{
                     tasks:task
                 }
             }
         )

     }
    render() { 
        return ( 
            <div>
                <h1>Tasks</h1>
                <ol>
                    {this.state.tasks.map((task,i)=>
                    <li key={i}>
                        <h4>
                            <input type="checkbox"/>
                           {task}
                           <button onClick={()=>this.deleteTask(i)}>Delete</button>
                            </h4>
                    </li>
                    )}
                </ol>
               <input value={this.state.input}
                onChange={this.handleChange}/>
                <button onClick={this.addTask}>Submit</button>
                <h6>
                you have {this.state.tasks.length} tasks.
                </h6>
                <h6>
                completed Tasks=
                </h6>
                <h6>completed Tasks=</h6>
                        
                        
                        

                        x
               
                
               
            </div>
         );
    }
}
 
export default Data;