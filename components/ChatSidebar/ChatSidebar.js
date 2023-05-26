import Link from "next/link";

export const ChatSidebar = () => {
  return (
    <aside className="bg-gray-900 text-white">
      <Link href="/api/auth/logout">Logout</Link>
    </aside>
  );
};
