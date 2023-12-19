// ===== NHẬP MẢNG =====
var arrX = [];
function laySoX() {
  var x = document.getElementById("nhapSoX").value * 1;
  arrX.push(x);
  document.getElementById("kqX").innerHTML = arrX;
}
document.getElementById("btnX").onclick = laySoX;

// ===== BÀI TẬP 1 =====
function tinhTong1() {
  var tinhTong = 0;
  for (var i = 0; i < arrX.length; i++) {
    if (arrX[i] % 2 === 0) {
      tinhTong += arrX[i];
    } else {
      tinhTong = tinhTong + 0;
    }
  }
  document.getElementById(
    "kq1"
  ).innerHTML = `Tổng các số dương trong mảng là: ${tinhTong}`;
}
document.getElementById("btn1").onclick = tinhTong1;

// ===== BÀI TẬP 2 =====
function tinhTong2() {
  var tinhTong = 0;
  for (var i = 0; i < arrX.length; i++) {
    if (arrX[i] % 2 === 0) {
      tinhTong++;
    } else {
      tinhTong = tinhTong + 0;
    }
  }
  document.getElementById(
    "kq2"
  ).innerHTML = `Tổng các số dương trong mảng là: ${tinhTong}`;
}
document.getElementById("btn2").onclick = tinhTong2;

// ===== BÀI TẬP 3 =====
function timSoNhoNhat() {
  //   --- Sắp xếp theo thứ tự tăng dần ---
  var arrSapXep = arrX.sort(function (a, b) {
    return a - b;
  });
  //   console.log(arrSapXep);
  //   --- tìm số nhỏ nhất ---
  var soNhoNhat = arrSapXep[0];
  document.getElementById(
    "kq3"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${soNhoNhat}`;
}
document.getElementById("btn3").onclick = timSoNhoNhat;

// ===== BÀI TẬP 4 =====
function timSoDuongNhoNhat() {
  var arrSapXep = soDuong.sort(function (a, b) {
    return a - b;
  });
  //   console.log(arrSapXep);
  var soDuongNhoNhat = arrSapXep[0];
  document.getElementById(
    "kq4"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${soDuongNhoNhat}`;
}
document.getElementById("btn4").onclick = timSoDuongNhoNhat;

// ===== BÀI TẬP 5 =====
function timSoChanCuoiCung() {
  for (var i = 0; i < arrX.length; i++) {
    if (arrX[i] % 2 === 0) {
      var soChanCuoiCung = arrX[i];
    } else {
      var soChanCuoiCung = -1;
    }
  }
  document.getElementById(
    "kq5"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${soChanCuoiCung}`;
}
document.getElementById("btn5").onclick = timSoChanCuoiCung;

// ===== BÀI TẬP 6 =====
function doiCho2GiaTri() {
  var viTri1 = document.getElementById("viTriSo1").value * 1;
  //   console.log(viTri1);
  var viTri2 = document.getElementById("viTriSo2").value * 1;
  //   console.log(viTri2);
  var giaTri1 = arrX[viTri1];
  //   console.log(giaTri1);
  var giaTri2 = arrX[viTri2];
  //   console.log(giaTri2);
  var BienTam = giaTri1;
  arrX[viTri1] = giaTri2;
  arrX[viTri2] = BienTam;
  var ketQua6 = arrX;
  document.getElementById(
    "kq6"
  ).innerHTML = `Dãy số sau khi thay đổi là: ${ketQua6}`;
}
document.getElementById("btn6").onclick = doiCho2GiaTri;

// ===== BÀI TẬP 7 =====
function arrTangDan() {
  var arrTangDan = arrX.sort(function (a, b) {
    return a - b;
  });
  //   console.log(arrTangDan);
  document.getElementById(
    "kq7"
  ).innerHTML = `Sắp xếp theo giá trị tăng dần: ${arrTangDan}`;
}
document.getElementById("btn7").onclick = arrTangDan;

// ===== BÀI TẬP 8 =====

// ===== BÀI TẬP 9 =====

// ===== BÀI TẬP 10 =====
