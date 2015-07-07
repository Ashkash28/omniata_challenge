var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('contactIndexController', ['$scope', '$http', '$routeParams', '$route',
  function($scope, $http, $routeParams, $route)
  {

  	$scope.contacts = [];

//Retrieves all contacts from db
  	$http.get('./contacts.json').success(function(data){
  		$scope.contacts = data
  	});

//Adds a new contact to db
	$scope.addContact = function()
		{
			$scope.errors = [];
			$scope.success = "";
			if($scope.newContact === undefined)
			{
				$scope.errors.push("Please enter a first name");
        $scope.errors.push("Please enter a last name");
			}
			else
			{
  			if($scope.newContact.firstname === undefined || $scope.newContact.firstname === " ")
  			{
  				$scope.errors.push("Please enter a first name");
  			}
  			if($scope.newContact.lastname === undefined || $scope.newContact.lastname === " ")
  			{
  				$scope.errors.push("Please enter a last name");
  			}
			}
			if($scope.errors.length === 0){
  			$http.post('./contacts.json', $scope.newContact).success(function(data){
  				$scope.contacts.push(data);
  			});
  			$scope.success = "User successfully added!";
			}
			$scope.newContact = {};
		}

//Deletes one contact from the db
  	$scope.deleteContact = function(contact)
  	{
      if (confirm("Are you sure about that?") == true) 
      {
    		$http.delete('/contacts/'+ contact.id + '.json').success(function(){
    			$route.reload(); //This reloads the controller 
    		});

      } else
      {
        return;
      }
  	}

  }
]);

//Profile controller for SHOW and UPDATE

contactControllers.controller('contactProfileController', ['$scope', '$http', '$routeParams', '$route',
  function($scope, $http, $routeParams, $route)
  {
  	
  	$scope.id = $routeParams.contactId;

//Retrieves one contact from db
  	$http.get('/contacts/' + $routeParams.contactId + '.json').success(function(data){
  		$scope.contact = data;
  	});

//Updates a contact from the db
  	$scope.updateContact = function()
  	{
  		$http.put('/contacts/'+ $routeParams.contactId + '.json', $scope.editContact).success(function(data){
  			$route.reload();
  		});
  		$scope.editContact = {};
  	}

  }
]);