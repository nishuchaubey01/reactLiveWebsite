import React , {useState} from 'react';
import './Style.css';
import Menu from './Menu';

  const Stylenum = () => {
  const [item , setItem]= useState(Menu);
  const [inputField, setInputField] = useState("");
  // const [style, setStyle]=useState('m');
  // const [image, setImage]=useState('');
  

   
  

  const inputsHandler = (e) => {
    setInputField(e.target.value);
  };
  function submit() {
    var resultData = Menu.filter(function (ob) {
      return ob.stylnum == inputField;
    });

    setItem(resultData);
  }



  return (
   <>
       <h1 className=' mt-5 text-center main-heading'>Artikel Image</h1>
      <label>Enter Artikel : </label>
      <input type= "search" placeholder='style number' onChange={(e) => inputsHandler(e)}></input>
      <button  type='button' className='btn btn-warning' onClick={submit}>click here</button>
      <hr/>
      <div className='menu-items container-fluid mt-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>
                   { 
                     item.map((elem)=>{
                      const{stylnum , image, name}=elem
                      return (

                        <div className='item1 col-12 col-md-6 cl-lg-6 cl-sl-4'>
                        <div className='row-item-inside'>
                          <div className='col-12 cl-md-12 col-lg-4  img-div'>
                            <img src={image} alt='iAMGE NOT FOUND' className='image-fluid' />
        
                          </div>
                         <div className='col-12 col-md-12 col-lg-8'>
                          <div className='main-title pt-4 pb-3'>
                            <h1>{name}</h1>
                          </div>
                          <div className='menu-stylnum'>
                            <div className='stylnum-divide d-flex justify-content-between'></div>
                            <h2>{stylnum}</h2>
                          </div>
        
                         </div>
        
                        </div>
        
                      </div>
                 
                      )

                     })
                   }

            
          </div>
          </div>
      </div>
    </div>
 </>

  )
}

export default Stylenum

        
