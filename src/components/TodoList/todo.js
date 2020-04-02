
/*global React*/
/* global ReactDOM*/
// let count=0;
// let duplicateEachTodoDataArr=[];
// let arr=[];
// let brr=[];
const elementRoot = document.getElementById('root');
// class Todos extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             eachTodoData:[],
//         };
        
//     }



     
     
//      handleEnterKey=(event)=>{
//          if(event.keyCode===13){
//             let duplicateEachTodoData={task:event.target.value,id:count,is_checked:false}
//             duplicateEachTodoDataArr.push(duplicateEachTodoData);
            
//             this.setState({
//                 eachTodoData:duplicateEachTodoDataArr
//             })
            
//              event.target.value='';
//              count+=1;
//          }
         
//      }







//     displayTodo=()=>{
//           const allDisplay= this.state.eachTodoData.map((item)=>{
//           return <Todo2 task={item.task} key={item.id} id={item.id}
//           checkBoxStatus={this.isCheckBoxStatus}/>;
//         });
//     return allDisplay;
//     }
    
    
//           isCheckBoxStatus=(event)=>{
//               //console.log(this.state.eachTodoData)
//               if(event.target.checked===true){
//                   duplicateEachTodoDataArr[event.target.id].is_checked=true;
                  
//               }
//               else
//                   {
//                       duplicateEachTodoDataArr[event.target.id].is_checked=false;
                      
//                   }
              
              
              
//         }
        
        
//     activeItems=()=>{
//          arr=[]
//         duplicateEachTodoDataArr.map((item)=>{
            
//               if(item.is_checked===false){
//                   arr.push(item);
//                   console.log(arr);
                  
                  
//               }
//         });
//             this.setState({
//             eachTodoData:arr
//         })
        
            
        
//     }
    
    
    
    
//     render(){
//       return ( 
//      <div>
//      <div className = "main-todo-heading">
//      <h1>todos</h1>
//      <input className = "input-tag" type="text"  id="InputTag" onKeyDown={this.handleEnterKey} placeholder="Enter todo..." />
//      </div>
//     {this.displayTodo()}
//     <button onClick={this.activeItems}>Active</button>
     
//      </div>);
//      }


// }



// class Todo2 extends React.Component{
    
//     constructor(props){
//         super(props);
//     }
//     render(){
    
//         return(
//         <div>
        
//         <div className="mainroot-div">
//         <div className="checkbox-and-input-tag">
//         <input className = "checkbox" type="checkbox"  id={this.props.id} onClick={this.props.checkBoxStatus}/>
//       <div> <input type="text" className="input-div" id={this.props.id} defaultValue={this.props.task} /></div>
//         <span id={this.props.idForTodo}>X</span>
        
        
//         </div>
        
//         </div>
//         </div>);
//     }

// }

//defaultValue={this.props.content[this.props.id].task}


// ReactDOM.render(<Todos />,elementRoot);



//  /* global React*/
//  /* global ReactDOM*/
//  let count=0;
//   let  duplicateId=[];
//  let duplicateContent =[];
 
// const elementRoot = document.getElementById('root');



// class Todos extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             //toDoId:[],
//             toDoContent:[],
            
            
//         };
        
//     } 
//      isCheckBoxStatus=(event)=>{
//          console.log(2)
//          console.log(duplicateContent)
//          if(duplicateContent[event.target.id].isCompleted===false){
             
             
             
//              duplicateContent[event.target.id].isCompleted = true;
//             //   this.setState({
                  
//             //      toDoContent : duplicateContent
//             //      //toDoContent:this.state.toDoContent[event.target.id].isCompleted=true
//             //  });
             
//          }
//          else{
             
             
//              duplicateContent[event.target.id].isCompleted = false;
//         //   this.setState({
//         //          toDoContent:duplicateContent
//         //          //toDoContent:this.state.toDoContent[event.target.id].isCompleted=false
//         //      });
//          }
         
//      }
    
    
    
//     handleEnterKey=(event)=>{
//         if(event.keyCode === 13){
            
//           duplicateId = count;
//          // const dupArrId = this.state.toDoId;
//           //dupArrId.push(duplicateId);
         
//           const duplicateC  = {task:event.target.value, isCompleted:false,id:duplicateId};
//           //const dupContentArr = this.state.toDoContent;
//         //   dupContentArr.push(duplicateC);
        
