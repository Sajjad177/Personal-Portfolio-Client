import ViewMessage from "@/components/dashboard/ManageMessage/ViewMessage";

export const metadata = {
  title: "Sajjad's Portfolio | Message",
  description: "Welcome to Sajjad's Portfolio",
}

const MessagePage = () => {
  return (
    <div className="min-h-screen">
      <ViewMessage />
    </div>
  );
};

export default MessagePage;
