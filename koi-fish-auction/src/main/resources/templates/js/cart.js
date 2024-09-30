// Hàm tính tổng giá tiền cho giỏ hàng
function calculateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const price = parseFloat(row.cells[1].innerText.replace(/[^0-9.-]+/g,""));
        const quantity = parseInt(row.cells[2].querySelector('input').value);
        const totalPrice = price * quantity;
        row.cells[3].innerText = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
        total += totalPrice;
    });
    document.getElementById('total-price').innerText = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
}

// Gọi hàm khi người dùng thay đổi số lượng
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', calculateTotal);
});

// Khởi tạo tính tổng ban đầu
calculateTotal();
