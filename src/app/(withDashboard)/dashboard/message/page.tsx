import ViewMessage from "@/components/dashboard/ManageMessage/ViewMessage";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: "Sajjad's Portfolio | Message",
  description: "Welcome to Sajjad's Portfolio",
}

const MessagePage = () => {
  return (
    <div className="min-h-screen">
      <ProtectedRoute allowedRoles={["admin"]}>
        <ViewMessage />
      </ProtectedRoute>
    </div>
  );
};

export default MessagePage;
