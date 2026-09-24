const PIPE_HEADERS = [
  'دورترین نقطه (m)','1/2 اینچ (2)','3/4 اینچ (2.5)','1 اینچ (3)','1/4 1 اینچ (4)',
  '1/2 1 اینچ (5)','2 اینچ (6)','1/2 2 اینچ (7)','3 اینچ (8)','4 اینچ (10)'
];
const PIPE_SIZES = ['1/2 اینچ','3/4 اینچ','1 اینچ','1/4 1 اینچ','1/2 1 اینچ','2 اینچ','1/2 2 اینچ','3 اینچ','4 اینچ'];
const PIPE_DIAM = ['2','2.5','3','4','5','6','7','8','10'];
const PIPE_DIST = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,35,40,45,50,55,60,70,80,90,100,120,150,200,250,300];
const PIPE_CAP = [
[5.9,12.3,23.3,47.9,72,138.3,220,390.7,801.9],
[4,8.5,16,32.9,49.4,95.1,151.2,268.5,551.1],
[3.2,6.8,12.9,26.4,39.7,76.4,121.5,215.7,442.8],
[2.8,5.8,11,22.6,34,65.4,104,184.7,379.1],
[2.4,5,9.6,19.7,29.6,56.9,90.4,160.6,329.7],
[2.2,4.7,8.8,18.1,27.3,52.5,83.4,148.2,304.3],
[2,4.3,8.1,16.7,25,48.2,76.6,136.1,279.4],
[1.9,4,7.5,15.5,23.3,44.8,71.3,126.7,260],
[1.8,3.7,7.1,14.6,21.9,42.2,67.1,119.3,244.8],
[1.7,3.5,6.7,13.8,20.7,39.8,63.3,112.5,231],
[1.6,3.3,6.3,13.1,19.6,37.8,60.1,106.8,219.2],
[1.5,3.2,6.1,12.5,18.7,36.1,57.4,101.9,209.2],
[1.4,3.1,5.8,12,18,34.6,55.1,97.9,200.9],
[1.4,2.9,5.5,11.4,17.2,33.1,52.6,93.6,191],
[1.3,2.8,5.3,11,16.6,31.9,50.8,90.2,185.1],
[1.2,2.6,4.9,10.2,15.3,29.4,46.8,83.1,170.6],
[1.1,2.4,4.6,9.4,14.1,27.1,43.3,76.9,157.9],
[1.1,2.2,4.3,8.8,13.3,25.5,40.6,72.2,148.1],
[1,2.1,4.1,8.4,12.6,24.3,38.6,68.7,141],
[0.99,2,3.9,8,12,23.1,36.7,65.2,133.9],
[0.94,1.9,3.7,7.6,11.5,22.1,35.1,62.4,128.1],
[0.85,1.8,3.3,6.9,10.4,20,31.8,56.5,116.1],
[0.8,1.6,3.1,6.5,9.7,18.8,29.8,53.1,108.9],
[0.75,1.5,2.9,6.1,9.1,17.6,28,49.7,102],
[0.71,1.4,2.8,5.7,8.6,16.6,26.4,47,96.5],
[0.64,1.3,2.5,5.2,7.8,15,23.9,42.5,87.3],
[0.57,1.2,2.2,4.6,6.9,13.3,21.2,37.7,77.5],
[0.49,1,1.9,3.9,5.9,11.4,18.1,32.2,66.2],
[0.43,0.91,1.7,3.5,5.2,10.1,16.1,28.6,58.8],
[0.39,0.82,1.5,3.1,4.7,9.2,14.6,25.9,53.2]
];

