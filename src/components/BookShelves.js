import React from 'react'
import { Shelfs } from './Shelfs'
// import { Books } from './Books'

const BookShelves = () => {
  // const currentlyReading = currentlyReading
  // const wantToRead = wantToRead
  // const read = read
 
  return (
    <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
      <Shelfs />
      </div>
    </div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
      <Shelfs />
      </div>
    </div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
      <Shelfs />
      </div>
    </div>
  </div>
  )
}

export default BookShelves