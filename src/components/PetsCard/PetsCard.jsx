import React from "react";
import {
  MapPin,
  PawPrint,
  Eye,
  PencilLine,
  Trash2,
  Heart,
  CalendarDays,
} from "lucide-react";
import Swal from "sweetalert2";

const PetsCard = ({ pet,handleRemove }) => {
     const { _id, petName, category, breed, age, image, location, description } =
    pet;
    const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`http://localhost:3000/pets/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
            .then((data) => {
                console.log(data);
            if (data.deletedCount) {
              
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
                handleRemove(_id)
                }
          });
    });
  };

 

  return (
    <div className="group relative w-full max-w-[320px] mx-auto transition-all duration-500 hover:-translate-y-2">
      <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
      <div className="relative bg-gradient-to-b from-slate-50 to-white backdrop-blur-xl rounded-[30px] border border-slate-200/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-48 m-3 overflow-hidden rounded-[24px] shadow-sm bg-white">
          <img
            src={image}
            alt={petName}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          <div className="absolute top-3 inset-x-3 flex justify-between items-center text-white">
            <span className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <PawPrint size={10} className="text-indigo-300" /> {category}
            </span>
            <button className="bg-white/90 p-2 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-300">
              <Heart size={14} />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 pb-6 pt-2 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">
              {petName}
            </h3>
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-white/50 border border-slate-100 px-2 py-1 rounded-lg">
              <CalendarDays size={12} className="text-indigo-400" />
              {age}Y
            </div>
          </div>

          <p className="text-indigo-600/70 text-[10px] font-extrabold uppercase tracking-[0.1em] mb-3">
            {breed}
          </p>

          <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 mb-5 font-medium italic opacity-80">
            "{description}"
          </p>

          {/* Location Box - Premium Background */}
          <div className="flex items-center gap-2 mb-6 text-slate-500 bg-indigo-50/40 p-2.5 rounded-2xl border border-indigo-100/30">
            <div className="p-1.5 bg-white rounded-xl shadow-sm">
              <MapPin size={12} className="text-rose-500" />
            </div>
            <span className="text-[11px] font-semibold truncate leading-none">
              {location}
            </span>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between gap-2.5 mt-auto">
            <button
              title="View"
              className="h-11 w-11 flex items-center justify-center rounded-[18px] bg-white text-slate-600 border border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm active:scale-90"
            >
              <Eye size={18} />
            </button>

            <button
              title="Edit"
              className="h-11 w-11 flex items-center justify-center rounded-[18px] bg-white text-slate-600 border border-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 shadow-sm active:scale-90"
            >
              <PencilLine size={18} />
            </button>

            <button
              onClick={() => handleDelete(_id)}
              title="Delete"
              className="h-11 w-11 flex items-center justify-center rounded-[18px] bg-white text-slate-600 border border-slate-200 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 shadow-sm active:scale-90"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsCard;
