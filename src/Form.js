import { useState } from "react";
import './Form.css'
function Form() {
  const [form, setForm] = useState({
    pregnancies: "",
    glucose: "",
    blood_pressure: "",
    skin_thickness: "",
    insulin_level: "",
    bmi: "",
    diabetes_pedigree: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData();
    form_data.append("1",form.pregnancies);
    form_data.append("2",form.glucose);
    form_data.append("3",form.blood_pressure);
    form_data.append("4",form.skin_thickness);
    form_data.append("5",form.insulin_level);
    form_data.append("6",form.bmi);
    form_data.append("7",form.diabetes_pedigree);
    form_data.append("8",form.age);

    setLoading(true);

    fetch("https://ds-model-deployment-hao.herokuapp.com/predict",{
        method:'POST',
        body:form_data
    }).then((response) => response.text())
    .then(html => {
        setResult(html);
        setLoading(false);
    });
  };

  const onChangeFunc = (event) => {
    console.log("Changed input field");
    const input_name = event.target.name;
    const input_value = event.target.value;
    setForm({ ...form, [input_name]: input_value });
  };


  const handleClear = () =>{
    setForm({
        pregnancies: "",
        glucose: "",
        blood_pressure: "",
        skin_thickness: "",
        insulin_level: "",
        bmi: "",
        diabetes_pedigree: "",
        age: "",
    });

    setResult("");

  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Diabetes Prediction</h4>
      <p>Example to Predict Probability of Diabetes</p>
      <input
        type="text"
        name="pregnancies"
        value = {form.pregnancies}
        onChange={onChangeFunc}
        placeholder="Number of pregnancies"
        required
      ></input>
      <input
        type="text"
        name="glucose"
        value = {form.glucose}
        onChange={onChangeFunc}
        placeholder="Glucose level in Sugar"
        required
      ></input>
      <input
        type="text"
        name="blood_pressure"
        value = {form.blood_pressure}
        onChange={onChangeFunc}
        placeholder="Blood Pressure"
        required
      ></input>
      <input
        type="text"
        name="skin_thickness"
        value = {form.skin_thickness}
        onChange={onChangeFunc}
        placeholder="Skin Thickness"
        required
      ></input>
      <input
        type="text"
        name="insulin_level"
        value = {form.insulin_level}
        onChange={onChangeFunc}
        placeholder="Insulin Level"
        required
      ></input>
      <input
        type="text"
        name="bmi"
        value = {form.bmi}
        onChange={onChangeFunc}
        placeholder="Body Mass Index (BMI)"
        required
      ></input>
      <input
        type="text"
        name="diabetes_pedigree"
        value = {form.diabetes_pedigree}
        onChange={onChangeFunc}
        placeholder="Diabetes Pedigree Function"
        required
      ></input>
      <input
        type="text"
        name="age"
        value = {form.age}
        onChange={onChangeFunc}
        placeholder="Age"
        required
      ></input>
      <button type="submit" disabled={loading}>{loading? "Predicting Result ...":"Submit Form"}</button>
      {result && <span onClick={handleClear}>Clear Prediction</span>}
      {result && <div dangerouslySetInnerHTML={{__html: result}} class="result"/>}
    </form>
  );
}

export default Form;
