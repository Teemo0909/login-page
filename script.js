
let U = document.getElementById("User")
console.log(U)
let P = document.getElementById("Password")
console.log(P)
    // Reload the current page
    function toorder() {
        window.location.href = "order.html";
    }


    function Login(){
        let User = U.value
        let Pass = P.value

        console.log("Username = "+ User)
        console.log("Password = "+ Pass)

            if (User == 1 && Pass == 1) {
                toorder()
                console.log("เข้าสู่ระบบสำเร็จ")
                alert("เข้าสู่ระบบสำเร็จ")
            }

            else {
                console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
                alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
            }

        U.value = "";
        P.value = "";
    }