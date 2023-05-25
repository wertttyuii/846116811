
var monster_colors = "355070-6d597a-b56576-e56b6f-eaac8b".split("-").map(a=>"#"+a)

class Monster{//宣告一個怪物類別，名稱為Monster
    constructor(args){   //預設值，基本資料(物件的顏色，移動的速度，大小，初始顯示位置......)
        this.r = args.r || random(50,200)  //設計的飛彈有大有小時，就傳參數args.r來設定飛彈大小，沒有傳參數，就以10為主
        this.p = args.p || createVector(random(width),random(height) )    //建立一個向量，{x:width/2 , y: height/2}
        this.v = args.v || createVector(random(-1,1).random(-1,1))//移動的速度
        this.color = args.color|| random(monster_colors)
        this.mode =random(["happy","bad"])
    }
draw(){//劃出原件
    push()//重新設定原點的顏色
         translate(this.p.x,this.p.y)
         fill(this.color)
         noStroke()
         ellipse(0,0,this.r)
         //+++++++++++++++++++++++++++++
         if(this.mode=="happy"){
         fill(255)
         ellipse(2,2,this.r/2)
         fill(0)
         ellipse(0,0,this.r/3)
         }else{
               fill(255)
               arc(0,0,this.r/2,this.r/2,0,PI)
               fill(0)
               arc(0,0,this.r/3,this.r/3,0,PI)

         }
         stroke(this.color)
         strokeWeight(4)
         noFill()
         //line(this.r/2,0,this.r,0)
         for(var j=0;j<8;j++){
         rotate(PI/4)
         beginShape()
         for(var i=0;i<(this.r/2);i++){
            vertex(this.r/2+i,sin(i/5+frameCount/10)*10)
         }
         endShape()
        }

    pop()//恢復原點到整個視窗的左上角
}

update(){//計算出移動原件後的位置
     this.p.add(this.v)
     if(this.p.x<=0 || this.p.x>=width){ //x軸碰到左邊(<=0)，或是碰到右邊(>=width)
        this.v.x = -this.v.x     //把x軸方向，速度方向改變
      }
      if(this.p.y<=0 || this.p.y>=height){  //y軸碰到上邊(<=0)，或是碰到下邊(>=height)
        this.v.y = -this.v.y     //把y軸方向，速度方向改變
      }
}


}