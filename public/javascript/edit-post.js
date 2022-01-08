const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  fetch(`/api/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful GET request:', data);
      tinymce.get("mytextarea").setContent(data.post_description)
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);


  