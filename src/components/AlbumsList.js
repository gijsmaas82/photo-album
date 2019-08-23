import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>

    There are { props.albums.length } albums available.
    <ul>
    { props.albums.map(album =>
        <li key={album.title} >
          { album.title }
        </li>
      ) }
    </ul>
  </div>)
}