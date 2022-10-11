import {useState} from 'react';


function Form(){
    const [form, setForm] = useState({userName:"",userEmail:""})
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Form Submitted");
        console.log(form)
    };

    const onChangeFunc = (event) => {
        console.log("Changed input field");
        const name = event.target.name;
        const value = event.target.value;
        console.log(`event.target.name:${name},event.target.value:${value}`)
        console.log('haha'+value)
        setForm({...form, [name]:value})    
        }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="userName" onChange={onChangeFunc} placeholder="name (e.g. John)"></input>
            <input type="text" name="userEmail" onChange={onChangeFunc} placeholder="Email(e.g. John)"></input>
        <button type="submit">Submit Form</button>
        </form>
    );

}

export default Form;