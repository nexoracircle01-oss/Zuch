// Zuch add-on: Advanced Geometry & Trigonometry (15 topics x 3 levels)
// Loads AFTER the main script in index.html. Does not touch the old 12 topics.
const A={};
const TR=[[3,4,5],[5,12,13],[8,15,17],[7,24,25]],T3=[[1,2,2],[2,3,6],[2,6,9],[4,4,7]];
const pt=(a,b)=>`(${a}, ${b})`;

A.ag=['Analytic Geometry',[
()=>{let k=R(1,6);return mc(`Distance between (0, 0) and (${3*k}, ${4*k})?`,5*k,[7*k,12*k,k*k+4*k],`√(${3*k}² + ${4*k}²) = ${5*k}`)},
()=>{let a=R(1,8),b=R(1,8),c=R(1,8),d=R(1,8);return mc(`Midpoint of (${2*a}, ${2*b}) and (${2*c}, ${2*d})?`,pt(a+c,b+d),[pt(a+c+1,b+d),pt(a-c,b-d),pt(2*(a+c),2*(b+d))],`Average the x's and the y's`)},
()=>{let k=R(1,8),a=R(-5,5),b=R(-5,5),c=5*k-3*a-4*b;return mc(`Distance of (${a}, ${b}) from the line 3x + 4y ${c<0?'−':'+'} ${Math.abs(c)} = 0?`,k,[k+1,5*k,k+2],`|3x₀+4y₀+c| / √(3²+4²) = ${5*k}/5 = ${k}`)}]];

A.c3=['3D Coordinate Geometry',[
()=>{let m=R(1,3),[x,y,z]=P(T3).map(v=>v*m),d=Math.round(Math.hypot(x,y,z));return mc(`Distance of (${x}, ${y}, ${z}) from the origin?`,d,[d+1,x+y+z,d-1],`√(x²+y²+z²) = ${d}`)},
()=>{let [a,b,c,d,e,f]=Array.from({length:6},()=>R(1,7));return mc(`Midpoint of (${2*a}, ${2*b}, ${2*c}) and (${2*d}, ${2*e}, ${2*f})?`,`(${a+d}, ${b+e}, ${c+f})`,[`(${a+d+1}, ${b+e}, ${c+f})`,`(${a-d}, ${b-e}, ${c-f})`,`(${2*(a+d)}, ${2*(b+e)}, ${2*(c+f)})`],`Average each coordinate`)},
()=>{let m=R(1,2),t=sh(P(T3)).map(v=>v*m),s=t.map(v=>v*P([1,-1])),[a,b,c]=[R(-3,3),R(-3,3),R(-3,3)],d=Math.round(Math.hypot(...t));return mc(`Distance between (${a}, ${b}, ${c}) and (${a+s[0]}, ${b+s[1]}, ${c+s[2]})?`,d,[d+1,d-1,t[0]+t[1]+t[2]],`√(Δx²+Δy²+Δz²) = ${d}`)}]];

A.sp=['Spherical Geometry',[
()=>{let k=R(1,5);return mc(`Great circle of a sphere with radius ${7*k} (π = 22/7). Circumference?`,44*k,[22*k,88*k,14*k],`2πr = 2 × 22/7 × ${7*k}`)},
()=>{let k=R(1,4);return mc(`Surface area of a sphere with radius ${7*k} (π = 22/7)?`,616*k*k,[308*k*k,154*k*k,1232*k*k],`4πr² = 4 × 22/7 × ${49*k*k}`)},
()=>{let a=R(70,120),b=R(70,120),c=R(70,120),e=a+b+c-180;return mc(`Spherical triangle with angles ${a}°, ${b}°, ${c}°. Spherical excess?`,e+'°',[a+b+c+'°',e+10+'°',Math.abs(e-180)+'°'],`Excess = A+B+C − 180° = ${e}°`)}]];

