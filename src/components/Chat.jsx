const Chat = ({ profilePicUrl, name }) => {
  return (
    <div class="chat">
      <img src={profilePicUrl} alt="Profile picture" class="chat-profile-pic" />
      <div class="chat-info">
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default Chat;
