import React from 'react';
import Image from './image';
import images from '../gems.json';

class score extends React.Component {

  // Setting the initial state of the component number
  state = {
    imageList: images,
    score: 0,
    highestScore: 0
  };
  //function AddAndCheck
  imageClick = (imageId) => {
    //when a gem is clicked 
    //first check its isClicked value
    //alert(imageId);
    let isCorrect = false;
    let newScore=0;
    //create a new array of images
    const imagesCopy = [...this.state.imageList];
    //loop tru new copy to work on it
    imagesCopy.forEach(copy => {
      if (imageId === copy.id) {
        if (!copy.isClicked) {
          copy.isClicked = true;
          isCorrect = true;          //
          //alert(copy.isClicked)
        } else {
          isCorrect = false;
        }
      }
    });
    //alert(isCorrect);

    //check if user won or no
    if (isCorrect) {
      //shuffle the array 
      imagesCopy.sort(() => 0.5 - Math.random());
      //handle correct
      this.setState({
        score: this.state.score + 1,
        newScore: this.state.score + 1,
        imageList: imagesCopy
      });
      if (newScore>this.state.highestScore){
        this.setState({
          highestScore:this.state.newScore
        })
      };
      if (newScore===12){
        alert("You Won!")
      }
    } else {
      alert("You lost!");
      
      this.setState({
        highestScore: this.state.score,
        score: 0,
        imageList:images.sort(() => 0.5 - Math.random())
      })
    }
  };
  // The render method returns the JSX that should be rendered
  render() {
    const { imageList } = this.state;
    //console.log(imageList);
    return (
      <div>
        <div className="jumbotron bg-dark text-light my-2 p-2 text-center">
          <div className="row">
            <div className="col-12 text-right">
              <span className="badge badge-light mr-2">Score: {this.state.score}</span>
               <span className="badge badge-light">Highest Score:{this.state.highestScore}</span>
            </div>
          </div>
        </div>
        {/* images jumbotron */}
        <div className="jumbotron my-2 p-2 ml-2">
          <div className="row justify-content-center ml-2">
            {imageList.map(image => {
              return (
                <Image
                  key={image.id}
                  imageId={image.id}
                  name={image.name}
                  source={image.source}
                  isclicked={image.isClicked}
                  imageClick={this.imageClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default score;