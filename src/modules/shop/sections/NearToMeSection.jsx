// // sections/NearToMeSection.jsx
// import NearToMeCard from "../components/NearToMeCard";
// import { nearToMeData } from "../data/nearToMeData";

// const NearToMeSection = () => {
//   return (
//     <section className="px-4 md:px-10 py-10">
//       {/* Heading */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold">Near to Me</h2>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {nearToMeData.map((item) => (
//           <NearToMeCard key={item.id} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NearToMeSection;

// sections/NearToMeSection.jsx
import { useState } from "react";
import NearToMeCard from "../components/NearToMeCard";
import Pagination from "../../../components/common/Pagination";
import { nearToMeData } from "../data/nearToMeData";

const ITEMS_PER_PAGE = 9;

const NearToMeSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(nearToMeData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = nearToMeData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <section className="px-4 md:px-10 py-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Near to Me</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <NearToMeCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        }}
      />
    </section>
  );
};

export default NearToMeSection;
