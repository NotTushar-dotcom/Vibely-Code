// Blog posts data
const blogPosts = [
    {
        id: 'css-grid-layout',
        title: 'Mastering CSS Grid Layout',
        category: 'HTML & CSS',
        date: 'May 20, 2025',
        readTime: '10 min read',
        image: '../images/post1.jpg',
        excerpt: 'Learn how to create complex layouts with CSS Grid in this comprehensive tutorial.',
        content: `
            <p>CSS Grid Layout is a powerful tool that has revolutionized how we create web layouts. In this comprehensive tutorial, we'll explore everything you need to know to master CSS Grid and create complex, responsive layouts with ease.</p>
            
            <h2>What is CSS Grid?</h2>
            <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to organize content into rows and columns and has many features that make building complex layouts straightforward.</p>
            
            <p>Unlike Flexbox, which is primarily designed for one-dimensional layouts (either rows OR columns), Grid is designed for two-dimensional layouts (rows AND columns).</p>
            
            <h2>Basic Grid Concepts</h2>
            <p>To create a grid container, you need to set the display property to grid or inline-grid:</p>
            
            <div class="code-block language-css">
                <pre><code>.container {
  display: grid;
}</code></pre>
            </div>
            
            <p>Once you have a grid container, you can define the columns and rows using the grid-template-columns and grid-template-rows properties:</p>
            
            <div class="code-block language-css">
                <pre><code>.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
}</code></pre>
            </div>
            
            <p>This creates a grid with three columns, each 200px wide, and two rows, each 100px tall.</p>
            
            <h2>Using the fr Unit</h2>
            <p>The fr unit represents a fraction of the available space in the grid container. It's incredibly useful for creating flexible grid layouts:</p>
            
            <div class="code-block language-css">
                <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}</code></pre>
            </div>
            
            <p>This creates a grid with three columns where the middle column takes up twice as much space as the first and third columns.</p>
            
            <h2>Creating a Responsive Grid</h2>
            <p>One of the most powerful features of CSS Grid is the ability to create responsive layouts using the repeat() function and the minmax() function:</p>
            
            <div class="code-block language-css">
                <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>
            </div>
            
            <p>This creates a grid where each column is at least 250px wide, and the grid automatically adds or removes columns based on the available space.</p>
            
            <h2>Grid Areas</h2>
            <p>Grid areas allow you to name sections of your grid and place items in those areas, which makes creating complex layouts much more intuitive:</p>
            
            <div class="code-block language-css">
                <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
            </div>
            
            <h2>Conclusion</h2>
            <p>CSS Grid is an incredibly powerful layout tool that has transformed how we design websites. By mastering the concepts covered in this tutorial, you'll be able to create complex, responsive layouts with ease.</p>
            
            <p>In the next tutorial, we'll explore more advanced Grid techniques, including nested grids and grid alignment properties.</p>
        `,
        tags: ['CSS', 'Grid Layout', 'Responsive Design', 'Web Development'],
        author: {
            name: 'John Doe',
            title: 'Frontend Developer & Educator',
            bio: 'John is a passionate web developer with over 5 years of experience. He loves teaching others about web development through his tutorials and courses.',
            image: '../images/author.jpg'
        },
        comments: [
            {
                id: 1,
                name: 'Sarah Johnson',
                date: 'May 21, 2025',
                avatar: '../images/user1.jpg',
                text: 'Great tutorial! I\'ve been struggling with CSS Grid for a while, but your explanation made it so much clearer. Thank you!'
            },
            {
                id: 2,
                name: 'Mike Peters',
                date: 'May 22, 2025',
                avatar: '../images/user2.jpg',
                text: 'I\'ve been using Flexbox for everything, but after reading this, I\'m definitely going to start incorporating Grid into my projects. The grid-template-areas feature is a game-changer!'
            },
            {
                id: 3,
                name: 'Emily Chen',
                date: 'May 23, 2025',
                avatar: '../images/user3.jpg',
                text: 'Could you do a follow-up tutorial on how to create a responsive image gallery using CSS Grid? That would be super helpful!'
            }
        ]
    },
    // Add more blog posts here with the same structure
];

