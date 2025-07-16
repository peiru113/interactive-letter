emailjs.init('kU5QBZF7TC0zvojI7');

document.getElementById('sendBtn').addEventListener('click', function () {
  const name = document.getElementById('from_name').value.trim() || '匿名';
  const msg = document.getElementById('message').value.trim();

  if (!msg) {
    alert('請輸入訊息！');
    return;
  }

  emailjs.send('service_cfy65oo', 'template_b3vsx3i', {
    from_name: name,
    message: msg,
  }).then(
    () => {
      document.getElementById('output').innerText =
        '✅ 成功寄出！你寫的是：「' + msg + '」';
      document.getElementById('message').value = '';
      document.getElementById('from_name').value = '';
    },
    (error) => {
      console.error('寄送錯誤:', error);
      alert('❌ 寄送失敗，請再試一次。');
    }
  );
});
