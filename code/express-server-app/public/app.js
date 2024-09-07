fetch('/todos')
  .then(response => response.json())
  .then(data => {
      // Process and display the to-do items from your custom JSON data
      console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));