A.ne=['Non-Euclidean Geometry',[
()=>{let k=P([['a sphere','More than 180°'],['a hyperbolic plane','Less than 180°'],['a flat plane','Exactly 180°']]);return mc(`Angle sum of a triangle on ${k[0]}?`,k[1],['More than 180°','Less than 180°','Exactly 180°','Always 360°'].filter(x=>x!==k[1]),`Positive curvature → more, negative → less, zero → exactly 180°`)},
()=>{let k=P([['Euclidean','Exactly one'],['hyperbolic','Infinitely many'],['elliptic (spherical)','None']]);return mc(`Parallels through a point outside a line in ${k[0]} geometry?`,k[1],['Exactly one','Infinitely many','None','Exactly two'].filter(x=>x!==k[1]),`The parallel postulate changes in each geometry`)},
()=>{let a=R(20,70),b=R(20,70),c=R(20,39),d=180-a-b-c;return mc(`Hyperbolic triangle with angles ${a}°, ${b}°, ${c}°. Angular defect?`,d+'°',[a+b+c+'°',d+10+'°',Math.abs(d-90)+'°'],`Defect = 180° − (A+B+C) = ${d}°`)}]];

A.df=['Differential Geometry',[
()=>{let a=R(1,5),k=R(2,6);return mc(`Slope of y = ${a}x² at x = ${k}?`,2*a*k,[a*k,2*a,a*k*k],`dy/dx = ${2*a}x = ${2*a*k}`)},
()=>{let a=R(1,4),k=R(2,5);return mc(`Slope of y = ${a}x³ at x = ${k}?`,3*a*k*k,[3*a*k,a*k*k,3*a*k*k+k],`dy/dx = ${3*a}x² = ${3*a*k*k}`)},
()=>{let r=R(2,12);return mc(`Curvature of a circle of radius ${r}?`,F(1,r),[''+r,F(2,r),F(1,r*r)],`κ = 1/r`)}]];

A.ri=['Riemannian Geometry',[
()=>{let k=R(1,5);return mc(`Metric ds² = dx² + dy². Distance from (0, 0) to (${5*k}, ${12*k})?`,13*k,[17*k,60*k,12*k],`√(${5*k}² + ${12*k}²) = ${13*k}`)},
()=>{let a=R(2,4),n=R(2,8);return mc(`Metric ds² = ${a*a}dx² + dy². Length along the x-axis from x = 0 to x = ${n}?`,a*n,[a*a*n,n,a+n],`ds = ${a}dx → length = ${a} × ${n}`)},
()=>{let r=R(2,9);return mc(`Metric ds² = dr² + r²dθ². Length of the full circle r = ${r}?`,`${2*r}π`,[`${r}π`,`${r*r}π`,`${4*r}π`],`∫ r dθ over 0..2π = 2πr`)}]];

A.pj=['Projective Geometry',[
()=>{let a=R(1,9),b=R(1,9);return mc(`Homogeneous coordinates of the point (${a}, ${b}) (take w = 1)?`,`(${a}, ${b}, 1)`,[`(${a}, ${b}, 0)`,`(1, ${a}, ${b})`,`(${b}, ${a}, 1)`],`(x, y) → (x, y, 1)`)},
()=>{let x=R(1,9),y=R(1,9),w=R(2,4);return mc(`Homogeneous point (${x*w}, ${y*w}, ${w}) in Cartesian form?`,pt(x,y),[pt(x*w,y*w),pt(y,x),pt(x+w,y+w)],`Divide by w: (X/W, Y/W)`)},
()=>{let [a,b,c,d]=sh([0,1,2,3,4,5,6]).slice(0,4),n=(c-a)*(d-b),m=(c-b)*(d-a);return mc(`Cross ratio (A,B;C,D) = (CA·DB)/(CB·DA) for points at ${a}, ${b}, ${c}, ${d}?`,F(n,m),[F(m,n),F(-n,m),F(n+m,m),F(n,m+1)],`(${c}−${a})(${d}−${b}) / ((${c}−${b})(${d}−${a})) = ${n}/${m}`)}]];