// Function to load blog post content
function loadBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    
    if (!post) {
        // Post not found, show error message
        const contentDiv = document.getElementById('post-content');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="text-center py-12">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">The requested blog post could not be found.</p>
                    <a href="../index.html" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        <i class="fas fa-arrow-left mr-2"></i> Back to Home
                    </a>
                </div>
            `;
        }
        return;
    }
    
    // Ensure image paths are correct
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
    const featuredImage = post.image ? post.image.replace('..', basePath) : '';
    const authorImage = post.author.image ? post.author.image.replace('..', basePath) : '';

    // Update page title
    document.title = `${post.title} | VibelyCode`;
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
    }
    
    // Update post title
    const postTitle = document.getElementById('post-title');
    if (postTitle) {
        postTitle.textContent = post.title;
    }
    
    // Update post meta
    const postMeta = document.getElementById('post-meta');
    if (postMeta) {
        postMeta.innerHTML = `
            <span class="inline-flex items-center">
                <i class="far fa-folder mr-1"></i> ${post.category}
            </span>
            <span class="mx-2">•</span>
            <span class="inline-flex items-center">
                <i class="far fa-calendar mr-1"></i> ${post.date}
            </span>
            <span class="mx-2">•</span>
            <span class="inline-flex items-center">
                <i class="far fa-clock mr-1"></i> ${post.readTime}
            </span>
        `;
    }
    
    // Update post image with correct path
    const postImage = document.getElementById('post-image');
    if (postImage && featuredImage) {
        postImage.src = featuredImage;
        postImage.alt = post.title;
    }
    
    // Update post content with correct image paths
    let processedContent = post.content;
    if (basePath) {
        // Update any relative image paths in the content
        processedContent = processedContent.replace(/src="\.\.\//g, `src="${basePath}`);
    }
    
    const postContent = document.getElementById('post-content');
    if (postContent) {
        postContent.innerHTML = processedContent;
    }
    
    // Update post tags
    const postTags = document.getElementById('post-tags');
    if (postTags) {
        postTags.innerHTML = post.tags.map(tag => 
            `<a href="#" class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white transition-colors">#${tag}</a>`
        ).join('');
    }
    
    // Update author info with correct image path
    const authorImageElement = document.getElementById('author-image');
    if (authorImageElement) {
        authorImageElement.src = authorImage || 'https://via.placeholder.com/100';
        authorImageElement.alt = post.author.name;
    }
    
    const authorName = document.getElementById('author-name');
    if (authorName) {
        authorName.textContent = post.author.name;
    }
    
    const authorTitle = document.getElementById('author-title');
    if (authorTitle) {
        authorTitle.textContent = post.author.title;
    }
    
    const authorBio = document.getElementById('author-bio');
    if (authorBio) {
        authorBio.textContent = post.author.bio;
    }
    
    // Update comments with correct avatar paths
    const commentsList = document.getElementById('comments-list');
    if (commentsList && post.comments) {
        commentsList.innerHTML = post.comments.map(comment => {
            const commentAvatar = comment.avatar ? comment.avatar.replace('..', basePath) : 'https://via.placeholder.com/48';
            return `
                <div class="flex gap-4">
                    <img src="${commentAvatar}" alt="${comment.name}" class="w-12 h-12 rounded-full object-cover">
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-1">
                            <h4 class="font-semibold text-gray-900 dark:text-white">${comment.name}</h4>
                            <span class="text-sm text-gray-500">${comment.date}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300">${comment.text}</p>
                        <button class="text-sm text-primary hover:text-primary/80 mt-2 flex items-center">
                            <i class="far fa-reply mr-1"></i> Reply
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update comments
    const commentsSection = document.querySelector('.mb-8');
    if (commentsSection && post.comments) {
        const commentsHTML = post.comments.map(comment => `
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 mb-4 shadow-sm">
                <div class="flex items-center mb-4">
                    <img src="${comment.avatar}" alt="${comment.name}" class="w-10 h-10 rounded-full mr-3">
                    <div>
                        <h4 class="font-bold">${comment.name}</h4>
                        <span class="text-sm text-gray-500 dark:text-gray-400">${comment.date}</span>
                    </div>
                </div>
                <p class="text-gray-700 dark:text-gray-300">${comment.text}</p>
            </div>
        `).join('');

        commentsSection.innerHTML = `
            <h3 class="text-2xl font-bold mb-6">Comments (${post.comments.length})</h3>
            ${commentsHTML}
            <!-- Comment Form -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mt-6">
                <h4 class="font-bold text-lg mb-4">Leave a Comment</h4>
                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input type="text" id="name" class="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary">
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="comment" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Comment</label>
                        <textarea id="comment" rows="4" class="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    </div>
                    <button type="submit" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">Post Comment</button>
                </form>
            </div>
        `;
    }
}

// Initialize blog post when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Get the post ID from the URL or hash
    const urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('postId');
    
    // If no postId in URL, check hash
    if (!postId && window.location.hash) {
        postId = window.location.hash.substring(1);
    }
    
    // If still no postId, use the first post
    if (!postId && blogPosts.length > 0) {
        postId = blogPosts[0].id;
        // Update URL without reloading
        const newUrl = window.location.pathname + '?postId=' + postId;
        window.history.replaceState({}, '', newUrl);
    }
    
    if (postId) {
        loadBlogPost(postId);
    } else {
        // Show error message if no posts available
        const contentDiv = document.getElementById('post-content');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="text-center py-12">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">The requested blog post could not be found.</p>
                    <a href="../index.html" class="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        <i class="fas fa-arrow-left mr-2"></i> Back to Home
                    </a>
                </div>
            `;
        }
    }

    // Add event listener for comment form submission
    const commentForm = document.querySelector('form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add comment submission logic here
            alert('Comment submitted! (This is a demo)');
            commentForm.reset();
        });
    }
});
