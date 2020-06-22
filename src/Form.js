import React,{useState} from 'react';


const Form = () => {
      const[color,setColor] = useState({
        'First Name':'',
        'Last Name':'',
        Email:'',
        Password:'',
      })
    
    
    
    const [error,setError] = useState({
        'First Name':'',
        'Last Name':'',
        Email:'',
        Password:'',
    })

        const[image,setImage] = useState({
            'First Name':'none',
            'Last Name':'none',
           Email:'none',
           Password: 'none'
        })


    const [input,setInputs] = useState({
        'First Name':'',
        'Last Name':'', 
        Email:'',
        Password:''
    })


    function inputChange(event){
        const {value,name} = event.target;
        setInputs(prevValue => {
           return {
               ...prevValue,
               [name]:value
           }
        })
    }



    function submitButton(event){
       Object.entries(input).forEach(entry =>{
           if(entry[1]===''){
               setError(prevValue=>{
                 return  {
                       ...prevValue,
                        [entry[0]]: `${entry[0]} cannot be left empty`
                   }
               })
               setImage(prevValue=>{
                   return{
                       ...prevValue,
                       [entry[0]]: ''
                   }
               })
               setColor(prevValue=>{
                   return{
                       ...prevValue,
                       [entry[0]]:'hsl(0, 100%, 74%)'
                   }
               })
               
           }else if(entry[0]==='Email' && (entry[1].includes('@') === false || entry[1].includes('.')===false)){
            setError(prevValue=>{
                return  {
                      ...prevValue,
                       [entry[0]]: 'Looks like this is not an email'
                  }
              })
              setImage(prevValue=>{
                return{
                    ...prevValue,
                    [entry[0]]: ''
                }
            })
        } 
           else{
            setError(prevValue=>{
                return  {
                      ...prevValue,
                       [entry[0]]: ''
                  }
              })
              setImage(prevValue=>{
                return{
                    ...prevValue,
                    [entry[0]]: 'none'
                }
            })
            setColor(prevValue=>{
                return{
                    ...prevValue,
                    [entry[0]]:''
                }
            })
            if(Object.values(input).includes('')===false && (input.Email.includes('@') && input.Email.includes('.'))){
            setInputs(prevValue=>{
                return{
                    ...prevValue,
                    [entry[0]]:''
                }
            })
        }
           }
       })
   
    
       event.preventDefault()
    }


 

    return(
        <div className = 'formContainer'>
            <button className='trialButton'>Try it free 7 days <span>then $20/mo. thereafter</span></button>
            <form> 
                <input value={input['First Name']} onChange={inputChange} style={{background:image['First Name'],borderColor:color['First Name']}} type='text' name='First Name' placeholder='First Name'></input>
                <p className='errorAlert'><em>{error['First Name']}</em></p>
                <input value={input['Last Name']} onChange={inputChange} style={{background:image['Last Name'],borderColor:color['Last Name']}} type='text' name='Last Name' placeholder='Last Name'></input>
                <p  className='errorAlert'><em>{error['Last Name']}</em></p>
                <input value={input.Email} onChange={inputChange} style={{background:image.Email,borderColor:color.Email}} type='email' name='Email' placeholder='Email Address'></input>
                <p className='errorAlert'><em>{error.Email}</em> </p>
                <input value={input.Password} onChange={inputChange} style={{background:image.Password,borderColor:color.Password}} type='password' name='Password' placeholder='Password'></input>
                <p className='errorAlert'><em>{error.Password}</em></p>
                <button onClick={submitButton} type='submit' className='submitButton'>CLAIM YOUR FREE TRIAL</button>
                <p className='terms'>By checking this button you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>
    )
}

export default Form;