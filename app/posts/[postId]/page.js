import React from 'react'

// This is dynamic route. It will be rendered when the user navigates to /posts/[postId]. Create a new file at app/posts/[postId]/page.js and add the following code:

const page = () => {
  return (
    // here we can have access to the postId
    <div>
      {postId}    
    </div>
  )
}

export default page
