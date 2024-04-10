function SavedCal() {
    const UserCalorie = document.getElementById("UserCal");
    localStorage.setItem("UserCalorie", UserCalorie.value);
    console.log(UserCalorie.value);
}
    const CalCount = localStorage.getItem("UserCalorie");
//Function for saving the users calorie imput

customElements.define('page-home', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML =` 
    <ion-header>
        <ion-toolbar color="warning">
            <ion-title>Food Finder</ion-title>
            <!--Name of App-->
        </ion-toolbar>
    </ion-header>
    
    <ion-content>
        <ion-grid>
            <ion-row>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/diet" expand="block" color="warning">Diet</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/" expand="block" color="warning">Home</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/nutrition" expand="block" color="warning">Nutrition</ion-button>
                </ion-col>
                <!--Adds three buttons that link to the other pages and are spaced out using a grid underneith the title-->
            </ion-row>

            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <h6>Home Page</h6>
                </ion-col>
                <!--Adds text that tells you what page your on-->
            </ion-row>
            
            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <ion-card>
                        <ion-card-content>
                            <ion-img src="./Pictures/Food.png"></ion-img>
                        </ion-card-content>
                        <!--Adds an image inbetween the buttons and text-->
                    </ion-card>

                    <ion-card>
                        <ion-card-content>
                            <p>
                                Food fider is an app that can tell you all about specific foods, its can tell you the nutritional and diet information on different foods and food products.
                            </p>
                            <p>
                                It mainly supports telling you the fat content and calorie count of food items.
                            </p>
                            <p>
                                It is made by Birnie and is using Spoonacular's API and Ionic framework.
                            </p>
                        </ion-card-content>
                        <!--Adds a paragraph bellow the image that contains information about the app-->
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <ion-input id="UserCal" placeholder="Whats your max calories in a day?"></ion-input>
                    <ion-button onclick="SavedCal()" expand="block" color="warning">Enter</ion-button>
                    <!--Adds a button and imput for the users daily calorie limit, is displayed on page three/nutrition-->
                </ion-col>     
            </ion-row>

        </ion-grid>
        <!--Everything has been put into a grid so that I can size and fit everthing together-->
    </ion-content>
        `;
    }
});

