import React from 'react';
import {data} from "../Utilies/Conts";

export default function Card() {
  return (
    <>
    <main>
      <section className="container p-5 center">
        <div className="priceCard rounded-3 shadow">
          <div className="join p-3 p-lg-5 p-md-3 p-sm-3">
            <h2>{data[0].title}</h2>
            <p className='fw-bold mt-3'>{data[0].subTitle}</p>
            <p className="desc">{data[0].desc}</p>
          </div>
          <div className="sub p-3 p-lg-5 p-md-3 p-sm-3">
            <h2>{data[1].title}</h2>
            <p className='center justify-content-start'><span className="price">{data[1].price}</span>{data[1].duration}</p>
            <p>{data[1].desc}</p>
            <div className="btnMain text-center">
              <a href="#" className="btn subBtn px-3 p-2">{data[1].btn}</a>
            </div>
          </div>
          <div className="about p-3 p-lg-5 p-md-3 p-sm-3">
            <h2>{data[2].title}</h2>
            <p>{data[2].desc}</p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
