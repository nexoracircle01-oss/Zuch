(function(){
const B=n=>n.toString(2);
const C=a=>[1,0,-1,0][(a/90)%4],Sn=a=>[0,1,0,-1][(a/90)%4];
const GT={AND:(a,b)=>a&b,OR:(a,b)=>a|b,XOR:(a,b)=>a^b,NAND:(a,b)=>1-(a&b),NOR:(a,b)=>1-(a|b)};
const PQ=[
["Which PID term reacts to the present error?","P (proportional)",["I (integral)","D (derivative)","None of these"],"P output = Kp × current error."],
["Which term removes steady-state error?","I (integral)",["P (proportional)","D (derivative)","None of these"],"The integral term accumulates past error until it becomes zero."],
["Which term predicts future error and reduces overshoot?","D (derivative)",["P (proportional)","I (integral)","None of these"],"D reacts to the rate of change of error."],
["A very large Kp usually causes?","Oscillation and overshoot",["Slower response","No effect","Zero error always"],"High gain makes the system overreact and can become unstable."]];
window.EXTRA={
ki:{n:"Physics: Kinematics",
en:"Kinematics studies motion without asking what causes it. u = starting speed, v = final speed, a = acceleration, t = time, s = distance.",
sd:"Kinematics ۾ حرڪت جو مطالعو ٿئي ٿو (سبب کان سواءِ). u شروعاتي رفتار، v آخري رفتار، a تيزي (acceleration)، t وقت ۽ s فاصلو آهي.",
f:"v = u + at;  s = ut + ½at²;  v² = u² + 2as",
g:[
()=>{const u=R(0,10),a=R(1,5),t=R(2,8),v=u+a*t;return mc(`A car starts at u = ${u} m/s and accelerates at a = ${a} m/s² for t = ${t} s. Find v (m/s).`,v,[u+a,a*t,v+a,v-u+1],`v = u + at = ${u} + ${a}×${t} = ${v}.`)},
()=>{const u=R(0,10),a=2*R(1,4),t=R(2,6),s=u*t+a*t*t/2;return mc(`u = ${u} m/s, a = ${a} m/s², t = ${t} s. Find distance s (m).`,s,[u*t+a*t*t,u*t+a*t,(u+a*t)*t],`s = ut + ½at² = ${u*t} + ½×${a}×${t*t} = ${s}.`)},
()=>{const u=R(0,6),a=R(1,4),s=R(5,30),v2=u*u+2*a*s;return mc(`u = ${u} m/s, a = ${a} m/s², s = ${s} m. Find v² (m²/s²).`,v2,[u*u+a*s,2*a*s,v2+u,(u+a*s)**2],`v² = u² + 2as = ${u*u} + 2×${a}×${s} = ${v2}.`)}]},
nl:{n:"Physics: Newton's Laws",
en:"Newton's second law: F = ma. Force is measured in Newtons (N). Here g = 10 m/s².",
sd:"Newton جو ٻيو قانون: F = ma. قوت (force) جو يونٽ Newton (N) آهي. هتي g = 10 m/s² ورتو ويو آهي.",
f:"F = ma;  W = mg;  a = (F − friction) / m",
g:[
()=>{const m=R(2,20),a=R(2,10);return mc(`A ${m} kg object accelerates at ${a} m/s². Net force (N)?`,m*a,[m+a,m*a+m,m*a-a],`F = ma = ${m} × ${a} = ${m*a} N.`)},
()=>{const m=R(2,50);return mc(`Weight of a ${m} kg mass (g = 10 m/s²)?`,m*10+" N",[m+" N",m*100+" N",m*11+" N"],`W = mg = ${m} × 10 = ${m*10} N.`)},
()=>{const m=R(2,8),a=R(1,6),f=R(2,15),F=m*a+f;return mc(`A ${m} kg box is pushed with ${F} N. Friction is ${f} N. Find acceleration (m/s²).`,a,[a+1,a+2,Math.round(F/m)],`Net force = ${F} − ${f} = ${m*a} N. a = F/m = ${a}.`)}]},
we:{n:"Physics: Work, Energy, Power",
en:"Work = force × distance (in the direction of force). Energy is measured in Joules (J). Power = work ÷ time, measured in Watts (W).",
sd:"ڪم (work) = قوت × فاصلو. Energy جو يونٽ Joule (J) ۽ Power = ڪم ÷ وقت، جنهن جو يونٽ Watt (W) آهي.",
f:"W = F·d;  KE = ½mv²;  P = W / t",
g:[
()=>{const F=R(2,20),d=R(2,15);return mc(`A force of ${F} N moves an object ${d} m in its direction. Work done (J)?`,F*d,[F+d,F*d+F,F*d-d],`W = F×d = ${F}×${d} = ${F*d} J.`)},
()=>{const m=2*R(1,10),v=R(2,10),k=m*v*v/2;return mc(`Kinetic energy of a ${m} kg body moving at ${v} m/s (J)?`,k,[m*v*v,m*v,m*v/2,k+m],`KE = ½mv² = ½×${m}×${v*v} = ${k} J.`)},
()=>{const F=R(2,20),t=R(2,5),d=t*R(2,8),Pw=F*d/t;return mc(`A machine applies ${F} N over ${d} m in ${t} s. Power (W)?`,Pw,[F*d,F*d*t,Pw+F],`Work = ${F}×${d} = ${F*d} J. P = W/t = ${F*d}/${t} = ${Pw} W.`)}]},
oh:{n:"Electrical: Ohm's Law",
en:"Ohm's law links voltage (V), current (I) and resistance (R). Power in a resistor: P = I²R.",
sd:"Ohm جو قانون: V = IR. Voltage volt ۾، current ampere ۾ ۽ resistance ohm (Ω) ۾ ماپجي ٿي.",
f:"V = I·R;  P = V·I = I²R",
g:[
()=>{const I=R(1,9),Rr=R(2,20);return mc(`I = ${I} A, R = ${Rr} Ω. Find V (volts).`,I*Rr,[I+Rr,Rr-I+1,I*Rr+I],`V = IR = ${I}×${Rr} = ${I*Rr} V.`)},
()=>{const I=R(1,5),Rr=R(2,20),V=I*Rr;return mc(`V = ${V} V across a resistor, I = ${I} A. Find R (Ω).`,Rr,[V*I,Rr+1,Rr+2],`R = V/I = ${V}/${I} = ${Rr} Ω.`)},
()=>{const I=R(2,6),Rr=R(2,15);return mc(`${I} A flows through a ${Rr} Ω resistor. Power dissipated (W)?`,I*I*Rr,[I*Rr,I*Rr*Rr,2*I*Rr],`P = I²R = ${I*I}×${Rr} = ${I*I*Rr} W.`)}]},
rc:{n:"Electrical: Series & Parallel",
en:"Series: add resistances. Parallel: total resistance is smaller than the smallest branch. For two resistors in parallel: R = R1×R2 / (R1+R2).",
sd:"Series ۾ resistances گڏجن ٿيون. Parallel ۾ ڪُل resistance سڀ کان ننڍي resistor کان به گھٽ ٿئي ٿي.",
f:"Series: R = R1+R2+…;  Parallel (2): R = R1R2 / (R1+R2)",
g:[
()=>{const a=R(1,9)*10,b=R(1,9)*10,c=R(1,9)*10;return mc(`Resistors ${a} Ω, ${b} Ω and ${c} Ω are in series. Total R (Ω)?`,a+b+c,[a*b*c,a+b,Math.round(a*b/(a+b))],`Series: R = ${a}+${b}+${c} = ${a+b+c} Ω.`)},
()=>{const p=P([[6,3,2],[12,4,3],[6,6,3],[10,10,5],[20,5,4],[12,6,4],[30,20,12]]);return mc(`${p[0]} Ω and ${p[1]} Ω are in parallel. Total R (Ω)?`,p[2],[p[0]+p[1],p[0]*p[1],p[2]+1,(p[0]+p[1])/2],`R = (R1×R2)/(R1+R2) = ${p[0]*p[1]}/${p[0]+p[1]} = ${p[2]} Ω.`)},
()=>{const p=P([[6,3,2],[12,4,3],[10,10,5],[20,5,4]]),r=R(2,10)*2;return mc(`${r} Ω is in series with a parallel pair of ${p[0]} Ω and ${p[1]} Ω. Total R (Ω)?`,r+p[2],[r+p[0]+p[1],r+p[0]*p[1],r+p[2]+1,r+p[2]*2],`Parallel part = ${p[2]} Ω. Add the series resistor: ${r}+${p[2]} = ${r+p[2]} Ω.`)}]},
nb:{n:"Electronics: Binary Numbers",
en:"Computers use only 0 and 1. In binary, each place is a power of 2: 1, 2, 4, 8, 16, 32...",
sd:"Computer فقط 0 ۽ 1 سمجھي ٿو. Binary ۾ هر جاءِ 2 جي power هوندي آهي: 1، 2، 4، 8، 16، 32...",
f:"1011₂ = 8 + 0 + 2 + 1 = 11",
g:[
()=>{const n=R(5,31);return mc(`Convert binary ${B(n)} to decimal.`,n,[n+1,n-1,n+2],`Add the place values of the 1 bits (16, 8, 4, 2, 1) = ${n}.`)},
()=>{const n=R(10,60);return mc(`Convert decimal ${n} to binary.`,B(n),[B(n+1),B(n-1),B(n+2),B(n+3)],`Divide by 2 repeatedly and read the remainders upward: ${n} = ${B(n)}.`)},
()=>{const a=R(5,15),b=R(5,15),s=a+b;return mc(`Add binary ${B(a)} + ${B(b)}. Result in binary?`,B(s),[B(s+1),B(s-1),B(s+2),B(s-2),B(a^b),B(a|b)],`${a} + ${b} = ${s} = ${B(s)} in binary.`)}]},
lg:{n:"Electronics: Logic Gates",
en:"AND: output 1 only if both inputs are 1. OR: 1 if any input is 1. XOR: 1 if inputs differ. NAND and NOR are the opposites of AND and OR.",
sd:"AND: ٻئي input 1 هجن ته output 1. OR: ڪو به هڪ input 1 هجي ته 1. XOR: input مختلف هجن ته 1. NAND ۽ NOR، AND ۽ OR جا اُلٽا آهن.",
f:"NAND = NOT(AND);  NOR = NOT(OR)",
g:[
()=>{const g=P(Object.keys(GT)),a=R(0,1),b=R(0,1),y=GT[g](a,b);return mc(`${g} gate with A = ${a}, B = ${b}. Output Y = ?`,`Y = ${y}`,[`Y = ${1-y}`,"Y = 2","Not defined"],`${g}(${a}, ${b}) = ${y}.`)},
()=>{const g=P(Object.keys(GT)),n=[[0,0],[0,1],[1,0],[1,1]].filter(x=>GT[g](x[0],x[1])).length;return mc(`How many of the 4 input combinations of a 2-input ${g} gate give output 1?`,n,[0,1,2,3,4],`Check the truth table of ${g}: output is 1 for ${n} of 4 combinations.`)},
()=>{const a=R(0,1),b=R(0,1),c=R(0,1),k=R(0,2);let y,t;if(k==0){y=(a&b)|c;t="(A AND B) OR C"}else if(k==1){y=(a^b)&c;t="(A XOR B) AND C"}else{y=1-((a|b)&c);t="NOT((A OR B) AND C)"}return mc(`Y = ${t} with A = ${a}, B = ${b}, C = ${c}. Y = ?`,`Y = ${y}`,[`Y = ${1-y}`,"Y = 2","Not defined"],`Solve the inner bracket first, then the outer gate. Y = ${y}.`)}]},
gr:{n:"Robotics: Gears",
en:"Gear ratio = driven teeth ÷ driver teeth. A bigger ratio gives lower speed but more torque. Real gearboxes lose some energy (efficiency).",
sd:"Gear ratio = driven teeth ÷ driver teeth. ratio وڌيڪ هجي ته رفتار گھٽ ۽ torque وڌيڪ ٿئي ٿو. حقيقي gearbox ۾ ڪجھ energy ضايع ٿئي ٿي.",
f:"ratio = Nd / Nr;  ω_out = ω_in / ratio;  T_out = T_in × ratio × efficiency",
g:[
()=>{const d=R(10,25),n=d*R(2,5);return mc(`Driver gear has ${d} teeth and driven gear has ${n} teeth. Gear ratio?`,n/d,[n-d,n+d,n/d+1],`Ratio = driven ÷ driver = ${n}/${d} = ${n/d}.`)},
()=>{const r=R(2,5),k=R(100,600);return mc(`Input speed is ${r*k} rpm and gear ratio is ${r}:1. Output speed (rpm)?`,k,[r*k*r,r*k-r,k+r],`Output speed = input ÷ ratio = ${r*k}/${r} = ${k} rpm.`)},
()=>{const r=R(2,5),T=5*R(1,4),o=T*r*4/5;return mc(`A motor gives ${T} N·m through a ${r}:1 gearbox with 80% efficiency. Output torque (N·m)?`,o,[T*r,T+r,T*r*2],`Ideal torque = ${T}×${r} = ${T*r}. With 80% efficiency: ${T*r}×0.8 = ${o} N·m.`)}]},
fk:{n:"Robotics: Forward Kinematics",
en:"Forward kinematics finds the end-point (x, y) of a robot arm from its joint angles. For a link of length L at angle θ: x = L cosθ, y = L sinθ. For 2 links, add the two parts.",
sd:"Forward kinematics ۾ joint angles ڏئي robot arm جي آخري نقطي (x, y) ڳوليو ٿا. x = L cosθ، y = L sinθ. ٻن link لاءِ ٻئي حصا گڏ ڪريو.",
f:"x = L1 cosθ1 + L2 cos(θ1+θ2);  y = L1 sinθ1 + L2 sin(θ1+θ2)",
g:[
()=>{const L=R(2,10),a=P([0,90,180,270]),x=L*C(a),y=L*Sn(a);return mc(`A 1-link arm of length ${L} lies at angle ${a}° from the x-axis. End point (x, y)?`,`(${x}, ${y})`,[`(${y}, ${x})`,`(${-x}, ${-y})`,`(${L}, ${L})`,`(${x+1}, ${y})`],`x = L cosθ = ${x}, y = L sinθ = ${y}.`)},
()=>{const L1=R(2,8),L2=R(2,8),t1=P([0,90]),t2=P([90,180,270]),a2=t1+t2,x=L1*C(t1)+L2*C(a2),y=L1*Sn(t1)+L2*Sn(a2);return mc(`2-link arm: L1 = ${L1}, L2 = ${L2}. Joint 1 = ${t1}°, joint 2 = ${t2}° (relative to link 1). End point (x, y)?`,`(${x}, ${y})`,[`(${y}, ${x})`,`(${L1+L2}, 0)`,`(${x}, ${-y})`,`(${-x}, ${y})`],`Link 2 absolute angle = ${t1}+${t2} = ${a2}°. x = ${x}, y = ${y}.`)},
()=>{const L1=R(3,10),L2=R(1,L1-1),k=R(0,1);return mc(`Planar 2-link arm with L1 = ${L1} and L2 = ${L2}. ${k?"Maximum":"Minimum"} reach from the base?`,k?L1+L2:L1-L2,[L1*L2,k?L1-L2:L1+L2,L1+L2+1,L1],k?`Fully stretched: L1 + L2 = ${L1+L2}.`:`Fully folded back: |L1 − L2| = ${L1-L2}.`)}]},
pd:{n:"Control: PID Controller",
en:"A PID controller reduces error. P reacts to present error, I to accumulated past error, D to how fast the error is changing.",
sd:"PID controller error گھٽائي ٿو. P موجوده error تي، I جمع ٿيل پراڻي error تي ۽ D error جي تبديليءَ جي رفتار تي ردعمل ڏئي ٿو.",
f:"u = Kp·e + Ki·∫e dt + Kd·de/dt",
g:[
()=>{const x=P(PQ);return mc(x[0],x[1],x[2],x[3])},
()=>{const Kp=R(2,9),e=R(1,10);return mc(`P controller: Kp = ${Kp}, error e = ${e}. Output u = ?`,Kp*e,[Kp+e,Kp*e+Kp,e,Kp*e*2],`u = Kp × e = ${Kp}×${e} = ${Kp*e}.`)},
()=>{const Kp=R(1,5),e=R(1,8),Ki=R(1,4),I=R(1,6),Kd=R(1,3),d=-R(1,4),u=Kp*e+Ki*I+Kd*d;return mc(`PID: Kp = ${Kp}, Ki = ${Ki}, Kd = ${Kd}. Error e = ${e}, integral of error = ${I}, de/dt = ${d}. Output u = ?`,u,[Kp*e+Ki*I,Kp*e+Ki*I-Kd*d,Kp*e*Ki*I+Kd*d,u+Kd],`u = ${Kp*e} + ${Ki*I} + (${Kd*d}) = ${u}.`)}]},
py:{n:"Programming: Python Basics",
en:"Python follows operator order: ** first, then * and /, then + and -. range(n) gives 0 to n−1.",
sd:"Python ۾ operator جي ترتيب: ** پهرين، پوءِ * ۽ /، پوءِ + ۽ -. range(n) 0 کان n−1 تائين انگ ڏئي ٿو.",
f:"range(n) → 0, 1, …, n−1",
g:[
()=>{const a=R(2,9),b=R(2,9),c=R(2,5);return mc(`Python: print(${a} + ${b} * ${c}). Output?`,a+b*c,[(a+b)*c,a+b+c,a*b*c],`Multiplication comes first: ${b}*${c} = ${b*c}, then + ${a} = ${a+b*c}.`)},
()=>{const n=R(4,10);return mc(`Python: print(sum(range(${n}))). Output?`,n*(n-1)/2,[n*(n+1)/2,n*n,n*(n-1)],`range(${n}) is 0 to ${n-1}. Sum = ${n-1}×${n}/2 = ${n*(n-1)/2}.`)},
()=>{const n=R(3,6);let s=0;for(let i=1;i<=n;i++)s+=i*i;return mc(`Python: total = 0; for i in range(1, ${n+1}): total += i*i; print(total). Output?`,s,[s-n,s+n,n*n,n*(n+1)/2],`Add the squares from 1² to ${n}²: total = ${s}.`)}]},
qe:{n:"Maths: Quadratic Equations",
en:"For ax² + bx + c = 0, discriminant D = b² − 4ac. Sum of roots = −b/a and product of roots = c/a.",
sd:"ax² + bx + c = 0 لاءِ discriminant D = b² − 4ac. Roots جو جوڙ = −b/a ۽ roots جو ضرب = c/a.",
f:"D = b² − 4ac;  x = (−b ± √D) / 2a",
g:[
()=>{const a=R(1,6),b=R(1,6),r=[a,b].sort((x,y)=>x-y);return mc(`Solve x² − ${a+b}x + ${a*b} = 0.`,`x = ${r[0]} or x = ${r[1]}`,[`x = ${-r[0]} or x = ${-r[1]}`,`x = ${r[0]} or x = ${-r[1]}`,`x = ${r[0]+1} or x = ${r[1]+1}`,`x = ${a+b} or x = ${a*b}`],`Find two numbers with sum ${a+b} and product ${a*b}: ${a} and ${b}.`)},
()=>{const a=R(1,4),b=R(-6,6),c=R(-5,5),D=b*b-4*a*c;return mc(`Discriminant of ${a}x² ${b<0?"−":"+"} ${Math.abs(b)}x ${c<0?"−":"+"} ${Math.abs(c)} = 0?`,D,[b*b+4*a*c,b*b-2*a*c,-D,D+a],`D = b² − 4ac = ${b*b} − 4×${a}×(${c}) = ${D}.`)},
()=>{const r1=R(1,6),r2=R(1,6),a=R(1,3),c=a*r1*r2,k=R(0,1),eq=`${a==1?"":a}x² − ${a*(r1+r2)}x + ${c} = 0`,ans=k?r1*r2:r1+r2;return mc(`For ${eq}, find the ${k?"product":"sum"} of the roots.`,ans,[k?r1+r2:r1*r2,-ans,ans+a,a*(r1+r2)],k?`Product = c/a = ${c}/${a} = ${r1*r2}.`:`Sum = −b/a = ${a*(r1+r2)}/${a} = ${r1+r2}.`)}]}
};
})();