const applianceData = [
 {id:'villa', title:'ساختمان یک واحدی مسکونی', desc:'دارای یک واحد مسکونی با حیاط اختصاصی بوده و به طور معمول در یک یا دو یا سه طبقه ساخته شده', vals:['مجاز','مجاز','مجاز','مجاز','مجاز','مجاز'], req:''},
 {id:'res_small', title:'آپارتمانی مسکونی با تعداد واحد کم (۲ تا ۱۰ واحد)', desc:'ساختمان‌های آپارتمانی مسکونی کوچک، از 2 تا 10 واحد آپارتمانی مسکونی.', vals:['مجاز','مجاز','مجاز','مجاز','مشروط','مشروط'], req:'در ساختمان های آپارتمانی مسکونی با تعداد واحد کم(از دو تا ده واحد) موجود و جدید با حداکثر سه طبقه علاوه بر پکیج و موتورخانه مرکزی نصب بخاری و آب گرمکن گاز سوز نیز مجاز میباشد.'},
 {id:'res_med', title:'آپارتمانی مسکونی با تعداد واحد متوسط (۱۱ تا ۳۰ واحد)', desc:'ساختمان‌های آپارتمانی مسکونی متوسط، از 11 تا 30 واحد آپارتمانی مسکونی.', vals:['مجاز','مجاز','ممنوع','مجاز','ممنوع','ممنوع'], req:''},
 {id:'res_large', title:'آپارتمانی مسکونی با تعداد واحد زیاد (۳۱ واحد و بیشتر)', desc:'ساختمان‌های آپارتمانی مسکونی بزرگ، از 31 واحد آپارتمانی مسکونی و بیش از آن.', vals:['مجاز','مجاز','ممنوع','مجاز','ممنوع','ممنوع'], req:'نصب تجهیزات آشکارساز گاز مونوکسید کربن و نشت گاز در تمامی فضاهایی که دستگاه گازسوز نصب شده الزامی است. نصب شیر خودكار قطع گاز.'},
 {id:'public', title:'ساختمانهای عمومی', desc:'ساختمانهای محل تجمع، آموزشی و فرهنگی، پذیرایی و اقامت موقت، حرفه‌ای/اداری، کسبی و تجاری، درمانی و مراقبتی و انباری.', vals:['مجاز','ممنوع','ممنوع','مجاز','ممنوع','ممنوع'], req:'نصب تجهیزات آشکارساز گاز مونوکسید کربن و نشت گاز در تمامی فضاهایی که دستگاه گازسوز نصب شده الزامی است.'},
 {id:'public_small', title:'آپارتمانی عمومی با تعداد واحد کم (۲ تا ۱۰ واحد)', desc:'ساختمان‌های آپارتمانی عمومی کوچک، از 2 تا 10 واحد آپارتمانی عمومی.', vals:['مجاز','مجاز','ممنوع','مجاز','ممنوع','ممنوع'], req:'نصب تجهیزات آشکارساز گاز مونوکسید کربن و نشت گاز در موتور خانه الزامی است. نصب شیر خودكار قطع گاز.'},
 {id:'public_med', title:'آپارتمانی عمومی با تعداد واحد متوسط (۱۱ تا ۳۰ واحد)', desc:'ساختمان‌های آپارتمانی عمومی متوسط، از 11 تا 30 واحد آپارتمانی عمومی.', vals:['مجاز','مجاز','ممنوع','مجاز','ممنوع','ممنوع'], req:'نصب تجهیزات آشکارساز گاز مونوکسید کربن و نشت گاز در موتور خانه الزامی است. نصب شیر خودكار قطع گاز.'},
 {id:'public_large', title:'آپارتمانی عمومی با تعداد واحد زیاد (۳۱ واحد و بیشتر)', desc:'ساختمان‌های آپارتمانی عمومی بزرگ، از 31 واحد آپارتمانی عمومی و بیش از آن.', vals:['مجاز','ممنوع','ممنوع','مجاز','ممنوع','ممنوع'], req:'نصب تجهیزات آشکارساز گاز مونوکسید کربن و نشت گاز در تمامی فضاهایی که دستگاه گازسوز نصب شده الزامی است. نصب شیر خودكار قطع گاز.'},
 {id:'special', title:'ساختمانهای خاص', desc:'قابل استفاده بودن پس از وقوع زلزله و خرابی موجب انتشار گسترده مواد سمی و مضر، از دست رفتن ثروت ملی و ساختمان‌های مراکز بحران.', vals:['شرایط خاص','شرایط خاص','شرایط خاص','شرایط خاص','شرایط خاص','شرایط خاص'], req:'شرایط انتخاب، نصب و بهره‌برداری از دستگاه‌های گازسوز و ممنوعیت آن‌ها بر مبنای مشخصات ساختمان از نظر تقسیم‌بندی فضای داخلی و نوع فعالیت بوده و باید کلیه شرایط در طراحی مشخص شده باشد.\nنصب تجهیزات آشکارساز گاز مونوکسید کربن و نشت گاز در تمامی فضاهایی که دستگاه گازسوز نصب شده الزامی است.\nاستفاده از شیر خودكار قطع گاز حساس در مقابل زلزله در این ساختمانها الزامی است.'},
 {id:'mixed', title:'ساختمان تلفیقی', desc:'بخشی مسکونی و بخش دیگر عمومی و برای فعالیت‌های اقتصادی و خدماتی استفاده می‌شود؛ کوچک‌ترین مورد شامل یک باب مغازه و یک واحد مسکونی است.', vals:['شرایط بخش‌ها','شرایط بخش‌ها','شرایط بخش‌ها','شرایط بخش‌ها','شرایط بخش‌ها','شرایط بخش‌ها'], req:'برای بخش مسکونی، الزامات ساختمان‌های مسکونی و برای بخش عمومی، الزامات ساختمان‌های عمومی باید لحاظ شود.'}
,

  {id:'commercial_single_new', title:'تصرف تجاری(تفکیک شده، مستقل تک واحدی) – ساختمان جدید', desc:'تصرف تجاری تفکیک شده و مستقل تک واحدی در ساختمان جدید.', vals:['مجاز','مجاز','مجاز','مجاز','ممنوع','ممنوع'], req:'نصب تجهیزات ایمنی درصورت تشخیص نیاز با نظر طراح\nنصب اجاق گاز و سایر دستگاه های پخت و پز فقط در فضایی که توسط مهندس طراح تاسسیات مکانیکی در نقشه های مصوب جانمایی شده است مجاز است.'},
  {id:'commercial_single_small', title:'تصرف تجاری(تفکیک شده، مستقل تک واحدی) – ساختمان جدید و موجود با زیربنای حداکثر 60 مترمربع', desc:'تصرف تجاری تفکیک شده و مستقل تک واحدی با زیربنای حداکثر 60 مترمربع.', vals:['مجاز','مجاز','مجاز','مجاز','مجاز','مجاز'], req:'نصب تجهیزات ایمنی درصورت تشخیص نیاز با نظر طراح\nنصب اجاق گاز و سایر دستگاه های پخت و پز فقط در فضایی که توسط مهندس طراح تاسسیات مکانیکی در نقشه های مصوب جانمایی شده است مجاز است.'},
];
const applianceNames=['موتورخانه مرکزی','پکیج با محفظه احتراق بسته','پکیج محفظه احتراق باز','اجاق گاز','بخاری','آبگرمکن'];

