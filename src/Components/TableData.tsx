import React from 'react'
import tableData from '@/app/Data/tableData'
import Button1 from './Button1'
function TableData() {
  return (
    <div>
        <div>
        {
          tableData.map((card, index) => (

            <div key={index}>
              <br /><br />
              <div style={{ background: "red" }}>
                {card.image}
                <h1>{card.heading}</h1>
              </div>
              <div style={{ background: "green" }}>
                <div>
                  <span>{card.sub1}</span>
                </div>
                <div>
                  <p>{card.description1}</p> <br />
                  <Button1 />
                </div>
              </div>
              <div>
                <div>
                  <span>{card.sub2}</span>
                </div>
                <div>
                  <ol>
                  {card.des1 && <li>{card.des1}</li>}  
                  {card.des2 && <li>{card.des2}</li>}  
                  {card.des3 &&  <li>{card.des3}</li>} 
                  {card.des4 && <li>{card.des4}</li>}  
                  {card.des5 && <li>{card.des5}</li>} 
                  {card.des6 && <li>{card.des6}</li> } 
                  </ol>

                </div>
              </div> <br />
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default TableData
