
$(document).ready(function() {

  var question = ['What is your idea of a good return on investment?', 'What kind of returns are you expecting on your investment?', 'How quick do you think someone can become a Millionaire?'];
  var answer = ['5% return in 1 year', '5%', '1 year','100% return in 4 years.', '25%', '3 months','85% return in 60 minutes.', '50%', '1 week'];
  var current_question = 0;


  $('.next').click(function() {
    if(current_question<2) {
      current_question++;
      $('.form-options input').prop('checked', false);
      $('.numbers li').removeClass('active');
      $('.numbers .number-'+(current_question+1)).addClass('active');
      $('.form-question h3').html(question[current_question]).removeClass();
      var form_question = $('.form-question h3').clone();
      $('.form-question h3').remove();
      $('.form-question').append(form_question);
      $('.form-question h3').addClass('animated flipInX');
      var i = 1;
      var radio_value = current_question;
      $(".form-options label").each(function(){
        var check_label = '#check'+i+'-label';
        var check_label_action = $(check_label).clone().removeClass().html(answer[radio_value]);
        $(check_label).remove();
        $('.form-options #check'+i).remove();
        $('.form-options').append('<input type="radio" id="check'+i+'" name="check">',check_label_action);
        $(check_label).addClass('animated flipInX');

        i++;
        radio_value = radio_value + 3;
      });

    } else {
      $('.next').attr('href', 'http://anyoption.com');
    }
  });


});
