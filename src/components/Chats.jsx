import Chat from "./Chat";

const Chats = () => {
  return (
    <div id="chats">
      <h2>Chats</h2>
      <Chat
        profilePicUrl="http://dummyimage.com/50x50.png/cc0000/ffffff"
        name="John Doe"
      />
      <Chat
        profilePicUrl="http://dummyimage.com/50x50.png/5fa2dd/ffffff"
        name="John Doe 2"
      />
      <Chat
        profilePicUrl="http://dummyimage.com/50x50.png/dddddd/000000"
        name="John Doe 3"
      />
    </div>
  );
};

export default Chats;
