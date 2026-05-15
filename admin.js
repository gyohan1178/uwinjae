const DB={
  gs(){try{return JSON.parse(localStorage.getItem('schl_settings')||'null')}catch(e){return null}},
  ss(s){localStorage.setItem('schl_settings',JSON.stringify(s))},
  ga(){try{return JSON.parse(localStorage.getItem('schl_apps')||'[]')}catch(e){return[]}},
  sa(a){localStorage.setItem('schl_apps',JSON.stringify(a))},
  gl(){try{return JSON.parse(localStorage.getItem('schl_legacy')||'null')}catch(e){return null}},
  sl(a){localStorage.setItem('schl_legacy',JSON.stringify(a))}
};
const ACCS=[{id:'admin',pw:'1234',name:'담당자'}];
const SL=[
  {id:'lg-001',name:'김민준',birth:'050315',school:'한양대학교',phone:'010-1111-2222',addr:'경기도 의왕시 포일로 123',addrDetail:'101동 505호',guardianName:'김영호',roundLabel:'2025년 상반기',categoryName:'대학부 희망드림',selected:'선발'},
  {id:'lg-002',name:'이서연',birth:'',school:'의왕고등학교',phone:'010-2222-3333',addr:'경기도 의왕시 오전로 45',addrDetail:'나동 202호',guardianName:'이정호',roundLabel:'2025년 상반기',categoryName:'고등부 성적우수',selected:'선발'},
  {id:'lg-003',name:'박지민',birth:'060722',school:'경기대학교',phone:'010-3333-4444',addr:'경기도 의왕시 청계로 78',addrDetail:'',guardianName:'박성수',roundLabel:'2025년 하반기',categoryName:'대학부 희망드림',selected:'선발'},
  {id:'lg-004',name:'최준혁',birth:'',school:'의왕중학교',phone:'010-4444-5555',addr:'경기도 의왕시 내손로 33',addrDetail:'',guardianName:'최기원',roundLabel:'2025년 하반기',categoryName:'고등부 성적우수',selected:'선발'},
  {id:'lg-005',name:'정하은',birth:'040901',school:'성균관대학교',phone:'010-5555-6666',addr:'경기도 의왕시 삼동로 55',addrDetail:'',guardianName:'정민우',roundLabel:'2025년 소상공인',categoryName:'소상공인 자녀',selected:'선발'},
  {id:'lg-006',name:'김민준',birth:'050315',school:'한양대학교',phone:'010-1111-2222',addr:'경기도 의왕시 포일로 123',addrDetail:'101동 505호',guardianName:'김영호',roundLabel:'2025년 하반기',categoryName:'대학부 희망드림',selected:'선발'},
  {id:'lg-007',name:'이지현',birth:'',school:'의왕고등학교',phone:'010-6666-7777',addr:'경기도 의왕시 오전로 45',addrDetail:'나동 202호',guardianName:'이정호',roundLabel:'2025년 하반기',categoryName:'고등부 성적우수',selected:'선발'},
];
function gl2(){return DB.gl()||SL;}
function uid(){return 'x'+Math.random().toString(36).slice(2,9);}
function gid(){const n=new Date();return`${String(n.getFullYear()).slice(2)}${String(n.getMonth()+1).padStart(2,'0')}-${Math.floor(1000+Math.random()*9000)}`;}
function fdt(s){if(!s)return'-';const d=new Date(s);return`${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;}
function pe(d,t){return new Date(`${d}T${t||'23:59'}:00`);}
function ps2(d){return new Date(`${d}T00:00:00`);}
function cs(c){const n=new Date();if(n<ps2(c.startDate))return'soon';if(n>pe(c.endDate,c.endTime))return'closed';return'open';}
function ak(a){return a?.replace(/\s+/g,'').slice(0,20)||'';}
function gds(){
  return{rounds:[
    {id:'r-2026-spring',label:'2026년 상반기',categories:[
      {id:'c-uni',name:'대학부 희망드림',startDate:'2026-05-02',endDate:'2026-05-20',endTime:'18:00',docs:[{id:'d1',name:'장학금 신청서',req:true},{id:'d2',name:'개인정보 동의서',req:true},{id:'d3',name:'주민등록등본',req:true},{id:'d4',name:'가족관계증명서',req:true},{id:'d5',name:'재학증명서',req:true},{id:'d6',name:'성적증명서',req:true},{id:'d7',name:'건강보험료 납부확인서',req:true},{id:'d8',name:'자기소개서',req:true},{id:'d9',name:'계좌사본',req:true}]},
      {id:'c-high',name:'고등부 성적우수',startDate:'2026-05-02',endDate:'2026-05-20',endTime:'18:00',docs:[{id:'d1',name:'장학금 신청서',req:true},{id:'d2',name:'개인정보 동의서',req:true},{id:'d3',name:'주민등록등본',req:true},{id:'d4',name:'가족관계증명서',req:true},{id:'d5',name:'재학증명서',req:true},{id:'d6',name:'성적증명서',req:true},{id:'d7',name:'건강보험료 납부확인서',req:true},{id:'d8',name:'자기소개서',req:true},{id:'d9',name:'계좌사본',req:true}]},
    ]},
    {id:'r-2026-fall',label:'2026년 하반기',categories:[{id:'c-uni-f',name:'대학부 희망드림',startDate:'2026-08-01',endDate:'2026-08-15',endTime:'18:00',docs:[{id:'d1',name:'장학금 신청서',req:true},{id:'d2',name:'개인정보 동의서',req:true},{id:'d3',name:'주민등록등본',req:true},{id:'d4',name:'가족관계증명서',req:true},{id:'d5',name:'재학증명서',req:true},{id:'d6',name:'성적증명서',req:true},{id:'d7',name:'건강보험료 납부확인서',req:true},{id:'d8',name:'자기소개서',req:true},{id:'d9',name:'계좌사본',req:true}]}]},
    {id:'r-2026-soho',label:'2026년 소상공인',categories:[{id:'c-soho',name:'소상공인 자녀',startDate:'2026-11-01',endDate:'2026-11-15',endTime:'18:00',docs:[{id:'d1',name:'장학금 신청서',req:true},{id:'d2',name:'개인정보 동의서',req:true},{id:'d3',name:'주민등록등본',req:true},{id:'d4',name:'가족관계증명서',req:true},{id:'d5',name:'재학증명서',req:true},{id:'d6',name:'사업자등록증',req:true},{id:'d7',name:'건강보험료 납부확인서',req:true},{id:'d8',name:'자기소개서',req:true},{id:'d9',name:'계좌사본',req:true}]}]}
  ]};
}
function gset(){return DB.gs()||gds();}
let CRD=null,CSD=null,CYR=null,SAP=null,ADM='',EM=false,CST='rounds',SMODE='round';
function sd2(d){const m={compact:'6px',normal:'10px',wide:'15px'};document.documentElement.style.setProperty('--row-py',m[d]||'10px');localStorage.setItem('schl_density',d);document.querySelectorAll('.db').forEach(b=>b.classList.toggle('on',b.dataset.d===d));}
function ld2(){sd2(localStorage.getItem('schl_density')||'normal');}
function doLogin(){
  const id=document.getElementById('lid').value.trim(),pw=document.getElementById('lpw').value.trim();
  const acc=ACCS.find(a=>a.id===id&&a.pw===pw);
  if(!acc){document.getElementById('lerr').style.display='block';return;}
  ADM=acc.name;
  document.getElementById('lw').style.display='none';
  document.getElementById('app').style.display='flex';
  document.getElementById('anm').textContent=acc.name+' 님';
  ld2();inj();renderSB();
  const s=gset();CRD=s.rounds[0]?.id||null;CSD=s.rounds[0]?.id||null;
  rD();rSel();rL();rSt();rG();
}
function logout(){document.getElementById('lw').style.display='flex';document.getElementById('app').style.display='none';}
function inj(){
  if(DB.ga().length>0)return;
  const s=gset(),r0=s.rounds[0],r1=s.rounds[1],r2=s.rounds[2];
  const c0=r0?.categories[0],c1=r0?.categories[1],cf=r1?.categories[0],cs=r2?.categories[0];
  if(!r0||!c0)return;
  const mk=(rId,cat,o)=>{
    const dm={};(cat?.docs||[]).forEach((d,i)=>{dm[d.id]=!(o.miss||[]).includes(i);});
    const rv={};(o.rv||[]).forEach(([i,reason])=>{if(cat?.docs[i])rv[cat.docs[i].id]={status:'ng',reason};});
    (o.ok||[]).forEach(i=>{if(cat?.docs[i])rv[cat.docs[i].id]={status:'ok',reason:''};});
    return{id:gid(),roundId:rId,categoryId:cat?.id||'',categoryName:cat?.name||'',
      name:o.name,birth:o.birth||'',gender:o.gender||'남',phone:o.phone||'010-0000-0000',
      email:o.email||'',school:o.school||'',dept:o.dept||'',
      addr:o.addr||'경기도 의왕시 포일로 1',addrDetail:o.ad||'',
      guardianName:o.gn||'',guardianRelation:o.gr||'부',guardianPhone:'',
      submittedAt:new Date(Date.now()-((o.daysAgo||0)*86400000)).toISOString(),
      source:o.src||'online',docs:dm,fileUrls:{},docReview:rv,
      notes:o.notes||[],feedbackSent:o.fb||false,
      feedbackSentAt:o.fb?new Date(Date.now()-86400000).toISOString():null,
      supplements:[],selected:o.sel||null};
  };
  const apps=[
    // ── 2026 상반기 대학부 ──
    mk(r0.id,c0,{name:'홍길동',birth:'050315',gender:'남',phone:'010-1234-5678',school:'한양대학교',dept:'경영학과 2학년',addr:'경기도 의왕시 포일로 123',ad:'101동 505호',gn:'홍판서',gr:'부',daysAgo:12,sel:'선발',ok:[0,1,2,3,4,5,6,7,8]}),
    mk(r0.id,c0,{name:'이서연',birth:'031120',gender:'여',phone:'010-2345-6789',school:'성균관대학교',dept:'법학과 3학년',addr:'경기도 의왕시 오전로 45',ad:'나동 202호',gn:'이정호',gr:'부',daysAgo:11,sel:'미선발',ok:[0,1,2,3,4,5,6,7,8]}),
    mk(r0.id,c0,{name:'박지훈',birth:'040822',gender:'남',phone:'010-3456-7890',school:'경기대학교',dept:'컴퓨터공학과 1학년',addr:'경기도 의왕시 내손로 88',ad:'302호',gn:'박성수',gr:'부',daysAgo:10,miss:[5],rv:[[5,'서명 누락']],fb:true,notes:[{text:'부적격 안내 발송 완료',date:'2026-05-08',author:'담당자'}]}),
    mk(r0.id,c0,{name:'김민준',birth:'050315',gender:'남',phone:'010-4567-8901',school:'한양대학교',dept:'경영학과 2학년',addr:'경기도 의왕시 포일로 123',ad:'101동 505호',gn:'김영호',gr:'부',daysAgo:9,sel:'선발',ok:[0,1,2,3,4,5,6,7,8],notes:[{text:'이전 이력 중복 수혜 확인 요망',date:'2026-05-09',author:'담당자'}]}),
    mk(r0.id,c0,{name:'최수민',birth:'060101',gender:'여',phone:'010-5678-9012',school:'아주대학교',dept:'간호학과 2학년',addr:'경기도 의왕시 삼동로 55',ad:'',gn:'최기원',gr:'부',daysAgo:8,miss:[2,6]}),
    mk(r0.id,c0,{name:'정민지',birth:'050707',gender:'여',phone:'010-6789-0123',school:'경희대학교',dept:'식품영양학과 3학년',addr:'경기도 의왕시 청계로 78',ad:'A동 101호',gn:'정민우',gr:'모',daysAgo:7,sel:'선발',ok:[0,1,2,3,4,5,6,7,8]}),
    // ── 2026 상반기 고등부 ──
    mk(r0.id,c1,{name:'이준호',birth:'',gender:'남',phone:'010-7890-1234',school:'의왕고등학교',dept:'2학년 3반',addr:'경기도 의왕시 오전로 45',ad:'나동 301호',gn:'이정호',gr:'부',daysAgo:11,sel:'선발',ok:[0,1,2,3,4,5,6,7,8],notes:[{text:'형 이서연과 동일 주소 확인',date:'2026-05-07',author:'담당자'}]}),
    mk(r0.id,c1,{name:'강다은',birth:'',gender:'여',phone:'010-8901-2345',school:'의왕여자고등학교',dept:'3학년 1반',addr:'경기도 의왕시 포일로 200',ad:'',gn:'강철수',gr:'부',daysAgo:6,miss:[3],rv:[[3,'발급일 3개월 초과']],fb:true}),
    mk(r0.id,c1,{name:'윤서준',birth:'',gender:'남',phone:'010-9012-3456',school:'백운고등학교',dept:'1학년 2반',addr:'경기도 의왕시 내손로 12',ad:'',gn:'윤상철',gr:'부',daysAgo:5,miss:[6,7]}),
    // ── 2026 하반기 ──
    ...(r1&&cf?[
      mk(r1.id,cf,{name:'손지아',birth:'040530',gender:'여',phone:'010-1122-3344',school:'연세대학교',dept:'사회복지학과 2학년',addr:'경기도 의왕시 왕곡로 30',ad:'',gn:'손병호',gr:'부',daysAgo:3}),
      mk(r1.id,cf,{name:'임채원',birth:'030218',gender:'남',phone:'010-2233-4455',school:'고려대학교',dept:'경제학과 4학년',addr:'경기도 의왕시 오전로 99',ad:'202호',gn:'임수진',gr:'모',daysAgo:2}),
    ]:[]),
    // ── 2026 소상공인 ──
    ...(r2&&cs?[
      mk(r2.id,cs,{name:'오하늘',birth:'060315',gender:'여',phone:'010-3344-5566',school:'수원대학교',dept:'경영학과 1학년',addr:'경기도 의왕시 삼동로 80',ad:'301호',gn:'오철민',gr:'부',daysAgo:1}),
    ]:[]),
  ].filter(Boolean);
  DB.sa(apps);
}
function renderSB(){
  const s=gset();
  document.getElementById('sd').innerHTML=s.rounds.map(r=>`<div class="nsi${CRD===r.id&&document.getElementById('pd').style.display!=='none'?' on':''}" onclick="gD('${r.id}')">${r.label}</div>`).join('');
  document.getElementById('ss').innerHTML=s.rounds.map(r=>`<div class="nsi${CSD===r.id&&document.getElementById('ps').style.display!=='none'?' on':''}" onclick="gS('${r.id}')">${r.label}</div>`).join('');
}
function tg(g){const sub=document.getElementById('s'+g),arr=document.getElementById('a'+g),isO=sub.classList.contains('open');sub.classList.toggle('open',!isO);if(arr)arr.classList.toggle('open',!isO);if(!isO){if(g==='d')gD(CRD);if(g==='s')gS(CSD);}}
function gD(id){CRD=id;sp('d');mk('d',id);rD();}
function chSR(id){CSD=id;rSel();}
function chYR(y){CYR=y;rSel();}
function gS(id){CSD=id;sp('s');mk('s',id);rSel();}
function sp(n){['d','s','l','st','g'].forEach(p=>{document.getElementById('p'+p).style.display=p===n?'':'none';});}
function mk(g,id){document.querySelectorAll('.nsi').forEach(el=>el.classList.remove('on'));document.querySelectorAll('.ni').forEach(el=>el.classList.remove('on'));const sub=document.getElementById('s'+g);if(sub){sub.classList.add('open');const arr=document.getElementById('a'+g);if(arr)arr.classList.add('open');const rounds=gset().rounds;sub.querySelectorAll('.nsi').forEach((el,i)=>{if(rounds[i]?.id===id)el.classList.add('on');});}}
function sw(pane,navId){sp(pane==='dash'?'d':pane==='selection'?'s':pane==='legacy'?'l':pane==='settings'?'st':'g');document.querySelectorAll('.ni').forEach(el=>el.classList.remove('on'));const el=document.getElementById('n'+navId);if(el)el.classList.add('on');document.querySelectorAll('.nsi').forEach(el=>el.classList.remove('on'));}
function gcd(rId,cId){return gset().rounds.find(r=>r.id===rId)?.categories.find(c=>c.id===cId)?.docs||[];}
function gm(app){return gcd(app.roundId,app.categoryId).filter(d=>d.req&&!app.docs[d.id]);}
function gdw(app){
  const apps=DB.ga(),leg=gl2(),w=[];
  if(app.birth){const sp=apps.filter(a=>a.id!==app.id&&a.name===app.name&&a.birth===app.birth&&a.selected==='선발');const sl=leg.filter(a=>a.name===app.name&&a.birth===app.birth&&a.selected==='선발');if(sp.length||sl.length)w.push(`⚠ 동일인 중복: ${[...sp.map(a=>a.categoryName+'(현재)'),...sl.map(a=>a.categoryName+' '+a.roundLabel)].join(', ')}`);}
  if(app.addr){const key=ak(app.addr);const fp=apps.filter(a=>a.id!==app.id&&a.name!==app.name&&ak(a.addr)===key&&a.selected==='선발');const fl=leg.filter(a=>a.name!==app.name&&ak(a.addr)===key&&a.selected==='선발');if(fp.length||fl.length)w.push(`⚠ 동일주소 가족: ${[...fp.map(a=>a.name+'(현재)'),...fl.map(a=>a.name+' '+a.roundLabel)].join(', ')}`);}
  return w;
}
function rD(){
  if(!CRD){const s=gset();CRD=s.rounds[0]?.id||null;}
  const apps=DB.ga().filter(a=>a.roundId===CRD);
  const ok=apps.filter(a=>gm(a).length===0).length,sel=apps.filter(a=>a.selected==='선발').length;
  const fbP=apps.filter(a=>gm(a).length>0&&!a.feedbackSent).length;
  const td=apps.filter(a=>a.submittedAt?.startsWith(new Date().toISOString().slice(0,10))).length;
  const round=gset().rounds.find(r=>r.id===CRD);
  document.getElementById('dc').innerHTML=`
    <div style="display:flex;align-items:center;margin-bottom:14px"><h2 style="font-size:16px;font-weight:800">${round?.label||''} 접수 현황</h2></div>
    <div class="dg">
      <div class="dc"><div class="dl">전체 접수</div><div class="dn" style="color:var(--g)">${apps.length}</div></div>
      <div class="dc"><div class="dl">서류 완비</div><div class="dn" style="color:#2e7d32">${ok}</div></div>
      <div class="dc"><div class="dl">서류 미완</div><div class="dn" style="color:#c62828">${apps.length-ok}</div></div>
      <div class="dc"><div class="dl">안내 미발송</div><div class="dn" style="color:var(--o)">${fbP}</div></div>
      <div class="dc"><div class="dl">선발 확정</div><div class="dn" style="color:#1565c0">${sel}</div></div>
    </div>
    <div class="fb">
      <input type="text" id="q" placeholder="이름 / 학교 검색" oninput="rList()">
      <select id="fc" onchange="rList()"><option value="">전체 구분</option>${(round?.categories||[]).map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select>
      <select id="fs" onchange="rList()"><option value="">전체 상태</option><option value="ok">서류 완비</option><option value="ng">서류 미완</option><option value="fb">안내 미발송</option><option value="sel">선발 확정</option><option value="rv">부적격 있음</option></select>
      <div class="dg-btn"><button class="db" data-d="compact" onclick="sd2('compact')">좁게</button><button class="db" data-d="normal" onclick="sd2('normal')">보통</button><button class="db" data-d="wide" onclick="sd2('wide')">넓게</button></div>
      <button class="ibtn grn" onclick="oMan()">+ 수동 입력</button>
      <button class="ibtn" onclick="doBk()">⬇ CSV</button>
    </div>
    <div class="lw"><div class="lh"><div>#</div><div>이름</div><div>학교</div><div>구분</div><div>서류</div><div>검토</div><div>선발</div><div>안내발송</div><div>미제출 서류</div></div><div id="lb"></div></div>`;
  ld2();rList();
}
// ── 컬럼 드래그 리사이즈 ──
let colW=[28,90,130,100,65,80,90,90,120];
function loadColW(){const s=localStorage.getItem('schl_colw');if(s)try{colW=JSON.parse(s);}catch(e){}}
function saveColW(){localStorage.setItem('schl_colw',JSON.stringify(colW));}
function applyColW(){
  const tpl=colW.map((w,i)=>i===colW.length-1?'1fr':w+'px').join(' ');
  document.querySelectorAll('.lh,.lr').forEach(el=>el.style.gridTemplateColumns=tpl);
}
function initColResize(){
  const hdr=document.querySelector('.lh');if(!hdr)return;
  loadColW();applyColW();
  [...hdr.children].forEach((cell,i)=>{
    if(i>=colW.length-1)return;
    const rz=document.createElement('div');
    rz.className='col-rz';
    rz.addEventListener('mousedown',e=>{
      e.preventDefault();e.stopPropagation();
      rz.classList.add('dragging');
      const startX=e.pageX,startW=colW[i];
      const onMove=e=>{colW[i]=Math.max(36,startW+(e.pageX-startX));applyColW();};
      const onUp=()=>{rz.classList.remove('dragging');saveColW();document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);};
      document.addEventListener('mousemove',onMove);
      document.addEventListener('mouseup',onUp);
    });
    cell.appendChild(rz);
  });
}
function rList(){
  const q=(document.getElementById('q')?.value||'').toLowerCase(),fc=document.getElementById('fc')?.value||'',fs=document.getElementById('fs')?.value||'';
  let apps=DB.ga().filter(a=>a.roundId===CRD);
  if(q)apps=apps.filter(a=>a.name.includes(q)||a.school?.toLowerCase().includes(q));
  if(fc)apps=apps.filter(a=>a.categoryId===fc);
  if(fs==='ok')apps=apps.filter(a=>gm(a).length===0);
  if(fs==='ng')apps=apps.filter(a=>gm(a).length>0);
  if(fs==='fb')apps=apps.filter(a=>gm(a).length>0&&!a.feedbackSent);
  if(fs==='sel')apps=apps.filter(a=>a.selected==='선발');
  if(fs==='rv')apps=apps.filter(a=>Object.values(a.docReview||{}).some(r=>r.status==='ng'));
  const lb=document.getElementById('lb');if(!apps.length){lb.innerHTML='<div class="empty">해당 데이터가 없습니다</div>';return;}
  lb.innerHTML=apps.map((a,i)=>{
    const miss=gm(a),isOk=miss.length===0;
    const rvNg=Object.values(a.docReview||{}).filter(r=>r.status==='ng').length;
    const badge=isOk?'<span class="bdg ok">완비</span>':miss.length<=2?'<span class="bdg pt">일부누락</span>':'<span class="bdg ng">미완료</span>';
    const rvB=rvNg?`<span class="bdg ng">부적격 ${rvNg}</span>`:Object.keys(a.docReview||{}).length?'<span class="bdg ok">검토완료</span>':'<span style="color:var(--tx3);font-size:11px">미검토</span>';
    const selB=a.selected==='선발'?'<span class="bdg ok">선발</span>':a.selected==='미선발'?'<span class="bdg ng">미선발</span>':'-';
    const fb2=a.feedbackSent?`<span class="fbd2 s"></span>${a.feedbackSentAt?.slice(5,10)||''}`:isOk?'-':`<span class="fbd2 u"></span>미발송`;
    return`<div class="lr${SAP===a.id?' sel':''}" onclick="oP('${a.id}')">
      <div style="color:var(--tx3)">${i+1}</div>
      <div style="font-weight:800">${a.name}${gdw(a).length?'<span style="color:var(--o);margin-left:3px">⚠</span>':''}<span class="stag${a.source==='manual'?' m':''}">${a.source==='manual'?'수동':'온라인'}</span></div>
      <div style="font-size:12px;color:var(--tx2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.school||'-'}</div>
      <div style="font-size:12px">${a.categoryName||'-'}</div><div>${badge}</div><div>${rvB}</div><div>${selB}</div>
      <div style="font-size:12px">${fb2}</div>
      <div class="mt">${miss.length?miss.map(d=>d.name).join(', '):'-'}</div>
    </div>`;
  }).join('');
  requestAnimationFrame(initColResize);
}
function oP(id){const app=DB.ga().find(a=>a.id===id);if(!app)return;SAP=id;EM=false;rList();rPC(app);document.getElementById('panel').classList.add('on');document.getElementById('ov').classList.add('on');}
function closePanel(){SAP=null;document.getElementById('panel').classList.remove('on');document.getElementById('ov').classList.remove('on');rList();}
function toggleEdit(){EM=!EM;const app=DB.ga().find(a=>a.id===SAP);if(app)rPC(app);}
function rPC(app){
  const docs=gcd(app.roundId,app.categoryId),miss=gm(app),dups=gdw(app),supps=app.supplements||[];
  const rv=app.docReview||{},rvNg=docs.filter(d=>rv[d.id]?.status==='ng');
  const mMsg=miss.length?`안녕하세요, ${app.name} 지원자님.\n\n서류 검토 결과 아래 서류가 누락되어 있습니다.\n\n[미제출 서류]\n${miss.map((d,i)=>`  ${i+1}. ${d.name}`).join('\n')}\n\n접수번호: ${app.id}\n접수 사이트 보완 서류 제출 탭에서 제출해 주세요.\n\n의왕시인재육성재단 드림`:null;
  const rMsg=rvNg.length?`안녕하세요, ${app.name} 지원자님.\n\n제출하신 서류 검토 결과 아래 서류에 문제가 있습니다.\n\n[부적격 서류]\n${rvNg.map((d,i)=>`  ${i+1}. ${d.name}${rv[d.id]?.reason?' — '+rv[d.id].reason:''}`).join('\n')}\n\n수정된 서류를 재제출해 주세요.\n\n의왕시인재육성재단 드림`:null;
  document.getElementById('ptl').textContent=app.name;
  document.getElementById('ebt').style.background=EM?'rgba(255,255,255,.4)':'rgba(255,255,255,.2)';
  document.getElementById('pb2').innerHTML=`
    <div class="pm">${EM?`
      <div class="pmr"><span class="pml">이름</span><input class="pmi" id="en" value="${app.name||''}"></div>
      <div class="pmr"><span class="pml">학교</span><input class="pmi" id="es" value="${app.school||''}"></div>
      <div class="pmr"><span class="pml">학과/학년</span><input class="pmi" id="ed" value="${app.dept||''}"></div>
      <div class="pmr"><span class="pml">연락처</span><input class="pmi" id="ep" value="${app.phone||''}"></div>
      <div class="pmr"><span class="pml">이메일</span><input class="pmi" id="ee" value="${app.email||''}"></div>
      <div class="pmr"><span class="pml">주소</span><input class="pmi" id="ea" value="${app.addr||''}"></div>
      <div class="pmr"><span class="pml">상세주소</span><input class="pmi" id="ead" value="${app.addrDetail||''}"></div>
      <div class="pmr"><span class="pml">보호자</span><input class="pmi" id="eg" value="${app.guardianName||''}"></div>
      <div style="display:flex;gap:8px;margin-top:10px"><button class="ibtn grn" style="flex:1" onclick="sEd('${app.id}')">저장</button><button class="ibtn" onclick="EM=false;rPC(DB.ga().find(a=>a.id==='${app.id}'))">취소</button></div>`:`
      <div class="pmr"><span class="pml">접수번호</span><span class="pmv">${app.id}</span></div>
      <div class="pmr"><span class="pml">학교</span><span class="pmv">${app.school||'-'} ${app.dept?`(${app.dept})`:''}</span></div>
      <div class="pmr"><span class="pml">연락처</span><span class="pmv">${app.phone||'-'}</span></div>
      <div class="pmr"><span class="pml">주소</span><span class="pmv">${app.addr||'-'} ${app.addrDetail||''}</span></div>
      <div class="pmr"><span class="pml">보호자</span><span class="pmv">${app.guardianName||'-'}(${app.guardianRelation||'-'})</span></div>
      <div class="pmr"><span class="pml">구분</span><span class="pmv">${app.categoryName||'-'}</span></div>
      <div class="pmr"><span class="pml">접수일시</span><span class="pmv">${fdt(app.submittedAt)}</span></div>
      <div class="pmr"><span class="pml">선발여부</span><span class="pmv"><select class="ss" onchange="setSel('${app.id}',this.value)"><option value="">-</option><option value="선발" ${app.selected==='선발'?'selected':''}>✓ 선발</option><option value="미선발" ${app.selected==='미선발'?'selected':''}>✗ 미선발</option></select></span></div>`}
    </div>
    ${dups.map(w=>`<div class="wb">${w}</div>`).join('')}
    <div class="psec"><span>서류 검토 (${docs.filter(d=>d.req).length}개 필수)</span><span>${Object.keys(rv).length}개 검토완료</span></div>
    ${docs.filter(d=>d.req).length===0?'<div style="color:var(--tx3);font-size:13px;padding:8px 0">설정에서 서류 목록을 추가해 주세요</div>':docs.filter(d=>d.req).map(d=>{const r=rv[d.id]||{status:'pending'},sub=app.docs[d.id];
    return`<div class="dr${r.status==='ok'?' rok':r.status==='ng'?' rng':''}">
      <div class="dr-info">
        <div class="dr-nm">${sub?'✓':'✗'} ${d.name}</div>
        <div class="dr-reason">${r.reason||''}</div>
        ${sub?`<input class="ri" placeholder="부적격 사유..." value="${r.reason||''}" onchange="sDR('${app.id}','${d.id}',this.value)">`:''}
      </div>
      <div class="dr-btns">${sub?`<button class="rvb vw" onclick="vDoc('${app.id}','${d.id}')">보기</button><button class="rvb${r.status==='ok'?' ok':''}" onclick="sDS('${app.id}','${d.id}','ok')">적격</button><button class="rvb${r.status==='ng'?' ng':''}" onclick="sDS('${app.id}','${d.id}','ng')">부적격</button>`:'<span style="font-size:11px;color:var(--tx3)">미제출</span>'}</div>
    </div>`;}).join('')}
    ${mMsg?`<div class="psec">누락 안내</div><div class="mb" id="mm">${mMsg}</div><div class="ar"><button class="ab cp" onclick="cpEl('mm')">복사</button>${app.feedbackSent?`<button class="ab fd">✓ 발송완료 (${app.feedbackSentAt?.slice(5,10)||''})</button>`:`<button class="ab fs" onclick="mFb('${app.id}')">발송 완료 표시</button>`}</div>`:''}
    ${rMsg?`<div class="psec">부적격 안내</div><div class="mb" id="rm">${rMsg}</div><div class="ar"><button class="ab cp" onclick="cpEl('rm')">복사</button></div>`:''}
    ${!mMsg&&!rMsg?`<div style="background:var(--glt);border-radius:var(--r8);padding:12px;text-align:center;color:var(--g);font-weight:800;margin-top:12px">✓ 완비 · 검토 이상 없음</div>`:''}
    ${supps.length?`<div class="psec">보완 제출 이력 (${supps.length}회)</div>${supps.map(s=>`<div style="background:#f0f4ff;border-radius:var(--r8);padding:8px 10px;margin-bottom:5px;font-size:12px;color:var(--tx2)">${fdt(s.submittedAt)} · ${Object.keys(s.docs).length}개 추가</div>`).join('')}`:''}
    <div class="psec">특이사항</div>
    <div id="nw">${(app.notes||[]).length?(app.notes||[]).map(n=>`<div class="ni2">${n.text}<div class="nd">${n.date} · ${n.author||''}</div></div>`).join(''):'<div style="color:var(--tx3);font-size:12px;padding:4px 0">기록 없음</div>'}</div>
    <div class="nr"><textarea id="ni3" placeholder="특이사항 메모..."></textarea><button onclick="aN('${app.id}')">저장</button></div>`;
}
function sEd(id){const v=s=>document.getElementById(s)?.value.trim();const apps=DB.ga(),i=apps.findIndex(a=>a.id===id);if(i<0)return;apps[i].name=v('en')||apps[i].name;apps[i].school=v('es')||apps[i].school;apps[i].dept=v('ed');apps[i].phone=v('ep')||apps[i].phone;apps[i].email=v('ee');apps[i].addr=v('ea')||apps[i].addr;apps[i].addrDetail=v('ead');apps[i].guardianName=v('eg')||apps[i].guardianName;apps[i].notes=apps[i].notes||[];apps[i].notes.push({text:'기본정보 수정',date:new Date().toLocaleDateString('ko-KR'),author:ADM});DB.sa(apps);EM=false;document.getElementById('ptl').textContent=apps[i].name;rPC(apps[i]);rList();}
function sDS(aId,dId,st){const apps=DB.ga(),i=apps.findIndex(a=>a.id===aId);if(i<0)return;apps[i].docReview=apps[i].docReview||{};apps[i].docReview[dId]=apps[i].docReview[dId]||{};apps[i].docReview[dId].status=st;if(st==='ok')apps[i].docReview[dId].reason='';DB.sa(apps);rPC(apps[i]);rList();}
function sDR(aId,dId,reason){const apps=DB.ga(),i=apps.findIndex(a=>a.id===aId);if(i<0)return;apps[i].docReview=apps[i].docReview||{};apps[i].docReview[dId]=apps[i].docReview[dId]||{status:'ng'};apps[i].docReview[dId].reason=reason;DB.sa(apps);}
function vDoc(aId,dId){const app=DB.ga().find(a=>a.id===aId);const url=app?.fileUrls?.[dId];if(url)window.open(url,'_blank');else alert('Supabase/Firebase 연동 후 파일 보기 가능합니다.');}
function mFb(id){const apps=DB.ga(),i=apps.findIndex(a=>a.id===id);if(i<0)return;apps[i].feedbackSent=true;apps[i].feedbackSentAt=new Date().toISOString();apps[i].feedbackSentBy=ADM;DB.sa(apps);rPC(apps[i]);rList();}
function setSel(id,val){const apps=DB.ga(),i=apps.findIndex(a=>a.id===id);if(i<0)return;apps[i].selected=val||null;DB.sa(apps);rList();rSel();}
function cpEl(id){const el=document.getElementById(id);if(!el)return;navigator.clipboard.writeText(el.textContent).then(()=>{el.style.background='var(--glt)';setTimeout(()=>el.style.background='',1500);});}
function aN(id){const inp=document.getElementById('ni3');const text=inp?.value.trim();if(!text)return;const apps=DB.ga(),i=apps.findIndex(a=>a.id===id);if(i<0)return;apps[i].notes=apps[i].notes||[];apps[i].notes.push({text,date:new Date().toLocaleDateString('ko-KR'),author:ADM});DB.sa(apps);rPC(apps[i]);}
function oMan(){
  const s=gset(),round=s.rounds.find(r=>r.id===CRD);if(!round){alert('회차 설정을 먼저 해주세요');return;}
  document.getElementById('mi').innerHTML=`<h3>수동 접수 입력</h3>
    <label>구분 *</label><select id="mcc" onchange="rMD(this.value)">${round.categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select>
    <div class="r2"><div><label>이름 *</label><input type="text" id="mn"></div><div><label>성별</label><select id="mg"><option value="남">남</option><option value="여">여</option></select></div></div>
    <div class="r2"><div><label>생년월일</label><input type="text" id="mb3" placeholder="990101"></div><div><label>연락처 *</label><input type="text" id="mp" placeholder="010-0000-0000"></div></div>
    <label>학교명 *</label><input type="text" id="ms2">
    <label>학과/학년</label><input type="text" id="mdt">
    <label>이메일</label><input type="email" id="me2">
    <label>주소</label><div class="ar2"><input type="text" id="ma" placeholder="도로명주소" readonly><button class="abtn2" onclick="sMA()">검색</button></div>
    <input type="text" id="mad" placeholder="상세주소">
    <div class="r2"><div><label>보호자 이름 *</label><input type="text" id="mg2"></div><div><label>관계</label><select id="mr"><option value="부">부</option><option value="모">모</option><option value="조부">조부</option><option value="조모">조모</option><option value="기타">기타</option></select></div></div>
    <label>서류 현황</label>
    <div id="mds" style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:5px"></div>
    <div class="mbs"><button onclick="cM()">취소</button><button class="p" onclick="svM()">저장</button></div>`;
  const fc=round.categories[0];if(fc)rMD(fc.id);
  document.getElementById('mbg').classList.add('on');
}
function rMD(catId){
  const s=gset(),r=s.rounds.find(r=>r.id===CRD),cat=r?.categories.find(c=>c.id===catId);
  const w=document.getElementById('mds');if(!w||!cat)return;
  w.innerHTML=cat.docs.map(d=>`
    <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--bd);border-radius:var(--r8);margin-bottom:5px;background:var(--bg)">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600">${d.name}${d.req?'<span style="color:var(--o)">*</span>':''}</div>
        <div style="font-size:11px;color:var(--tx3)" id="mdfn-${d.id}">PDF 파일 선택</div>
      </div>
      <label style="cursor:pointer;background:var(--glt);color:var(--g);padding:5px 11px;border-radius:6px;font-size:12px;font-weight:700;flex-shrink:0;border:1px solid var(--g)">
        선택<input type="file" accept=".pdf" id="mdf-${d.id}" style="display:none" onchange="mdfSel(this,'${d.id}')">
      </label>
    </div>`).join('');
}
function mdfSel(input,docId){
  const nm=document.getElementById('mdfn-'+docId);
  if(!nm)return;
  if(input.files.length){nm.textContent='✓ '+input.files[0].name;nm.style.color='var(--g)';}
  else{nm.textContent='PDF 파일 선택';nm.style.color='';}
}
function svM(){
  const v=id=>document.getElementById(id)?.value.trim();
  const catId=document.getElementById('mcc')?.value,name=v('mn'),phone=v('mp'),school=v('ms2'),guardian=v('mg2');
  if(!name||!phone||!school||!guardian){alert('필수 항목을 입력해 주세요');return;}
  const s=gset(),r=s.rounds.find(r=>r.id===CRD),cat=r?.categories.find(c=>c.id===catId);
  const docs=Object.fromEntries((cat?.docs||[]).map(d=>[d.id,(document.getElementById('mdf-'+d.id)?.files?.length||0)>0]));
  const fileNames=Object.fromEntries((cat?.docs||[]).map(d=>{const f=document.getElementById('mdf-'+d.id)?.files?.[0];return[d.id,f?f.name:''];}));
  const id=gid(),apps=DB.ga();
  apps.push({id,roundId:CRD,categoryId:catId,categoryName:cat?.name||'',name,birth:v('mb3')||'',gender:v('mg')||'',phone,email:v('me2')||'',school,dept:v('mdt')||'',addr:v('ma')||'',addrDetail:v('mad')||'',guardianName:guardian,guardianRelation:v('mr')||'부',guardianPhone:'',submittedAt:new Date().toISOString(),source:'manual',docs,fileUrls:{},fileNames,docReview:{},notes:[{text:'방문/대리 접수 (수동 입력)',date:new Date().toLocaleDateString('ko-KR'),author:ADM}],feedbackSent:false,feedbackSentAt:null,supplements:[],selected:null});
  DB.sa(apps);cM();rD();renderSB();
}
function cdm(){setTimeout(()=>{document.querySelectorAll('div[id^="__daum__"],iframe[id^="__daum__"]').forEach(el=>el.remove());document.body.style.overflow='';},100);}
function sMA(){new daum.Postcode({oncomplete:function(d){cdm();document.getElementById('ma').value=d.roadAddress||d.jibunAddress;setTimeout(()=>document.getElementById('mad')?.focus(),150);}}).open();}
function doBk(){
  const s=gset(),apps=DB.ga().filter(a=>a.roundId===CRD);
  const label=s.rounds.find(r=>r.id===CRD)?.label||'';
  const rows=[['접수번호','이름','성별','생년월일','학교','연락처','이메일','주소','보호자','구분','접수일시','선발여부','누락서류','메모']];
  apps.forEach(a=>{const miss=gm(a);rows.push([a.id,a.name,a.gender||'',a.birth||'',a.school||'',a.phone||'',a.email||'',a.addr||'',`${a.guardianName||''}(${a.guardianRelation||''})`,a.categoryName||'',a.submittedAt?.slice(0,16)||'',a.selected||'-',miss.map(d=>d.name).join(', '),(a.notes||[]).map(n=>n.text).join(' / ')]);});
  csvD(rows,`장학생_${label}_${new Date().toISOString().slice(0,10)}.csv`);
  localStorage.setItem('backup_'+CRD, new Date().toISOString());
}
function csvD(rows,fname){const csv=rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');const b=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=fname;a.click();}
function rSel(){
  if(!CSD){const s=gset();CSD=s.rounds[0]?.id||null;}
  const s=gset(),apps=DB.ga(),leg=gl2(),allRounds=s.rounds;
  const allSel=[...apps.filter(a=>a.selected==='선발'),...leg.filter(a=>a.selected==='선발')];
  const dupM={};allSel.forEach(a=>{if(!a.birth)return;const k=`${a.name}_${a.birth}`;if(!dupM[k])dupM[k]=[];dupM[k].push(a);});
  const dups=Object.values(dupM).filter(g=>g.length>=2);
  const famM={};allSel.forEach(a=>{if(!a.addr)return;const k=ak(a.addr);if(!famM[k])famM[k]=[];famM[k].push(a);});
  const famD=Object.values(famM).filter(g=>g.length>=2&&new Set(g.map(a=>a.name)).size>=2);

  // 년도 목록 추출
  const years=[...new Set([...allRounds.map(r=>r.label.match(/\d{4}/)?.[0]),...leg.map(a=>a.roundLabel?.match(/\d{4}/)?.[0])].filter(Boolean))].sort((a,b)=>b-a);

  let tableHtml='';
  if(SMODE==='round'){
    const round=allRounds.find(r=>r.id===CSD);
    const ra=apps.filter(a=>a.roundId===CSD);
    const totalSel=ra.filter(a=>a.selected==='선발').length;
    const catR=(round?.categories||[]).map(cat=>{const ca=ra.filter(a=>a.categoryId===cat.id);const sel=ca.filter(a=>a.selected==='선발').length;const pct=ca.length?Math.round(sel/ca.length*100):0;return`<tr><td>${cat.name}</td><td style="text-align:center;font-weight:800">${ca.length}</td><td style="text-align:center;font-weight:800;color:var(--g)">${sel}</td><td><span>${pct}%</span><span class="pb2"><span class="pf" style="width:${pct}%"></span></span></td></tr>`;}).join('');
    tableHtml=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px"><h3 style="font-size:14px;font-weight:800">${round?.label||''} 구분별 현황</h3><button class="ibtn" onclick="expSel('${CSD}')">⬇ 선발 명단 CSV</button></div>
    <div class="sg"><div class="sc2"><div class="n" style="color:var(--g)">${ra.length}</div><div class="l">전체 접수</div></div><div class="sc2"><div class="n" style="color:#1565c0">${totalSel}</div><div class="l">선발 확정</div></div><div class="sc2"><div class="n" style="color:#c62828">${dups.length}</div><div class="l">중복 수혜자</div></div><div class="sc2"><div class="n" style="color:var(--o)">${famD.length}</div><div class="l">가족 중복 가능</div></div></div>
    <table class="st"><thead><tr><th>구분</th><th style="text-align:center">접수</th><th style="text-align:center">선발</th><th>선발률</th></tr></thead><tbody>${catR}<tr style="background:var(--glt)"><td style="font-weight:800">합계</td><td style="text-align:center;font-weight:800">${ra.length}</td><td style="text-align:center;font-weight:800;color:var(--g)">${totalSel}</td><td></td></tr></tbody></table>`;
  } else {
    // 년도별 모드
    if(!CYR)CYR=years[0];
    const yrApps=apps.filter(a=>{const r=allRounds.find(r=>r.id===a.roundId);return r?.label?.includes(CYR);});
    const yrLeg=leg.filter(a=>a.roundLabel?.includes(CYR)&&a.selected==='선발');
    const yrSel=yrApps.filter(a=>a.selected==='선발').length;
    // 회차별 집계
    const rndRows=allRounds.filter(r=>r.label?.includes(CYR)).map(r=>{
      const ra2=yrApps.filter(a=>a.roundId===r.id);const sel2=ra2.filter(a=>a.selected==='선발').length;const pct=ra2.length?Math.round(sel2/ra2.length*100):0;
      return`<tr><td style="font-weight:700">${r.label}</td><td colspan="2" style="color:var(--tx3);font-size:12px">${r.categories.map(c=>c.name).join(', ')}</td><td style="text-align:center;font-weight:800">${ra2.length}</td><td style="text-align:center;font-weight:800;color:var(--g)">${sel2}</td><td><span>${pct}%</span><span class="pb2"><span class="pf" style="width:${pct}%"></span></span></td></tr>
      ${r.categories.map(cat=>{const ca=yrApps.filter(a=>a.roundId===r.id&&a.categoryId===cat.id);const s2=ca.filter(a=>a.selected==='선발').length;const p2=ca.length?Math.round(s2/ca.length*100):0;return`<tr style="background:#f8faf8"><td style="padding-left:20px;color:var(--tx2);font-size:12px">└ ${cat.name}</td><td></td><td></td><td style="text-align:center">${ca.length}</td><td style="text-align:center;color:var(--g)">${s2}</td><td><span>${p2}%</span></td></tr>`;}).join('')}`;
    }).join('');
    tableHtml=`<div style="display:flex;align-items:center;margin-bottom:10px;gap:8px"><h3 style="font-size:14px;font-weight:800">${CYR}년 연간 현황</h3></div>
    <div class="sg"><div class="sc2"><div class="n" style="color:var(--g)">${yrApps.length}</div><div class="l">${CYR}년 접수</div></div><div class="sc2"><div class="n" style="color:#1565c0">${yrSel}</div><div class="l">선발 확정</div></div><div class="sc2"><div class="n" style="color:#c62828">${yrSel+yrLeg.length}</div><div class="l">누적 수혜 (이전포함)</div></div><div class="sc2"><div class="n" style="color:var(--o)">${famD.length}</div><div class="l">중복 가능</div></div></div>
    <table class="st"><thead><tr><th>회차</th><th></th><th></th><th style="text-align:center">접수</th><th style="text-align:center">선발</th><th>선발률</th></tr></thead><tbody>${rndRows||'<tr><td colspan="6" style="text-align:center;color:var(--tx3);padding:20px">해당 없음</td></tr>'}</tbody></table>`;
  }

  document.getElementById('sc').innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
      <div style="display:flex;border:1px solid var(--bd);border-radius:var(--r8);overflow:hidden">
        <button class="db${SMODE==='round'?' on':''}" onclick="SMODE='round';rSel()">회차별</button>
        <button class="db${SMODE==='year'?' on':''}" onclick="SMODE='year';rSel()">년도별</button>
      </div>
      ${SMODE==='round'?`<div style="display:flex;gap:5px;flex-wrap:wrap">${allRounds.map(r=>`<button class="db${CSD===r.id?' on':''}" onclick="chSR('${r.id}')">${r.label}</button>`).join('')}</div>`:
      `<div style="display:flex;gap:5px;flex-wrap:wrap">${years.map(y=>`<button class="db${CYR===y?' on':''}" onclick="chYR('${y}')">${y}년</button>`).join('')}</div>`}
    </div>
    <div class="card">${tableHtml}</div>
    <div class="card"><div class="cttl"><div class="cttl-l" style="color:#c62828">⚠ 중복 수혜 (이름+생년월일)</div></div>${dups.length?dups.map(g=>`<div class="hi"><div style="font-weight:800;font-size:15px">${g[0].name} <span class="dup-b">중복 ${g.length}회</span></div><div style="font-size:12px;color:var(--tx3)">${g[0].birth} · ${g[0].addr||'-'}</div>${g.map(a=>`<span class="hb y" style="margin-right:4px">${a.categoryName} (${a.roundLabel||'현재'})</span>`).join('')}</div>`).join(''):'<div style="color:var(--g);font-weight:700;text-align:center;padding:10px">해당 없음 ✓</div>'}</div>
    <div class="card"><div class="cttl"><div class="cttl-l" style="color:var(--o)">⚠ 가족 중복 가능 (동일 주소)</div></div>${famD.length?famD.map(g=>`<div class="hi"><div style="font-weight:800">${g.length}명 동일 주소 <span class="fam-b">확인 필요</span></div><div style="font-size:12px;color:var(--tx3);margin-top:3px">${g[0].addr}</div>${g.map(a=>`<div style="font-size:13px;margin-top:5px"><strong>${a.name}</strong> · ${a.categoryName} (${a.roundLabel||'현재'})</div>`).join('')}</div>`).join(''):'<div style="color:var(--g);font-weight:700;text-align:center;padding:10px">해당 없음 ✓</div>'}</div>
    <div class="card"><div class="cttl"><div class="cttl-l">수혜 이력 조회 (현재+이전)</div></div><div class="hs"><input type="text" id="hq" placeholder="이름 검색 (예: 홍길동)"><button onclick="sH()">조회</button></div><div id="hr"></div></div>`;
}
function sH(){
  const q=document.getElementById('hq')?.value.trim();if(!q){alert('이름 입력');return;}
  const s=gset(),apps=DB.ga(),leg=gl2();
  const all=[...apps.map(a=>({...a,_t:'current',roundLabel:s.rounds.find(r=>r.id===a.roundId)?.label||a.roundId})),...leg.map(a=>({...a,_t:'legacy'}))].filter(a=>a.name.includes(q));
  const res=document.getElementById('hr');if(!all.length){res.innerHTML=`<div style="color:var(--tx3);text-align:center;padding:16px">"${q}" 이력 없음</div>`;return;}
  const grps={};all.forEach(a=>{const k=`${a.name}_${a.birth||'x'}`;if(!grps[k])grps[k]=[];grps[k].push(a);});
  res.innerHTML=Object.values(grps).map(grp=>{const rep=grp[0],selC=grp.filter(a=>a.selected==='선발').length;return`<div class="hi"><div style="font-size:12px;color:var(--tx3)">생년월일: ${rep.birth||'-'} · 보호자: ${rep.guardianName||'-'}</div><div style="font-size:15px;font-weight:800;margin:4px 0">${rep.name}${selC>=2?' <span class="dup-b">중복 수혜 주의</span>':''}</div><div style="font-size:12px;color:var(--tx2)">${rep.phone||'-'} · ${rep.school||'-'}</div><div style="margin-top:8px;display:flex;flex-direction:column;gap:5px">${grp.map(a=>`<div style="border:1px solid var(--bd);border-radius:var(--r8);padding:9px 12px"><div style="font-size:11px;color:var(--tx3)">${a._t==='legacy'?'이전이력':'현재접수'} · ${a.roundLabel||'-'}</div><div style="font-weight:700;margin-top:2px">${a.categoryName||'-'}</div><span class="hb ${a.selected==='선발'?'y':a.selected==='미선발'?'n':'p'}">${a.selected||'검토중'}</span></div>`).join('')}</div></div>`;}).join('');
}
function expSel(rId){const s=gset(),apps=DB.ga().filter(a=>a.roundId===rId&&a.selected==='선발');const label=s.rounds.find(r=>r.id===rId)?.label||'';const rows=[['접수번호','이름','성별','생년월일','학교','연락처','주소','구분']];apps.forEach(a=>rows.push([a.id,a.name,a.gender||'',a.birth||'',a.school||'',a.phone||'',a.addr||'',a.categoryName||'']));csvD(rows,`선발명단_${label}.csv`);}
function rL(){
  const leg=gl2();
  document.getElementById('lc').innerHTML=`
    <div class="card"><div class="cttl"><div class="cttl-l">이전 선발 이력 관리</div></div>
      <div class="csv-ac"><button class="ibtn grn" onclick="dlTpl()">⬇ CSV 양식 다운로드</button><label class="ibtn" style="cursor:pointer">⬆ CSV 업로드<input type="file" accept=".csv" style="display:none" onchange="ulLeg(this)"></label><button class="ibtn red" onclick="clrLeg()">이력 초기화</button></div>
    </div>
    <div class="card"><div class="cttl"><div class="cttl-l">회차 자동 이관</div></div>
      <div style="font-size:13px;color:var(--tx2);margin-bottom:12px;line-height:1.7">회차 종료 후 접수 데이터를 이전 이력으로 이관합니다. 원본 데이터는 유지됩니다.</div>
      ${gset().rounds.map(r=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--bd);border-radius:var(--r8);margin-bottom:6px;background:var(--bg)"><div><div style="font-weight:700">${r.label}</div><div style="font-size:12px;color:var(--tx3)">${DB.ga().filter(a=>a.roundId===r.id).length}명 접수됨</div></div><button class="ibtn blu" onclick="atf('${r.id}')">이전 이력으로 이관</button></div>`).join('')}
    </div>
    <div class="card"><div class="cttl"><div class="cttl-l">이력 목록 (${leg.length}건)</div></div>
      <div class="lw2">
        <div class="lh2"><div>이름</div><div>생년월일</div><div>학교</div><div>연락처</div><div>주소</div><div>보호자</div><div>회차 · 구분</div><div>선발</div><div></div></div>
        <div>${leg.length?leg.map(a=>`<div class="li">
          <div style="font-weight:700">${a.name}</div>
          <div style="color:var(--tx2)">${a.birth||'-'}</div>
          <div style="color:var(--tx2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.school||'-'}</div>
          <div style="color:var(--tx2)">${a.phone||'-'}</div>
          <div style="color:var(--tx2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${a.addr||''}">${a.addr||'-'}</div>
          <div style="color:var(--tx2)">${a.guardianName||'-'}</div>
          <div style="font-size:11px;color:var(--tx2)">${a.roundLabel||'-'}<br>${a.categoryName||'-'}</div>
          <div><span class="hb ${a.selected==='선발'?'y':'n'}" style="margin:0">${a.selected||'-'}</span></div>
          <div><button class="ibtn red" style="padding:3px 8px;font-size:11px" onclick="dlLeg('${a.id}')">삭제</button></div>
        </div>`).join(''):'<div class="empty">이전 이력이 없습니다</div>'}</div>
      </div>
    </div>`;
}
function atf(rId){const s=gset(),round=s.rounds.find(r=>r.id===rId);const apps=DB.ga().filter(a=>a.roundId===rId);if(!apps.length){alert('이관할 데이터가 없습니다');return;}if(!confirm(`${round?.label||rId} (${apps.length}건)을 이전 이력으로 이관합니까?`))return;const items=apps.map(a=>({id:'tr-'+a.id,name:a.name,birth:a.birth||'',school:a.school||'',phone:a.phone||'',addr:a.addr||'',addrDetail:a.addrDetail||'',guardianName:a.guardianName||'',roundLabel:round?.label||rId,categoryName:a.categoryName||'',selected:a.selected||'미선발'}));DB.sl([...gl2(),...items]);rL();rSel();alert(`${items.length}건 이관 완료`);}
function dlTpl(){csvD([['이름','생년월일(고등부빈칸)','학교','연락처','주소','상세주소','보호자','회차명','구분명','선발여부'],['홍길동','990101','한양대학교','010-1234-5678','경기도 의왕시 포일로 123','101동','홍판서','2025년 상반기','대학부 희망드림','선발']],'이전이력_양식.csv');}
function ulLeg(input){if(!input.files.length)return;const reader=new FileReader();reader.onload=e=>{try{const lines=e.target.result.replace(/\r/g,'').split('\n').filter(l=>l.trim());const items=lines.slice(1).map((line,i)=>{const v=pCSV(line);return{id:'lg-up-'+Date.now()+'-'+i,name:v[0]||'',birth:v[1]||'',school:v[2]||'',phone:v[3]||'',addr:v[4]||'',addrDetail:v[5]||'',guardianName:v[6]||'',roundLabel:v[7]||'',categoryName:v[8]||'',selected:v[9]||'선발'};}).filter(a=>a.name);if(!items.length){alert('유효한 데이터 없음');return;}DB.sl([...gl2(),...items]);rL();rSel();alert(`${items.length}건 추가됨`);}catch(err){alert('파싱 오류: '+err.message);}};reader.readAsText(input.files[0],'UTF-8');input.value='';}
function pCSV(l){const r=[];let c='',q=false;for(let i=0;i<l.length;i++){const ch=l[i];if(ch==='"'){if(q&&l[i+1]==='"'){c+='"';i++;}else q=!q;}else if(ch===','&&!q){r.push(c.trim());c='';}else c+=ch;}r.push(c.trim());return r;}
function dlLeg(id){if(!confirm('삭제합니까?'))return;DB.sl(gl2().filter(a=>a.id!==id));rL();rSel();}
function clrLeg(){if(!confirm('모든 이전 이력을 초기화합니까?'))return;DB.sl([]);rL();rSel();}
function rSt(){
  const s=gset();
  document.getElementById('stc').innerHTML=`
    <div class="stt"><div class="st-t${CST==='rounds'?' on':''}" onclick="swST('rounds')">회차 및 구분</div><div class="st-t${CST==='account'?' on':''}" onclick="swST('account')">계정 설정</div></div>
    <div id="str" style="display:${CST==='rounds'?'block':'none'}">
      <div class="card"><div class="cttl"><div class="cttl-l">회차 목록</div><button class="ibtn grn" onclick="oAR()">+ 회차 추가</button></div>
      ${s.rounds.map(r=>{const backed=localStorage.getItem('backup_'+r.id);return`<div class="ri2">
        <div class="rih"><div class="rin">${r.label}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <button class="ibtn" onclick="oAC('${r.id}')">+ 구분 추가</button>
            <button class="ibtn org" onclick="bkR('${r.id}')">⬇ 백업</button>
            <button class="ibtn red" onclick="dR('${r.id}',${!!backed})"${!backed?' title="먼저 백업해 주세요"':''}>삭제${!backed?' 🔒':''}</button>
          </div>
        </div>
        ${backed?`<div style="font-size:11px;color:var(--tx3);margin-bottom:6px">최근 백업: ${new Date(backed).toLocaleDateString('ko-KR')}</div>`:'<div style="font-size:11px;color:var(--o);margin-bottom:6px">⚠ 백업 후 삭제 가능</div>'}
        ${r.categories.map(c=>{const st=cs(c);return`<div class="ci"><div class="cih"><div><div class="cin"><span class="sdot ${st}"></span>${c.name}</div><div class="cip">${c.startDate} ~ ${c.endDate} ${c.endTime||''}</div></div><div style="display:flex;gap:5px"><button class="ibtn" onclick="oEC('${r.id}','${c.id}')">편집</button><button class="ibtn red" onclick="dC('${r.id}','${c.id}')">삭제</button></div></div><div>${c.docs.map(d=>`<span class="dtag">${d.req?'<span style="color:var(--o)">*</span> ':''}${d.name}</span>`).join('')}</div></div>`;}).join('')}
        ${!r.categories.length?'<div style="color:var(--tx3);font-size:12px;padding:4px">구분이 없습니다</div>':''}
      </div>`;}).join('')}
      </div>
    </div>
    <div id="sta" style="display:${CST==='account'?'block':'none'}">
      <div class="card"><div class="cttl"><div class="cttl-l">계정 정보</div></div><div style="font-size:13px;color:var(--tx2);line-height:2">현재 계정: <strong>admin</strong><br>변경: admin.html 내 <code style="background:#f0f4f0;padding:1px 6px;border-radius:4px">ACCS</code> 배열의 pw 수정</div></div>
    </div>`;
}
function swST(t){CST=t;rSt();}
function bkR(rId){const s=gset(),apps=DB.ga().filter(a=>a.roundId===rId);const label=s.rounds.find(r=>r.id===rId)?.label||'';const rows=[['접수번호','이름','성별','생년월일','학교','연락처','주소','보호자','구분','접수일시','선발여부','누락서류','메모']];apps.forEach(a=>{const miss=gm(a);rows.push([a.id,a.name,a.gender||'',a.birth||'',a.school||'',a.phone||'',a.addr||'',`${a.guardianName||''}(${a.guardianRelation||''})`,a.categoryName||'',a.submittedAt?.slice(0,16)||'',a.selected||'-',miss.map(d=>d.name).join(', '),(a.notes||[]).map(n=>n.text).join(' / ')]);});csvD(rows,`백업_${label}_${new Date().toISOString().slice(0,10)}.csv`);localStorage.setItem('backup_'+rId,new Date().toISOString());rSt();}
function dR(id,backed){if(!backed){alert('⚠ 먼저 백업(⬇ 백업 버튼)을 진행해야 삭제할 수 있습니다.');return;}if(!confirm('이 회차를 삭제합니까? 접수 데이터는 유지됩니다.'))return;const s=gset();s.rounds=s.rounds.filter(r=>r.id!==id);DB.ss(s);rSt();rD();renderSB();}
function oAR(){document.getElementById('mi').innerHTML=`<h3>회차 추가</h3><label>회차명 *</label><input type="text" id="ml" placeholder="2026년 상반기"><div class="mbs"><button onclick="cM()">취소</button><button class="p" onclick="aR()">추가</button></div>`;document.getElementById('mbg').classList.add('on');}
function aR(){const l=document.getElementById('ml')?.value.trim();if(!l){alert('회차명을 입력하세요');return;}const s=gset();s.rounds.push({id:uid(),label:l,categories:[]});DB.ss(s);cM();rSt();renderSB();}
function oAC(rid){oCM(rid,null);}
function oEC(rid,cid){const s=gset(),cat=s.rounds.find(r=>r.id===rid)?.categories.find(c=>c.id===cid);oCM(rid,cat);}
function oCM(rid,cat){
  const docs=cat?.docs||[{id:uid(),name:'장학금 신청서',req:true}];
  document.getElementById('mi').innerHTML=`<h3>${cat?'구분 편집':'구분 추가'}</h3>
    <label>구분명 *</label><input type="text" id="mn2" value="${cat?.name||''}" placeholder="대학부 희망드림">
    <div class="r2"><div><label>접수 시작 *</label><input type="date" id="mst" value="${cat?.startDate||''}"></div><div><label>접수 종료 *</label><input type="date" id="men" value="${cat?.endDate||''}"></div></div>
    <label>마감 시간</label><input type="time" id="met" value="${cat?.endTime||'18:00'}" style="width:120px">
    <div style="font-size:12px;font-weight:800;color:var(--tx2);margin:12px 0 6px">제출 서류 (* 필수)</div>
    <div id="mds2">${docs.map(d=>`<div class="der"><input type="checkbox" ${d.req?'checked':''}><input type="text" value="${d.name}" placeholder="서류명"><button class="ibtn red" style="padding:4px 9px;font-size:11px" onclick="this.parentElement.remove()">삭제</button></div>`).join('')}</div>
    <button class="ibtn" onclick="addDR2()" style="margin-top:6px">+ 서류 추가</button>
    <div class="mbs"><button onclick="cM()">취소</button><button class="p" onclick="svC('${rid}','${cat?.id||''}')">저장</button></div>`;
  document.getElementById('mbg').classList.add('on');
}
function addDR2(){document.getElementById('mds2').insertAdjacentHTML('beforeend',`<div class="der"><input type="checkbox" checked><input type="text" placeholder="서류명"><button class="ibtn red" style="padding:4px 9px;font-size:11px" onclick="this.parentElement.remove()">삭제</button></div>`);}
function svC(rid,cid){
  const name=document.getElementById('mn2')?.value.trim(),start=document.getElementById('mst')?.value,end=document.getElementById('men')?.value,et=document.getElementById('met')?.value;
  if(!name||!start||!end){alert('필수 항목을 입력하세요');return;}
  const rows=document.querySelectorAll('#mds2 .der'),docs=[];
  rows.forEach(r=>{const n=r.querySelector('input[type=text]')?.value.trim(),req=r.querySelector('input[type=checkbox]')?.checked||false;if(n)docs.push({id:uid(),name:n,req});});
  if(!docs.length){alert('서류를 최소 1개 추가하세요');return;}
  const s=gset(),r=s.rounds.find(r=>r.id===rid);if(!r)return;
  if(cid){const i=r.categories.findIndex(c=>c.id===cid);if(i>=0)r.categories[i]={...r.categories[i],name,startDate:start,endDate:end,endTime:et,docs};}
  else r.categories.push({id:uid(),name,startDate:start,endDate:end,endTime:et,docs});
  DB.ss(s);cM();rSt();renderSB();
}
function dC(rid,cid){if(!confirm('이 구분을 삭제합니까?'))return;const s=gset(),r=s.rounds.find(r=>r.id===rid);if(r)r.categories=r.categories.filter(c=>c.id!==cid);DB.ss(s);rSt();}
function rG(){
  document.getElementById('gc').innerHTML=`<div style="max-width:760px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap">
      <img src="logo.png" style="height:30px;object-fit:contain" onerror="this.style.display='none'">
      <div><div style="font-size:18px;font-weight:800;color:var(--g)">장학생 접수 관리 시스템</div><div style="font-size:12px;color:var(--tx3)">의왕시인재육성재단 · 관리자 매뉴얼</div></div>
      <span style="margin-left:auto;background:var(--glt);color:var(--g);font-size:12px;font-weight:800;padding:5px 13px;border-radius:var(--r20)">v1.3.0</span>
    </div>
    <div class="card"><div class="cttl"><div class="cttl-l">버전 이력</div></div>
    ${[{ver:'v1.3.0',date:'2026.05',latest:true,items:['라이트 사이드바 (화이트 테마)','접수/선발현황 사이드바 확장 서브메뉴','행 밀도 버튼, 열 드래그 조절','서류 출력·삭제 버튼','선발현황 년도별 구분','설정 회차별 백업/삭제','이전이력 전체 컬럼 표시']},{ver:'v1.2.0',date:'2026.05',latest:false,items:['서류 검토 (적격/부적격/사유)','기본정보 인라인 수정','선발현황 대시보드','이전이력 자동 이관','도움말 탭']},{ver:'v1.0.0',date:'2026.05',latest:false,items:['최초 시스템 구축']},].map(v=>`<div style="display:flex;gap:14px;margin-bottom:16px"><div style="flex-shrink:0;text-align:right;width:64px"><div style="font-weight:800;font-size:13px;color:${v.latest?'var(--g)':'var(--tx3)'}">${v.ver}</div><div style="font-size:11px;color:var(--tx3)">${v.date}</div>${v.latest?'<span style="background:var(--glt);color:var(--g);font-size:10px;font-weight:800;padding:2px 7px;border-radius:10px">최신</span>':''}</div><div style="flex:1;border-left:2px solid ${v.latest?'var(--g)':'var(--bd)'};padding-left:14px"><ul style="padding-left:14px;font-size:13px;color:var(--tx2);line-height:2">${v.items.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>`).join('')}
    </div>
    <div class="card"><div class="cttl"><div class="cttl-l">기술 안내</div></div>
    <div style="font-size:13px;color:var(--tx2);line-height:2">
      <strong>저장 방식</strong>: 브라우저 로컬 저장 (localStorage) — 같은 기기·같은 브라우저에서만 유지<br>
      <strong>Supabase 연동 후</strong>: 모든 기기 공유, PDF 클라우드 저장, 파일 보기 활성화<br>
      <strong>로그인 변경</strong>: admin.html 내 <code style="background:#f0f4f0;padding:1px 6px;border-radius:4px">ACCS</code> 배열 수정<br>
      <strong>열 너비</strong>: 헤더 경계선 드래그로 조절, 자동 저장
    </div></div>
    </div>`;
}
function cM(){document.getElementById('mbg').classList.remove('on');}
document.getElementById('mbg').addEventListener('click',e=>{if(e.target===document.getElementById('mbg'))cM();});
  document.getElementById('gc').innerHTML=`<div style="max-width:760px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap">
      <img src="logo.png" style="height:30px;object-fit:contain" onerror="this.style.display='none'">
      <div><div style="font-size:18px;font-weight:800;color:var(--g)">장학생 접수 관리 시스템</div><div style="font-size:12px;color:var(--tx3)">의왕시인재육성재단 · 관리자 매뉴얼</div></div>
      <span style="margin-left:auto;background:var(--glt);color:var(--g);font-size:12px;font-weight:800;padding:5px 13px;border-radius:var(--r20)">v1.3.0</span>
    </div>
    <div class="card"><div class="cttl"><div class="cttl-l">버전 이력</div></div>
    ${[{ver:'v1.3.0',date:'2026.05',latest:true,items:['라이트 사이드바 레이아웃 (화이트 테마)','로고 이미지 통합 반영','접수현황·선발현황 사이드바 확장 서브메뉴','행 밀도 버튼 (좁게/보통/넓게)','설정 회차별 백업 버튼, 백업 후에만 삭제 가능','이전이력 헤더 확장 (학교·연락처·주소·보호자)']},{ver:'v1.2.0',date:'2026.05',latest:false,items:['서류 검토 기능 (적격/부적격/사유)','기본정보 인라인 수정','선발현황 대시보드','이전이력 회차 자동 이관','도움말 탭']},{ver:'v1.0.0',date:'2026.05',latest:false,items:['최초 시스템 구축']},].map(v=>`<div style="display:flex;gap:14px;margin-bottom:16px"><div style="flex-shrink:0;text-align:right;width:64px"><div style="font-weight:800;font-size:13px;color:${v.latest?'var(--g)':'var(--tx3)'}">${v.ver}</div><div style="font-size:11px;color:var(--tx3)">${v.date}</div>${v.latest?'<span style="background:var(--glt);color:var(--g);font-size:10px;font-weight:800;padding:2px 7px;border-radius:10px">최신</span>':''}</div><div style="flex:1;border-left:2px solid ${v.latest?'var(--g)':'var(--bd)'};padding-left:14px"><ul style="padding-left:14px;font-size:13px;color:var(--tx2);line-height:2">${v.items.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>`).join('')}
    </div></div>`;
}
function printPanel(){
  const app=DB.ga().find(a=>a.id===SAP);if(!app)return;
  const docs=gcd(app.roundId,app.categoryId);
  const miss=gm(app);
  const rv=app.docReview||{};
  const w=window.open('','_blank','width=680,height=900');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>접수내역_${app.name}</title>
  <style>body{font-family:'Apple SD Gothic Neo',sans-serif;padding:28px;font-size:13px;color:#1a1a1a;line-height:1.8}
  h1{font-size:18px;font-weight:800;margin-bottom:6px;color:#2B7A3C}
  .sub{font-size:12px;color:#999;margin-bottom:20px}
  table{width:100%;border-collapse:collapse;margin-bottom:18px}
  th{background:#f2f5f2;padding:8px 12px;text-align:left;font-size:12px;font-weight:700;color:#555;border:1px solid #e4eae4;width:100px}
  td{padding:8px 12px;border:1px solid #e4eae4;font-size:13px}
  .sec{font-size:11px;font-weight:800;color:#999;margin:16px 0 6px;text-transform:uppercase;letter-spacing:.5px}
  .doc-row{display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid #e4eae4;border-radius:6px;margin-bottom:5px;font-size:13px}
  .ok{color:#2B7A3C;font-weight:700}.ng{color:#c62828;font-weight:700}.miss{color:#E8673A}
  .footer{margin-top:30px;padding-top:14px;border-top:1px solid #e4eae4;font-size:11px;color:#999;text-align:center}
  @media print{body{padding:0}}</style></head><body>
  <h1>장학금 신청서 접수 내역</h1>
  <div class="sub">의왕시인재육성재단 · 출력일: ${new Date().toLocaleDateString('ko-KR')} · 접수번호: ${app.id}</div>
  <div class="sec">기본 정보</div>
  <table>
    <tr><th>이름</th><td>${app.name}</td><th>성별</th><td>${app.gender||'-'}</td></tr>
    <tr><th>생년월일</th><td>${app.birth||'-'}</td><th>연락처</th><td>${app.phone||'-'}</td></tr>
    <tr><th>학교</th><td colspan="3">${app.school||'-'} ${app.dept?`(${app.dept})`:''}</td></tr>
    <tr><th>주소</th><td colspan="3">${app.addr||'-'} ${app.addrDetail||''}</td></tr>
    <tr><th>보호자</th><td>${app.guardianName||'-'}(${app.guardianRelation||'-'})</td><th>구분</th><td>${app.categoryName||'-'}</td></tr>
    <tr><th>접수일시</th><td>${fdt(app.submittedAt)}</td><th>선발여부</th><td>${app.selected||'-'}</td></tr>
  </table>
  <div class="sec">서류 제출 현황</div>
  ${docs.filter(d=>d.req).map(d=>{const sub=app.docs[d.id];const r=rv[d.id]||{};
    return`<div class="doc-row"><span>${sub?'✓':'✗'}</span><span style="flex:1">${d.name}</span>
    ${sub?`<span class="${r.status==='ok'?'ok':r.status==='ng'?'ng':''}">${r.status==='ok'?'적격':r.status==='ng'?'부적격: '+r.reason:'미검토'}</span>`:'<span class="miss">미제출</span>'}
    </div>`;}).join('')}
  ${(app.notes||[]).length?`<div class="sec">특이사항</div>${app.notes.map(n=>`<div style="background:#fffde7;padding:8px 10px;border-radius:6px;margin-bottom:5px;font-size:13px">${n.text} <span style="font-size:11px;color:#999">— ${n.date}</span></div>`).join('')}`:''}
  <div class="footer">의왕시인재육성재단 · 사업자등록번호: 138-82-06305(16051) · 031-345-2590</div>
  '<scr'+'ipt>window.onload=function(){window.print();}</'+'script>'
  </body></html>`);
  w.document.close();
}

function deleteApp(){
  const app=DB.ga().find(a=>a.id===SAP);if(!app)return;
  if(!confirm(`'${app.name}' 접수 데이터를 삭제합니까?\n\n이 작업은 되돌릴 수 없습니다.`))return;
  if(!confirm(`정말 삭제합니까? 복구가 불가능합니다.`))return;
  DB.sa(DB.ga().filter(a=>a.id!==SAP));
  closePanel();rD();renderSB();
}