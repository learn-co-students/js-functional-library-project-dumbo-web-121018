fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        const copyCollection = collection
        for (let i = 0; i < copyCollection.length; i++){
          callback(copyCollection[i])
        }
        return collection
      }
      else{
        const copyCollection = Object.values(collection)
        for (let i = 0; i < copyCollection.length; i++){
          callback(copyCollection[i])
        }
        return collection
      }
    },

    map: function(collection, callback) {
      const newCollection = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          newCollection.push(callback(collection[i]))
        }
        return newCollection
      }
      else{

        const copyCollection = Object.values(collection)
        for (let i = 0; i < copyCollection.length; i++){
          newCollection.push(callback(copyCollection[i]))
        }
      return newCollection
      }
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined){
        acc = 0
      }
      for (let i = 0; i < collection.length; i++){
         acc = callback(acc, collection[i])
         //function(acc, val, collection) { return acc + val; }
      }
      return acc

    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()
