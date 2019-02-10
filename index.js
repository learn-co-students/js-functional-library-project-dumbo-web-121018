let fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (let key in collection) {
          callback(key, collection[key], collection)
        }
      }
      return collection
    },

    map: function (collection, callback) {
      let outArr = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          outArr.push(callback(collection[i]))
        }
      } else {
        for (let key in collection) {
          outArr.push(callback(collection[key], key))
        }
      }
      return outArr
    },

    reduce: function (collection, callback, accumulator = 0) {
      for (let i = 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection)
      }
      return accumulator
    },

    find: function (collection, predicate) {
      for (let element of collection) {
        if (predicate(element)) {
          return element
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      let outArr = []
      if (Array.isArray(collection)) {
        for (let element of collection) {
          if (predicate(element)) {
            outArr.push(element)
          }
        }
      } else {
        for (let key in collection) {
          if (predicate(collection[key])) {
            let obj = {}
            obj[key] = collection[key]
            outArr.push(obj)
          }
        }
      }
      return outArr
    },

    size: function (collection) {
      let count = 0
      for (let element in collection) {
        count++
      }
      return count
    },

    first: function (array, n = 1) {
      let outArr = []
      if (n === 1) {
        return array[0]
      } else {
        for (let i = 0; i < n; i++) {
          outArr.push(array[i])
        }
        return outArr
      }
    },

    last: function (array, n = 1) {
      let outArr = []
      let index = array.length - n
      if (n === 1) {
        return array[index]
      } else {
        for (let i = 0; i < n; i++) {
          outArr.push(array[index++])
        }
        return outArr
      }
    },

    compact: function (array) {
      let newArr = []
      let falsies = [false, null, 0, '', "", ``, undefined, NaN]
      for (let element of array) {
        if (!falsies.includes(element)) {
          newArr.push(element)
        }
      }
      return newArr
    },

    sortBy: function (array, callback) {
      let newArr = array.slice()
      let arrType = typeof array[0]
      return newArr.sort((element1, element2) => {
        if (arrType === 'number') {
          return callback(element1) - callback(element2)
        } else {
          return callback(element1).localeCompare(callback(element2))
        }
      })
    },

    flatten: function (array, shallow = false) {
      let newArr = []
      if (shallow) {
        return [].concat.apply([], array)
      } else {
        for (var i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            newArr = newArr.concat(fi.flatten(array[i]))
          } else {
            newArr.push(array[i])
          }
        }
      }
      return newArr
    },

    uniq: function (array, isSorted = false, callback = (el) => el) {
      let newArr = []
      let transform = []
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          if (callback(array[i]) !== callback(array[i - 1])) {
            newArr.push(array[i])
          }
        }
      } else {
        for (let element of array) {
          if (!transform.includes(callback(element))) {
            transform.push(callback(element))
            newArr.push(element)
          }
        }
      }
      return newArr
    },

    keys: function (object) {
      let newArr = []
      for (let key in object) {
        newArr.push(key)
      }
      return newArr
    },

    values: function (object) {
      let newArr = []
      for (let key in object) {
        newArr.push(object[key])
      }
      return newArr
    },

    functions: function (object) {
      let obj = {}
      for (let key in object) {
        if (typeof object[key] === 'function') {
          obj[key] = object[key]
        }
      }
      return fi.keys(obj).sort()
    },

    giveMeMore: function () {
      return true
    }
  }
})()

fi.libraryMethod()
