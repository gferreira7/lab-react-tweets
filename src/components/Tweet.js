import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamps";
import User from "./User";

function Tweet({tweet:{ user: { name, image, handle }, timestamp, message }}) {

  return (
    <div className="tweet">
    
      <ProfileImage image={image} />
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamps timestamp={timestamp} />
        </div>

      <Message message={message} />

      <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