const units = {
  length:{title:'طول',units:{
    mm:{label:'میلی‌متر',factor:1},cm:{label:'سانتی‌متر',factor:10},m:{label:'متر',factor:1000},km:{label:'کیلومتر',factor:1000000},in:{label:'اینچ',factor:25.4},ft:{label:'فوت',factor:304.8}
  }},
  area:{title:'مساحت',units:{
    mm2:{label:'میلی‌متر مربع',factor:1},cm2:{label:'سانتی‌متر مربع',factor:100},m2:{label:'متر مربع',factor:1000000},in2:{label:'اینچ مربع',factor:645.16},ft2:{label:'فوت مربع',factor:92903.04}
  }},
  volume:{title:'حجم',units:{
    ml:{label:'میلی‌لیتر',factor:1},l:{label:'لیتر',factor:1000},m3:{label:'مترمکعب',factor:1000000},ft3:{label:'فوت مکعب',factor:28316.846592}
  }},
  flow:{title:'دبی جریان',units:{
    m3h:{label:'مترمکعب بر ساعت',factor:1},
    m3min:{label:'مترمکعب بر دقیقه',factor:60},
    m3s:{label:'مترمکعب بر ثانیه',factor:3600},
    lmin:{label:'لیتر بر دقیقه',factor:0.06},
    ls:{label:'لیتر بر ثانیه',factor:3.6}
  }},
  pressure:{title:'فشار',units:{
    pa:{label:'پاسکال',factor:1},kpa:{label:'کیلوپاسکال',factor:1000},bar:{label:'بار',factor:100000},mbar:{label:'میلی‌بار',factor:100},atm:{label:'اتمسفر',factor:101325},psi:{label:'PSI',factor:6894.757293168},mmh2o:{label:'میلی‌متر ستون آب',factor:9.80665}
  }},
  temperature:{title:'دما',units:{
    C:{label:'سانتی‌گراد'},F:{label:'فارنهایت'},K:{label:'کلوین'}
  }},
  power:{title:'توان و انرژی',units:{
    W:{label:'وات',factor:1},kW:{label:'کیلووات',factor:1000},kcalh:{label:'کیلوکالری بر ساعت',factor:1.163},btuh:{label:'BTU بر ساعت',factor:0.29307107}
  }}
};

const $=id=>document.getElementById(id);
const fmt=(n,d=4)=>Number(n).toLocaleString('fa-IR',{maximumFractionDigits:d});

