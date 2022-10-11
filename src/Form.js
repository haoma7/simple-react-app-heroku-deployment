import {useState} from 'react';


function Form(){
    const [form, setForm] = useState({
        pregnancies:"",
        glucose:"",
        blood_pressure:"",
        skin_thickness:"",
        inslulin_level:"",
        bmi:"",
        diabetes_pedigree:"",
        age:""
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Form Submitted");
        console.log(form)
    };

    const onChangeFunc = (event) => {
        console.log("Changed input field");
        const input_name = event.target.name;
        const input_value = event.target.value;
        console.log(`event.target.name:${input_name},event.target.value:${input_value}`)
        console.log('haha'+input_value)
        setForm({...form, [input_name]:input_value})    
        }
    return (
        <form onSubmit={handleSubmit} >
            <h4>Diabetes Prediction</h4>
            <p>Example to Predict Probability of Diabetes</p>
            <input type="text" name="pregnancies" onChange={onChangeFunc} placeholder="Number of pregnancies"></input>
            <input type="text" name="glucose" onChange={onChangeFunc} placeholder="Glucose level in Sugar"></input>
            <input type="text" name="blood_pressure" onChange={onChangeFunc} placeholder="Blood Pressure"></input>
            <input type="text" name="skin_thickness" onChange={onChangeFunc} placeholder="Skin Thickness"></input>
            <input type="text" name="inslulin_level" onChange={onChangeFunc} placeholder="Insulin Level"></input>
            <input type="text" name="bmi" onChange={onChangeFunc} placeholder="Body Mass Index (BMI)"></input>
            <input type="text" name="diabetes_pedigree" onChange={onChangeFunc} placeholder="Diabetes Pedigree Function"></input>
            <input type="text" name="age" onChange={onChangeFunc} placeholder="Age"></input>
            <button type="submit">Submit Form</button>
        </form>
    );

}

export default Form;