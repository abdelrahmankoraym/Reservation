/*import React from 'react';
import { View, Text } from 'react-native';


const DList = () => {
    
    return(
    <View>
        <Text>lol</Text>
        <Text>lol</Text>
        <Text>lol</Text>
        <Text>lol</Text>
    </View>
    );
};

export default DList;
*/
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import DDetails from './DDetails';

class DList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <DDetails key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default DList;
