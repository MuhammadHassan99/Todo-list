var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement('button');

  // add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //append buttond to li
  li.appendChild(deleteBtn);

// Appending item to list
  itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Aren you sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
// filter items
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    // get li's
    var items = itemList.getElementsByTagName('li');
    // converting to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}