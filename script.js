setInterval(() => {
    try {
        if (Editor) {
            let goodnum = $('#goodnum').val();
            let getHtml = $(".editor-frame-wrap").clone(false);

            getHtml.find("#text-toolbar").hide();
            getHtml.find('.selected-layer').hide();
            getHtml.find('.selected-layer2').hide();
            getHtml.find('.selected-text').hide();
            getHtml.find('.ui-draggable').removeClass('ui-draggable');
            getHtml.find("[contenteditable=true]").attr("contenteditable", false);
            getHtml.find(".component-text.component-box").css({'overflow-y': 'hidden', 'max-height': ''});
            getHtml.find('#selected-layer').remove();

            if (getHtml.find('.component-img-collage').length > 0) {
                for (let i = 0; i < getHtml.find('.component-img-collage').length; i++) {
                    if (getHtml.find('.component-img-collage').eq(i).html() === '') {
                        getHtml.find('.component-img-collage').eq(i).remove();
                    }
                }
            }

            // 이미지 체크
            Editor.setImageArray('after');

            let contents = getHtml.html();

            if (!opener) {
                alert("이지에디터 내용을 완료할 상품이 없습니다.\n새탭에서 상품 상세페이지를 열고 다시 시도해주세요.");
                loading.hide();
                return false;
            }

            if (goodnum) {
                $('.goodContentDetail' + goodnum, opener.document).empty().html(contents);
            } else {
                $('#goodContentDetail', opener.document).empty().html(contents);
            }

            Editor.openerDataSend();
            console.log("Saved");
        }
    } catch (e) {
        console.log(e);
        console.log("This page does not has editor.");
    }
}, 60000); // Save every 1min