var quiz = function(question,answer,correct){
	this.question= question;
	this.answer= answer;
	this.correct= correct;
};
var i,a;
a=0;
var loop = function(){
quiz.prototype.askQue= function(){
	console.log(this.question);
	for(i=0;i<this.answer.length;i++){
		console.log(i + " : " + this.answer[i]);

	};
	

};
quiz.prototype.checkAns= function(){
 if(ans===this.correct){
	      console.log("We are same");
	      a++;
	  }
      else{
	    console.log("you have lots to learn");
	    a=0;
        
}
};
quiz.prototype.checkPlay= function(){
 if(askPlay===this.correct){
 	console.clear();
	 loop();    
	}
      else{
        console.clear();
	    console.log("Total score=" + a);
	    console.log("Sayonara");



        }

};

 var q1= new quiz("does life has meaning",["NO","yes"],1);
 var q2= new quiz("is cat cute",["yes","hell yes"],1);
 var q3= new quiz("do humanity exists",["NO","yes","naturally it doesnot exists"],2);
 var q4= new quiz("In the end whats matter",["you will be dead","winning"],0);
 var quizCollec=[q1,q2,q3,q4];
 
 var length=quizCollec.length;
 var n = Math.floor(Math.random()*length);
 quizCollec[n].askQue();
 var ans= parseInt( prompt(" select number representive answer from console")); 
 quizCollec[n].checkAns();
var play=new quiz("want to play again",["yes","no,exit"],0);
play.askQue();
var askPlay= parseInt( prompt(" select number representive answer from console"));

play.checkPlay();
};
loop();