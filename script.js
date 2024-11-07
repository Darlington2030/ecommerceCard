// Select the container that holds all product previews
let preveiwContainer = document.querySelector('.products-preview');
// Select all individual preview boxes within the container
let previewBox = preveiwContainer.querySelectorAll('.preview');

// Add click event to each product in the products container
document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        // Display the preview container when a product is clicked
        preveiwContainer.style.display = 'flex';

        // Get the data-name attribute of the clicked product
        let name = product.getAttribute('data-name');

        // Check each preview box to match it with the clicked product
        previewBox.forEach(preview => {
            // Get the data-target attribute of the preview box
            let target = preview.getAttribute('data-target');

            // If product name matches preview target, show the preview
            if (name == target) {
                preview.classList.add('active'); // Make the matching preview visible
            }
        });
    };
});

// Add click event to close each preview box
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        // Hide the active preview and the preview container
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});