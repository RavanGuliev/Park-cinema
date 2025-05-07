const urlParams = new URLSearchParams(location.search);
const ticketId = urlParams.get("id");
const banner = document.getElementById("banner")
const table = document.getElementById("table")

const data4 = [];

function Detailsbanner() {
    fetch(`https://parkcinema-opal.vercel.app/detail/${ticketId}`)
        .then(res => res.json())
        .then(info => {
            data4.length = 0;
            data4.push(info)
            showbanners();
        })
}
  Detailsbanner();

  function showbanners() {
    banner.innerHTML = "";
    data4.forEach(item => {
      console.log(item);
      
      banner.innerHTML = `
       <div>
        <h1 class="text-3xl mb-3  text-white">Oturacag Seçimi</h1>
    </div>
    <div class="tick   mx-auto max-h-[500px]">
        <div class="flex">
            <div class=" max-w-[260px] p-3   "> 
                <img class="rounded-2xl " src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.movie.image}&w=640&q=75" alt="">
            </div>
            <div class="text-white font-bold max-w-[200px] max-h-[300px] gap-1 md:gap-3 flex flex-col py-3 lg:gap-4">
                <h1>${item.movie.name}</h1>
                <p>${item.type.slice(1)}</p>
                <span><i class="fa-solid fa-calendar-days"></i>  ${item.dateOfDay?.split('T')[0]}</span>
                <p><i class="fa-solid fa-clock"></i> ${item.time}</p>
                <p>${item.language}</p>
                <p>Kinoteatr: ${item.theatreTitle}</p>
                <p>${item.hallTitle}</p>
                <p>Müddət: 02:10:00</p>
            </div>
        </div>
    </div>
    <div class="flex justify-between pt-5 px-3 text-sm">
    <div class="flex gap-2 flex-wrap">
        <div class="flex items-center gap-1">
            <div class="w-4 h-4 bg-white rounded-full"></div>
            <p class="text-[#D9DADB]">Mövcuddur</p>
        </div>
        <div class="flex items-center gap-1">
            <div class="w-4 h-4 bg-black rounded-full"></div>
            <p class="text-[#D9DADB]">Tutulmuş</p>
        </div>
        <div class="flex items-center gap-1">
            <div class="w-4 h-4 bg-[#d52b1e] rounded-full"></div>
            <p class="text-[#D9DADB]">Seçilmiş</p>
        </div>
    </div>
    <div>
        <p class="text-white">Boyuk: 5 azn</p>
    </div>
</div>

      `;
    });
  }

  

  

    