//           duplicateContent.push(duplicateC);
//              this.setState({
                
//                 //toDoId : dupArrId,
                
//                 toDoContent:duplicateContent
//              });
//              //console.log(duplicateContent)
//             // console.log(this.state.toDoContent)
             
//              count=count+1;
//           //  document.getElementById('InputTag').value="";
//              event.target.value=""
//         }
//     }
    
    
    
    
//     displayTodo=(event)=>{
//         //console.log(this.state.toDoContent)
//           const allDisplay= this.state.toDoContent.map((item)=>{
              
//           return <Todo2 id={item.id} key={item.id}  content = {item.task}
//              checkBoxStatus={this.isCheckBoxStatus} 
//           />;
//         });
        
       
        
//     return allDisplay;
//     }
    
//      leftItems=(event)=>{
//          let leftItemsCount=0;
//       duplicateContent.forEach((item)=>{
//          if(item.isCompleted === false){
//              leftItemsCount += 1;

//          }
       
//       });
//       return leftItemsCount ;
//      }
     
//      activeItems=(event)=>{
//          let activeTodoContentItems=[];
         
//       duplicateContent.forEach((item)=>{
//          if(item.isCompleted === false){
//              activeTodoContentItems.push(item);
//              console.log(activeTodoContentItems)
//          }
//       });
//   // console.log(activeTodoContentItems)
//      this.setState({
//           toDoContent:activeTodoContentItems
//       });
//      // console.log(this.state.toDoContent);
      
//      }
     
     
//      completedItems=(event)=>{
         
//          let completedTodoContentItems=[];
         
//       duplicateContent.forEach((item)=>{
          
//          if(item.isCompleted === true){
//              console.log(item)
//              //completedTodoItemsIds.push(item.id);
//              completedTodoContentItems.push(item);
//          }
//       });
    
//      this.setState({
//          //toDoId : completedTodoItemsIds,
//           toDoContent:completedTodoContentItems
//       });
      
//      }
    
    
    
    
//     render(){
//         //console.log(1)
//       return ( 
//      <div>
//      <div className = "main-todo-heading">
//      <h1>todos</h1>
//      <input className = "input-tag" type="text"  id="InputTag" onKeyDown={this.handleEnterKey} placeholder="Enter todo..." />
//      </div>
     
//      {this.displayTodo()}
//       <span>{this.leftItems()}leftiems</span>
//      <button onClick={this.activeItems}>Active</button>
//       {/*<button onClick={this.allItems}>All</button>*/}
//       <button onClick={this.completedItems}>completed</button>
//      </div>);
//     }
// }


// class Todo2 extends React.Component{
    
//     constructor(props){
//         super(props);
//     }
//     render(){
    
//         return(
//         <div>
        
//         <div className="mainroot-div">
//         <div className="checkbox-and-input-tag">
//         <input className = "checkbox" type="checkbox"  id={this.props.id} onClick={this.props.checkBoxStatus}/>
//       <div> <input type="text" className="input-div" id={this.props.id} defaultValue={this.props.content} /></div>
//         <span id={this.props.idForTodo}>X</span>
        
        
//         </div>
        
//         </div>
//         </div>);
//     }

// }

// //defaultValue={this.props.content[this.props.id].task}



// ReactDOM.render(<Todos />,elementRoot);












// //  /* global React*/
// //  /* global ReactDOM*/
// //  let count=0;
// //  let  duplicateId=[];
// //  let duplicateContent =[];
 
// // const elementRoot = document.getElementById('root');



// // class Todos extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             toDoId:[],
// //             toDoContent:[],
            
            
// //         };
        
// //     }
// //      isCheckBoxStatus=(event)=>{
       
         
// //          if(duplicateContent[event.target.id].isCompleted===false){
             
// //              //let dupfalse = duplicateContent;
// //              duplicateContent[event.target.id].isCompleted = true;
// //               this.setState({
                  
// //                  toDoContent : duplicateContent,
// //              });
             
// //          }
// //          else{
// //              let duptrue = this.state.toDoContent;
// //              duplicateContent[event.target.id].isCompleted = false;
// //           this.setState({
// //                  toDoContent: duplicateContent
// //              });
// //          }
         
// //      }
    
    
    
// //     handleEnterKey=(event)=>{
// //         if(event.keyCode === 13){
            
