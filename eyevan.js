function Eyes(X,Y){
	this.x = X;
  this.y = Y;
  this.width = 200;
  this.height = 200;
  this.interOcc = 130;
  this.eyeRotation = 0;
  this.rightRotation = 0;
  this.leftArcSeg = 0;
  this.rightArcSeg = 0;

  this.display = function(){
    push()
			angleMode(DEGREES);

    	push();
    		translate((this.x-this.interOcc), this.y);
    		rotate(this.eyeRotation);
				arc(0, 0, this.width, this.height, (270 + (this.leftArcSeg + 0.5)), (270 - this.leftArcSeg), CHORD);
    		//arc(0, 0, this.width, this.height, (271), (270), CHORD);
    	pop();

    	push();
    		translate((this.x+this.interOcc), this.y);
    		rotate(this.eyeRotation*-1);
    		arc(0, 0, this.width, this.height, (270 + (this.rightArcSeg+0.5)), (270 - this.rightArcSeg), CHORD);
			pop();

    pop();
    angleMode(RADIANS);
  }

	this.neutral = function(){
		if (this.eyeRotation === 0&&this.leftArcSeg===0&&this.rightArcSeg===0){
    	makeNeutral = false;
    }else{
			if(this.leftArcSeg===0&&this.rightArcSeg===0){
				if(this.eyeRotation !== 0){
					this.eyeRotation = 0;
				}
			}else{
				//make eye rotation zero
				if (this.leftArcSeg>0){
	      	this.leftArcSeg--;
	      }
	      if (this.rightArcSeg>0){
	      	this.rightArcSeg--;
				}
			}
		}
	}

  this.surprised = function(){
		push();
			angleMode(RADIANS);
  		this.height = map((sin(angle)), -1, 1, 199.9, 250);
			angle += 0.08;
			if (this.height <= 200) {
				this.height = 200;
				angle = 0;
				makeSurprised = false;
			}
		pop();
		//angleMode(RADIANS);
  }

 	this.sad = function(){
		this.backFromHappy();
    if (this.eyeRotation===-25&&this.leftArcSeg===30&&this.rightArcSeg===30){
    	makeSad = false;
    }else{
      if(this.eyeRotation>-25){
    		this.eyeRotation--;
      }else if(this.eyeRoatation<-25){
      	this.eyeRotation++;
      }
      if(this.leftArcSeg<30){
      	this.leftArcSeg++;
      }else if(this.leftArcSeg>30){
      	this.leftArcSeg--;
      }
      if(this.rightArcSeg<30){
      	this.rightArcSeg++;
      }else if(this.rightArcSeg>30){
      	this.rightArcSeg--;
      }
		}
  }

  this.angry = function(){
		this.backFromHappy();
  	if (this.eyeRotation===30&&this.leftArcSeg===30&&this.rightArcSeg===30){
    	makeAngry = false;
    }else{
      if(this.eyeRotation>30){
    		this.eyeRotation--;
      }else if(this.eyeRotation<30){
      	this.eyeRotation++;
      }
      if(this.leftArcSeg<30){
      	this.leftArcSeg++;
      }else if(this.leftArcSeg>30){
      	this.leftArcSeg--;
      }
      if(this.rightArcSeg<30){
      	this.rightArcSeg++;
      }else if(this.rightArcSeg>30){
      	this.rightArcSeg--;
      }
		}
  }

	this.happy = function(){
		//if (this.eyeRotation === 0&&this.leftArcSeg===0&&this.rightArcSeg===0){
			if (this.eyeRotation === 180&&this.leftArcSeg===30&&this.rightArcSeg===30){
				makeHappy = false;
	    }else{
				if(this.eyeRotation!==180){
					this.eyeRotation = 180;
				}
				if(this.leftArcSeg<30){
	      	this.leftArcSeg++;
	      }else if(this.leftArcSeg>30){
	      	this.leftArcSeg--;
	      }
	      if(this.rightArcSeg<30){
	      	this.rightArcSeg++;
	      }else if(this.rightArcSeg>30){
	      	this.rightArcSeg--;
	      }
	    }
	}
//--------this is a quick for for getting the eyes to rotate back if they are at
//--------180 as a result of the happy emot
	this.backFromHappy = function(){
		if(this.eyeRotation === 180){
			this.eyeRotation = 0;
		}
	}

  this.confused = function(){
		this.backFromHappy();
  	if(this.eyeRotation===-5&&this.leftArcSeg === 0&&this.rightArcSeg === 45){
    	makeConfused = false;
    }else{
			if(this.eyeRotation>-5){
				this.eyeRotation--;
			}
			if(this.eyeRotation<-5){
				this.eyeRotation++;
			}
    	if(this.leftArcSeg>0){
      	this.leftArcSeg--;
      }
      if(this.rightArcSeg<45){
      	this.rightArcSeg++;
      }
      if(this.rightArcSeg>45){
      	this.rightArcSeg--;
      }
    }
  }
}
