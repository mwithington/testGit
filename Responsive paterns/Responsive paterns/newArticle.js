app.controller("MainContoller", ["$scope",
function ($scope) {
    $scope.userList = [{
        userName: 'Mwithington',
        timeCreated: new Date(),
        postCount: '0'
    }
    ]
    $scope.addUser = function () {
        $scope.userList.push({
            userName: $scope.fromUserText,
            time: new Date(),
            postCount: '0'
        })
    }
}

]);