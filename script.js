document.addEventListener('DOMContentLoaded', function(){
  // toggle form visibility when clicking album link
  document.querySelectorAll('.album-link').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const formWrap = link.nextElementSibling;
      const visible = formWrap.style.display === 'block';
      // hide any other open forms (optional)
      document.querySelectorAll('.album-form').forEach(f => {
        if(f !== formWrap) { f.style.display = 'none'; f.setAttribute('aria-hidden','true'); }
      });
      if(visible){
        formWrap.style.display = 'none';
        formWrap.setAttribute('aria-hidden','true');
      } else {
        formWrap.style.display = 'block';
        formWrap.setAttribute('aria-hidden','false');
        // focus first input
        const firstInput = formWrap.querySelector('input');
        if(firstInput) firstInput.focus();
      }
    });
  });

  // handle registration submissions (client-side only)
  document.querySelectorAll('.reg-form').forEach(form => {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.email.value.trim();
      const first = form.first.value.trim();
      const last = form.last.value.trim();
      const successEl = form.parentElement.querySelector('.success');

      // simple validation
      if(!email || !first || !last){
        successEl.style.color = 'darkred';
        successEl.textContent = 'Vui lòng điền đầy đủ thông tin.';
        return;
      }

      // Fake submission: show confirmation message
      successEl.style.color = 'green';
      const albumTitle = form.closest('.album').querySelector('.album-link').textContent;
      successEl.textContent = `Cảm ơn ${first}! Bạn đã đăng ký để tải '${albumTitle}'.`; // Vietnamese message

      // Optionally clear fields
      // form.reset();
    });
  });
});
