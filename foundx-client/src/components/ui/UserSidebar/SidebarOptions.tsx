import Link from "next/link";
import React from "react";

type LinkItem = {
  href: string;
  label: string;
};
const SidebarOptions = ({ links }: { links: LinkItem[] }) => {
  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          className="block w-full rounded-md px-3 py-1 hover:bg-default-200"
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;

// import Link from "next/link";

// type LinkItem = {
//     href: string;
//     label: string;
//   };

//   type SidebarOptionsProps = {
//     links: LinkItem[];
//   };

//   const SidebarOptions: React.FC<SidebarOptionsProps> = ({ links }) => {
//     return (
//       <ul>
//         {links.map((link) => (
//           <li key={link.href}>
//             <Link href={link.href} className="block w-full rounded-md px-3 py-1 hover:bg-default-200">{link.label}</Link>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   export default SidebarOptions;
