import { Button } from 'antd'
import React from 'react'
import './SearchPage.css'
import SearchResult from './searchResult'

function SearchPage() {
  return (
    <div className='SearchPage'>
    <div className='searchpage-info'>
      <p>62 stays - {new Date().toDateString()} - 2 guest</p>
      <h3>Stays nearby</h3>
      <Button variant='outlined'>Cancellation Flexibility</Button>
      <Button variant='outlined'>Type of Place</Button>
      <Button variant='outlined'>Price</Button>
      <Button variant='outlined'>Room and beds</Button>
      <Button variant='outlined'>More Filters</Button>
    </div>
    <SearchResult 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4kd9u_pfXuH7hsTxNv5jdU5b6u272TD5lA&usqp=CAU' alt='' 
            location='Mombasa'
            title='Entire Home'
            description="Comfartable private places, with room for friends or family and also with swimmingpool"
            star={4.73}
            price='$200 /night'
            total='$1000 total'
    />
  
    <SearchResult 
            img='https://a0.muscache.com/im/pictures/aa40bc01-c9c4-4c1e-97a9-6f5b6acf0923.jpg?im_w=1200' alt='' 
            location='Nairobi (Kileleshwa)'
            title='Entire rental unit'
            description="
            2 guests 1 bedroom 1 bed 1.5 baths.
            The Jabali Luxury house is meticulously furnished to give you an unforgettable experience in one of Nairobi's 
            most preferred neighborhoods.It is located at Kilimani area , 20 minutes drive from the airport along Argwings
             kodhek road and five minutes drive from the famous Yaya center mall, Adlife plaza, Prestige plaza and Valley arcade .
             It’s a safe complex manned by a security company and ample parking space. Expect to find our place Serene, with plenty of fresh air!"
            star={4.91}
            price='$48 /night'
            total='$96 total'
    />
    <SearchResult 
            img='https://a0.muscache.com/im/pictures/9d1d4d95-7020-48e0-bbfc-09e2953ab36b.jpg?im_w=1200' alt='' 
            location='Kajiado Kenya'
            title='Entire cottage hosted by Stewart & Sandie'
            description=" 6 guests 3 bedrooms 5 beds 3 baths. INDICATE GUEST NUMBERS AS MAY MAKE A DIFFERENCE TO PRICE

            GATE IS ON GOOGLEMAPS
            
            Tandala and Little Tandala the Robert's family bush homes where guests experience the remote atmosphere and mystique of real Africa."
            star={4.87}
            price='$277 /night'
            total='$1108 total'
    />

    </div>
  )
}

export default SearchPage