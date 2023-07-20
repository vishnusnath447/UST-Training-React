import React from 'react'
import Content from './Content'
import NavBar from './NavBar'
import './Travel.css'

function Travel() {
    const array = [
        {url:'/src/assets/japan.jpg',country:'JAPAN',place:'Mount Fuji',date:'12 Jan,2021-24 Jan,2021',desc:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',link:"https://www.google.co.in/maps/place/Mount+Fuji/@35.3606246,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"},
        {url:'/src/assets/australia.jpg',country:'AUSTRALIA',place:'Sydney Opera House',date:'27 May,2021-8 Jun,2021',desc:'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centuries most famous and distinctive buildings.',link:'https://www.google.co.in/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu'},
        {url:'/src/assets/norway.jpg',country:'NORWAY',place:'Geirangerfjord',date:'01 Oct,2021-18 Nov,2021',desc:'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',link:'https://www.google.co.in/maps/place/Geirangerfjord/@62.1048242,6.9928137,12z/data=!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu'}
    ]
  return (
    <div className='container'>
        <NavBar />
        <Content values={array}/>
    </div>
  )
}
//not finished
export default Travel