// //           duplicateId = count;
// //           const dupArrId = this.state.toDoId;
// //           dupArrId.push(duplicateId);
         
// //           const duplicateC  = {task:event.target.value, isCompleted:false,id:duplicateId};
// //           //const dupContentArr = this.state.toDoContent;
// //         //   dupContentArr.push(duplicateC);
        
// //           duplicateContent.push(duplicateC);
// //              this.setState({
                
// //                 toDoId : dupArrId,
                
// //                 toDoContent:duplicateContent
// //              });
// //              //console.log(duplicateContent)
// //             // console.log(this.state.toDoContent)
             
// //              count=count+1;
// //              document.getElementById('InputTag').value="";
             
// //         }
// //     }
    
    
    
    
// //     displayTodo=(event)=>{
        
// //           const allDisplay= duplicateContent.map((item)=>{
// //               const itemId=item.id
// //               console.log(itemId.task)
// //               //console.log();
// //               //console.log(item.task[item.id])
// //           return <Todo2 id={item.id} todokey={item.id} value={item.task[item.id]}
// //              checkBoxStatus={this.isCheckBoxStatus}
// //           />;
// //         });
        
       
        
// //     //return allDisplay;
// //     }
    
// //     //  leftItems=(event)=>{
// //     //      let leftItemsCount=0;
// //     //   this.state.toDoContent.forEach((item)=>{
// //     //      if(item.isCompleted === false){
// //     //          leftItemsCount += 1;

// //     //      }
       
// //     //   });
// //     //   return leftItemsCount ;
// //     //  }
     
// //     //  activeItems=(event)=>{
         
// //     //      let activeTodoContentItems=[];
// //     //      let activeItemsIds=[];
// //     //   duplicateContent.forEach((item)=>{
          
// //     //      if(item.isCompleted === false){
// //     //          activeItemsIds.push(item.id);
// //     //          activeTodoContentItems.push(item);
// //     //      }
// //     //   });
    
// //     //  this.setState({
// //     //      toDoId : activeItemsIds,
// //     //       toDoContent:activeTodoContentItems
// //     //   });
      
// //     //  }
     
     
// //     //  completedItems=(event)=>{
         
// //     //      let completedTodoContentItems=[];
// //     //      let completedTodoItemsIds=[];
// //     //   duplicateContent.forEach((item)=>{
          
// //     //      if(item.isCompleted === true){
// //     //          completedTodoItemsIds.push(item.id);
// //     //          completedTodoContentItems.push(item);
// //     //      }
// //     //   });
    
// //     //  this.setState({
// //     //      toDoId : completedTodoItemsIds,
// //     //       toDoContent:completedTodoContentItems
// //     //   });
      
// //     //  }
    
    
    
    
// //     render(){
// //       return ( 
// //      <div>
// //      <div className = "main-todo-heading">
// //      <h1>todos</h1>
// //      <input className = "input-tag" type="text"  id="InputTag" onKeyDown={this.handleEnterKey} placeholder="Enter todo..." />
// //      </div>
     
// //      {this.displayTodo()}
// //       {/*<span>{this.leftItems()}leftiems</span>*/}
// //     {/* <button onClick={this.activeItems}>Active</button>
// //       <button onClick={this.allItems}>All</button>
// //      <button onClick={this.completedItems}>completed</button>*/}
// //      </div>);
// //     }
// // }


// // class Todo2 extends React.Component{
    
// //     constructor(props){
// //         super(props);
// //     }
// //     render(){
// //         return(
// //         <div>
        
// //         <div className="mainroot-div">
// //         <div className="checkbox-and-input-tag">
// //         <input className = "checkbox" type="checkbox"  id={this.props.id} onClick={this.props.checkBoxStatus}/>
// //       <div> <input type="text" className="input-div" id={this.props.id} toDoKey={this.props.todokey} defaultValue={this.props.value}/></div>
// //         <span id={this.props.idForTodo}>X</span>
        
        
// //         </div>
        
// //         </div>
// //         </div>);
// //     }

// // }




// // ReactDOM.render(<Todos />,elementRoot);





class TodoApp extends React.Component {
  constructor(props) {
      console.log("first");
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
      console.log("second");
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
      console.log("third");
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
      console.log("fourth");
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
    
  render() {
      console.log("fifth");
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);



