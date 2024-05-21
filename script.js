function checkIt() {
    if (document.forms.mailer.Name.value == "") { 
        alert('Заполните поле "ФИО"'); 
        document.forms.mailer.Name.focus(); 
        return false;
    }
  
    if (document.forms.mailer.Phone.value == "") { 
        alert('Заполните поле "Телефон"'); 
        document.forms.mailer.Phone.focus(); 
        return false;
    }
  
    alert('Вы будете перенаправлены на почтовый адресс для отправки заявки.');
    return true;
  }
  
  function openMailClient() {
    if (checkIt()) {
      var name = document.forms.mailer.Name.value;
      var phone = document.forms.mailer.Phone.value;
      var note = document.forms.mailer.Note.value;
    
      var subject = encodeURIComponent('Запись на приём');
      var body = encodeURIComponent('Имя: ' + name + '\nТелефон: ' + phone + '\nПричина обращения: ' + note);
    
      window.location.href = 'mailto:Ваша@почта.ру?subject=' + subject + '&body=' + body;
    }
  }


  var accordions = document.querySelectorAll('.usluga-button');

  accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