A.af=['Affine Geometry',[
()=>{let x=R(1,8),y=R(1,8),p=R(1,6),q=R(1,6);return mc(`Translate (${x}, ${y}) by (${p}, ${q}). New point?`,pt(x+p,y+q),[pt(x-p,y-q),pt(x*p,y*q),pt(x+q,y+p)],`Add the shift to each coordinate`)},
()=>{let a=R(2,4),b=R(2,4),p=R(1,5),q=R(1,5),x=R(1,6),y=R(1,6);return mc(`Map (x, y) → (${a}x + ${p}, ${b}y + ${q}). Image of (${x}, ${y})?`,pt(a*x+p,b*y+q),[pt(a*(x+p),b*(y+q)),pt(a*x+q,b*y+p),pt(x+a+p,y+b+q)],`Scale first, then translate`)},
()=>{let a,b,c,d;do{[a,b,c,d]=Array.from({length:4},()=>R(1,5))}while(a*d===b*c);let k=Math.abs(a*d-b*c);return mc(`Affine map with matrix [[${a}, ${b}], [${c}, ${d}]]. Area scale factor?`,k,[a*d+b*c,a*d,k+1],`|ad − bc| = |${a*d} − ${b*c}|`)}]];

A.po=['Polar Coordinates',[
()=>{let r=R(2,9),k=P([[0,`(${r}, 0)`],[90,`(0, ${r})`],[180,`(−${r}, 0)`],[270,`(0, −${r})`]]);return mc(`Polar (${r}, ${k[0]}°) in Cartesian?`,k[1],[`(${r}, 0)`,`(0, ${r})`,`(−${r}, 0)`,`(0, −${r})`].filter(x=>x!==k[1]),`x = r cos θ, y = r sin θ`)},
()=>{let k=R(1,6);return mc(`Cartesian (${3*k}, ${4*k}) in polar form: r = ?`,5*k,[7*k,k,25*k*k],`r = √(x² + y²)`)},
()=>{let m=R(1,6),k=P([[60,`(${m}, ${m}√3)`,`(${m}√3, ${m})`],[30,`(${m}√3, ${m})`,`(${m}, ${m}√3)`]]);return mc(`Polar (${2*m}, ${k[0]}°) in Cartesian?`,k[1],[k[2],`(${2*m}, ${2*m})`,`(${m}, ${m})`],`x = r cos θ, y = r sin θ`)}]];

A.pa=['Parametric Geometry',[
()=>{let a=R(2,5),b=R(1,9),c=R(2,5),d=R(1,9),t=R(2,5);return mc(`x = ${a}t + ${b}, y = ${c}t + ${d}. Point at t = ${t}?`,pt(a*t+b,c*t+d),[pt(a*t+b+1,c*t+d),pt(a+b,c+d),pt(t*b+a,t*d+c)],`Substitute t = ${t}`)},
()=>{let r=R(2,9);return mc(`x = ${r}cos t, y = ${r}sin t. Eliminate t:`,`x² + y² = ${r*r}`,[`x + y = ${r}`,`x² + y² = ${r}`,`x² − y² = ${r*r}`],`cos²t + sin²t = 1`)},
()=>{let k=R(2,6);return mc(`x = t², y = t³. dy/dx at t = ${k}?`,F(3*k,2),[F(2,3*k),''+3*k*k,F(3*k,4)],`dy/dx = (3t²)/(2t) = 3t/2`)}]];

A.co=['Conic Sections',[
()=>{let a=R(2,6),b=a+R(1,3),k=P([[`x² + y² = ${a*a}`,'Circle'],[`x²/${a*a} + y²/${b*b} = 1`,'Ellipse'],[`y² = ${4*a}x`,'Parabola'],[`x²/${a*a} − y²/${b*b} = 1`,'Hyperbola']]);return mc(`Which conic is ${k[0]}?`,k[1],['Circle','Ellipse','Parabola','Hyperbola'].filter(x=>x!==k[1]),`Compare with the standard forms`)},
()=>{let a=R(1,8);return mc(`Focus of the parabola y² = ${4*a}x?`,`(${a}, 0)`,[`(${4*a}, 0)`,`(0, ${a})`,`(${2*a}, 0)`],`y² = 4ax → focus (a, 0), a = ${a}`)},
()=>{let [a,b,c]=P([[5,3,4],[13,12,5],[10,8,6],[17,15,8],[25,24,7],[5,4,3]]);return mc(`Eccentricity of x²/${a*a} + y²/${b*b} = 1?`,F(c,a),[F(b,a),F(c,b),F(a,c)],`e = √(1 − b²/a²) = ${c}/${a}`)}]];

