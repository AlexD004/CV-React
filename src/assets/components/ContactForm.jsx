import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function ContactForm() {

    // STATES
    // Stock input value / user informations
    const  [formInfos, setFormInfos] = useState(
        {
            name: "",
            email: "",
            phone: "",
            object: "",
            message: ""
        }
    );
    // To know if a field is empty or not
    const  [validFields, setValidFields] = useState(
        {
            name: false,
            email: false,
            phone: false,
            object: false,
            message: false
        }
    );
    // To know if all content are 'ok' or if there is an error
    const [invalid, setInvalid] = useState(false);

    // FUNCTIONS
    // Update values of inputs in contact form
    const handleChange = (e) => {

        // Determine if the new field value is empty or not (so valid or not)
        let isValid = false;
        if (e.target.value){
            isValid = true;
        }
        // Put the field value in the corresponded key value in the state
        setFormInfos({ 
            ...formInfos, // Copy current fields
            [e.target.name] : e.target.value // Override this one
         });
         // Put the statue (valid or invalid / true or false) in the corresponded key value
         setValidFields({ 
            ...validFields, // Copy current fields
            [e.target.name] : isValid // Override this one  
         });
    };

    // When form is submit
    const submitForm = (e) => {
        // Declare some variables
        const name = document.querySelector('input[name="name"]').value.length;
        const email = document.querySelector('input[name="email"]').value.length;
        const phone = document.querySelector('input[name="phone"]').value.length;
        const object = document.querySelector('input[name="object"]').value.length;
        const message = document.querySelector('textarea[name="message"]').value.length;
        // Check if all input are not empty
        try {
            if(  name < 1 || email < 1 || phone < 1 || object < 1 || message < 1  ){
                throw new Error("All fields are required! ");
            }

            setInvalid(false); // If the form was invalid, now it is good !
            sendMail(); // Send mail

        } catch (err) {
            showError(err);
        }
    }

    const showError = (err) => {
        setInvalid(true); // There is an error, so the form is invalid !
    }
    const sendMail = () => {
        alert('Congratulations ! Your mail is send !');
        // Put your own mail sending system here !
    }
    
    // RENDER
    return (
        <form className='d-flex justify-content-center align-item-center flex-column'>
            <input type="text" name="name" defaultValue={formInfos.name} placeholder="Votre nom" className={'form-control mb-2 ' + ( invalid && (validFields.name === false) && 'border border-danger')} onChange={handleChange}/>
            <input type="email" name="email" defaultValue={formInfos.email} placeholder="Votre adresse email" className={'form-control mb-2 ' + ( invalid && (validFields.email === false) && 'border border-danger')} onChange={handleChange}/>
            <input type="tel" name="phone" defaultValue={formInfos.phone} placeholder="Votre numéro de téléphone" className={'form-control mb-2 ' + ( invalid && (validFields.phone === false) && 'border border-danger')} onChange={handleChange}/>
            <input type="text" name="object" defaultValue={formInfos.object} placeholder="Sujet" className={'form-control mb-2 ' + ( invalid && (validFields.object === false) && 'border border-danger')} onChange={handleChange}/>
            <textarea name="message" defaultValue={formInfos.message} placeholder="Votre message" className={'form-control ' + ( invalid && (validFields.message === false) && 'border border-danger')} onChange={handleChange}/>
            { invalid && (<div className='p-1 mt-3 border border-danger rounded text-center text-danger'>Tous les champs sont obligatoires. Veuillez compléter les informations manquantes.</div>) }
            <div className='text-center'><Button className="mt-3 mb-5 mw-50 btn btn-md" onClick={submitForm}>Envoyer</Button></div>
        </form>
    );
  }
