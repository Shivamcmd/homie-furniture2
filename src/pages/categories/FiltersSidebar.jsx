import { SlidersHorizontal, IndianRupee } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const FiltersSidebar = ({
  priceFilter = [],
  setPriceFilter,
  ratingFilter,
  setRatingFilter
}) => {

  const [openFilter,setOpenFilter] = useState(false);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (openFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openFilter]);

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

<div className="md:hidden flex gap-2 mb-0 overflow-x-auto">

<button
onClick={()=>setOpenFilter(true)}
className="flex items-center gap-2 px-4 py-1 border rounded-full text-sm bg-white dark:bg-[#1c1c1c] 
text-gray-800 dark:text-gray-200 
border border-gray-400 dark:border-[#2a2a2a] shadow"
>
<SlidersHorizontal size={13}/>
Filters
</button>

<button
onClick={()=>setOpenFilter(true)}
className="flex items-center gap-1 px-4 py-1  border rounded-full text-sm bg-white dark:bg-[#1c1c1c] 
text-gray-800 dark:text-gray-200
border border-gray-400 dark:border-[#2a2a2a] shadow"
>
<IndianRupee size={13}/>
Budget
</button>

</div>


{/* ================= MOBILE FILTER MODAL (PORTAL) ================= */}

{openFilter && createPortal(

<div
className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-end"
onClick={()=>setOpenFilter(false)}
>

<div
className="w-full bg-white dark:bg-[#1c1c1c] 
text-gray-800 dark:text-gray-200
border border-gray-200 dark:border-[#2a2a2a] 
rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto animate-slideUp"
onClick={(e)=>e.stopPropagation()}
>

{/* HEADER */}
<div className="flex justify-between items-center mb-5">
<h2 className="text-lg font-semibold">Filters</h2>
<button onClick={()=>setOpenFilter(false)}>
Close
</button>
</div>

{/* ===== Rating ===== */}
<div className="mb-6">
<h3 className="font-medium mb-3">Ratings</h3>

{[4,3,2].map(rating=>{

const checked = ratingFilter===rating;

return(
<label
key={rating}
className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
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

{/* ===== Budget ===== */}
<div className="mb-6">
<h3 className="font-medium mb-3">Monthly Budget</h3>

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

</div>,

document.body
)}


{/* ================= DESKTOP SIDEBAR ================= */}

<div className="hidden md:block bg-white dark:bg-[#1c1c1c]
text-gray-800 dark:text-gray-200
border border-gray-400 dark:border-[#2a2a2a] p-3  mb-7 rounded-xl shadow-sm space-y-6">

<h2 className="text-xl font-semibold">Filters</h2>

{/* Rating */}
<div>
<h3 className="font-medium mb-3">Ratings</h3>

{[4,3,2].map(rating=>{

const checked = ratingFilter===rating;

return(
<label key={rating} className="flex items-center gap-2 mb-2 cursor-pointer">
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
<h3 className="font-medium mb-3">Monthly Budget</h3>

{priceRanges.map(range=>{

const checked = priceFilter.some(
r => r[0]===range[0] && r[1]===range[1]
);

return(
<label key={range[0]} className="flex items-center gap-2 mb-2 cursor-pointer">
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