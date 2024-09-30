

// Hàm xác nhận khi người dùng nhấn nút "Lưu"
document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.querySelector("button[type='submit']");

    if (saveButton) {
        saveButton.addEventListener("click", function (event) {
            // Ngăn chặn hành vi mặc định của nút submit
            event.preventDefault();

            // Hiển thị hộp thoại xác nhận
            const confirmation = confirm("Bạn có chắc chắn muốn lưu thông tin này không?");
            if (confirmation) {
                // Nếu người dùng xác nhận, thực hiện hành động lưu (tại đây bạn có thể gọi API hoặc thực hiện logic lưu)
                alert("Thông tin đã được lưu thành công!");
                // Ví dụ: Gọi API lưu thông tin ở đây
                // saveUserInfo();
            } else {
                // Nếu người dùng không xác nhận, không làm gì cả
                alert("Thông tin không được thay đổi.");
            }
        });
    }
});
