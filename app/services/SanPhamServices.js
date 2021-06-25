function SanPhamServices() {
    this.layDanhSachSP = function() {
        return axios({
            // GET lấy dữ liệu từ sv
            // axios trả về  1 promise
            url: 'https://60d5dbf9943aa60017768c58.mockapi.io/products',
            method: 'GET'
        });
    }
}