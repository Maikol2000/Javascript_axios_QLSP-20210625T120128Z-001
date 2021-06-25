var SanPhamServices = new SanPhamServices()

function getElm(id){
    return document.getElementById(id)
}

var layDanhSachSP = function() {
    SanPhamServices.layDanhSachSP().then(function(result) {
        renderTable(result.data);
    }).catch(function(error){
        console.log(error);
    })
}
layDanhSachSP()
function renderTable(mangSP) {
    var content = ''
    mangSP.map(function(sp, index){
        content+=`
            <tr>
                <td>${index + 1}</td>
                <td>${sp.tenSP}</td>
                <td>${sp.gia}</td>
                <td>
                    <img style = "width: 80px, height: 80px;" scr="${sp.hinhAnh}">
                </td>
                <td>${sp.moTa}</td>
                <td>
                    <button class = 'btn btn-danger'>xóa</button>
                    <button class = 'btn btn-success'>Xem</button>
                </td>
            </tr>
        `

    })
    getElm('tblDanhSachSP').innerHTML = content
}