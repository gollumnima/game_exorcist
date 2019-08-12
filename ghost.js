// 적이 맨 위에 나타나야 함. refresh 할때마다 랜덤한 위치에서 등장하도록!(적은 일단 1개만 한다!)
// set interval 두번째 인자에 초를 넣으면 초마다 반복되는 기능. top을 내려줘야 함.
// 적이 바닥에 도달하면 remove

class Ghost {
    constructor(parents) {
        this.parents = parents;
        this.ghost = this.create_ghost()
        this.ghost_top = 0;
        
        this.live();
        this.again();

        // window.onload = this.manymany.bind(this);
        // window.addEventListener('load',function() {
        //     this.live()
        //     this.raining()
        //     this.manymany()
        // })
    }
    //유령 화면에 띄우기
    create_ghost() {
        let elghost = document.createElement('div');
        elghost.className = 'ghost';
        this.parents.appendChild(elghost)
        return elghost;
    }           
    //랜덤 위치에서 유령 등장
    live() {
        this.ghost.style.left = Math.floor(Math.random()*762) + 'px';
    }

    //2초마다 랜덤위치에서 유령 생성
    // manymany() {
    //     setInterval(this.live(),200)
    // }

    //유령 비내리기
    raining() {
        this.ghost_top += 30;
        this.ghost.style.top = this.ghost_top + 'px';

        if(this.ghost_top >= 545) {
            this.ghost.style.top = 545+'px';
        }
    }
    again() {
        setInterval(this.raining,150)
    }

}
let parentsMainDiv2 = document.getElementById("bg");
let ghost = new Ghost(parentsMainDiv2);

/************************************************************
 함수로 만든 식 : 유령님 등장과 액션->죽이기는 실패
 ***********************************************************/
// var ghost = document.getElementById('ghost')
// var ghost_top = 0;

// function live() {
//     ghost.style.left = Math.floor(Math.random()*762) + 'px'
// }

// function raining() {
//     ghost_top += 30
//     ghost.style.top = ghost_top + 'px';
    
//     if (ghost_top >= 545) {
//         ghost.style.top = 545+'px'
        
//         //바닥에 도착하면 멈추지만, 콘솔 찍어보면 콘솔 숫자는 계속 증가함. 계속 내려가고 있음..ㅜㅜ
//     }
// }

// let ghost_rain = setInterval(raining, 150)

// function blood() {
//     // let hero_pos = {top: hero.style.top, left: hero.style.left}
//     // let ghost_pos = {top: ghost.style.top, left: ghost.style.left}
//     let hl = hero.style.left
//     let ht = hero.style.top
//     let hw = hero.style.width
//     let el = ghost.style.left
//     let et = ghost.style.top
//     let ew = ghost.style.width

//     if ((el < hl-ew) || (hl < el-hw) || (ht-ew > et)) {
//         ghost.style.backgroundPositionX = 45+'px'
//     }
// }

// //괄호 안에 event 넣었는데 뺐음. => 키 이벤트 없으니까 안 넣어도 됨
// window.addEventListener('load',function() {
//     live()
//     ghost_rain
//     blood() 
// })