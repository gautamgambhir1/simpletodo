import React from 'react'
import './Todo.css'


class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            List: [],
            task:'',
            taskd: '',
            date: ''
        
            
           
            
        }
    }
  
    additem(){
       
        
     
        this.setState({List:[...this.state.List,{task: this.state.task, taskd: this.state.taskd,date:new Date(this.state.date),checked:false}],task:'',taskd : ''})

    }
    deleteitems(index){
        this.setState({List:[...this.state.List.slice(0,index),...this.state.List.slice(index+1)]})
    }
    checking = (index) =>{
        this.setState({...this.state,List:[...this.state.List.slice(0,index),{...this.state.List[index],checked:!this.state.List[index].checked},...this.state.List.slice(index+1)]})
    }
    
    render(){
        return <div className = 'yupp'>
            <h1 style = {{color: 'darkblue',fontFamily:'cursive',fontSize: '2.5rem'}}>TO-DO LIST</h1>
            <label style = {{fontSize: '2rem',fontWeight: 'bold'}}>TASK</label><br></br>
            <input style = {{width: '98%',lineHeight: '2rem'}} type = 'text' value = {this.state.task} placeholder = 'ENTER TASK' onChange = {(evt) => {this.setState({task: evt.target.value})}}/>
            <div>
                <label style = {{fontSize: '2rem',fontWeight: 'bold'}}>TASK DESCRIPTION</label><br></br>
                <input style = {{width: '98%',lineHeight: '2rem'}} type = 'text' value = {this.state.taskd} placeholder = 'ENTER TASK DESCRIPTION' onChange = {(chge) => {this.setState({taskd: chge.target.value})}}/>
                <div>
                <label style = {{fontSize: '2rem',fontWeight: 'bold'}}>DATE:</label><br></br>
                <input style = {{width: '98%',lineHeight: '2rem'}} type = 'date' value = {this.state.date} onChange = {(evnt) => {this.setState({date: evnt.target.value})}}/>
                </div>
                <button className = {'addprops'} onClick = {() => {this.additem()}}>ADD ITEM</button>
                
                <h1 style = {{color: 'darkblue'}}>ADD TASK</h1>
            <ul style = {{fontSize: '1.5rem',backgroundColor: 'chocolate'}}>
            {this.state.List.map((item,index) => <li style = {item.date < new Date()? {border: 'solid yellow'}:{}}  key = {index}> <input type = 'checkbox' checked = {item.checked}  onChange = {() => {this.checking(index)}}/><span style = {item.checked? {textDecorationLine: 'line-through',color: 'red'}:{}}> {`${item.task} :  ${item.taskd} ::  ${item.date}`}</span><button className = 'coll' onClick = {() => {this.deleteitems(index)}}>delete</button>
            <div className = 'visible' >
             { item.date < new Date()?  <span>DUE DATE IS PASSED</span>: <></>}
               </div>
            </li>)}
            
            
           
        </ul>
         
            </div>
           
            
        </div>
    }
}
export default Todo