function ventilation(){
  const gas=Number($('gasConsumption').value), volume=Number($('roomVolume').value);
  const err=$('ventilationError');
  if(!(gas>0) || !(volume>0)){err.textContent='لطفاً مقدار مصرف گاز و حجم فضا را بزرگ‌تر از صفر وارد کنید.';err.classList.remove('hidden');$('heatOutput').textContent='—';$('ventCards').innerHTML='';return;}
  err.classList.add('hidden');
  const heat=gas*9500;
  $('heatOutput').textContent=fmt(heat,2);
  const methods=[
    {name:'از طریق یک دریچه باز ثابت', val: (heat/178>volume)?'مجاز نیست':Math.max((heat/117)/0.75,100),
     req:'الف) یک دریچه به فاصله 30 سانتیمتری از سقف بین فضای داخل و فضای مجاور آزاد خارج از ساختمان\nب) سطح آزاد این دریچه نباید کمتر از مجموع مساحت مجرای دودکشهای دستگاه های گازسوز با دودکش نصب شده در محل باشد.'},
    {name:'از طریق دو دریچه باز ثابت', val:Math.max((heat/156)/0.75,100),
     req:'دو دریچه به فاصله 30 سانتیمتری از سقف و کف بین فضای داخل و فضای مجاور آزاد خارج از ساختمان'},
    {name:'از طریق کانال قائم', val:Math.max((heat/156)/0.75,100),
     req:'سطح مقطع در طول کانال ثابت'},
    {name:'از طریق کانال افقی', val:Math.max((heat/78)/0.75,100),
     req:'الف) کانال افقی تأمین هوای احتراق که در قسمت بالا قرار میگیرد نباید به سمت منبع هوای آزاد شیب رو به پایین داشته باشد\nب) سطح مقطع در طول کانال ثابت'}
  ];
  const general='الف) اندازه ضلع کوچکتر نباید کوچکتر از 8 سانتیمتر باشد.\nب) حداقل سطح 100 سانتیمتر مربع';
  $('ventCards').innerHTML=methods.map(m=>{
    const bad=m.val==='مجاز نیست';
    return `<article class="calc-card"><span class="status ${bad?'bad':'ok'}">${bad?'مجاز نیست':'مجاز'}</span><h3>${m.name}</h3>
      <div class="calc-value">${bad?'—':fmt(m.val,4)} <span class="unit">cm²</span></div>
      <div class="requirements">${m.req}${bad?'\n\nشرط محاسباتی: (میزان مصرف حرارتی / 178) نباید از حجم فضا بیشتر باشد.': '\n\nالزامات کلی:\n'+general}</div>
    </article>`;
  }).join('');
}

function initPipe(){
  const sel=$('pipeDistance');
  PIPE_DIST.forEach(d=>sel.insertAdjacentHTML('beforeend',`<option value="${d}">${fmt(d,0)} متر</option>`));
  const thead=$('pipeTable').querySelector('thead'), tbody=$('pipeTable').querySelector('tbody');
  thead.innerHTML='<tr>'+PIPE_HEADERS.map(x=>`<th>${x}</th>`).join('')+'</tr>';
  tbody.innerHTML=PIPE_DIST.map((d,i)=>`<tr><td>${fmt(d,0)}</td>${PIPE_CAP[i].map(v=>`<td>${fmt(v,2)}</td>`).join('')}</tr>`).join('');
  sel.addEventListener('change',pipeSizing);$('pipeDemand').addEventListener('input',pipeSizing);
}
function pipeSizing(){
  const distance=Number($('pipeDistance').value), demand=Number($('pipeDemand').value), err=$('pipeError'), panel=$('pipeResult');
  document.querySelectorAll('#pipeTable td').forEach(c=>c.classList.remove('selected-cell'));
  if(!distance && !(demand>0)){panel.classList.add('hidden');err.classList.add('hidden');return;}
  if(!(distance>=2 && distance<=300)){err.textContent='فاصله باید در بازه مجاز 2 تا 300 متر باشد.';err.classList.remove('hidden');panel.classList.add('hidden');return;}
  if(!(demand>=0)){err.textContent='میزان مصرف گاز نامعتبر است.';err.classList.remove('hidden');panel.classList.add('hidden');return;}
  err.classList.add('hidden');
  // انتخاب ردیف: بزرگ‌ترین طول جدول که از فاصله انتخابی بیشتر نباشد.
  let idx=0; for(let i=0;i<PIPE_DIST.length;i++){if(PIPE_DIST[i]<=distance) idx=i; else break;}
  const rowDist=PIPE_DIST[idx], caps=PIPE_CAP[idx];
  let sizeIdx=caps.findIndex(c=>c>=demand);
  if(sizeIdx<0){
    panel.innerHTML=`<div class="status bad">سایز کافی در جدول موجود نیست</div><p>برای طول ${fmt(rowDist,0)} متر، ظرفیت 4 in برابر ${fmt(caps[caps.length-1],2)} m³/h است و از مصرف ${fmt(demand,2)} کمتر است.</p>`;
  } else {
    const cap=caps[sizeIdx];
    panel.innerHTML=`<div class="result-grid">
      <div class="result-item"><span>فاصله انتخاب‌شده</span><b>${fmt(distance,0)} متر</b></div>
      <div class="result-item"><span>طول مبنای جدول</span><b>${fmt(rowDist,0)} متر</b></div>
      <div class="result-item"><span>سایز پیشنهادی</span><b>${PIPE_SIZES[sizeIdx]}</b></div>
      <div class="result-item"><span>حداکثر ظرفیت مجاز</span><b>${fmt(cap,2)}m³/h</b></div>
    </div>`;
    // highlight chosen cell
    const row=$('pipeTable').querySelectorAll('tbody tr')[idx];
    if(row) row.querySelectorAll('td')[sizeIdx+1].classList.add('selected-cell');
  }
  panel.classList.remove('hidden');
}

