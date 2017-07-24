(function (arr) {
    var result = {};
    var notSortedResult = getGroupedByKey(arr);

    for (var i = 0; i < notSortedResult.entranceCount; i++) {
        var localMaxKey = getOrderMaxKey(notSortedResult.groupedByKey);
        result[localMaxKey] = notSortedResult.groupedByKey[localMaxKey];
        delete notSortedResult.groupedByKey[localMaxKey];
    }

    console.log(result);


    function getGroupedByKey(arr) {
        var groupedByKey = {};
        var entranceCount = 0;

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];

            if (groupedByKey[item]) {
                groupedByKey[item] = groupedByKey[item] + 1;
            } else {
                groupedByKey[item] = 1;
                entranceCount = entranceCount + 1;
            }
        }

        return {groupedByKey: groupedByKey, entranceCount: entranceCount};
    }


    function getOrderMaxKey(data) {
        var orderKey;
        for (var key in data) {
            if (!orderKey) {
                orderKey = key;
            }
            if (data[orderKey] < data[key]) {
                orderKey = key;
            }
        }

        return orderKey;
    };
})(["pear", "pear", "cherry", "apple", "apple", "pear", "apple", "banana", "pear"]);
