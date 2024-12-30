import { WorkspaceNavbar } from "@/components/organisms/workspace/WorkspaceNavbar";
import { WorkspaceSidebar } from "@/components/organisms/workspace/WorkspaceSidebar";

export const WorkspaceLayout = function({ children }) {
   return (
      <div className="h-screen">
      {/* Navbar */}
      <WorkspaceNavbar />

      {/* Sidebar and Content */}
      <div className="flex h-[calc(100vh-64px)]">
        <WorkspaceSidebar />
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
    </div>
   );
};