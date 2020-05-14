// Modal reducer là state của modal
const stateModal = {
    thongTinSanPham: {
        tenSP: "ten mac dinh",
        hinhAnh: "",
        gia: 1000,
    },
    // Nơi khai báo state của state modal
};
const stateModalReducer = (state = stateModal, action) => {
    switch (action.type) {
        // Xử lý tương tự setState
        case "XEM_CHI_TIET":
            {
                state.thongTinSanPham = action.sanPham;
                return {...state };
            }
    }
    return {...state };
};

export default stateModalReducer;