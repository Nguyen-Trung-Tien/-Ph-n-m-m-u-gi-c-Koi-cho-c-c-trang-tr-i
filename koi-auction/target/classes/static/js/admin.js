    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
        // Hiển thị dữ liệu người dùng trên giao diện
    })
    .catch(error => console.error('Lỗi:', error));
    function openUserForm() {
        // Logic mở form thêm người dùng
        alert('Mở form thêm người dùng');
    }

    function openKoiForm() {
        // Logic mở form thêm Koi
        alert('Mở form thêm Koi');
    }
    // JavaScript để xử lý thêm người dùng
    function openUserForm() {
        document.getElementById("userForm").style.display = "block";
    }

    function closeUserForm() {
        document.getElementById("userForm").style.display = "none";
    }

    function addUser() {
        const name = document.getElementById("userName").value;
        const email = document.getElementById("userEmail").value;
        const role = document.getElementById("userRole").value;
        const userTableBody = document.getElementById("userTableBody");

        // Thêm người dùng vào bảng
        const newRow = userTableBody.insertRow();
        newRow.innerHTML = `
        <td>1</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>
            <button onclick="editUser(this)">Chỉnh Sửa</button>
            <button onclick="deleteUser(this)">Xóa</button>
        </td>
    `;

        // Đóng form
        closeUserForm();
    }

    // Hàm xóa người dùng
    function deleteUser(button) {
        const row = button.parentElement.parentElement;
        row.parentElement.removeChild(row);
    }

    // Hàm mở form thêm Koi
    function openKoiForm() {
        document.getElementById("koiForm").style.display = "block";
    }

    function closeKoiForm() {
        document.getElementById("koiForm").style.display = "none";
    }

    function addKoi() {
        const name = document.getElementById("koiName").value;
        const color = document.getElementById("koiColor").value;
        const price = document.getElementById("koiPrice").value;
        const koiTableBody = document.getElementById("koiTableBody");

        // Thêm Koi vào bảng
        const newRow = koiTableBody.insertRow();
        newRow.innerHTML = `
        <td>1</td>
        <td>${name}</td>
        <td>${color}</td>
        <td>${price}</td>
        <td>
            <button onclick="editKoi(this)">Chỉnh Sửa</button>
            <button onclick="deleteKoi(this)">Xóa</button>
        </td>
    `;

        // Đóng form
        closeKoiForm();
    }

    // Hàm xóa Koi
    function deleteKoi(button) {
        const row = button.parentElement.parentElement;
        row.parentElement.removeChild(row);
    }
