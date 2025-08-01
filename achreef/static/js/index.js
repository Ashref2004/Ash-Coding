document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.innerHTML = mobileMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    let timeLeft = 60;
    const countdownElement = document.getElementById('countdown');
    let countdownTimer = setInterval(updateCountdown, 1000);
    
    function updateCountdown() {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.textContent = "انتهى الوقت!";
        }
    }

const steps = document.querySelectorAll('.form-step');
const stepButtons = document.querySelectorAll('.next-step, .prev-step');

stepButtons.forEach(button => {
button.addEventListener('click', function(e) {
e.preventDefault();
const currentStep = this.closest('.form-step');
const isNext = this.classList.contains('next-step');
const stepNumber = parseInt(this.dataset.next || this.dataset.prev);

stepButtons.forEach(button => {
button.addEventListener('click', function(e) {
e.preventDefault();
const currentStep = this.closest('.form-step');
const isNext = this.classList.contains('next-step');
const stepNumber = parseInt(this.dataset.next || this.dataset.prev);

if (isNext) {
    if (stepNumber === 4) {
        if (!validateContactInfo()) {
            return false;
        }

        if (!document.getElementById('agreeTerms').checked) {
            document.getElementById('termsError').style.display = 'block';
            return false;
        } else {
            document.getElementById('termsError').style.display = 'none';
        }
    }
}

steps.forEach(step => {
    step.style.display = 'none';
});

document.getElementById(`step-${stepNumber}`).style.display = 'block';

updateProgressBar(stepNumber);

updateStepIndicator(stepNumber);

return true;
});
});


steps.forEach(step => {
    step.style.display = 'none';
});

document.getElementById(`step-${stepNumber}`).style.display = 'block';

updateProgressBar(stepNumber);

updateStepIndicator(stepNumber);

return true;
});
});

function updateProgressBar(stepNumber) {
const progressPercentage = (stepNumber - 1) * 33.33; // Adjusted for 3 steps
document.getElementById('progressBar').style.width = `${progressPercentage}%`;
}

function updateStepIndicator(stepNumber) {
document.querySelectorAll('.step').forEach((step, index) => {
if (index + 1 < stepNumber) {
    step.classList.add('completed');
    step.classList.remove('active');
} else if (index + 1 === stepNumber) {
    step.classList.add('active');
    step.classList.remove('completed');
} else {
    step.classList.remove('active', 'completed');
}
});
}

function validateContactInfo() {
const contactInfo = document.getElementById('contactInfo').value.trim();
const contactError = document.getElementById('contactError');

const isPhone = /^[0-9]{10,}$/.test(contactInfo);
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo);

