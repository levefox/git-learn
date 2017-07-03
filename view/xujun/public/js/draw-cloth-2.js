var oC = document.getElementById('c1');
var fillDefault = '#221814';
var slpic = new Image(); slpic.src="public/images/c_class_shoulder_left.png";
var srpic = new Image(); srpic.src="public/images/c_class_shoulder_right.png";
var klpic = new Image(); klpic.src="public/images/c_class_knee_left.png";
var krpic = new Image(); krpic.src="public/images/c_class_knee_right.png";
//绘制方法
function drawShoulderFront(oGC,colorArr,x,y){  //肩
    oGC.beginPath();
    oGC.fillStyle = colorArr['p1'].colorcade||fillDefault;
    oGC.moveTo(247+x,58+y);
    oGC.lineTo(165+x,90+y);
    oGC.lineTo(184+x,162+y);
    oGC.lineTo(264+x,96+y);
    oGC.closePath();
    oGC.moveTo(366+x,58+y);
    oGC.lineTo(456+x,94+y);
    oGC.lineTo(434+x,161+y);
    oGC.lineTo(350+x,94+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawShoulderBack(oGC,colorArr,x,y){ //肩
    oGC.beginPath();
    oGC.fillStyle = colorArr['p1'].colorcade||fillDefault;
    oGC.moveTo(745+x,80+y);
    oGC.lineTo(710+x,93+y);
    oGC.lineTo(728+x,164+y);
    oGC.lineTo(980+x,164+y);
    oGC.lineTo(1002+x,93+y);
    oGC.lineTo(968+x,80+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawUpperBodyFront_c_class(oGC,colorArr,x,y){ //前中
    oGC.beginPath();
    oGC.fillStyle = colorArr['p0'].colorcade||fillDefault;
    oGC.moveTo(264+x,96+y);
    oGC.lineTo(184+x,162+y);
    oGC.lineTo(265+x,533+y);
    oGC.lineTo(305+x,547+y);
    oGC.lineTo(343+x,533+y);
    oGC.lineTo(434+x,161+y);
    oGC.lineTo(350+x,94+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawUpperBodyFront(oGC,colorArr,x,y){ //前侧
    oGC.beginPath();
    oGC.fillStyle = colorArr['p2'].colorcade||fillDefault;
    oGC.moveTo(188+x,180+y);
    oGC.lineTo(176+x,218+y);
    oGC.lineTo(186+x,407+y);
    oGC.lineTo(164+x,494+y);
    oGC.lineTo(305+x,547+y);
    oGC.lineTo(442+x,494+y);
    oGC.lineTo(426+x,407+y);
    oGC.lineTo(438+x,218+y);
    oGC.lineTo(428+x,180+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawArm(oGC,colorArr,x,y){    //上臂
    oGC.beginPath();
    oGC.fillStyle = colorArr['p3'].colorcade||fillDefault;
    oGC.moveTo(165+x,90+y);
    oGC.quadraticCurveTo(138+x,95+y,133+x,119+y);
    oGC.quadraticCurveTo(94+x,220+y,67+x,310+y);
    oGC.quadraticCurveTo(76+x,390+y,95+x,472+y);
    oGC.quadraticCurveTo(125+x,480+y,148+x,464+y);
    oGC.quadraticCurveTo(143+x,375+y,136+x,320+y);
    oGC.quadraticCurveTo(147+x,301+y,188+x,180+y);
    oGC.closePath();
    oGC.moveTo(456+x,94+y);
    oGC.quadraticCurveTo(480+x,100+y,485+x,124+y);
    oGC.quadraticCurveTo(521+x,218+y,547+x,310+y);
    oGC.quadraticCurveTo(546+x,354+y,513+x,476+y);
    oGC.quadraticCurveTo(492+x,484+y,460+x,464+y);
    oGC.quadraticCurveTo(468+x,370+y,478+x,322+y);
    oGC.quadraticCurveTo(462+x,289+y,428+x,180+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawLowerArmFront_c_class(oGC,colorArr,x,y){    //手臂
    oGC.beginPath();
    oGC.fillStyle = colorArr['p4'].colorcade||fillDefault;
    oGC.moveTo(105+x,195+y);
    oGC.quadraticCurveTo(81+x,252+y,67+x,310+y);
    oGC.quadraticCurveTo(76+x,390+y,93+x,464+y);
    oGC.quadraticCurveTo(110+x,440+y,134+x,448+y);
    oGC.quadraticCurveTo(105+x,330+y,110+x,310+y);
    oGC.lineTo(137+x,239+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
    oGC.moveTo(512+x,196+y);
    oGC.quadraticCurveTo(534+x,252+y,547+x,310+y);
    oGC.quadraticCurveTo(546+x,354+y,514.5+x,468+y);
    oGC.quadraticCurveTo(497+x,445+y,477+x,451+y);
    oGC.quadraticCurveTo(510+x,326+y,500+x,310+y);
    oGC.lineTo(474+x,238+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawLegFront1(oGC,colorArr,x,y){   //腿1
    oGC.beginPath();
    oGC.fillStyle = colorArr['p5'].colorcade||fillDefault;
    oGC.moveTo(165+x,496+y);
    oGC.quadraticCurveTo(160+x,520+y,160+x,550+y);
    oGC.lineTo(231+x,700+y);
    oGC.lineTo(240+x,702+y);
    oGC.quadraticCurveTo(252+x,650+y,305+x,563+y);
    oGC.quadraticCurveTo(353+x,650+y,366+x,702+y);
    oGC.lineTo(374+x,700+y);
    oGC.lineTo(447+x,546+y);
    oGC.quadraticCurveTo(447+x,516+y,442+x,494+y);
    oGC.lineTo(305+x,547+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawLegFront2(oGC,colorArr,x,y){  //腿2
    oGC.beginPath();
    oGC.fillStyle = colorArr['p6'].colorcade||fillDefault;
    oGC.moveTo(160+x,550+y);
    oGC.quadraticCurveTo(140+x,650+y,140+x,725+y);
    oGC.quadraticCurveTo(185+x,701+y,231+x,700+y);
    oGC.closePath();
    oGC.moveTo(447+x,546+y);
    oGC.quadraticCurveTo(465+x,650+y,465+x,723+y);
    oGC.quadraticCurveTo(424+x,700+y,374+x,700+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawKnees(oGC,colorArr,x,y){  //膝
    oGC.beginPath();
    oGC.fillStyle = colorArr['p7'].colorcade||fillDefault;
    oGC.moveTo(133+x,756+y);
    oGC.lineTo(128+x,784+y);
    oGC.lineTo(170+x,814+y);
    oGC.lineTo(179+x,814+y);
    oGC.lineTo(222+x,800+y);
    oGC.quadraticCurveTo(230+x,781+y,232+x,762+y);
    oGC.quadraticCurveTo(183+x,740+y,133+x,756+y);
    oGC.moveTo(469+x,754+y);
    oGC.lineTo(473+x,784+y);
    oGC.lineTo(435+x,813+y);
    oGC.lineTo(425+x,813+y);
    oGC.lineTo(380+x,802+y);
    oGC.quadraticCurveTo(372+x,782+y,373+x,756+y);
    oGC.quadraticCurveTo(419+x,744+y,469+x,754+y);
    oGC.fill();
    oGC.stroke();
}

function drawCrus(oGC,colorArr,x,y){   //小腿
    oGC.beginPath();
    oGC.fillStyle = colorArr['p8'].colorcade||fillDefault;
    oGC.moveTo(128+x,784+y);
    oGC.quadraticCurveTo(109+x,870+y,127+x,982+y);
    oGC.quadraticCurveTo(157+x,1000+y,189+x,979+y);
    oGC.quadraticCurveTo(230+x,850+y,222+x,800+y);
    oGC.closePath();
    oGC.moveTo(473+x,784+y);
    oGC.quadraticCurveTo(491+x,875+y,471+x,986+y);
    oGC.quadraticCurveTo(442+x,1000+y,411+x,981+y);
    oGC.quadraticCurveTo(374+x,860+y,380+x,802+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBodyBack(oGC,colorArr,x,y){   //后侧1
    oGC.beginPath();
    oGC.fillStyle = colorArr['p9'].colorcade||fillDefault;
    oGC.moveTo(799+x,60+y);
    oGC.lineTo(710+x,93+y);
    oGC.quadraticCurveTo(736+x,318+y,733+x,398+y);
    oGC.quadraticCurveTo(712+x,494+y,710+x,553+y);
    oGC.quadraticCurveTo(690+x,654+y,687+x,729+y);
    oGC.lineTo(673+x,803+y);
    oGC.quadraticCurveTo(656+x,880+y,673+x,984+y);
    oGC.quadraticCurveTo(705+x,1006+y,735+x,982+y);
    oGC.quadraticCurveTo(765+x,880+y,770+x,803+y);
    oGC.quadraticCurveTo(784+x,680+y,851+x,564+y);
    oGC.quadraticCurveTo(914+x,680+y,927+x,803+y);
    oGC.quadraticCurveTo(922+x,880+y,957+x,982+y);
    oGC.quadraticCurveTo(988+x,1006+y,1018+x,984+y);
    oGC.quadraticCurveTo(1035+x,880+y,1023+x,803+y);
    oGC.lineTo(1012+x,729+y);
    oGC.quadraticCurveTo(1010+x,654+y,991+x,553+y);
    oGC.quadraticCurveTo(990+x,494+y,975+x,398+y);
    oGC.lineTo(1000+x,93+y);
    oGC.lineTo(913+x,60+y);
    oGC.quadraticCurveTo(857+x,45+y,799+x,60+y);
    oGC.fill();
    oGC.stroke();
}

function drawBackH_c_class(oGC,colorArr,x,y){    //风包
    oGC.beginPath();
    oGC.fillStyle = colorArr['p10'].colorcade||fillDefault;
    oGC.moveTo(796+x,74+y);
    oGC.quadraticCurveTo(756+x,71+y,762+x,94+y);
    oGC.lineTo(802+x,234+y);
    oGC.quadraticCurveTo(855+x,344+y,905+x,234+y);
    oGC.lineTo(950+x,94+y);
    oGC.quadraticCurveTo(960+x,71+y,919+x,74+y);
    oGC.quadraticCurveTo(855+x,88+y,796+x,74+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBackX_c_class(oGC,colorArr,x,y){    //后中1
    oGC.beginPath();
    oGC.fillStyle = colorArr['p11'].colorcade||fillDefault;
    oGC.moveTo(800+x,60+y);
    oGC.lineTo(745+x,80+y);
    oGC.lineTo(801+x,282+y);
    oGC.lineTo(762+x,410+y);
    oGC.quadraticCurveTo(855+x,440+y,942+x,412+y);
    oGC.lineTo(901+x,282+y);
    oGC.lineTo(968+x,80+y);
    oGC.lineTo(912+x,60+y);
    oGC.quadraticCurveTo(855+x,48+y,800+x,60+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawWaistBack(oGC,colorArr,x,y){   //拉架
    oGC.beginPath();
    oGC.fillStyle = colorArr['p12'].colorcade||fillDefault;
    oGC.moveTo(733+x,398+y);
    oGC.lineTo(724+x,443+y);
    oGC.quadraticCurveTo(853+x,500+y,982+x,443+y);
    oGC.lineTo(975+x,398+y);
    oGC.quadraticCurveTo(853+x,450+y,733+x,398+y);
    oGC.fill();
    oGC.stroke();
}

function drawBackLegP1_c_class(oGC,colorArr,x,y){    //后侧2
    oGC.beginPath();
    oGC.fillStyle = colorArr['p13'].colorcade||fillDefault;
    oGC.moveTo(724+x,443+y);
    oGC.quadraticCurveTo(711+x,508+y,710+x,552+y);
    oGC.lineTo(745+x,450+y);
    oGC.closePath();
    oGC.moveTo(981+x,443+y);
    oGC.quadraticCurveTo(991+x,508+y,991+x,552+y);
    oGC.lineTo(957+x,450+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBackLegP2_c_class(oGC,colorArr,x,y){    //后中2
    oGC.beginPath();
    oGC.fillStyle = colorArr['p14'].colorcade||fillDefault;
    oGC.moveTo(745+x,450+y);
    oGC.lineTo(710+x,552+y);
    oGC.quadraticCurveTo(690+x,654+y,687+x,728+y);
    oGC.lineTo(806+x,450+y);
    oGC.closePath();
    oGC.moveTo(957+x,450+y);
    oGC.lineTo(991+x,552+y);
    oGC.quadraticCurveTo(1014+x,654+y,1012+x,728+y);
    oGC.lineTo(896+x,450+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBackLeg3_c_class(oGC,colorArr,x,y){ //臀部
    oGC.beginPath();
    oGC.fillStyle = colorArr['p15'].colorcade||fillDefault;
    oGC.moveTo(806+x,450+y);
    oGC.lineTo(684+x,736+y);
    oGC.lineTo(755+x,741+y);
    oGC.lineTo(851+x,564+y);
    oGC.lineTo(943+x,741+y);
    oGC.lineTo(1015+x,736+y);
    oGC.lineTo(896+x,450+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawNeckBack(oGC,colorArr,x,y){    //衣领
    oGC.beginPath();
    oGC.fillStyle = colorArr['p16'].colorcade||fillDefault;
    oGC.moveTo(802+x,44+y);
    oGC.lineTo(799+x,60+y);
    oGC.quadraticCurveTo(857+x,48+y,913+x,60+y);
    oGC.lineTo(909+x,44+y);
    oGC.quadraticCurveTo(857+x,29+y,802+x,44+y);
    oGC.fill();
    oGC.stroke();
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(822+x,39+y);
    oGC.lineTo(820+x,57+y);
    oGC.quadraticCurveTo(857+x,52+y,893+x,57+y);
    oGC.lineTo(890+x,39+y);
    oGC.quadraticCurveTo(857+x,29+y,822+x,39+y);
    oGC.fill();
    oGC.stroke();
}

function drawNeckFront(oGC,colorArr,x,y){  //衣领
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(247+x,58+y);
    oGC.quadraticCurveTo(250+x,100+y,307+x,122+y);
    oGC.quadraticCurveTo(365+x,100+y,366+x,58+y);
    oGC.quadraticCurveTo(307+x,10+y,247+x,58+y);
    oGC.fill();
    oGC.stroke();
    oGC.beginPath();
    oGC.fillStyle = colorArr['p16'].colorcade||fillDefault;
    oGC.moveTo(262+x,46+y);
    oGC.lineTo(247+x,58+y);
    oGC.quadraticCurveTo(250+x,100+y,305+x,121+y);
    oGC.lineTo(305+x,106+y);
    oGC.bezierCurveTo(305+x,96+y,270+x,90+y,262+x,46+y);
    oGC.moveTo(353+x,47+y);
    oGC.lineTo(366+x,58+y);
    oGC.quadraticCurveTo(365+x,100+y,309+x,121+y);
    oGC.lineTo(309+x,106+y);
    oGC.bezierCurveTo(309+x,96+y,350+x,90+y,353+x,47+y);
    oGC.fill();
    oGC.stroke();
}

function drawBackHXPic_c_class(oGC,colorArr,x,y,lineWidth,lineColor){    //风包图案
    oGC.beginPath();
    oGC.save();
    oGC.lineWidth = lineWidth||2;
    oGC.strokeStyle = lineColor||'#999';
    oGC.fillStyle = colorArr['p17'].colorcade||fillDefault;
    oGC.moveTo(16+x,0+y);
    oGC.bezierCurveTo(-20+x,28+y,25+x,78+y,38+x,122+y);
    oGC.bezierCurveTo(51+x,78+y,96+x,28+y,60+x,0+y);
    oGC.bezierCurveTo(69+x,33+y,41+x,51+y,43+x,53+y);
    oGC.quadraticCurveTo(42+x,58+y,52+x,55+y);
    oGC.lineTo(38+x,70+y);
    oGC.lineTo(24+x,55+y);
    oGC.quadraticCurveTo(36+x,58+y,33+x,53+y);
    oGC.bezierCurveTo(35+x,55+y,7+x,33+y,16+x,0+y);
    oGC.fill();
    oGC.stroke();
    oGC.restore();
}

function drawFrontSticker1_c_class(oGC,colorArr,x,y){  //c-class前片贴条1
    oGC.beginPath();
    oGC.fillStyle = colorArr['p18'].colorcade||'#796035';
    oGC.moveTo(182+x,155+y);
    oGC.lineTo(184+x,167+y);
    oGC.quadraticCurveTo(228+x,119+y,274+x,97+y);
    oGC.lineTo(268+x,90+y);
    oGC.quadraticCurveTo(220+x,112+y,182+x,155+y);
    oGC.moveTo(438+x,161+y);
    oGC.lineTo(432+x,168+y);
    oGC.quadraticCurveTo(396+x,124+y,343+x,96+y);
    oGC.lineTo(347+x,90+y);
    oGC.quadraticCurveTo(396+x,114+y,438+x,161+y);
    oGC.fill();
    oGC.stroke();
}

function drawFrontSticker2_c_class(oGC,colorArr,x,y){  //c-class前片贴条2
    oGC.beginPath();
    oGC.fillStyle = colorArr['p18'].colorcade||'#796035';
    oGC.moveTo(190+x,239+y);
    oGC.lineTo(184+x,248+y);
    oGC.lineTo(249+x,527+y);
    oGC.lineTo(259+x,530+y);
    oGC.closePath();
    oGC.moveTo(426+x,239+y);
    oGC.lineTo(430+x,248+y);
    oGC.lineTo(362+x,527+y);
    oGC.lineTo(354+x,530+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawUpperArmStickFront_c_class(oGC,colorArr,x,y){  //上臂贴条正面
    oGC.beginPath();
    oGC.fillStyle = colorArr['p19'].colorcade||'#796035';
    oGC.moveTo(111+x,172+y);
    oGC.lineTo(107+x,182+y);
    oGC.lineTo(141+x,226+y);
    oGC.lineTo(144+x,217+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
    oGC.moveTo(503+x,172+y);
    oGC.lineTo(507+x,181+y);
    oGC.lineTo(470+x,224+y);
    oGC.lineTo(465+x,216+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawLegStickFront(oGC,colorArr,x,y){  //腿部贴条正面
    oGC.beginPath();
    oGC.fillStyle = colorArr['p20'].colorcade||'#796035';
    oGC.moveTo(162+x,513+y);
    oGC.lineTo(161+x,523+y);
    oGC.lineTo(241+x,692+y);
    oGC.lineTo(244+x,684+y);
    oGC.closePath();
    oGC.moveTo(445+x,511+y);
    oGC.lineTo(446+x,521+y);
    oGC.lineTo(364+x,694+y);
    oGC.lineTo(361+x,686+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBackHXStick_c_class(oGC,colorArr,x,y){     //风包贴条
    oGC.beginPath();
    oGC.fillStyle = colorArr['p21'].colorcade||'#796035';
    oGC.moveTo(782+x,113+y);
    oGC.lineTo(830+x,280+y);
    oGC.lineTo(843+x,287+y);
    oGC.closePath();
    oGC.moveTo(924+x,113+y);
    oGC.lineTo(876+x,280+y);
    oGC.lineTo(863+x,287+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBackXStick_c_class(oGC,colorArr,x,y){  //后片贴条
    oGC.beginPath();
    oGC.fillStyle = colorArr['p22'].colorcade||'#796035';
    oGC.moveTo(768+x,189+y);
    oGC.lineTo(788+x,280+y);
    oGC.lineTo(714+x,500+y);
    oGC.lineTo(713+x,520+y);
    oGC.lineTo(795+x,280+y);
    oGC.closePath();
    oGC.moveTo(936+x,189+y);
    oGC.lineTo(916+x,280+y);
    oGC.lineTo(988+x,500+y);
    oGC.lineTo(990+x,520+y);
    oGC.lineTo(908+x,280+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawLogo(oGC,options){     //logo
    var x = options.x,
        y = options.y,
        fillColor = options.fillColor||'#fff',
        lineWidth = options.lineWidth||1,
        lineColor = options.lineColor||'#999',
        l = options.l||0,
        scale = options.scale||1;
    oGC.beginPath();
    oGC.save();
    oGC.scale(scale,scale);
    oGC.rotate(l*Math.PI/180);
    oGC.fillStyle = fillColor;
    oGC.lineWidth = lineWidth;
    oGC.strokeStyle = lineColor;
    oGC.moveTo(0+x,33+y);
    oGC.lineTo(17+x,31+y);
    oGC.quadraticCurveTo(26+x,33+y,35+x,33+y);
    oGC.lineTo(110+x,33+y);
    oGC.bezierCurveTo(130+x,33+y,130+x,20+y,118+x,18+y);
    oGC.quadraticCurveTo(144+x,24+y,144+x,33+y);
    oGC.lineTo(174+x,33+y);
    oGC.quadraticCurveTo(170+x,22+y,146+x,15+y);
    oGC.quadraticCurveTo(170+x,12+y,174+x,0+y);
    oGC.lineTo(150+x,0+y);
    oGC.quadraticCurveTo(143+x,10+y,118+x,12+y);
    oGC.bezierCurveTo(127+x,10+y,127+x,0+y,115+x,0+y);
    oGC.lineTo(67+x,0+y);
    oGC.lineTo(67+x,6+y);
    oGC.lineTo(77+x,6+y);
    oGC.lineTo(77+x,26+y);
    oGC.lineTo(63+x,26+y);
    oGC.bezierCurveTo(70+x,16+y,35+x,15+y,35+x,10+y);
    oGC.quadraticCurveTo(51+x,5+y,54+x,14+y);
    oGC.lineTo(66+x,3+y);
    oGC.quadraticCurveTo(64+x,0+y,42+x,0+y);
    oGC.bezierCurveTo(8+x,2+y,8+x,16+y,46+x,24+y);
    oGC.quadraticCurveTo(25+x,26+y,16+x,19+y);
    oGC.closePath();
    oGC.moveTo(95+x,5+y);
    oGC.lineTo(102+x,5+y);
    oGC.quadraticCurveTo(111+x,9+y,102+x,14+y);
    oGC.lineTo(95+x,14+y);
    oGC.closePath();
    oGC.moveTo(95+x,18+y);
    oGC.lineTo(104+x,18+y);
    oGC.quadraticCurveTo(113+x,22+y,102+x,27+y);
    oGC.lineTo(95+x,27+y);
    oGC.closePath();
    oGC.fill();
    oGC.moveTo(160+x,33+y);
    oGC.quadraticCurveTo(156+x,22+y,132+x,15+y);
    oGC.quadraticCurveTo(156+x,12+y,160+x,0+y);
    oGC.stroke();
    oGC.restore();
}

//不可修改部分
function drawArmInsideFront(oGC,colorArr,x,y){  //手臂内衬正面
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(169+x,160+y);
    oGC.lineTo(110+x,311+y);
    oGC.quadraticCurveTo(105+x,330+y,134+x,448+y);
    oGC.lineTo(148+x,454+y);
    oGC.lineTo(137+x,318+y);
    oGC.quadraticCurveTo(146+x,301+y,189+x,181+y);
    oGC.quadraticCurveTo(195+x,150+y,169+x,160+y);
    oGC.fill();
    oGC.stroke();
    oGC.moveTo(445+x,165+y);
    oGC.lineTo(502+x,317+y);
    oGC.quadraticCurveTo(508+x,326+y,477+x,451+y);
    oGC.lineTo(460+x,458+y);
    oGC.lineTo(477+x,320+y);
    oGC.quadraticCurveTo(459+x,278+y,425+x,179+y);
    oGC.quadraticCurveTo(422+x,150+y,445+x,165+y);
    oGC.fill();
    oGC.stroke();
}

function drawKneesUnchange(oGC,colorArr,x,y){   //膝盖弯曲
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(140+x,724+y);
    oGC.lineTo(135+x,754+y);
    oGC.quadraticCurveTo(180+x,740+y,230+x,761+y);
    oGC.quadraticCurveTo(228+x,745+y,240+x,702+y);
    oGC.quadraticCurveTo(186+x,699+y,140+x,724+y);
    oGC.closePath();
    oGC.moveTo(465+x,723+y);
    oGC.lineTo(469+x,754+y);
    oGC.quadraticCurveTo(421+x,742+y,373+x,756+y);
    oGC.quadraticCurveTo(377+x,747+y,366+x,702+y);
    oGC.quadraticCurveTo(415+x,698+y,465+x,723+y);
    oGC.fill();
    oGC.stroke();
}

function drawCrotchFront(oGC,colorArr,x,y){    //裆部
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(214+x,514+y);
    oGC.bezierCurveTo(214+x,563+y,290+x,563+y,272+x,600+y);
    oGC.quadraticCurveTo(246+x,650+y,254+x,660+y);
    oGC.quadraticCurveTo(271+x,615+y,305+x,563+y);
    oGC.quadraticCurveTo(335+x,616+y,352+x,660+y);
    oGC.quadraticCurveTo(359+x,646+y,337+x,600+y);
    oGC.bezierCurveTo(322+x,563+y,385+x,563+y,396+x,512+y);
    oGC.lineTo(305+x,547+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawCrotchFrontRect(oGC,colorArr,x,y){    //裆部方块贴片
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(297+x,528+y);
    oGC.roundRect(297+x,528+y,18,25,3);
    oGC.fill();
    oGC.stroke();
}

function drawZipper(oGC,colorArr,x,y){     //拉链
    oGC.beginPath();
    oGC.fillStyle = '#fff';
    oGC.moveTo(302+x,121+y);
    oGC.lineTo(302+x,546+y);
    oGC.lineTo(310+x,546+y);
    oGC.lineTo(310+x,121+y);
    oGC.stroke();
    oGC.beginPath();
    oGC.fillStyle = '#666';
    oGC.moveTo(304+x,121+y);
    oGC.lineTo(304+x,546+y);
    oGC.lineTo(308+x,546+y);
    oGC.lineTo(308+x,121+y);
    oGC.fill();
}

function drawOxterFront(oGC,colorArr,x,y){  //腋下贴布正面
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(188+x,180+y);
    oGC.lineTo(176+x,218+y);
    oGC.lineTo(179+x,270+y);
    oGC.lineTo(195+x,225+y);
    oGC.quadraticCurveTo(201+x,213+y,188+x,180+y);
    oGC.moveTo(428+x,180+y);
    oGC.lineTo(438+x,214+y);
    oGC.lineTo(434+x,270+y);
    oGC.lineTo(419+x,225+y);
    oGC.quadraticCurveTo(412+x,213+y,428+x,180+y);
    oGC.fill();
    oGC.stroke();
}

function drawBackOxter_c_class(oGC,colorArr,x,y){   //背面腋下
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(760+x,132+y);
    oGC.lineTo(710+x,186+y);
    oGC.lineTo(725+x,227+y);
    oGC.lineTo(771+x,174+y);
    oGC.closePath();
    oGC.moveTo(952+x,132+y);
    oGC.lineTo(995+x,186+y);
    oGC.lineTo(985+x,227+y);
    oGC.lineTo(939+x,174+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawBackLegStick_c_class(oGC,colorArr,x,y){
    oGC.beginPath();
    oGC.fillStyle = '#000';
    oGC.moveTo(851+x,564+y);
    oGC.bezierCurveTo(787+x,640+y,767+x,738+y,745+x,738+y);
    oGC.quadraticCurveTo(685+x,728+y,685+x,738+y);
    oGC.lineTo(674+x,803+y);
    oGC.lineTo(695+x,809+y);
    oGC.quadraticCurveTo(701+x,806+y,675+x,984+y);
    oGC.quadraticCurveTo(705+x,1008+y,730+x,987+y);
    oGC.bezierCurveTo(754+x,815+y,790+x,786+y,780+x,747+y);
    oGC.quadraticCurveTo(794+x,658+y,851+x,564+y);
    oGC.moveTo(851+x,564+y);
    oGC.bezierCurveTo(920+x,640+y,931+x,738+y,953+x,738+y);
    oGC.quadraticCurveTo(1013+x,728+y,1013+x,738+y);
    oGC.lineTo(1023+x,803+y);
    oGC.lineTo(1001+x,809+y);
    oGC.quadraticCurveTo(996+x,806+y,1018+x,984+y);
    oGC.quadraticCurveTo(988+x,1008+y,962+x,987+y);
    oGC.bezierCurveTo(938+x,815+y,910+x,786+y,918+x,747+y);
    oGC.quadraticCurveTo(903+x,658+y,851+x,564+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
}

function drawP9Left_c_class(oGC,colorArr,x,y,scalex){
    var scalex = scalex||1;
    oGC.beginPath();
    oGC.save();
    if(scalex==-1){
        oGC.translate(oC.width, 0);
    }
    oGC.scale(scalex,1);
    oGC.fillStyle = '#000';
    oGC.moveTo(15+x,0+y);
    oGC.quadraticCurveTo(64+x,36+y,64+x,40+y);
    oGC.bezierCurveTo(74+x,85+y,41+x,135+y,6+x,140+y);
    oGC.quadraticCurveTo(-5+x,79+y,15+x,0+y);
    oGC.closePath();
    oGC.fill();
    oGC.stroke();
    oGC.restore();
}

function fillCloth(oGC,color,lineColor,logos){
    oGC.strokeStyle = lineColor||'#999';

    //正面
    drawShoulderFront(oGC,color,0,0);
    drawUpperBodyFront(oGC,color,0,0);
    drawUpperBodyFront_c_class(oGC,color,0,0);
    drawFrontSticker1_c_class(oGC,color,0,0);
    drawFrontSticker2_c_class(oGC,color,0,0);
    drawOxterFront(oGC,color,0,0);
    drawZipper(oGC,color,0,0);
    drawArm(oGC,color,0,0);
    drawLowerArmFront_c_class(oGC,color,0,0);
    drawUpperArmStickFront_c_class(oGC,color,0,0);
    drawArmInsideFront(oGC,color,0,0);
    drawLegFront1(oGC,color,0,0);
    drawLegFront2(oGC,color,0,0);
    drawLegStickFront(oGC,color,0,0);
    drawCrotchFront(oGC,color,0,0);
    drawCrotchFrontRect(oGC,color,0,0);
    drawCrus(oGC,color,0,0);
    drawKnees(oGC,color,0,0);
    drawKneesUnchange(oGC,color,0,0);
    drawNeckFront(oGC,color,0,0);
    drawP9Left_c_class(oGC,color,114,784);
    drawP9Left_c_class(oGC,color,713,784,-1);
    drawLogo(oGC,{x:218,y:174,lineWidth:logos[0].lineWidth,lineColor:logos[0].lineColor,fillColor:logos[0].logocolor});
    drawLogo(oGC,{x:380,y:52,lineWidth:logos[1].lineWidth,lineColor:logos[1].lineColor,scale:0.8,l:70,fillColor:logos[1].logocolor});
    drawLogo(oGC,{x:-300,y:770,lineWidth:logos[2].lineWidth,lineColor:logos[2].lineColor,scale:0.8,l:-70,fillColor:logos[2].logocolor});
    drawLogo(oGC,{x:700,y:120,lineWidth:logos[3].lineWidth,lineColor:logos[3].lineColor,scale:0.8,l:65,fillColor:logos[3].logocolor});
    drawLogo(oGC,{x:-550,y:805,lineWidth:logos[4].lineWidth,lineColor:logos[4].lineColor,scale:0.8,l:-65,fillColor:logos[4].logocolor});
    drawLogo(oGC,{x:690,y:1820,lineWidth:logos[5].lineWidth,lineColor:logos[5].lineColor,scale:0.4,l:10,fillColor:logos[5].logocolor});
    drawLogo(oGC,{x:620,y:2080,lineWidth:logos[6].lineWidth,lineColor:logos[6].lineColor,scale:0.4,l:-10,fillColor:logos[6].logocolor});

    //背面
    drawBodyBack(oGC,color,0,0);
    drawShoulderBack(oGC,color,0,0);
    drawCrus(oGC,color,547,6);
    drawBackLeg3_c_class(oGC,color,0,0);
    drawBackLegStick_c_class(oGC,color,0,0);
    drawBackX_c_class(oGC,color,0,0);
    drawBackOxter_c_class(oGC,color,0,0);
    drawBackH_c_class(oGC,color,0,0);
    drawBackHXPic_c_class(oGC,color,816,106);
    drawBackLegP1_c_class(oGC,color,0,0);
    drawBackLegP2_c_class(oGC,color,0,0);
    drawBackHXStick_c_class(oGC,color,0,0);
    drawBackXStick_c_class(oGC,color,0,0);
    drawNeckBack(oGC,color,0,0);
    drawWaistBack(oGC,color,0,0);
    drawArm(oGC,color,545,0);
    drawUpperArmStickFront_c_class(oGC,color,0,0);
    drawLowerArmFront_c_class(oGC,color,545,0);
    drawArmInsideFront(oGC,color,545,0);
    drawLogo(oGC,{x:975,y:538,scale:.8,lineWidth:logos[7].lineWidth,lineColor:logos[7].lineColor,fillColor:logos[7].logocolor});

    //绘制图案
    slpic.onload = function(){
        oGC.drawImage(slpic,133,75,50,58);
    };
    srpic.onload = function(){
        oGC.drawImage(srpic,433,75,50,58);
    };
    klpic.onload = function(){
        oGC.drawImage(klpic,90,810,87,98);
    };
    krpic.onload = function(){
        oGC.drawImage(krpic,430,810,87,98);
    };
    oGC.drawImage(slpic,133,75,50,58);
    oGC.drawImage(srpic,433,75,50,58);
    oGC.drawImage(klpic,90,810,87,98);
    oGC.drawImage(krpic,430,810,87,98);
}