customElements.define('page-diet', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML =` 
        <ion-header>
        <ion-toolbar color="warning">
            <ion-title>Food Finder</ion-title>
            <!--Name of App-->
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-grid>

            <ion-row>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/diet" expand="block" color="warning">Diet</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/" expand="block" color="warning">Home</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/nutrition" expand="block" color="warning">Nutrition</ion-button>
                </ion-col>
                <!--Adds three buttons that link to the other pages and are spaced out using a grid underneith the title-->
            </ion-row>

            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <h6>Diet Page</h6>
                </ion-col>
                <!--Adds text that tells you what page your on-->
            </ion-row>
            
            <ion-row>
                <ion-col size="12" class="ion-text-center">
                    <ion-card>
                        <ion-card-content>
                            <ion-img src="./Pictures/Diagram.png"></ion-img>
                        </ion-card-content>
                        <!--Adds an image inbetween the buttons and text-->
                    </ion-card>

                    <ion-card>
                        <ion-card-content>
                            <p>
                                A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.
                            </p>
                        </ion-card-content>
                        <!--Adds a paragraph bellow the image that contains information about why diets are importent-->
                    </ion-card>

                    <ion-card>
                        <p>
                            A healthy diet comprises a combination of different foods. These include:
                        </p>
                        <p>
                            Staples like cereals (wheat, barley, rye, maize or rice) or starchy tubers or roots (potato, yam, taro or cassava).
                        </p>
                        <p>
                            Legumes (lentils and beans).
                        </p>
                        <p>
                            Fruit and vegetables.
                        </p>
                        <p>
                            Foods from animal sources (meat, fish, eggs and milk).
                        </p>
                        <!--Adds a paragraph that contains information about what foods are in a healthly diet-->
                    </ion-card>
                        
                    <ion-card>
                        <p>
                            Eat plenty of vegetables and fruit:
                        </p>
                        <p>
                            They are important sources of vitamins, minerals, dietary fibre, plant protein and antioxidants.
                        </p>
                        <p>
                            People with diets rich in vegetables and fruit have a significantly lower risk of obesity, heart disease, stroke, diabetes and certain types of cancer.
                        </p>
                        <!--Adds a paragraph that contains information about fruit and veg-->
                    </ion-card>

                    <ion-card>
                        <p>
                            Eat less fat:
                        </p>
                        <p>
                            Fats and oils and concentrated sources of energy. Eating too much, particularly the wrong kinds of fat, like saturated and industrially-produced trans-fat, can increase the risk of heart disease and stroke.
                        </p>
                        <p>
                            Using unsaturated vegetable oils (olive, soy, sunflower or corn oil) rather than animal fats or oils high in saturated fats (butter, ghee, lard, coconut and palm oil) will help consume healthier fats.
                        </p>
                        <p>
                            To avoid unhealthy weight gain, consumption of total fat should not exceed 30% of a person's overall energy intake.
                        </p>
                        <!--Adds a paragraph that contains information about fat-->
                    </ion-card>

                    <ion-card>
                        <p>
                            Limit intake of sugars:
                        </p>
                        <p>
                            For a healthy diet, sugars should represent less than 10% of your total energy intake. Reducing even further to under 5% has additional health benefits.
                        </p>
                        <p>
                            Choosing fresh fruits instead of sweet snacks such as cookies, cakes and chocolate helps reduce consumption of sugars.
                        </p>
                        <p>
                            Limiting intake of soft drinks, soda and other drinks high in sugars (fruit juices, cordials and syrups, flavoured milks and yogurt drinks) also helps reduce intake of sugars.
                        </p>
                        <!--Adds a paragraph that contains information about sugar-->
                    </ion-card>

                    <ion-card>
                        <p>
                            Reduce salt intake:
                        </p>
                        <p>
                            Keeping your salt intake to less than 5h per day helps prevent hypertension and reduces the risk of heart disease and stroke in the adult population.
                        </p>
                        <p>
                            Limiting the amount of salt and high-sodium condiments (soy sauce and fish sauce) when cooking and preparing foods helps reduce salt intake.
                        </p>
                        <!--Adds a paragraph that contains information about salt-->
                    </ion-card>

                    <ion-button href="https://www.who.int/initiatives/behealthy/healthy-diet#:~:text=A%20healthy%20diet%20is%20essential,are%20essential%20for%20healthy%20diet." expand="block" color="warning">More Information</ion-button>
                    <!--Adds a button that links to the world health organization website so that you can find out more information on diets-->
                </ion-col>
            </ion-row>

        </ion-grid>
        <!--Everything has been put into a grid so that I can size and fit everthing together-->
    </ion-content>
        `;
    }
});

