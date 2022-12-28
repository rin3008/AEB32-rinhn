# AEB32-manhph/3-Homeworks/Session 03/Basic/
1. Hãy phân tích các thuộc tính của Model product dựa vào UI basic-1.jpg.
2. Tạo resource trên mockapi.io quản lý Model product trên.
3. Code UI màn hình list product
- Bao gồm list các sản phẩm -> mỗi 1 sản phẩm sẽ là 1 card UI như hình basic-1.jpg -> List product sẽ chia thành 3 column 

{ user = 'aptech' , passw = 'aptech' }
- Code form login
2 input: username , password
btn login -> khi click
get username, passw tu 2 o input
so sanh vs account cho trc
neu === -> redirect sang man list
neu !== -> alert('sai passw')

- Code navigation
list -> redirect sang list.html + click card product -> redirect sang detail.html?id=:id
form -> redirect sang form.html

btn logout: neu user da dang nhap
btn login : neu user chua dang nhap

* Note
- Check login (o file header.html):
+ add param islogin = true -> '/list.html?islogin=true'
+ save info user -> local stograge or cookie
+ an hien btn: add class d-none || d-block (condition rendering  ? :)

- Code detail
Show info cua product co id tuong ung