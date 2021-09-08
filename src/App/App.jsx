import { Component } from 'react';
import ReactPlayer from 'react-player';
import { FaTrash } from 'react-icons/fa';
import { Collapsible } from '../Collapsible/Collapsible';
import { Container } from './App.styled';
import { Tooltip } from '../Tooltip/Tooltip';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { DropdownMenuItem } from '../DropdownMenu/DropdownMenuItem';
import { VideoList } from '../VideoList/VideoList';
import videos from '../videos.json';


export class App extends Component {
  state = {
     selectedVideo: null,  
  }

    selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <Container >
      <DropdownMenu>
        <DropdownMenuItem onSelect={() => alert("Delete")}>
          <FaTrash size={16} color="blue" />          
          Delete</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert("Edit")}>Edit</DropdownMenuItem>
      </DropdownMenu> 

      {/* <DropdownMenu>
        <DropdownMenuItem>Create</DropdownMenuItem>
        <DropdownMenuItem>Update</DropdownMenuItem>
      </DropdownMenu> */}
      


      <Tooltip label = "TOOOOOOOOOLTIP">
        <button>Hello</button>
      </Tooltip>

      <Collapsible>Content</Collapsible>
        
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={this.selectVideo} />

      {selectedVideo && <ReactPlayer url={selectedVideo}/>}
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls/> */}

    </Container>
  );
  }

}

export default App;

//Обычно player делают без controls ии настраивают сами