function initAppliances(){
  const sel=$('buildingType');
  applianceData.forEach((x,i)=>sel.insertAdjacentHTML('beforeend',`<option value="${i}">${x.title}</option>`));
  sel.addEventListener('change',renderAppliance);renderAppliance();
}
function renderAppliance(){
  const x=applianceData[Number($('buildingType').value)];
  $('buildingDescription').textContent=x.desc;
  $('applianceGrid').innerHTML=x.vals.map((v,i)=>{
    const cls=v==='مجاز'?'ok':(v==='ممنوع'||v==='مجاز نیست'?'bad':'special');
    return `<article class="appliance-card ${cls}"><h3>${applianceNames[i]}</h3><span class="status ${cls}">${v}</span></article>`;
  }).join('');
  $('buildingRequirements').textContent=x.req || 'برای این ردیف، الزام اضافی ثبت نشده است.';
}

function tempConvert(v,from,to){
  let c=from==='C'?v:(from==='F'?(v-32)*5/9:v-273.15);
  return to==='C'?c:(to==='F'?c*9/5+32:c+273.15);
}
function populateUnits(){
  const cat=$('unitCategory'), from=$('fromUnit'), to=$('toUnit');
  if(!cat||!from||!to) return;
  cat.innerHTML='';
  Object.entries(units).forEach(([k,v])=>cat.insertAdjacentHTML('beforeend',`<option value="${k}">${v.title}</option>`));
  cat.addEventListener('change',()=>{populateUnitSelects();convertUnit()});
  const value=$('unitValue');
  if(value) ['input','change'].forEach(e=>value.addEventListener(e,convertUnit));
  ['input','change'].forEach(e=>{from.addEventListener(e,convertUnit);to.addEventListener(e,convertUnit);});
  populateUnitSelects();
}
function populateUnitSelects(){
  const cat=$('unitCategory'), from=$('fromUnit'),to=$('toUnit');
  if(!cat||!from||!to) return;
  const data=units[cat.value];
  from.innerHTML='';to.innerHTML='';
  Object.entries(data.units).forEach(([key,u])=>{
    from.insertAdjacentHTML('beforeend',`<option value="${key}">${u.label}</option>`);
    to.insertAdjacentHTML('beforeend',`<option value="${key}">${u.label}</option>`);
  });
  if(Object.keys(data.units).length>1) to.selectedIndex=1;
}
function convertUnit(){
  const cat=$('unitCategory'), valueEl=$('unitValue'), from=$('fromUnit'), to=$('toUnit'), out=$('conversionOutput');
  if(!cat||!valueEl||!from||!to||!out) return;
  const v=Number(valueEl.value);
  if(!Number.isFinite(v)){out.textContent='—';return;}
  if(cat.value==='temperature'){
    out.textContent=fmt(tempConvert(v,from.value,to.value),4);
    return;
  }
  const data=units[cat.value], source=data.units[from.value], target=data.units[to.value];
  if(!source||!target){out.textContent='—';return;}
  const base=v*source.factor;
  const result=base/target.factor;
  out.textContent=fmt(result,4);
}