if (!isPhone && !isEmail) {
document.getElementById('contactInfo').classList.add('error');
contactError.style.display = 'block';
return false;
} else {
document.getElementById('contactInfo').classList.remove('error');
contactError.style.display = 'none';
return true;
}
}

    const modal = document.getElementById('orderModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const confirmOrderBtn = document.getElementById('confirmOrder');
    const toast = document.getElementById('toastNotification');
    
    const orderForm = document.getElementById('websiteOrderForm');
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!document.getElementById('agreeTerms').checked) {
            document.getElementById('termsError').style.display = 'block';
            return;
        } else {
            document.getElementById('termsError').style.display = 'none';
        }
        
        const websitePackage = document.querySelector('select[name="websitePackage"]').value;
        const designType = document.querySelector('input[name="designType"]:checked').value;
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
        const contactInfo = document.getElementById('contactInfo').value.trim();
        const projectName = document.getElementById('projectName').value || 'غير محدد';
        const domain = document.getElementById('domain').value || 'غير محدد';
        const additionalNotes = document.getElementById('additionalNotes').value || 'لا يوجد';
        
        document.getElementById('summary-websitePackage').textContent = getPackageName(websitePackage);
        document.getElementById('summary-designType').textContent = getDesignTypeName(designType);
        document.getElementById('summary-contactMethod').textContent = getContactMethodName(contactMethod);
        document.getElementById('summary-contactInfo').textContent = contactInfo;
        document.getElementById('summary-projectName').textContent = projectName;
        document.getElementById('summary-domain').textContent = domain;
        
        modal.style.display = 'block';
        
        confirmOrderBtn.dataset.websitePackage = websitePackage;
        confirmOrderBtn.dataset.designType = designType;
        confirmOrderBtn.dataset.contactMethod = contactMethod;
        confirmOrderBtn.dataset.contactInfo = contactInfo;
        confirmOrderBtn.dataset.projectName = projectName;
        confirmOrderBtn.dataset.domain = domain;
        confirmOrderBtn.dataset.additionalNotes = additionalNotes;
        confirmOrderBtn.dataset.timeSpent = 60 - timeLeft;
    });
    
    function getPackageName(packageType) {
        const packages = {
            'static-5000': 'صفحة ثابتة - 5000 دج',
            'custom-10000': 'موقع خاص - 10000 دج',
            'dynamic-15000': 'ديناميكي - 15000 دج',
            'premium-25000': 'ديناميكي + خواص - 25000 دج'
        };
        return packages[packageType] || packageType;
    }
    
    function getDesignTypeName(type) {
        const types = {
            'simple': 'بسيط',
            'professional': 'احترافي',
            'ecommerce': 'متجر',
            'blog': 'مدونة'
        };
        return types[type] || type;
    }
    
    function getContactMethodName(method) {
        const methods = {
            'whatsapp': 'واتساب',
            'telegram': 'تيليغرام',
            'email': 'بريد إلكتروني'
        };
        return methods[method] || method;
    }
    
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
    
    confirmOrderBtn.addEventListener('click', function() {
        const websitePackage = this.dataset.websitePackage;
        const designType = this.dataset.designType;
        const contactMethod = this.dataset.contactMethod;
        const contactInfo = this.dataset.contactInfo;
        const projectName = this.dataset.projectName;
        const domain = this.dataset.domain;
        const additionalNotes = this.dataset.additionalNotes;
        const timeSpent = this.dataset.timeSpent;
        
        let message = `طلب موقع جديد:\n\n`;
        message += `الباقة: ${getPackageName(websitePackage)}\n`;
        message += `الشكل العام: ${getDesignTypeName(designType)}\n`;
        message += `وسيلة التواصل: ${getContactMethodName(contactMethod)}\n`;
        message += `معلومات التواصل: ${contactInfo}\n`;
        message += `اسم المشروع: ${projectName}\n`;
        message += `اسم النطاق: ${domain}\n`;
        message += `ملاحظات إضافية: ${additionalNotes}\n\n`;
        message += `تم إرسال الطلب خلال: ${timeSpent} ثانية`;
        
        if (contactMethod === 'whatsapp') {
            window.open(`https://wa.me/213782675199?text=${encodeURIComponent(message)}`, '_blank');
        } else if (contactMethod === 'telegram') {
            window.open(`https://t.me/213782675199?text=${encodeURIComponent(message)}`, '_blank');
        } else {
            window.open(`mailto:achrafmehloul@gmail.com?subject=طلب موقع جديد&body=${encodeURIComponent(message)}`, '_blank');
        }
        
        modal.style.display = 'none';
        
        showToast('تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.');
        
        resetForm();
    });
    
    function showToast(message) {
        document.getElementById('toastMessage').textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }
    
    function resetForm() {
        orderForm.reset();
        
        steps.forEach(step => step.style.display = 'none');
        document.getElementById('step-1').style.display = 'block';
        
        updateProgressBar(1);
        updateStepIndicator(1);
        
        timeLeft = 60;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(updateCountdown, 1000);
        countdownElement.textContent = "01:00";
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    document.getElementById('termsLink').addEventListener('click', function(e) {
        e.preventDefault();
        showToast('سيتم عرض الشروط والأحكام هنا');
    });
    
    document.getElementById('privacyLink').addEventListener('click', function(e) {
        e.preventDefault();
        showToast('سيتم عرض سياسة الخصوصية هنا');
    });
});