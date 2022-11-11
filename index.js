const addRow = (tbodyId) => {
    $(`#${tbodyId}`).append(
            '<tr> <td><input type="text" minlength="1" maxlength="20"></td> <td><input type="number" class="bsheet-amount" minlength="1" maxlength="10" value="0"> </td> </tr>'
        );
}

$(".bsheet-amount").on('change', function(){
    let parent = $(this).closest('tbody');
    let total = 0;
    parent.each(function() {
        console.log($(this));
        total += $(this).find("input.bsheet-amount").val();
    });
    $('#assets-total').text(total);
  });