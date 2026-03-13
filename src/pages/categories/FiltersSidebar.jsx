import { SlidersHorizontal, IndianRupee } from "lucide-react";
import { useState } from "react";

const FiltersSidebar = ({
  priceFilter = [],
  setPriceFilter,
  ratingFilter,
  setRatingFilter
}) => {

  const [openFilter,setOpenFilter] = useState(false);

  const priceRanges = [
    [0,100],
    [100,299],
    [300,349],
    [350,649]
  ];

  const handlePrice = (range)=>{

    const exists = priceFilter.some(
      r => r[0]===range[0] && r[1]===range[1]
    );

    if(exists){

      setPriceFilter(
        priceFilter.filter(
          r => !(r[0]===range[0] && r[1]===range[1])
        )
      );

    }else{

      setPriceFilter([...priceFilter,range]);

    }

  };

  const applyFilters = ()=>{
    setOpenFilter(false);
  };

  return (

<>
{/* ================= MOBILE FILTER BAR ================= */}

<div className="md:hidden flex gap-3 mb-4 overflow-x-auto">

<button
onClick={()=>setOpenFilter(true)}
className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm bg-white shadow"
>
<SlidersHorizontal size={16}/>
Filters
</button>

<button
onClick={()=>setOpenFilter(true)}
className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm bg-white shadow"
>
<IndianRupee size={16}/>
Budget
</button>

</div>


{/* ================= MOBILE FILTER MODAL ================= */}

{openFilter && (

<div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-end">

<div className="relative z-[10000] w-full bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto animate-slideUp">

{/* HEADER */}

<div className="flex justify-between items-center mb-5">

<h2 className="text-lg font-semibold">
Filters
</h2>

<button
onClick={()=>setOpenFilter(false)}
className="text-gray-500"
>
Close
</button>

</div>


{/* ===== Rating ===== */}

<div className="mb-6">

<h3 className="font-medium mb-3">
Ratings
</h3>

{[4,3,2].map(rating=>{

const checked = ratingFilter===rating;

return(

<label
key={rating}
className="flex items-center gap-2 mb-2 cursor-pointer"
>

<input
type="radio"
checked={checked}
onChange={()=>setRatingFilter(rating)}
className="accent-[#bf6f32]"
/>

{rating} ★ & above

</label>

)

})}

</div>


{/* ===== Budget ===== */}

<div className="mb-6">

<h3 className="font-medium mb-3">
Monthly Budget
</h3>

{priceRanges.map(range=>{

const checked = priceFilter.some(
r => r[0]===range[0] && r[1]===range[1]
);

return(

<label
key={range[0]}
className="flex items-center gap-2 mb-2 cursor-pointer"
>

<input
type="checkbox"
checked={checked}
onChange={()=>handlePrice(range)}
className="accent-[#bf6f32]"
/>

₹{range[0]} - ₹{range[1]}

</label>

)

})}

</div>


{/* APPLY BUTTON */}

<button
onClick={applyFilters}
className="w-full bg-[#bf6f32] text-white py-3 rounded-lg font-semibold"
>
Apply Filters
</button>

</div>

</div>

)}


{/* ================= DESKTOP SIDEBAR ================= */}

<div className="hidden md:block bg-white p-6 rounded-xl shadow-sm space-y-6">

<h2 className="text-xl font-semibold">
Filters
</h2>


{/* Rating */}

<div>

<h3 className="font-medium mb-3">
Ratings
</h3>

{[4,3,2].map(rating=>{

const checked = ratingFilter===rating;

return(

<label
key={rating}
className="flex items-center gap-2 mb-2 cursor-pointer"
>

<input
type="radio"
checked={checked}
onChange={()=>setRatingFilter(rating)}
className="accent-[#bf6f32]"
/>

{rating} ★ & above

</label>

)

})}

<button
onClick={()=>setRatingFilter(null)}
className="text-xs text-gray-500 underline"
>
Clear rating
</button>

</div>


{/* Budget */}

<div>

<h3 className="font-medium mb-3">
Monthly Budget
</h3>

{priceRanges.map(range=>{

const checked = priceFilter.some(
r => r[0]===range[0] && r[1]===range[1]
);

return(

<label
key={range[0]}
className="flex items-center gap-2 mb-2 cursor-pointer"
>

<input
type="checkbox"
checked={checked}
onChange={()=>handlePrice(range)}
className="accent-[#bf6f32]"
/>

₹{range[0]} - ₹{range[1]}

</label>

)

})}

</div>

</div>

</>

);

};

export default FiltersSidebar;