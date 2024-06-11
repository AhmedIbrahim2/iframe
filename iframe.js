(function() {
  // Function to create and insert the form into the specified div
  function loadForm() {
    // Check if the element with the specified ID exists
    var targetDiv = document.getElementById("ahmed");
    if (targetDiv) {
      // Create the form HTML
      var formHTML = `
        <div class="container">
          <h1>Create Account</h1>
          <iframe src="https://ahmedibrahim2.github.io/iframe/form.html" width="600" height="600"></iframe>
        </div>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
          .form-group { margin-bottom: 15px; }
          .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
          .form-group input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
          .form-group button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }
          .form-group button:hover {
            background-color: #0056b3;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .form-group button:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.25);
          }
        </style>
      `;

      // Insert the form HTML into the target div
      targetDiv.innerHTML = formHTML;
    } else {
      console.error('Div with ID "ahmed" not found.');
    }
  }

  // Add an event listener to call loadForm when the page has fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    loadForm();
  });

  // Expose the loadForm function to the global scope
  window.loadForm = loadForm;
})();
