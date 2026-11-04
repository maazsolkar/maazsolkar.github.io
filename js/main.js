/**
 * MAAZ SOLKAR - CLOUD OPERATIONS PROFILE
 * Main Global JavaScript Module
 */

(function () {
  'use strict';

  // 1. Theme Management (Dark / Light with LocalStorage & OS Preference)
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const isDark = theme === 'dark';
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
  }

  if (storedTheme) {
    applyTheme(storedTheme);
  } else if (prefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('dark'); // Default to dark for modern cloud developer aesthetic
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      applyTheme(target);
      showToast(`Switched to ${target === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  });

  // 2. Sticky Header Elevation on Scroll
  const siteHeader = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (siteHeader) {
      if (scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');

  function openMobileNav() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add('open');
      mobileBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMobileNav() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove('open');
      mobileBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
      if (isOpen) closeMobileNav();
      else openMobileNav();
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close mobile drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
      closeModal();
    }
  });

  // 4. Global Toast Notification System
  window.showToast = function (message, type = 'info') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toast.classList.add('show');

    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // 5. One-Click Clipboard Copying
  window.copyToClipboard = function (text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'success');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  function fallbackCopy(text, successMsg) {
    const input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, 'success');
    } catch (e) {
      showToast('Could not copy automatically. Please copy manually.', 'error');
    }
    document.body.removeChild(input);
  }

  // 6. Project Architecture Diagram Modal
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalContent = document.querySelector('.modal-content');
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  window.openProjectModal = function (title, imgSrc, detailsHtml) {
    if (!modalBackdrop || !modalBody) return;
    if (modalTitle) modalTitle.textContent = title;
    modalBody.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${imgSrc}" alt="${title} Architecture Diagram" style="width: 100%; max-height: 480px; object-fit: contain; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
      </div>
      <div class="modal-spec">${detailsHtml || ''}</div>
    `;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

})();