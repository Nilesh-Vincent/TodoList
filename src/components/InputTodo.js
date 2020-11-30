import React,{ Fragment , useState} from 'react';
import "./InputTodo.css"



//POST TO DATABASE
const InputTodo = () => {
    const [description, serDescription] = useState("")
    
    const onSubmitForm = async (e) => {
          e.preventDefault();

try {
    const body = {description};
    const response = await fetch ("http://localhost:5000/todos",{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(body)
    });

    window.location = "/";


} catch (err) {
    console.error(err.message)
    }
}



return(
        <Fragment>

            <h1 className = "text-center mt5">  
            <br/> 
            Todo List 
            </h1>
            <br/>

            <form className = "d-flex" onSubmit = {onSubmitForm}>
                <input 
                    type = "text" 
                    className ="form-control" 
                    value = {description} 
                    onChange = {e => serDescription(e.target.value)}
                />
                <button className="btn btn-primary"> ADD </button>
            </form>

        </Fragment>
    );
}; 
    
export default InputTodo;