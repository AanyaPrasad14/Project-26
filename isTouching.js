function isTouching(object1, object2) {
    if(object1.x-object2.x<object1.width/2+object2.width/2
      && object2.x-object1.x<object1.width/2+object2.width/2
      && object2.y-object1.y<object1.width/2+object2.width/2
      && object1.y-object2.y<object1.width/2+object2.width/2) {
       return true;
      }
      else 
      {
        return false;   
      }
  }