customElements.define('page-nutrition', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="warning">
                    <ion-title>Food Finder</ion-title>
                    <!--Name of App-->
                </ion-toolbar>
            </ion-header>

            <ion-content>
                <ion-grid>

                    <ion-row>
                        <ion-col size="4" class="ion-text-center">
                            <ion-button href="#/diet" expand="block" color="warning">Diet</ion-button>
                        </ion-col>
                        <ion-col size="4" class="ion-text-center">
                            <ion-button href="#/" expand="block" color="warning">Home</ion-button>
                        </ion-col>
                        <ion-col size="4" class="ion-text-center">
                            <ion-button href="#/nutrition" expand="block" color="warning">Nutrition</ion-button>
                            <!--Adds three buttons that link to the other pages and are spaced out using a grid underneith the title-->
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12" class="ion-text-center">
                            <h6>Nutrition Page</h6>
                            <!--Adds text that tells you what page your on-->
                        </ion-col>

                        <ion-col size="12" class="ion-text-center">
                            <h6 class="ion-text-center">Your max calorie count is ${CalCount}</h6>
                            <!--Adds text that displays the users max daily calorie count if they have added it on the home page-->
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="12" class="ion-text-center">
                            <ion-item>
                                <ion-input id="foodInput" label="Enter Food:" type="text"></ion-input>
                            </ion-item>
                            <!--Adds an input for the user to search for food items-->
                            
                          <ion-button id="searchButton" expand="block" color="warning">Search</ion-button>
                          <!--Adds a button for the user to search for food items-->

                            <div id="resultContainer"></div>
                            <!--Shows the user their search results-->
                        </ion-col
                    </ion-row>

                </ion-grid>
                <!--Everything has been put into a grid so that I can size and fit everthing together-->
            </ion-content>
        `;

        const searchButton = this.querySelector('#searchButton');
        const foodInput = this.querySelector('#foodInput');
        const resultContainer = this.querySelector('#resultContainer');
        //is three variables for the search button, food input and the results container
        

        searchButton.addEventListener('click', () => { //Adds a click event listener to the search button
            const query = foodInput.value.trim(); //Trims the value of the food input field
            if (query !== '') { //Checks if the query is empty
                fetch(`https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=05ce922a461147e8b0c126d161d6dd95`)
                    //fetches the food id from the api
                    .then(response => response.json()) //Changes responce to json
                    .then(data => { //Processes the data from the responce
                        if (data.results.length > 0) { //Checks if there are any search results 
                            const firstResult = data.results[0]; //It gets the first result of the search 
                            const foodId = firstResult.id; //It extracts the ID of the food from the first result
                            fetch(`https://api.spoonacular.com/food/ingredients/${foodId}/information?apiKey=05ce922a461147e8b0c126d161d6dd95&amount=1`)
                                //fetches the calorie and fat count from the api using the id from the prevous result
                                .then(response => response.json()) //Changes responce to json
                                .then(data => { //Processes the data from the responce
                                    const nutrients = data.nutrition.nutrients; //It gets all the nutrient info from the searched food item
                                    const fatNutrient = nutrients.find(nutrient => nutrient.name.toLowerCase() === 'fat'); //Gets specificly the fat count from the nutrient info
                                    const caloriesNutrient = nutrients.find(nutrient => nutrient.name.toLowerCase() === 'calories'); //Gets specificly the calorie count from the nutrient info

                                    if (fatNutrient && caloriesNutrient) { //It checks if it has both of the fat and calorie info 
                                        resultContainer.innerHTML = `
                                            <ion-card>
                                                <ion-card-header>
                                                    <ion-card-title>${data.name}</ion-card-title>
                                                </ion-card-header>
                                                <ion-card-content>
                                                    <p>Calories: ${caloriesNutrient.amount}</p>
                                                    <p>Fat: ${fatNutrient.amount}</p>
                                                </ion-card-content>
                                                <!--Displays the name, calorie and fat count of the food item searched-->
                                            </ion-card>
                                        `;
                                    } else {
                                        resultContainer.innerHTML = '<p>Nutrition information not found</p>'; //Error msg if no nutrition is found
                                    }
                                })
                                .catch(error => { //Catches any errors when its fetching the food info 
                                    console.error('Error fetching food information:', error); //Logs the error 
                                    resultContainer.innerHTML = '<p>Error fetching food information</p>'; //It display error msg
                                });
                        } else {
                            resultContainer.innerHTML = '<p>No results found</p>'; //Displays a msg if there are no result found
                        }
                    })
                    .catch(error => { //Catches any errors when its fetching the food info 
                        console.error('Error fetching food information:', error); //Logs the error 
                        resultContainer.innerHTML = '<p>Error fetching food information</p>'; //It display error msg
                    });
            } else {
                resultContainer.innerHTML = '<p>Please enter a food item</p>'; //Displays a msg if there are no result found
            }
        });
    }
});