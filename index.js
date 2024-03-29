// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread 🍞", "Bruschetta 🥪", "Mozzarella Sticks 🧺"],
    MainCourses: ["Margherita Pizza 🍕", "Spaghetti Carbonara 🍝", "Grilled Fish with Artichoke Caponata 🐟"],
    Desserts: ["Tiramisu 🍰", "Cheesecake 🍰", "Pudding 🥣"] 
};

// Function to display menu items by category

function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu'); // Get the menu container element from the HTML
        
    for (const [category, items] of Object.entries(menu)) { // Loop through each category and its items in the menu object
        const categoryElem = document.createElement('h3');  // Create an element to represent the category // Create an element to represent a list of items
        categoryElem.textContent = category; // Set the text content of the category element to the category name

        menuContainer.appendChild(categoryElem); // Append the category element to the menu container
    
        const itemsList = document.createElement('ul');
        menuContainer.appendChild(itemsList); // Append a list of items element to the menu container
        items.forEach(item => { // Loop through the items in the category and create list items
            const itemElem = document.createElement('li'); // Create a list item element
            itemElem.textContent = item;  // Set the text content of the list item element to the item name
            itemElem.onclick = () => addToOrder(item); // Attach a click event listener to the list item to add it to the order
            itemsList.appendChild(itemElem); // Append the list item to the list of items
        });
    }
}        

// Callback function for adding an item to the order
 function addToOrder(itemName) {
        const orderList = document.getElementById('order-items');
        const orderTotalElem = document.getElementById('order-total'); // Get the order items list and the order total element from the HTML
    
    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName; // Set the text content of the list item to the item name
    orderList.appendChild(orderItem); // Append the list item to the order items list

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElem.textContent);
    const itemPrice = 25;  // every item costs R25
    const newTotal = currentTotal + itemPrice;
    orderTotalElem.textContent = newTotal.toFixed(2);

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
        displayMenuItems(menu); // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);