(function(){
  function ready(){
    const gas = $('gasConsumption');
    const volume = $('roomVolume');
    const swap = $('swapUnits');

    if(gas) gas.addEventListener('input', ventilation);
    if(volume) volume.addEventListener('input', ventilation);
    if(swap) swap.addEventListener('click', function(){
      const f=$('fromUnit'), t=$('toUnit');
      if(!f || !t) return;
      const tmp=f.value; f.value=t.value; t.value=tmp;
      convertUnit();
    });

    // Initialize every interactive module after ALL controls exist.
    try { initPipe(); } catch(e) { console.error('Pipe sizing init:',e); }
    try { initAppliances(); } catch(e) { console.error('Appliance init:',e); }
    try { populateUnits(); } catch(e) { console.error('Unit conversion init:',e); }

    try { ventilation(); } catch(e) { console.error('Ventilation calc:',e); }
    try { convertUnit(); } catch(e) { console.error('Unit conversion:',e); }

    const buttons=[...document.querySelectorAll('[data-scroll]')];
    const sections=buttons.map(b=>document.getElementById(b.dataset.scroll)).filter(Boolean);
    const sidebar=document.querySelector('.sidebar');
    const menu=document.getElementById('mobileMenu');
    const overlay=document.getElementById('drawerOverlay');

    const closeDrawer=()=>{
      if(sidebar) sidebar.classList.remove('open');
      if(overlay) overlay.classList.remove('open');
      if(menu) menu.setAttribute('aria-expanded','false');
    };
    const toggleDrawer=()=>{
      if(!sidebar) return;
      const open=sidebar.classList.toggle('open');
      if(overlay) overlay.classList.toggle('open',open);
      if(menu) menu.setAttribute('aria-expanded',String(open));
    };
    const setActive=id=>buttons.forEach(b=>b.classList.toggle('active',b.dataset.scroll===id));

    buttons.forEach(b=>b.addEventListener('click',function(e){
      e.preventDefault();
      const target=document.getElementById(b.dataset.scroll);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      setActive(b.dataset.scroll);
      if(window.innerWidth<=820) closeDrawer();
    }));
    if(menu) menu.addEventListener('click',toggleDrawer);
    if(overlay) overlay.addEventListener('click',closeDrawer);

    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(x=>x.isIntersecting)
          .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(visible) setActive(visible.target.id);
      },{root:null,rootMargin:'-12% 0px -65% 0px',threshold:[0.1,0.3,0.6]});
      sections.forEach(s=>observer.observe(s));
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready, {once:true});
  } else {
    ready();
  }
})();

document.addEventListener('DOMContentLoaded',function(){
  const supportBtn=document.getElementById('supportBtn');
  const panel=document.getElementById('supportCardNumber');
  const copyBtn=document.getElementById('copyCardNumber');
  const status=document.getElementById('copyCardStatus');
  const card='6037998135821238';
  if(supportBtn && panel){
    supportBtn.addEventListener('click',()=>panel.classList.toggle('hidden'));
  }
  if(copyBtn){
    copyBtn.addEventListener('click',async()=>{
      try{
        await navigator.clipboard.writeText(card);
      }catch(e){
        const ta=document.createElement('textarea');
        ta.value=card; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); ta.remove();
      }
      if(status){status.textContent='شماره کارت کپی شد ✓';}
    });
  }
});



