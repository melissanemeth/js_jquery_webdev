// the function name is the controller name
function BasketCtrl($scope) {
  $scope.description = 'Single ticket';
  $scope.cost = 8;
  $scope.qty = 1;
}

/* if any of the above variables change, the view will change
because of data binding.
Very helpful when loading data from a separate file into
the view. */

/* A page can have multiple controllers. Each controller can
have properties of the same name without any trouble, because
the scope lies only within that element. */