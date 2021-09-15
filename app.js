// Item controller

// const ItemCtrl = (function() {
// // creating a constructor for items
// const Item = function(id, name, calories) {
//     this.id = id;
//     this.name = name;
//     this.calories = calories;
// }

// // Creating data structure

// const data = {
//    items: [

//     {id: 0, name: 'Bread', calories: 1000},
//     {id: 1, name: 'Butter', calories: 2000},
//     {id: 2, name: 'Wine', calories: 3000}
//    ],

//    currentItem: null,
//    totalCalories: 0
   
   

// };
//    // Public methods

//    return {
//        getItems: function() {
//         return data.items
//        },
//        logData: function() {
//            return data;
//        }
//    }

// })();


// // UI Controller

// const UICtrl = (function() {
//     const UIselectors = {
//     itemList: '#item-list'
//     }

//     // Public methods

//     return {
//         populateItemList: function(items) {
//             let html = '';
//             items.forEach(function(item) {
//                 html += `
//                 <li class="collection-item" id="item-${item.id}">
//                 <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
//                 <a href="#" class="secondary-content">
//                   <i class="edit-item fa fa-pencil"></i>
//                 </a>
//               </li>
                
//                 `
//             })

//             // Insert list items into the DOM

//             document.querySelector(UIselectors.itemList).innerHTML = html;
//         }

//     }
// })()


// // App controller

// const AppCtrl = (function(ItemCtrl, UICtrl) {

//     // Public methods
    
//     return {
//       init: function() {
//          // Fetching data from Item controller
//           const items = ItemCtrl.getItems();

//           // Populate list with items

//           UICtrl.populateItemList(items)
//       }
//     }

// })(ItemCtrl, UICtrl)

// AppCtrl.init()



// Item controller

const ItemCtrl = (function() {
// Creating a constructor for items

const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
}

// Creating data structure for items

const data = {

    items: [

        {id: 0, name: "Bread", calories: 1000},
        {id: 1, name: "Wine", calories: 2000},
        {id: 2, name: "Salmon fish", calories: 500}
    ],

    currentItem: null,
    totalCalories: 0
}

// Public methods

return {
    getItems: function() {
        return data.items;
    }
}


})();


// UI controller
const UICtrl = (function() {
    
    // Public methods
    
    return {

        outputListItem: function(items) {
            let output = '';
            items.forEach(function(item) {
            output += `
            <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}</strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
            `
            })

            document.querySelector('#item-list').innerHTML = output;
        }
    }


})()

// App controller

const AppCtrl = (function(ItemCtrl, UICtrl) {

    // Public methods

    return {
    init: function() {
     const items = ItemCtrl.getItems();
     UICtrl.outputListItem(items);
    }

    }

})(ItemCtrl, UICtrl)
AppCtrl.init()




















