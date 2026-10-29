const D=[{"t": "أورا ميوزيك", "c": "brand", "d": "لوجو — الطبيعة والموسيقى", "s": "images/work01.jpg", "r": 1.0}, {"t": "أورا ميوزيك (نسخة ثانية)", "c": "brand", "d": "لوجو — نسخة بتدرج ألوان", "s": "images/work02.jpg", "r": 1.0}, {"t": "أحمد & فانديتا", "c": "brand", "d": "مونوجرام لحفل زفاف", "s": "images/work03.jpg", "r": 1.0}, {"t": "أحمد & فانديتا (نسخة ثانية)", "c": "brand", "d": "مونوجرام بخط فرشاة", "s": "images/work04.jpg", "r": 1.0}, {"t": "حمدي محمد", "c": "brand", "d": "مونوجرام شخصي", "s": "images/work05.jpg", "r": 1.0}, {"t": "جراي فيلفيت", "c": "ads", "d": "إعلان عطر", "s": "images/work06.jpg", "r": 1.0}, {"t": "سوموانج", "c": "ads", "d": "إعلان كريم ترطيب", "s": "images/work07.jpg", "r": 1.0}, {"t": "بيتزا شهية", "c": "ads", "d": "إعلان لمواقع التواصل", "s": "images/work08.jpg", "r": 1.0}, {"t": "كوكيز حلوة", "c": "ads", "d": "إعلان لمواقع التواصل", "s": "images/work09.jpg", "r": 1.0}, {"t": "القاهرة", "c": "slides", "d": "شريحة عرض تقديمي", "s": "images/work10.jpg", "r": 0.5}, {"t": "متحف الحضارة", "c": "slides", "d": "شريحة عرض تقديمي", "s": "images/work11.jpg", "r": 0.5}, {"t": "وسط البلد", "c": "slides", "d": "شريحة عرض تقديمي", "s": "images/work12.jpg", "r": 0.5}, {"t": "أسوان", "c": "slides", "d": "شريحة عرض تقديمي", "s": "images/work13.jpg", "r": 0.5}, {"t": "شاشة التعريف", "c": "other", "d": "صفحة تعريف شخصية", "s": "images/work14.jpg", "r": 0.562}, {"t": "الأمن السيبراني", "c": "other", "d": "تصميم ستوري", "s": "images/work15.jpg", "r": 1.778}, {"t": "مصر × الأرجنتين", "c": "other", "d": "بوستر كرة قدم", "s": "images/work16.jpg", "r": 0.707}],L={all:'الكل',brand:'لوجوهات وهويات',ads:'إعلانات منتجات',slides:'عروض تقديمية',other:'أعمال أخرى'};
const WA='201005571547';
const grid=document.getElementById('grid'),tabs=document.getElementById('tabs'),dlg=document.getElementById('dlg'),root=document.documentElement,tb=document.getElementById('theme');
function show(c){grid.innerHTML='';D.forEach(x=>{if(c!=='all'&&x.c!==c)return;const b=document.createElement('button');b.className='it';
b.innerHTML='<img loading="lazy" src="'+x.s+'" alt="'+x.t+'"><span><b>'+x.t+'</b><small>'+x.d+'</small></span>';
b.onclick=()=>{di.src=x.s;di.alt=x.t;dp.textContent=x.t+' — '+x.d;dlg.showModal()};grid.appendChild(b)});
[...tabs.children].forEach(t=>t.setAttribute('aria-pressed',t.dataset.c===c))}
Object.keys(L).forEach(k=>{const b=document.createElement('button');b.textContent=L[k];b.dataset.c=k;b.onclick=()=>show(k);tabs.appendChild(b)});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
function paint(){tb.textContent=isDark()?'☀️':'🌙'}
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
tb.onclick=()=>{const t=isDark()?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}paint()};
paint();
document.getElementById('y').textContent=new Date().getFullYear();show('all');
(function(){
const pg=document.createElement('div');pg.id='pg';document.body.appendChild(pg);
addEventListener('scroll',()=>{const h=root.scrollHeight-innerHeight;pg.style.transform='scaleX('+(h>0?scrollY/h:0)+')'},{passive:true});
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
const rv=el=>{if(el.classList.contains('rv'))return;el.classList.add('rv');io.observe(el)};
document.querySelectorAll('h2,.sub,.tabs,.skills div,.cta').forEach(rv);
document.querySelectorAll('.it').forEach(rv);
new MutationObserver(()=>grid.querySelectorAll('.it').forEach(rv)).observe(grid,{childList:true});
const lead=document.querySelector('.lead'),full=lead.textContent;lead.textContent='';lead.classList.add('cur');let i=0;
setTimeout(function t(){lead.textContent=full.slice(0,++i);if(i<full.length)setTimeout(t,38);else setTimeout(()=>lead.classList.remove('cur'),1200)},700);
const ph=document.querySelector('.ph'),im=ph.querySelector('img');
ph.addEventListener('mousemove',e=>{const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;im.style.transform='perspective(700px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg)'});
ph.addEventListener('mouseleave',()=>{im.style.transform=''});
})();