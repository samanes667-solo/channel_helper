// نام ماه‌های شمسی
const persianMonths = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
// ذخیره خودکار ورودی‌ها
const fields = ['hijriMonth','conjDay','conjMonth','conjYear','conjunctionTime',
'sunset0','twilight0','moonset0',
'sunset1','twilight1','moonset1',
'sunset2','twilight2','moonset2',
'ruleExplanation','monthStart','monthEnd','monthDays'];

window.addEventListener('DOMContentLoaded', () => {
    fields.forEach(id => {
        const el = document.getElementById(id);
        if(localStorage.getItem(id)) el.value = localStorage.getItem(id);
        el.addEventListener('input', () => {
            localStorage.setItem(id, el.value);
        });
    });
});

function clearStorage() {
    fields.forEach(id => {
        localStorage.removeItem(id);
        document.getElementById(id).value = '';
    });
    clearOutput();
}

function clearOutput() {
    document.getElementById('outputContainer').innerHTML = '';
}

// محاسبه سن هلال
function calculateCrescentAge(conjDateTime, sunsetTime, dayOffset=0) {
    const [hour, minute] = sunsetTime.split(':').map(Number);
    const conj = new Date(conjDateTime);
    const sunset = new Date(conj);
    sunset.setDate(conj.getDate() + dayOffset);
    sunset.setHours(hour, minute, 0, 0);
    const diffMs = sunset - conj;
    const diffHours = Math.floor(diffMs / (1000*60*60));
    const diffMinutes = Math.floor((diffMs - diffHours*1000*60*60)/(1000*60));
    return `${diffHours} ساعت و ${diffMinutes} دقیقه`;
}

function generateText() {
    const hijriMonth = document.getElementById('hijriMonth').value;
    const day = Number(document.getElementById('conjDay').value);
    const monthNum = Number(document.getElementById('conjMonth').value);
    const year = Number(document.getElementById('conjYear').value);
    const monthName = persianMonths[monthNum-1] || "";

    const conjDateTime = `${year}-${String(monthNum).padStart(2,'0')}-${String(day).padStart(2,'0')}T00:00`;

    const sunset0 = document.getElementById('sunset0').value;
    const twilight0 = document.getElementById('twilight0').value;
    const moonset0 = document.getElementById('moonset0').value;

    const sunset1 = document.getElementById('sunset1').value;
    const twilight1 = document.getElementById('twilight1').value;
    const moonset1 = document.getElementById('moonset1').value;

    const sunset2 = document.getElementById('sunset2').value;
    const twilight2 = document.getElementById('twilight2').value;
    const moonset2 = document.getElementById('moonset2').value;

    const ruleExplanation = document.getElementById('ruleExplanation').value;
    const monthStart = document.getElementById('monthStart').value;
    const monthEnd = document.getElementById('monthEnd').value;
    const monthDays = document.getElementById('monthDays').value;

    const crescentAge0 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset0, 0);
    const crescentAge1 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset1, 1);
    const crescentAge2 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset2, 2);

    const formattedDate =` روز ${day} ${monthName} ماه سال ${year}`;

    const output =` بسم الله الرحمن الرحیم🌙\nماه ${hijriMonth}▫️\nمقارنه: ${formattedDate} ساعت ${document.getElementById('conjunctionTime').value}\n
🔹 روز مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge0}
غروب خورشید: ${sunset0}
زوال سرخی شفق از مغرب (خورشید در ۹- درجه): ${twilight0}
غروب ماه: ${moonset0}\n
🔹 روز پس از مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge1}
غروب خورشید: ${sunset1}
زوال سرخی شفق از مغرب: ${twilight1}
غروب ماه: ${moonset1}\n
🔹 دو روز پس از مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge2}
غروب خورشید: ${sunset2}
زوال سرخی شفق از مغرب: ${twilight2}
غروب ماه: ${moonset2}\n
▫️ ${ruleExplanation}\n
🔺 ابتدای ماه طبق تقویم روایی:
▫️ آغاز: ${monthStart}
▫️ پایان: ${monthEnd}
🌙 ${monthDays}
@religion_times
#هلال_ماه #تقویم_روایی #تقویم_عددی`;

    const container = document.getElementById('outputContainer');
    container.textContent = output;
}
// کپی متن خروجی
function copyText() {
    const text = document.getElementById('outputContainer').innerText;
    navigator.clipboard.writeText(text);
    alert("متن کپی شد!");
}

// انتشار در تلگرام
function shareTelegram() {
    const text = encodeURIComponent(document.getElementById('outputContainer').innerText);
    const url = `https://t.me/share/url?url=&text=${text}`;
    window.open(url, '_blank');
}

// دانلود تصویر jpg خروجی
function downloadImage() {
    const container = document.getElementById('outputContainer');
    html2canvas(container).then(canvas => {
        canvas.toBlob(function(blob) {
            const link = document.createElement('a');
            link.download = 'moon_text.jpg';
            link.href = URL.createObjectURL(blob);
            link.click();
        }, 'image/jpeg', 1);
    });
}
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script>
// نام ماه‌های شمسی
const persianMonths = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
// ذخیره خودکار ورودی‌ها
const fields = ['hijriMonth','conjDay','conjMonth','conjYear','conjunctionTime',
'sunset0','twilight0','moonset0',
'sunset1','twilight1','moonset1',
'sunset2','twilight2','moonset2',
'ruleExplanation','monthStart','monthEnd','monthDays'];

