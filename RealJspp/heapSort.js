const bucketSort = (arr, size = 5) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const buckets = Array.from(
      { length: Math.floor((max - min) / size) + 1 },
      () => []
    );
    arr.forEach(val => {
      buckets[Math.floor((val - min) / size)].push(val);
    });
    return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
  };
  bucketSort(["2017-10-01", '"2017-12-01"', '"2017-12-02"']); // [1, 3, 4, 6]
  console.log(bucketSort(["2017-10-01", '"2017-12-01"', '"2017-12-02"']))