A.at=['Advanced Trig Functions',[
()=>{let t=P([['sin 30°','1/2'],['cos 60°','1/2'],['sin 45°','√2/2'],['cos 45°','√2/2'],['sin 60°','√3/2'],['cos 30°','√3/2'],['sin 90°','1'],['cos 0°','1'],['sin 0°','0'],['cos 90°','0']]);return mc(`${t[0]} = ?`,t[1],['0','1/2','√2/2','√3/2','1'].filter(x=>x!==t[1]),`Standard trig table`)},
()=>{let [a,b,c]=P(TR);return mc(`sin θ = ${a}/${c}, θ acute. sin 2θ = ?`,F(2*a*b,c*c),[F(2*a,c),F(b*b-a*a,c*c),F(a*b,c*c)],`sin 2θ = 2 sinθ cosθ = 2 × ${a}/${c} × ${b}/${c}`)},
()=>{let [a,b,c]=P(TR),m=R(1,4);return mc(`Maximum value of ${a*m} sin θ + ${b*m} cos θ?`,c*m,[(a+b)*m,c*c*m,c*m+m],`Max = √(A² + B²) = ${c*m}`)}]];

A.rg=['Rotation Geometry',[
()=>{let y=R(1,9),x=y+R(1,5);return mc(`Rotate (${x}, ${y}) by 90° counter-clockwise about the origin?`,pt(-y,x),[pt(y,-x),pt(-x,-y),pt(y,x)],`(x, y) → (−y, x)`)},
()=>{let y=R(1,6),x=y+R(1,5),k=P([['180°',pt(-x,-y)],['270°',pt(y,-x)]]);return mc(`Rotate (${x}, ${y}) by ${k[0]} counter-clockwise about the origin?`,k[1],[pt(-y,x),pt(y,x),pt(x,-y),k[0]=='180°'?pt(y,-x):pt(-x,-y)],`180°: (−x, −y); 270°: (y, −x)`)},
()=>{let p=R(1,4),q=R(1,4),x=p+R(2,6),y=q+R(2,6),r=pt(p-(y-q),q+(x-p));return mc(`Rotate (${x}, ${y}) by 90° counter-clockwise about (${p}, ${q})?`,r,[pt(p+(y-q),q-(x-p)),pt(-y,x),pt(2*p-x,2*q-y)],`Shift centre to origin, rotate (x,y)→(−y,x), shift back`)}]];

A.gt=['Geometric Transformations',[
()=>{let x=R(2,9),y=R(2,9),k=P([['x-axis',pt(x,-y)],['y-axis',pt(-x,y)],['line y = x',pt(y,x)]]);return mc(`Reflect (${x}, ${y}) in the ${k[0]}. Image?`,k[1],[pt(x,-y),pt(-x,y),pt(y,x),pt(-x,-y)].filter(v=>v!==k[1]),`Reflection swaps or flips the coordinates accordingly`)},
()=>{let x=R(1,6),y=R(1,6),k=R(2,4),p=R(1,5),q=R(1,5);return mc(`Dilate (${x}, ${y}) by factor ${k} about the origin, then translate by (${p}, ${q}). Image?`,pt(k*x+p,k*y+q),[pt(k*(x+p),k*(y+q)),pt(k*x+q,k*y+p),pt(x+k+p,y+k+q)],`Scale first, then add the shift`)},
()=>{let x=R(2,5),y=R(-9,-6);const rot=([a,b])=>[-b,a],rx=([a,b])=>[a,-b],ry=([a,b])=>[-a,b];const o=[['reflect in the x-axis, then rotate 90° counter-clockwise',p=>rot(rx(p))],['reflect in the y-axis, then rotate 90° counter-clockwise',p=>rot(ry(p))]];let k=P(o),r=k[1]([x,y]),a=pt(r[0],r[1]);return mc(`Apply to (${x}, ${y}): ${k[0]}. Image?`,a,[pt(x,y),pt(-x,-y),pt(x,-y),pt(-x,y),pt(y,x),pt(-y,-x)].filter(v=>v!==a),`Apply the steps in order`)}]];

