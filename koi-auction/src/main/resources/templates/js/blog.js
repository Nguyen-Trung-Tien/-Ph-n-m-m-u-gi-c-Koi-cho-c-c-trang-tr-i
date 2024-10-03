// Hàm để điều hướng đến trang chủ
function goToHome() {
    window.location.href = "home.html"; // Đường dẫn đến trang chủ
}

// Thêm sự kiện click cho nút "Trang Chủ"
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.querySelector(".btn-go-home");
    if (homeButton) {
        homeButton.addEventListener("click", goToHome);
    }

    // Tìm kiếm bài viết
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const articles = document.querySelectorAll(".article-item");

        articles.forEach(article => {
            const title = article.querySelector(".card-title").textContent.toLowerCase();
            if (title.includes(filter)) {
                article.style.display = ""; // Hiện bài viết
            } else {
                article.style.display = "none"; // Ẩn bài viết
            }
        });
    });
});
