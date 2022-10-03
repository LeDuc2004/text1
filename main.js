
// // bài 1
// let a = "heloo"
// let b = a.split("")
// console.log(b)
// let a2 = " "
// for ( i = b.length -1 ; i>=0 ; i--)
// {
//     a2 = a2 + b[i] 
   
 
// } 

// console.log(a2)


// // bài 2
//  let a = " cai qq j kia".toLocaleUpperCase()
//  console.log(a)


// // bài 3
// let a = ["one","two","three","one","two","three"]
// let b = new Set(a)
// let c = Array.from(b)
// console.log(c)

// // bài 4
// let a = [-1 , 5, 2, 3, 4, 1]
// let b = []
// for ( i=0 ; i <= a.length -1 ; i++){
//     for ( j = 0 ; j < a.length -1 ; j++ ){
//   if(a[i] < a[j]) { 
//     b.push(i)


//   }console.log(b)

//     }
        

// }


// // bài 5
// let a = prompt(`Nhap 1 trong bon chu C/R/U/D 
// C:tạo list mới
// R:kiểm tra list
// U:cập nhập list
// D:xóa list
// E: thoát` )

// while( a != "C" && a != "R"&& a != "U" && a != "D" && a != "E" ){
// a = prompt(`Nhap 1 trong bon chu C/R/U/D 
// // C:tạo list mới
// // R:kiểm tra list
// // U:cập nhập list
// // D:xóa list
// // E: thoát`) }
// let danhSach = ["thầy Hai", " chị Linh ","thầy Cường"]
// switch(a){
//     case "E" : break
//     case "C": let them = prompt(" thêm nhân viên")
//      danhSach.push(them)
//      alert(danhSach)
//  break;
//    case "R": alert(danhSach)
// break;
//    case "U" : let thay = prompt("bạn muốn thay đổi vị trí số ? " + danhSach)
//     let bang = prompt(" nhập tên bạn muốn them ")
//   let number = thay -1
//      danhSach.splice(number,1,bang)
//    alert(danhSach)
//    break
//    case "D": 
//    let xoa = prompt(" nhập vị trí muốn xóa : "+ danhSach)
//    let number2 = xoa - 1
//    danhSach.splice(number2,1)
//    alert(danhSach)
   

// }


// // bài 7
// let a = prompt(`Nhap 1 trong bon chu C/R/U/D 
// C:mua thêm sách
// R:kiểm tra giỏ hàng
// U:cập nhật giỏ hàng
// D:xóa 
// E: thoát` )

// while( a != "C" && a != "R"&& a != "U" && a != "D" && a != "E" ){
// a = prompt(`Nhap 1 trong bon chu C/R/U/D 
// // C:mua thêm sách
// // R:kiểm tra giỏ hàng
// // U:cập nhật giỏ hàng
// // D:xóa 
// // E: thoát`) }
// let danhSach = ["Tôi thấy cỏ" , " Dế mèn"]
// switch(a){
//     case "E" : break
//     case "C": let them = prompt("mua thêm sánh")
//      danhSach.push(them)
//      alert(danhSach)
//  break;
//    case "R": alert(danhSach)
// break;
//    case "U" : let thay = prompt("bạn muốn thay đổi vị trí số ? " + danhSach)
//     let bang = prompt(" nhập tên bạn muốn thêm ")
//   let number = thay -1
//      danhSach.splice(number,1,bang)
//    alert(danhSach)
//    break
//    case "D": 
//    let xoa = prompt(" nhập vị trí muốn xóa : "+ danhSach)
//    let number2 = xoa - 1
//    danhSach.splice(number2,1)
//    alert(danhSach)



// }