A.mf=['Manifolds & Curvature',[
()=>{let r=R(2,9);return mc(`Gaussian curvature of a sphere of radius ${r}?`,F(1,r*r),[F(1,r),F(2,r*r),''+r*r],`K = 1/r²`)},
()=>{let k=P([['plane','Zero'],['cylinder','Zero'],['sphere','Positive'],['saddle surface','Negative']]);return mc(`Sign of Gaussian curvature of a ${k[0]}?`,k[1],['Zero','Positive','Negative','Undefined'].filter(x=>x!==k[1]),`Sphere > 0, saddle < 0, plane and cylinder = 0`)},
()=>{let g=R(2,5);return mc(`Euler characteristic of a closed surface of genus ${g}?`,2-2*g,[2*g-2,2+2*g,g],`χ = 2 − 2g`)}]];

// ---------- register topics ----------
const BK=TK.slice(),AK=Object.keys(A);
Object.assign(G,A);TK.push(...AK);

// ---------- UI: two sections (Basics / Advanced) ----------
let SEC=0;
function chips(){
  const ks=SEC?AK:BK;
  return `<div class=chips>`+['Basics','Advanced Geometry'].map((n,i)=>`<button class="chip ${SEC==i?'on':''}" onclick="SEC=${i};T='${(i?AK:BK)[0]}';cur=null;render()">${n}</button>`).join('')+`</div>
  <div class=chips>`+ks.map(k=>`<button class="chip ${k==T?'on':''}" onclick="T='${k}';cur=null;render()">${topicMastered(k)?'🏆 ':''}${G[k][0]}</button>`).join('')+`</div>
  <div class=chips>`+LV.map((n,i)=>`<button class="chip ${L==i+1?'on':''}" onclick="L=${i+1};cur=null;render()">${n}${mast(T,i+1)?' ⭐':''}</button>`).join('')+`</div>`;
}
function vProgress(){
  const n=TK.filter(topicMastered).length;
  const blk=k=>`<div style="margin-top:12px"><b>${G[k][0]}</b>${topicMastered(k)?' 🏆':''}`+[1,2,3].map(l=>`<div class=row><span class=n>${LV[l-1]}</span><div class=bar><i style="width:${acc(k,l)*100}%"></i></div><span>${Math.round(acc(k,l)*100)}%${mast(k,l)?' ⭐':''}</span></div>`).join('')+`</div>`;
  const sec=(t,ks)=>`<div class=card><b>${t}</b> <span class=sm>${ks.filter(topicMastered).length}/${ks.length} mastered</span>${ks.map(blk).join('')}</div>`;
  return `<div class="card stats"><div><b>⚡ ${S.xp}</b>XP</div><div><b>🔥 ${S.sk}</b>Day streak</div>
  <div><b>${S.tot?Math.round(S.cor/S.tot*100):0}%</b>Accuracy</div><div><b>🏆 ${n}/${TK.length}</b>Topics mastered</div></div>
  <div class=sm style="padding:0 4px">Last 10 answers per level • 80%+ (min 8 answers) = ⭐</div>`+
  sec('Basics',BK)+sec('Advanced Geometry & Trigonometry',AK)+
  `<div class=card><b>Recent tests</b>${S.hist.length?S.hist.map(h=>`<div class=row><span class=sm>${h.d}</span><div class=bar><i style="width:${h.s/h.n*100}%"></i></div><b>${h.s}/${h.n}</b></div>`).join(''):'<div class=sm>Abhi koi test nahi diya.</div>'}</div>
  <button class="btn g" onclick="if(confirm('Saara progress delete karna hai?')){localStorage.removeItem('zuch');location.reload()}">Reset progress</button>`;
}
render();