window.addEventListener('DOMContentLoaded', () => {
    fields.forEach(id => {
        const el = document.getElementById(id);
        if(localStorage.getItem(id)) el.value = localStorage.getItem(id);
        el.addEventListener('input', () => {
            localStorage.setItem(id, el.value);
        });
    });
});

function clearStorage() {
    fields.forEach(id => {
        localStorage.removeItem(id);
        document.getElementById(id).value = '';
    });
    clearOutput();
}

function clearOutput() {
    document.getElementById('outputContainer').innerHTML = '';
}

// محاسبه سن هلال
function calculateCrescentAge(conjDateTime, sunsetTime, dayOffset=0) {
    const [hour, minute] = sunsetTime.split(':').map(Number);
    const conj = new Date(conjDateTime);
    const sunset = new Date(conj);
    sunset.setDate(conj.getDate() + dayOffset);
    sunset.setHours(hour, minute, 0, 0);
    const diffMs = sunset - conj;
    const diffHours = Math.floor(diffMs / (1000*60*60));
    const diffMinutes = Math.floor((diffMs - diffHours*1000*60*60)/(1000*60));
    return `${diffHours} ساعت و ${diffMinutes} دقیقه`;
}

function generateText() {
    const hijriMonth = document.getElementById('hijriMonth').value;
    const day = Number(document.getElementById('conjDay').value);
    const monthNum = Number(document.getElementById('conjMonth').value);
    const year = Number(document.getElementById('conjYear').value);
    const monthName = persianMonths[monthNum-1] || "";

    const conjDateTime = `${year}-${String(monthNum).padStart(2,'0')}-${String(day).padStart(2,'0')}T00:00`;

    const sunset0 = document.getElementById('sunset0').value;
    const twilight0 = document.getElementById('twilight0').value;
    const moonset0 = document.getElementById('moonset0').value;

    const sunset1 = document.getElementById('sunset1').value;
    const twilight1 = document.getElementById('twilight1').value;
    const moonset1 = document.getElementById('moonset1').value;

    const sunset2 = document.getElementById('sunset2').value;
    const twilight2 = document.getElementById('twilight2').value;
    const moonset2 = document.getElementById('moonset2').value;

    const ruleExplanation = document.getElementById('ruleExplanation').value;
    const monthStart = document.getElementById('monthStart').value;
    const monthEnd = document.getElementById('monthEnd').value;
    const monthDays = document.getElementById('monthDays').value;

    const crescentAge0 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset0, 0);
    const crescentAge1 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset1, 1);
    const crescentAge2 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset2, 2);

    const formattedDate =` روز ${day} ${monthName} ماه سال ${year}`;

    const output =` بسم الله الرحمن الرحیم🌙\nماه ${hijriMonth}▫️\nمقارنه: ${formattedDate} ساعت ${document.getElementById('conjunctionTime').value}\n
🔹 روز مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge0}
غروب خورشید: ${sunset0}
زوال سرخی شفق از مغرب (خورشید در ۹- درجه): ${twilight0}
غروب ماه: ${moonset0}\n
🔹 روز پس از مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge1}
غروب خورشید: ${sunset1}
زوال سرخی شفق از مغرب: ${twilight1}
غروب ماه: ${moonset1}\n
🔹 دو روز پس از مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge2}
غروب خورشید: ${sunset2}
زوال سرخی شفق از مغرب: ${twilight2}
غروب ماه: ${moonset2}\n
▫️ ${ruleExplanation}\n
🔺 ابتدای ماه طبق تقویم روایی:
▫️ آغاز: ${monthStart}
▫️ پایان: ${monthEnd}
🌙 ${monthDays}
@religion_times
#هلال_ماه #تقویم_روایی #تقویم_عددی`;

    const container = document.getElementById('outputContainer');
    container.textContent = output;
}
// کپی متن خروجی
function copyText() {
    const text = document.getElementById('outputContainer').innerText;
    navigator.clipboard.writeText(text);
    alert("متن کپی شد!");
}

// انتشار در تلگرام
function shareTelegram() {
    const text = encodeURIComponent(document.getElementById('outputContainer').innerText);
    const url = `https://t.me/share/url?url=&text=${text}`;
    window.open(url, '_blank');
}

// دانلود تصویر jpg خروجی
function downloadImage() {
    const container = document.getElementById('outputContainer');
    html2canvas(container).then(canvas => {
        canvas.toBlob(function(blob) {
            const link = document.createElement('a');
            link.download = 'moon_text.jpg';
            link.href = URL.createObjectURL(blob);
            link.click();
        }, 'image/jpeg', 1);
    });
}
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script>
// نام ماه‌های شمسی
const persianMonths = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
// ذخیره خودکار ورودی‌ها
const fields = ['hijriMonth','conjDay','conjMonth','conjYear','conjunctionTime',
'sunset0','twilight0','moonset0',
'sunset1','twilight1','moonset1',
'sunset2','twilight2','moonset2',
'ruleExplanation','monthStart','monthEnd','monthDays'];

