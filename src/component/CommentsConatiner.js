import React, { useState } from 'react';

function Comment({ name, text, replies, likes, timestamp, onAddReply }) {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [newReply, setNewReply] = useState('');

  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleAddReply = () => {
    if (newReply.trim()) {
      onAddReply(newReply);
      setNewReply('');
      setShowReplyInput(false); // Hide the reply input after submitting
    }
  };

  return (
    <div className="flex flex-col my-4 space-y-4">
      {/* Profile Picture */}
      <div className="flex items-start ">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />

        {/* Comment Content */}
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-baseline space-x-2">
              <h2 className="text-sm font-semibold">{name}</h2>
              <span className="text-xs text-gray-500">{timestamp}</span>
            </div>
            <p className="text-sm mt-1">{text}</p>
          </div>

          {/* Interaction Buttons */}
          <div className="flex space-x-4 mt-2 text-sm text-gray-600">
            <button className="flex items-center space-x-1 hover:text-blue-600">
              <span className="material-icons">thumb_up</span>
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-red-600">
              <span className="material-icons">thumb_down</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:text-blue-600"
              onClick={() => setShowReplyInput(!showReplyInput)}
            >
              <span className="material-icons">reply</span>
              <span>Reply</span>
            </button>
            {/* Toggle Replies Button */}
            {replies && replies.length > 0 && (
              <button
                className="ml-auto text-blue-500 hover:underline"
                onClick={handleToggleReplies}
              >
                {showReplies ? 'Hide Replies' : `Show ${replies.length} Replies`}
              </button>
            )}
          </div>

          {/* New Reply Form (Conditional Rendering) */}
          {showReplyInput && (
            <div className="mt-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
                placeholder="Add a reply..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleAddReply}
              >
                Submit Reply
              </button>
            </div>
          )}

          {/* Nested Replies */}
          {showReplies && replies && replies.length > 0 && (
            <div className="ml-12 mt-4 border-l border-gray-300 pl-4">
              {replies.map((reply, index) => (
                <Comment
                  key={index}
                  name={reply.name}
                  text={reply.text}
                  likes={reply.likes}
                  timestamp={reply.timestamp}
                  replies={reply.replies}
                  onAddReply={(newReply) => {
                    const updatedReplies = [...replies];
                    updatedReplies[index].replies.push({
                      name: 'You',
                      text: newReply,
                      likes: 0,
                      timestamp: 'Just now',
                      replies: [],
                    });
                    // Handle the addition of the new reply in the parent component
                    onAddReply(updatedReplies);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CommentsContainer() {
  const [commentsData, setCommentsData] = useState([
    {
      name: 'Manisha',
      text: 'This is a comment',
      likes: 5,
      timestamp: '2 hours ago',
      replies: [
        {
          name: 'John',
          text: 'This is a reply',
          likes: 2,
          timestamp: '1 hour ago',
          replies: [
            {
              name: 'Alice',
              text: 'This is a reply to the reply',
              likes: 1,
              timestamp: '30 minutes ago',
            },
          ],
        },
      ],
    },
    {
      name: 'Jane',
      text: 'Another comment here',
      likes: 3,
      timestamp: '3 hours ago',
      replies: [],
    },
  ]);

  const handleAddReply = (index, newReplies) => {
    const updatedComments = [...commentsData];
    updatedComments[index].replies = newReplies;
    setCommentsData(updatedComments);
  };

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
            onAddReply={(newReply) => handleAddReply(index, newReply)}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;
