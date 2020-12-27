const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-9",
        price: 185.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2006-9",
        price: 15.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-9",
        price: 95.0,
        count: 1,
      },
    ],
  },
  methods: {
    getFinalPrice(price) {
      return "￥" + price.toFixed(2);
    },
    decrement(index) {
      this.books[index].count--;
      console.log("....decrement");
    },
    increment(index) {
      this.books[index].count++;
      console.log("....increment");
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    },
  },
  filters: {
    //过滤器
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      //   for(let i = 0; i< this.books.length; i++) {
      //       totalPrice += this.books[i].price * this.books[i].count;
      //   }
      //  for( let i in books){
      //    totalPrice += books[i].price * books[i].count
      //  }
      for (let item of books) {
        totalPrice += item.price * item.count;
      }
      console.log(".....", totalPrice);
      return totalPrice;
    },
  },
})
//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
const nums = [10,20,30,10,40,60,90,50]
// let newNums = []
let newNums = nums.filter(function(n){  
  //filter中回调函数有一个要求，必须返回一个boolean，
  //返回true，函数内部会自动将回调的n加入到新的数组中
  return n<50
})
console.log(newNums);

let mapNums = nums.map(function(n){
  return n*2
})
console.log(mapNums)

let sumNums = nums.reduce(function(preValue,n){
  return preValue + n
},0)

let total = nums.filter(function(n){
  return n<50
}).map(function(n){
  return n*2
}).reduce(function(preValue,n){
  return preValue + n
},0)
//1需求：取出所有小于50的数
// for(let n of nums){
//   if(n<50){
//     newNums.push(n)
//   }
// }
//2需求，将所有小于50的数进行转换：全部*2

//3需求：将所有数据相加得到和

