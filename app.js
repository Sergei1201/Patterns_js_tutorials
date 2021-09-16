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

// const ItemCtrl = (function() {
// // Creating a constructor for items

// const Item = function(id, name, calories) {
//     this.id = id;
//     this.name = name;
//     this.calories = calories;
// }

// // Creating data structure for items

// const data = {

//     items: [

//         {id: 0, name: "Bread", calories: 1000},
//         {id: 1, name: "Wine", calories: 2000},
//         {id: 2, name: "Salmon fish", calories: 500}
//     ],

//     currentItem: null,
//     totalCalories: 0
// }

// // Public methods

// return {
//     getItems: function() {
//         return data.items;
//     }
// }


// })();


// // UI controller
// const UICtrl = (function() {
    
//     // Public methods
    
//     return {

//         outputListItem: function(items) {
//             let output = '';
//             items.forEach(function(item) {
//             output += `
//             <li class="collection-item" id="item-${item.id}">
//         <strong>${item.name}</strong> <em>${item.calories} Calories</em>
//         <a href="#" class="secondary-content">
//           <i class="edit-item fa fa-pencil"></i>
//         </a>
//       </li>
//             `
//             })

//             document.querySelector('#item-list').innerHTML = output;
//         }
//     }


// })()

// // App controller

// const AppCtrl = (function(ItemCtrl, UICtrl) {

//     // Public methods

//     return {
//     init: function() {
//      const items = ItemCtrl.getItems();
//      UICtrl.outputListItem(items);
//     }

//     }

// })(ItemCtrl, UICtrl)
// AppCtrl.init()




// Item controller

// const ItemCtrl = (function() {
//     // Creating a constructor for items
// const Item = function(id, name, calories) {
//     this.id = id;
//     this.name = name;
//     this.calories = calories;
// }

// // Creating data structure for items
// const data = {

//     items: [
//         {id: 0, name: 'Beer', calories: 540},
//         {id:1, name: 'Jack Daniels', calories: 1000},
//         {id: 2, name: 'Red wine', calories: 2000}
//     ],
    
//     currentItem: null,
//     totalCalories: 0
// }
// // Public methods

// return {

//     getItems: function() {
//         return data.items;
//     },
//     addItem: function(name, calories) {
//         let ID;

//         // Generating ID
//         if(data.items.length > 0) {
//          ID = data.items[data.items.length -1].id + 1
//         } else {
//             ID = 0
//         }

//         // Calories to number
//         calories = parseInt(calories);

//         // Creating a new item
//         const newItem = new Item(ID, name, calories);
//         data.items.push(newItem);
//         return newItem;

//     }
// }
// })()

// // UI Controller

// const UICtrl = (function() {

//     const UIselectors = {
//         itemList: '#item-list',
//         addBtn: '.add-btn',
//         itemName: '#item-name',
//         itemCalories: '#item-calories'
//     }
// // Public methods
//  return {
//     outputItemList: function(items) {

//         let output = '';
//         items.forEach(function(item) {
//             output += `
//             <li class="collection-item" id="item-${item.id}">
//             <strong>${item.name} </strong> <em>${item.calories} Calories</em>
//             <a href="#" class="secondary-content">
//               <i class="edit-item fa fa-pencil"></i>
//             </a>
//           </li>
            
            
//             `
//         })

//         // outputing the results into the DOM
//         document.querySelector(UIselectors.itemList).innerHTML = output;
//     },

//     getInput: function() {
//       return {
//           name: document.querySelector(UIselectors.itemName).value,
//           calories: document.querySelector(UIselectors.itemCalories).value
//       }
//     },

//     getSelectors: function() {
//         return UIselectors;
//     }

//  }

    
// })()

// // App controller

// const App = (function(ItemCtrl, UICtrl) {
//     // Load event listeners
//    const loadEventListeners = function() {
//        const UIselectors = UICtrl.getSelectors();
//        document.querySelector(UIselectors.addBtn).addEventListener('click', itemAddSubmit);
//    }

//    itemAddSubmit = function(e) {
//        e.preventDefault();
//        const input = UICtrl.getInput();

//        //Checking for the input fields being filled in
//        if(input.name !== '' && input.calories !== '') {
       
//         // Add item
//         const newItem = ItemCtrl.addItem(input.name, input.calories);
        
 
//        } else {
//            console.log('Please fill out the form to proceed')
//        }
//    }
//     // Public methods

//     return {

//     init: function() {
//         const items = ItemCtrl.getItems();
//         UICtrl.outputItemList(items);
//         loadEventListeners();
//     }

//     }
// })(ItemCtrl, UICtrl)

// App.init()




// Item controller

const ItemCtrl = (function() {
    // Creating a constructor for Items
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Creating data structure
    const data = {
       items: [
           {id: 0, name: 'Jack Daniels', calories: 1000},
           {id: 1, name: 'Red Wine', calories: 2000},
           {id: 2, name: 'Cognac', calories: 3000}
       ],

       currentItem: null,
       totalCalories: 0
    }

    // Public methods

    return {

        getItems: function() {
            return data.items;
        },

        addItem: function(name, calories) {
            let ID;
            if(data.items.length > 0) {
                ID = data.items[data.items.length -1].id +1

            } else {
                ID =0
            }

            calories = parseInt(calories);
            const newItem = new Item(ID, name, calories);
            console.log(newItem)


        }

    }
})()
// UI controller

const UICtrl = (function() {

    const UIselector = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories'
    }

    // Public methods

    return {

        outputLisItem: function(items) {
         let output = '';
         items.forEach(function(item) {
         output += `
         <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
         
         
         `
         })
          // Outputing the items into the DOM
          document.querySelector(UIselector.itemList).innerHTML = output;
        },

        getSelectors: function() {
            return UIselector;
        },

        getInput: function() {

            return {
            
                name: document.querySelector(UIselector.itemName).value,
                calories: document.querySelector(UIselector.itemCalories).value,


            }
            
        }
     



    }


})()
// App controller

const App = (function(ItemCtrl, UICtrl) {

    const loadEventListeners = function() {
        const UIselectors = UICtrl.getSelectors();
        document.querySelector(UIselectors.addBtn).addEventListener('click', addItemToList)
    }
        addItemToList = function(e) {
        e.preventDefault();
         const input = UICtrl.getInput();
         if(input.name !== '' && input.calories !== '') {
             // Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);  
             // Add them into the DOM

             
         } else {
             console.log('Please fill all fields')
         }
        }


    // Public methods

    return {

     init: function() {
         const items = ItemCtrl.getItems();
         UICtrl.outputLisItem(items);
         loadEventListeners();
     }

    }

    
})(ItemCtrl, UICtrl)

App.init()










