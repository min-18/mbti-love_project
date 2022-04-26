document.querySelector('.question').style.display = 'none';
document.querySelector('.result').style.display = 'none';
document.querySelector('.quit').style.display = 'none';

// 랜덤으로 문제뽑기 위해 문제번호 담을 Array생성 ; 이렇게 하는 이유는 문제가 추가되거나 삭제되도 따로 변경해주 필요가 없기 때문.
var num = new Array();
console.log(num);

// 문제페이지에 대한 정보를 담는 객체 생성
// js에서 객체는 파이썬의 딕셔너리(key:value)랑 구조가 같다.
var q = {
    0 : {'문제':'외부의 자극을 받아 마음의 감동을 일으킬 때 흔히 "심금을 울리다"라는 표현을 씁니다. 여기서 심금은 마음속에 있는 이 악기를 뜻하는 말로 무언가 감동했을 때 울리는 마음을 이 악기에 비유한 것입니다.  여섯 줄의 우리나라 전통 현악기이자 고구려의 음악가 왕산악이 만든 이 악기는 무엇일까요?',"정답": "보기3", "해설":"고구려 음악가 왕산악이 만든 악기는 거문고입니다.", '보기1':'가야금', '보기2':'피리','보기3':'거문고','보기4':'대금'},
    1 : {'문제':'인류 역사상 가장 오래된 과일은 이것입니다. 성경에서는 아담과 이브가 수치심을 느끼자 이것의 잎을 이용해 벗은 몸을 가렸다고 기록되어 있는데요. "꽃이 없는 열매"라는 뜻에서 이름 붙여진 이것은 무엇일까요?',"정답": "보기3", "해설":"무화과는 인류가 재배한 최초의 과일 중 하나이다. 기독교 교인들에게는 성경에 자주 출연해 친숙하다. 구약에서는 선악과를 먹은 아담과 이브가 수치심을 느끼고 옷 대신 입은 것이 무화과의 잎이다. 이러한 이유로 선악과가 무화과라는 전승도 있다.", '보기1':'사과', '보기2':'바나나','보기3':'무화과','보기4':'두리안'},
    2 : {'문제':'목포를 대표하는 별미 중 하나인 이 생성은 옛 말에 "이 생선 껍질로 밥 싸 먹다가, 논밭 다 팔아먹는다."라고 했을 정도로 맛이 좋고 귀한 생선인데요. 이 생선은 무엇일까요?',"정답": "보기2", "해설":"민어과(Sciaenidae)의 바닷물고기(Miichthys miiuy). 몸길이는 60~ 90센티미터로 길고 납작하다. 등쪽은 회청색이고 배는 담색이다. 먹으며 부레는 부레풀을 만든다. 한국 서남 연해, 중국 동남해, 일본 등지에 분포한다.", '보기1':'대구', '보기2':'민어','보기3':'숭어','보기4':'낙지'},
    3 : {'문제':"생맥주를 파는 곳을 뜻하는 ‘호프 (Hof)'는 독일어로 옛 궁전이나 저택의 ’이곳‘을 뜻한다고 합니다. 무엇일까요?","정답": "보기2", "해설":"맥주를 파는 집을 호프(Hof)라는 단어를 사용하는데, 여기서 '호프(Hof)'라는 단어는 맥주 맛에 중요한 영향을 끼치는 식물성 첨가제인 '호프(Hop)'가 아니고, 마당 혹은 정원을 뜻하는 독일어로, 사람들이 모여서 맥주를 마시고 이야기 할 수 있는 장소라는 뜻이다.", '보기1':'지붕', '보기2':'마당','보기3':'대문','보기4':'주방'}
};
// q객체에 담긴 key들(0,1,2)이 num에 append.
for (i in Object.keys(q)) {
    num.push(i);
};
console.log(num);

// 0,1,2 (문제객체 키)중에 하나 랜덤 선택되어 담기는 변수. 
var random = Math.floor(Math.random() * num.length);
var qKey = num[random];
console.log(qKey);

// display와 visibility의 차이
// 전자는 영역이 자체가 사라졌다가 생겼다하는 것. 후자는 영역은 유지되지만 보였다가 안보였다가 하는 것.
function start() {
    document.querySelector('.start').style.display = 'none';    //시작페이지 사라짐
    document.querySelector('.question').style.display = '';     //문제 show
    next()
};
function quit() {
    document.querySelector('.start').style.display = 'none';    //시작페이지 사라짐
    document.querySelector('.quit').style.display = '';     //goodbye화면 show
};
function next() {
    // 문제 내용
    document.getElementById('q-content').innerHTML = q[qKey]['문제'];

    // 보기버튼
    buttonA.innerHTML = q[qKey]['보기1'];
    buttonB.innerHTML = q[qKey]['보기2'];
    buttonC.innerHTML = q[qKey]['보기3'];
    buttonD.innerHTML = q[qKey]['보기4'];
};

// 이 함수를 쓰는 과정에서 함수 내부의 변수를 함수바깥에서 쓸 수 없다는 문제가 발생했음.-> 지역변수와 전역변수에 대해 알게됨. 
// 함수 내부에서 선언한 변수를 바깥에서 사용하도록 할 순 없는지 질문. ; 근데 좀 찾아보니 그렇게 하는 건 좋은 코드가 아닌 것 같더라...
function reply_click(clicked_value) {
    var event = clicked_value;      
    // result페이지로
    document.querySelector('.question').style.display = 'none'; 
    document.querySelector('.result').style.display = '';
    if (event == answer) {
        document.getElementById(event).value = 1    //사용자가 누른 버튼의 value값 1로 바뀜.
        console.log('정답')

        document.getElementById('answer').innerHTML = "정답입니다.";
        document.getElementById('explain').innerHTML = q[qKey]["해설"];

    } else{
        console.log('오답')
        document.getElementById('answer').innerHTML = "오답입니다."
        document.getElementById('explain').innerHTML = q[qKey]["해설"];
    }
};

// 문제 type이 담긴 변수.; 이게 정답지를 얻는 key가 됨.
var answer = q[qKey]["정답"];     
console.log(answer)

document.querySelector('.btn-success').addEventListener('click', start)    //Yes버튼 누르면 문제 시작
document.querySelector('.btn-danger').addEventListener('click', quit)      //No버튼 누르면 끝나는 페이지

var buttonA = document.getElementById('A');     //보기1
var buttonB = document.getElementById('B');     //보기2
var buttonC = document.getElementById('C');     //보기3
var buttonD = document.getElementById('D');     //보기4


