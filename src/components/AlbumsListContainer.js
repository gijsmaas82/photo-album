import * as React from 'react'
// import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/addAlbum'
import { setAlbums } from '../actions/setAlbums'
import { getAlbums } from '../actions/getAlbums'
 

class AlbumsListContainer extends React.Component {
  
  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
    addAlbum, setAlbums, getAlbums 
   }
    
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsListContainer)