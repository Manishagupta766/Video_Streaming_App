import React from 'react';

function Comment({ name, text, replies, likes, timestamp }) {
  return (
    <div className="flex float-left space-x-4 my-4">
      {/* Profile Picture */}
      <div>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full"
        />
      </div>

      {/* Comment Content */}
      <div className="flex-1">
        <div className="bg-gray-100 p-2 rounded-lg">
          <div className="flex  space-x-2">
            <h2 className="text-sm font-semibold">{name}</h2>
            <span className="text-xs text-gray-500">{timestamp}</span>
          </div>
          <p className="text-sm mt-1">{text}</p>
        </div>

        {/* Interaction Buttons */}
        <div className="flex  space-x-4 mt-2 text-sm text-gray-600">
          <button className="flex  space-x-1">
            <span className="material-icons">thumb_up</span>
            <span>{likes}</span>
          </button>
          <button className="flex  space-x-1">
            <span className="material-icons">thumb_down</span>
          </button>
          <button className="flex items-center space-x-1">
            <span className="material-icons">reply</span>
            <span>Reply</span>
          </button>
        </div>

        {/* Nested Replies */}
        {replies && replies.length > 0 && (
          <div className="ml-12 mt-4 border-l border-gray-300 pl-1">
            {replies.map((reply, index) => (
              <Comment
                key={index}
                name={reply.name}
                text={reply.text}
                likes={reply.likes}
                timestamp={reply.timestamp}
                replies={reply.replies}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CommentsContainer() {
  const commentsData = [
    {
      name: "Manisha",
      text: "This is a comment",
      likes: 5,
      timestamp: "2 hours ago",
      replies: [
        {
          name: "John",
          text: "This is a reply",
          likes: 2,
          timestamp: "1 hour ago",
          replies: [
            {
              name: "Alice",
              text: "This is a reply to the reply",
              likes: 1,
              timestamp: "30 minutes ago",
            },
          ],
        },
      ],
    },
    {
      name: "Jane",
      text: "Another comment here",
      likes: 3,
      timestamp: "3 hours ago",
      replies: [],
    },
  ];

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="space-y-6">
        {commentsData.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            text={comment.text}
            likes={comment.likes}
            timestamp={comment.timestamp}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;
