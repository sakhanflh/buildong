const FormatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Menambahkan nol di depan bulan jika perlu
    const day = String(date.getDate()).padStart(2, '0'); // Menambahkan nol di depan tanggal jika perlu

    return `${year}-${month}-${day}`;
};


export default FormatDate;