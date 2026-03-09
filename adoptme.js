document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const petCountInput = document.getElementById('pet_count');
  const petCountValue = petCountInput.value.trim();
  const acknowledgement = document.querySelector('input[name="acknowledgement"]');

  // ชื่อ–นามสกุล ห้ามว่าง
  if (!fullname) {
    alert('กรุณากรอกชื่อ–นามสกุลผู้ติดต่อ');
    document.getElementById('fullname').focus();
    return;
  }

  // เบอร์ผู้ติดต่อ ห้ามว่าง
  if (!phone) {
    alert('กรุณากรอกเบอร์ผู้ติดต่อ');
    document.getElementById('phone').focus();
    return;
  }

  // จำนวนสัตว์เลี้ยง ต้องมีค่า และเป็นตัวเลข 0–100
  if (petCountValue === '') {
    alert('กรุณากรอกจำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบัน');
    petCountInput.focus();
    return;
  }
  const petCount = Number(petCountValue);
  if (isNaN(petCount) || !Number.isInteger(petCount) || petCount < 0 || petCount > 100) {
    alert('จำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบันต้องเป็นตัวเลขระหว่าง 0 ถึง 100 เท่านั้น');
    petCountInput.focus();
    return;
  }

  // Checkbox รับทราบ
  if (!acknowledgement.checked) {
    alert('กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข');
    return;
  }

  // ผ่านทุกเงื่อนไข
  this.submit();
});
