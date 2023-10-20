window.onload = function () {
    const $ = document.querySelector.bind(document);

    const deleteForm = $("#userDeleteForm");
    $("#userModal").addEventListener("show.bs.modal", function (e) {
        const id = e.relatedTarget.getAttribute("user-id");
        $("#userDeleteBtn").onclick = function () {
            deleteForm.setAttribute("action", `/user/${id}?_method=DELETE`);
            deleteForm.submit();
        };
    });
};
