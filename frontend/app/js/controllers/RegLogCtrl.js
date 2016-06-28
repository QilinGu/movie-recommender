module.exports = function ($scope, $location, RegLog) {

    // nav
    $scope.goFavourites = function () {
        $location.path("/favourites");
    };
    
    $scope.goRated = function () {
        $location.path("/rated");
    };

    $scope.goRegLog = function () {
        $location.path("/reglog");
    };

    // actions
    $scope.login = function () {
        console.log("user login");
        console.log($scope.loginUser);
    };

    $scope.register = function () {
        console.log("user registration");
        console.log($scope.registerUser);
        RegLog.test().then(
            function (response) {
                console.log("VRATIO PODATKE!");
                console.log(response.data);
            }
        );
    };

};