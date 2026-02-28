// import React from "react";
// import { cn } from "../../utils/helpers";

// const Input = ({
//   label,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   error,
//   className = "",
//   ...props
// }) => {
//   return (
//     <div className="w-full">
//       {label && (
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={cn(
//           "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
//           error && "border-danger",
//           className,
//         )}
//         {...props}
//       />
//       {error && <p className="mt-1 text-sm text-danger">{error}</p>}
//     </div>
//   );
// };

// export default Input;

import React from "react";
import { cn } from "../../utils/helpers";

const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      value,
      onChange,
      error,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            error && "border-danger",
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-danger">{error}</p>}
      </div>
    );
  },
);

export default Input;