/* ===== Dark / Light theme + clean per-section PDF ===== */
(function(){
  const THEME_KEY='mohasebat-theme';
  const body=document.body;
  const themeButtons=[document.getElementById('themeToggle'),document.getElementById('themeToggleDesktop')].filter(Boolean);

  function applyTheme(mode){
    body.classList.toggle('dark',mode==='dark');
    themeButtons.forEach(btn=>{
      btn.innerHTML=btn.id==='themeToggleDesktop' ? (mode==='dark'?'☀ <span>حالت روشن</span>':'☾ <span>تغییر تم</span>') : (mode==='dark'?'☀':'☾');
      btn.title=mode==='dark'?'حالت روشن':'حالت تاریک';
      btn.setAttribute('aria-label',btn.title);
    });
    try{localStorage.setItem(THEME_KEY,mode)}catch(e){}
  }
  let theme='light';
  try{theme=localStorage.getItem(THEME_KEY)||'light'}catch(e){}
  applyTheme(theme);
  themeButtons.forEach(btn=>btn.addEventListener('click',()=>applyTheme(body.classList.contains('dark')?'light':'dark')));

  function esc(s){
    return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function txt(el){
    return el ? (el.innerText||el.textContent||'').replace(/\n{3,}/g,'\n\n').trim() : '';
  }

  function sectionData(id){
    const sec=document.getElementById(id);
    if(!sec) return null;
    const title=sec.querySelector('h2')?.textContent.trim()||'گزارش محاسبات';
    let bodyHtml='';
    if(id==='ventilation'){
      bodyHtml=`<div class="inputs">
        <div><b>جمع مصرف گاز</b><span>${esc(document.getElementById('gasConsumption')?.value)} m³/h</span></div>
        <div><b>حجم فضا</b><span>${esc(document.getElementById('roomVolume')?.value)} m³</span></div>
        <div><b>خروجی پایه</b><span>${esc(document.getElementById('heatOutput')?.textContent)} kCal/h</span></div>
      </div>
      <div class="cards">${Array.from(sec.querySelectorAll('#ventCards .calc-card')).map(c=>`<article><div class="status">${esc(c.querySelector('.status')?.textContent)}</div><h3>${esc(c.querySelector('h3')?.textContent)}</h3><div class="big">${esc(c.querySelector('.calc-value')?.textContent)}</div><div class="req">${esc(txt(c.querySelector('.requirements')))}</div></article>`).join('')}</div>`;
    } else if(id==='pipe'){
      bodyHtml=`<div class="inputs">
        <div><b>دورترین نقطه مصرف</b><span>${esc(document.getElementById('pipeDistance')?.selectedOptions?.[0]?.textContent||'—')} متر</span></div>
        <div><b>میزان مصرف گاز</b><span>${esc(document.getElementById('pipeDemand')?.value||'—')} m³/h</span></div>
      </div>
      <div class="result">${esc(txt(document.getElementById('pipeResult')))||'نتیجه‌ای برای این ورودی ثبت نشده است.'}</div>`;
    } else if(id==='appliance'){
      bodyHtml=`<div class="inputs"><div><b>نوع ساختمان</b><span>${esc(document.getElementById('buildingType')?.selectedOptions?.[0]?.textContent||'—')}</span></div></div>
      <div class="desc">${esc(txt(document.getElementById('buildingDescription')))}</div>
      <div class="cards">${Array.from(sec.querySelectorAll('#applianceGrid .appliance-card')).map(c=>`<article><h3>${esc(c.querySelector('h3')?.textContent)}</h3><div class="status">${esc(c.querySelector('.status')?.textContent)}</div></article>`).join('')}</div>
      <div class="req"><b>الزامات و توضیحات:</b><br>${esc(txt(document.getElementById('buildingRequirements')))}</div>`;
    } else if(id==='units'){
      bodyHtml=`<div class="inputs">
        <div><b>مقدار</b><span>${esc(document.getElementById('unitValue')?.value)}</span></div>
        <div><b>از واحد</b><span>${esc(document.getElementById('fromUnit')?.selectedOptions?.[0]?.textContent||'—')}</span></div>
        <div><b>به واحد</b><span>${esc(document.getElementById('toUnit')?.selectedOptions?.[0]?.textContent||'—')}</span></div>
      </div>
      <div class="result"><b>نتیجه تبدیل</b><strong>${esc(document.getElementById('conversionOutput')?.textContent||'—')}</strong></div>`;
    } else if(id==='validation'){
      bodyHtml=`<div class="cards">${Array.from(sec.querySelectorAll('.test-card')).map(c=>`<article><h3>${esc(c.querySelector('h3')?.textContent)}</h3><div class="req">${esc(txt(c))}</div></article>`).join('')}</div>`;
    }
    return {title,bodyHtml};
  }

  function printSection(id){
    if(id==='validation') return;
    const data=sectionData(id);
    if(!data) return;
    const date=new Intl.DateTimeFormat('fa-IR',{dateStyle:'full',timeStyle:'short'}).format(new Date());
    const w=window.open('','_blank','width=900,height=900');
    if(!w){alert('لطفاً اجازه باز شدن پنجره جدید را فعال کنید.');return;}
    w.document.open();
    w.document.write(`<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><title>${esc(data.title)} - محاسبات مهندسی گاز</title>
<style>
@page{size:A4;margin:10mm}
*{box-sizing:border-box}
body{margin:0;background:#f6f8fb;color:#182230;font-family:Tahoma,Arial,sans-serif;line-height:1.9;font-size:12px}
.sheet{max-width:780px;margin:0 auto;background:#fff;padding:20px;border:1px solid #e1e6ed;border-radius:14px}
.header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #182230;padding-bottom:14px;margin-bottom:18px}
h1{font-size:22px;margin:0 0 3px}.subtitle{font-size:10px;color:#687586}.date{font-size:9px;color:#687586;text-align:left}
h2{font-size:17px;margin:0 0 15px}
.inputs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:15px}
.inputs>div{background:#f5f7fa;border:1px solid #e1e6ed;border-radius:10px;padding:10px}
.inputs b{display:block;font-size:9px;color:#687586;margin-bottom:3px}.inputs span{font-size:12px;font-weight:800}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.cards article{border:1px solid #e0e5eb;border-radius:10px;padding:10px;background:#fff;break-inside:avoid}
.cards h3{font-size:13px;margin:5px 0 7px}.status{display:inline-block;padding:3px 8px;border-radius:999px;background:#edf5ff;color:#286fc5;font-weight:800;font-size:9px}.big{font-size:22px;font-weight:900;margin:4px 0 8px}.req,.desc,.result{white-space:pre-line;border-radius:10px;background:#f7f9fb;border:1px solid #e5e9ef;padding:11px;font-size:10px;color:#394555}
.result{font-size:12px}.result strong{display:block;font-size:22px;margin-top:5px}.footer{margin-top:18px;padding-top:10px;border-top:1px solid #e2e6eb;font-size:8px;color:#7b8591;text-align:center}
@media print{body{background:#fff}.sheet{border:0;margin:0;max-width:none;padding:0}}
</style></head><body><div class="sheet">
<div class="header"><div><h1>محاسبات مهندسی گاز</h1><div class="subtitle">${esc(data.title)}</div></div><div class="date">${esc(date)}</div></div>
<h2>${esc(data.title)}</h2>${data.bodyHtml}
<div class="footer">گزارش نتیجه بخش انتخاب‌شده — تهیه‌شده از اطلاعات فعلی صفحه محاسبات</div>
</div><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),300));<\/script></body></html>`);
    w.document.close();
  }

  document.querySelectorAll('[data-pdf-section]').forEach(btn=>{
    btn.addEventListener('click',()=>printSection(btn.dataset.pdfSection));
  });
})();

(function(){
  const c=document.getElementById('chimneyCapacity'), h=document.getElementById('chimneyHeight');
  const b=document.getElementById('chimneyCalculate'), box=document.getElementById('chimneyResults');
  const d=document.getElementById('chimneyDiameterResult'), s=document.getElementById('chimneySquareResult'), e=document.getElementById('chimneyError');
  function customRound(n){const w=Math.floor(n), f=n-w; return f<=0.5?w:w+1;}
  function calc(){
    const kcal=Number(c?.value), m=Number(h?.value);
    if(!kcal||kcal<=0||!m||m<=0){e.textContent='لطفاً ظرفیت حرارتی و ارتفاع را به‌درستی وارد کنید.';e.hidden=false;box.hidden=true;return}
    e.hidden=true;
    const btuh=kcal*3.968320719, ft=m*3.280839895;
    const raw=Math.sqrt((btuh/(1826*Math.sqrt(ft))))*2.54*1.1;
    const diameter=Math.max(15,customRound(raw));
    const square=Math.max(13,customRound(Math.sqrt((diameter*diameter*3.14)/4)));
    d.textContent=diameter.toLocaleString('fa-IR'); s.textContent=square.toLocaleString('fa-IR'); box.hidden=false;
    window.__chimneyLast={kcal,m,btuh,ft,diameter,square};
  }
  b?.addEventListener('click',calc); [c,h].forEach(x=>x?.addEventListener('keydown',q=>{if(q.key==='Enter')calc()}));
})();

/* Explicit theme labels: «حالت سیاه» / «حالت روشن» */
(function(){
  const bs=[document.getElementById('themeToggleDesktop'),document.getElementById('themeToggle')].filter(Boolean);
  function sync(){
    const dark=document.body.classList.contains('dark');
    bs.forEach(b=>{
      const i=b.querySelector('.theme-icon'), l=b.querySelector('.theme-label');
      if(i)i.textContent=dark?'☀':'☾';
      if(l)l.textContent=dark?'حالت روشن':'حالت سیاه';
      b.title=dark?'حالت روشن':'حالت سیاه';
    });
  }
  bs.forEach(b=>b.addEventListener('click',()=>setTimeout(sync,20))); sync();
})();

(function(){
 const b=document.getElementById('chimneyCalculate'); if(!b)return;
 const rnd=n=>{const w=Math.floor(n),f=n-w;return f<=0.5?w:w+1};
 b.addEventListener('click',function(){
  const k=parseFloat(document.getElementById('chimneyCapacity').value),m=parseFloat(document.getElementById('chimneyHeight').value);
  const r=document.getElementById('chimneyResults');
  if(!(k>0&&m>0)){r.hidden=true;return}
  const btuh=k*3.968320719, ft=m*3.280839895;
  const d=Math.max(15,rnd(Math.sqrt((btuh/(1826*Math.sqrt(ft))))*2.54*1.1));
  const s=Math.max(13,rnd(Math.sqrt((d*d*3.14)/4)));
  document.getElementById('chimneyDiameterResult').textContent=d;
  document.getElementById('chimneySquareResult').textContent=s;
  r.hidden=false;
 });
})();