window.addEventListener('DOMContentLoaded', () => {
    fields.forEach(id => {
        const el = document.getElementById(id);
        if(localStorage.getItem(id)) el.value = localStorage.getItem(id);
        el.addEventListener('input', () => {
            localStorage.setItem(id, el.value);
        });
    });
});

function clearStorage() {
    fields.forEach(id => {
        localStorage.removeItem(id);
        document.getElementById(id).value = '';
    });
    clearOutput();
}

function clearOutput() {
    document.getElementById('outputContainer').innerHTML = '';
}

// محاسبه سن هلال
function calculateCrescentAge(conjDateTime, sunsetTime, dayOffset=0) {
    const [hour, minute] = sunsetTime.split(':').map(Number);
    const conj = new Date(conjDateTime);
    const sunset = new Date(conj);
    sunset.setDate(conj.getDate() + dayOffset);
    sunset.setHours(hour, minute, 0, 0);
    const diffMs = sunset - conj;
    const diffHours = Math.floor(diffMs / (1000*60*60));
    const diffMinutes = Math.floor((diffMs - diffHours*1000*60*60)/(1000*60));
    return `${diffHours} ساعت و ${diffMinutes} دقیقه`;
}

function generateText() {
    const hijriMonth = document.getElementById('hijriMonth').value;
    const day = Number(document.getElementById('conjDay').value);
    const monthNum = Number(document.getElementById('conjMonth').value);
    const year = Number(document.getElementById('conjYear').value);
    const monthName = persianMonths[monthNum-1] || "";

    const conjDateTime = `${year}-${String(monthNum).padStart(2,'0')}-${String(day).padStart(2,'0')}T00:00`;

    const sunset0 = document.getElementById('sunset0').value;
    const twilight0 = document.getElementById('twilight0').value;
    const moonset0 = document.getElementById('moonset0').value;

    const sunset1 = document.getElementById('sunset1').value;
    const twilight1 = document.getElementById('twilight1').value;
    const moonset1 = document.getElementById('moonset1').value;

    const sunset2 = document.getElementById('sunset2').value;
    const twilight2 = document.getElementById('twilight2').value;
    const moonset2 = document.getElementById('moonset2').value;

    const ruleExplanation = document.getElementById('ruleExplanation').value;
    const monthStart = document.getElementById('monthStart').value;
    const monthEnd = document.getElementById('monthEnd').value;
    const monthDays = document.getElementById('monthDays').value;

    const crescentAge0 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset0, 0);
    const crescentAge1 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset1, 1);
    const crescentAge2 = calculateCrescentAge(`${conjDateTime}T${document.getElementById('conjunctionTime').value}`, sunset2, 2);

    const formattedDate =` روز ${day} ${monthName} ماه سال ${year}`;

    const output =` بسم الله الرحمن الرحیم🌙\nماه ${hijriMonth}▫️\nمقارنه: ${formattedDate} ساعت ${document.getElementById('conjunctionTime').value}\n
🔹 روز مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge0}
غروب خورشید: ${sunset0}
زوال سرخی شفق از مغرب (خورشید در ۹- درجه): ${twilight0}
غروب ماه: ${moonset0}\n
🔹 روز پس از مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge1}
غروب خورشید: ${sunset1}
زوال سرخی شفق از مغرب: ${twilight1}
غروب ماه: ${moonset1}\n
🔹 دو روز پس از مقارنه
سن هلال در لحظهٔ غروب خورشید: ${crescentAge2}
غروب خورشید: ${sunset2}
زوال سرخی شفق از مغرب: ${twilight2}
غروب ماه: ${moonset2}\n
▫️ ${ruleExplanation}\n
🔺 ابتدای ماه طبق تقویم روایی:
▫️ آغاز: ${monthStart}
▫️ پایان: ${monthEnd}
🌙 ${monthDays}
@religion_times
#هلال_ماه #تقویم_روایی #تقویم_عددی`;

    const container = document.getElementById('outputContainer');
    container.textContent = output;
}
// کپی متن خروجی
function copyText() {
    const text = document.getElementById('outputContainer').innerText;
    navigator.clipboard.writeText(text);
    alert("متن کپی شد!");
}

// انتشار در تلگرام
function shareTelegram() {
    const text = encodeURIComponent(document.getElementById('outputContainer').innerText);
    const url = `https://t.me/share/url?url=&text=${text}`;
    window.open(url, '_blank');
}

// دانلود تصویر jpg خروجی
function downloadImage() {
    const container = document.getElementById('outputContainer');
    html2canvas(container).then(canvas => {
        canvas.toBlob(function(blob) {
            const link = document.createElement('a');
            link.download = 'moon_text.jpg';
            link.href = URL.createObjectURL(blob);
            link.click();
        }, 'image/jpeg', 1);
    });
}
