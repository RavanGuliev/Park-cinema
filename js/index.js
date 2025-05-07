const data=[]
// const cards = document.getElementById("cards")

fetch('https://parkcinema-opal.vercel.app/landing')
.then(res=>res.json())
.then(info=>{
    data.length = 0
    data.push(...info)
    show()
    
    
})

function show(){
    
    cards.innerHTML = ''
    data.map( item => { 
        cards.innerHTML += `
        
                <div class="w-[300px] h-[500px] overflow-hidden rounded-2xl relative group fira-sans-medium">
 <a href="/details.htm?id=${item.id}"> <img  class="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-10"   src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75"  alt="${item.name}" > </a>  
  <div class="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none"></div>
  <div class="absolute bottom-4 left-0 w-full px-3 flex justify-between items-center z-30">
    <div>
      <p class="text-white text-[22px] font-semibold drop-shadow-md">${item.name}</p>
      <p class="text-[#D9DADB] text-[14px] drop-shadow-md">${item.year}</p>
      <p class="text-[#D9DADB] drop-shadow-md">${item.ageLimit === 'SIXTEEN' ? '16+' : item.ageLimit === 'EIGHTEEN' ? '18+' : '12+'}</p>
    </div>
    <div class="flex gap-3 px-2">
      <img /<>
    </div>
  </div>
</div>


        `
    })
}

let flag1 = true;
function openDD1() {
  const dropdowncont1 = document.getElementById('dropdowncont1');
  const svg1 = document.getElementById('svg1');
  const underline1 = document.getElementById('underline1');

  dropdowncont1.classList.toggle('hidden');
  flag1 = !flag1;

  if (!flag1) {
    svg1.classList.add('rotate-180');
    underline1.classList.add('w-full');
  } else {
    svg1.classList.remove('rotate-180');
    underline1.classList.remove('w-full');
  }
}
let flag2 = true;
function openDD2() {
  const dropdowncont2 = document.getElementById('dropdowncont2');
  const svg2 = document.getElementById('svg2');
  const underline2 = document.getElementById('underline2');

  dropdowncont2.classList.toggle('hidden');
  flag2 = !flag2;

  if (!flag2) {
    svg2.classList.add('rotate-180');
    underline2.classList.add('w-full');
  } else {
    svg2.classList.remove('rotate-180');
    underline2.classList.remove('w-full');
  }
}
