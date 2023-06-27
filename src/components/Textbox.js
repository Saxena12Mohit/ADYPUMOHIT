import { toContainElement } from '@testing-library/jest-dom/matchers'
import React,{ useState } from 'react'


export default function Textbox() {
  const [text, textchange] = useState("Write any thing in box");
  const changeuppercase = ()=>
  {
   let newtext=text.toUpperCase();
   textchange(newtext);
  }
  const changelowercase = ()=>
  {
    let newtext=text.toLowerCase();
    textchange(newtext);

  }
  const action = (event)=>
  {
textchange(event.target.value)
  }
  
  const myreverse = ()=>
  {
    const reversed = text.split('').reverse().join('');;
    textchange(reversed);
  }
  
  return (
    <> 
        <div className="mb-3">
          <div>
                    <div className="d-flex flex-row mb-3">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div>
                    </div>
                  <div className="d-flex flex-row-reverse">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div>
         </div>

          </div>
          <label htmlFor="Textarea1" className="form-label"><h2>Enter the text below</h2></label>
          <textarea className="form-control" value={text} id="Textarea1" rows="10" onChange={action}></textarea>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
              <button className="btn btn-primary me-md-2" type="button" onClick={changeuppercase}>InupperCase</button>
              <button className="btn btn-primary" type="button"   onClick={changelowercase}>InlowerCase</button>
              <button className="btn btn-primary" type="button"   onClick={myreverse}>Reverse</button>
              </div>
              <div> 
              <h2>Total number of words and letters</h2>
              <h3>Total words={text.split(" ").length}</h3>
              <h3>Total letters={text.length}</h3>
              </div>
          </div>
    </>
  )
}
