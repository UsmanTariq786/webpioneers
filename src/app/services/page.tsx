import React from 'react'
import cardsData from "@/app/Data/CardData";
import tableData from '../Data/tableData';
import Button1 from '@/Components/Button1';
import Box from '../Data/Box';
import smallCard from '../Data/SmallCardData';
const ServicesPage = () => {
  return (
    <div>

      Services Page
      <div>
        <span>{Box[0].boxhead}</span>
        <h1>{Box[0].boxdes}</h1>
      </div>
      <div >
        {cardsData.map((card) => (
          <div key={card.id} style={{ background: "tan", marginTop: "10px", paddingRight: '10px' }}>
            <span>{card.id}</span>
            <span>{card.image}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
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
                  <ul>
                    <li>{card.des1}</li><br />
                    <li>{card.des2}</li><br />
                    <li>{card.des3}</li><br />
                    <li>{card.des4}</li><br />
                    <li>{card.des5}</li><br />
                    <li>{card.des6}</li> <br />
                  </ul>

                </div>
              </div> <br />
            </div>

          ))
        }
      </div>
      <div>
        <span>{Box[1].boxhead}</span>
        <h1>{Box[1].boxdes}</h1>
      </div>
      
      <div>
        <div>
          {
            smallCard.map((card, index) => (
              <div key={index} style={{ background: "purple", marginTop: "10px" }}>
                <span>{card.id}</span>
                <h2>{card.heading}</h2>
                <p>{card.description}</p>
              </div>
            ))
          }
        </div>
        <div style={{display:"flex"}}>
          <div>
            {
              Array.from({ length: 10 }, (_,index) => (
                <div key={index}>
                    <span>* * * * * * * * * * * * * * * * * * * * * * * * * * *</span>
                </div>
              ))
            }
          </div>
          <div >
            {
              <div>
              <span>{Box[2].boxhead}</span>
              <h1>{Box[2].boxdes}</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
