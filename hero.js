//히어로에 div를 만드는 클래스를 자식 클래스로 만듬
//부모클래스와 자식클래스 연결하면 this가 히어로가 됨.... ㅠ
//연결하는 방법을 찾아보자..!

class Hero {
    // 인스턴스가 생성될때 같이 실행할 프로퍼티들 담기
    constructor(parents) {
        this.parents = parents;
        this.hero = this.create_hero();
        this.hero_position = 400;

        // this.event.keyCode = event.keyCode; // 이벤트 타겟 설정을 어찌해야할지..
        // window.addEventListener('keydown',this.move_hero.bind(this))
        // window.addEventListener('keydown',this.move_hero(e))
        // this.hero.style.backgroundPositionX = `${posX}px`;
        window.onkeydown = this.move_hero.bind(this);
    }
    // 김영웅 등장쓰!
    create_hero() {
        let elhero = document.createElement('div');
        elhero.className = 'hero';
        this.parents.appendChild(elhero);
        return elhero;
        //맨 처음엔 appendChild랑 return 둘 중 하나만 했는데 둘 다 해줘야함.
    }
    move_hero(event) {
        switch(event.keyCode) {
            case 37:
            this.hero.style.backgroundPositionX = 70+'px'
            this.hero_position -= 10;
            this.hero.style.left = this.hero_position +'px'
            if (this.hero_position <= 0 ) {
                this.hero_position = 0;
            }
            break;
            
            case 39:
            this.hero.style.backgroundPositionX = 35+'px'
            this.hero_position += 10;
            this.hero.style.left = this.hero_position +'px'
            if(this.hero_position >= 762) {
               this.hero_position = 762; 
            }
            break;
        }
    }
}

// 함수실행을 구동하는 엔진 클래스 따로 만들어주기!
let parentsMainDiv = document.getElementById("bg");
let hero = new Hero(parentsMainDiv);

/*
function moving(event) {
    let temp = 0;
    debugger;
}

window.addEventListener('keydown',function(event) {
    debugger;
    moving(event)
})
*/


/************************************************************
 함수로 만든 식 : 김영웅씨 등장과 액션
 * *********************************************************/

// var hero_position = 400
// var hero = document.getElementById('hero')

// function left() {
//     hero.style.backgroundPositionX = 70+'px
//     //이 부분을 처음에 background-position-x로 써서 오류가 났음
//     // hero.style.left -= 1+'px'
//     hero_position -= 10
//     hero.style.left = hero_position + 'px'
//     //hero의 포지션이 0일때 멈추게 하는 법
//     if(hero_position <= 0) {
//         hero_position = 0 
//     }
// }

// function right() {
//     hero.style.backgroundPositionX = 35+'px'
//     // hero.style.left += 1+ 'px'
//     hero_position += 10
//     hero.style.left = hero_position + 'px'
//     //hero의 포지션이 764일때 멈추게 하는 법
//     if(hero_position >= 762) {
//         hero_position = 762
//     }
// }

// function moving(event) {
//     if(event.keyCode === 37) {
//         left()
//     }
//     if(event.keyCode === 39) {
//         right()
//     }
// }

// window.addEventListener('keydown',function(event) {
//     moving(event)
// })



/******************************************************
클래스 첫 시도 : 블로그 포스팅용 기록 
* *****************************************************/

// var hero = new Image()
// hero.src = './images/hero.png'

// class Hero{
//     //constructor가 기본값 세팅해주는 단계
//     constructor(hero,hero_position,hero_left,hero_pX,event) {
//         this.hero = hero;
//         this.hero_position = hero_position;
//         this.hero_left = hero_left;
//         this.hero_pX = hero_pX;
//         this.event = event
//     }
// }

// class Hero_maker{
//     constructor(hero,hero_position,hero_left,hero_pX,event) {
//         super(hero,hero_position,hero_left,hero_pX,event)
//     }
//     left() {
//         this.hero.style.backgroundPositionX = 70+'px'
//             this.hero.style.left -= 1+'px'
//             this.hero_position -= 10
//             this.hero.style.left = hero_position + 'px'
//             if(this.hero_position <= 0) {
//                 this.hero_position = 0 
//     }
//     moving() {
//         if(this.event.keyCode === 37) {
//             this.left()
//         }
//     }
// }


// window.onload = function() {
//     hero_start.left()
//     hero_start.moving()
// }
    
         

// //left
// left() {
//     this.hero_pX = 70+'px'
//     this.hero_position -= 10
//     this.hero_left = this.hero_position + 'px'
//     if(this.hero_position <= 0) {
//         this.hero_position = 0
//     }
// }
// //right
// right() {
//     this.hero_pX = 35+'px'
//     this.hero_position += 10
//     this.hero_left = this.hero_position + 'px'
//     if(this.hero_position >= 762) {H
//         this.hero_position = 762
//     }
// }

// //key event
// moving(keyCode) {
//     if(this.keyCode === 37) {
//         this.left()
//     }
//     if(this.keyCode === 39) {
//         this.right()
//     }



// 캔버스를 이용해 히어로 부르기 나중에 꼭 다시 해보자!! 진짜로 꼭꼭꼭!!1
//히어로 생성
// let hero = new Image()
// hero.src = './images/hero.png';
// window.onload = function() {
//     front()
//     canvas.addEventListener('keydown',moving, true) //키보드 누를때마다 이벤트 발생하도록..
// }

// let canvas = document.getElementById('hero')
// let ctx = canvas.getContext('2d')

// function front() {
//     ctx.drawImage(hero,0,0,35,54,400,545,35,54) // 앞 모습
// }
 
// // function back(){ 뒷모습은 필요 없으니까 주석처리
// //     ctx.drawImage(hero,35,0,35,54,0,0,35,54) // 뒷 모습
// // }

// function left() {
//     ctx.drawImage(hero,70,0,35,54,0,0,35,54) // 왼쪽 모습
// }

// function right() {
//     ctx.drawImage(hero,105,0,35,54,0,0,35,54) // 오른쪽 모습

// }

// //키 이벤트 함수
// function moving(e) {
//     if (e.keyCode === 37) { // 좌키를 움직일 때
//         left() // 여기서 좌표의 값을 어떻게 반영을 하지.. ?!@ 인자를 다 넣고 좌표부분을 -- ++로 줘야하나?

//     }
// }
