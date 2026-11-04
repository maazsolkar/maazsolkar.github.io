/**
 * MAAZ SOLKAR - CLOUD OPERATIONS PROFILE
 * Category Filtering Module for Experience & Projects
 */

(function () {
  'use strict';

  // Initialize Filter Tabs
  const filterContainers = document.querySelectorAll('[data-filter-group]');

  filterContainers.forEach(group => {
    const targetSelector = group.getAttribute('data-filter-group');
    const items = document.querySelectorAll(targetSelector);
    const tabs = group.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Toggle active state on buttons
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filterValue = tab.getAttribute('data-filter');

        items.forEach(item => {
          const itemCategory = item.getAttribute('data-category') || '';
          const categories = itemCategory.split(' ');

          if (filterValue === 'all' || categories.includes(filterValue)) {
            item.style.display = '';
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.transition = 'opacity 250ms ease';
              item.style.opacity = '1';
            }, 10);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // Skills live search
  const skillSearchInput = document.getElementById('skillSearchInput');
  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const skillPills = document.querySelectorAll('.skill-pill');
      const skillCards = document.querySelectorAll('.skill-category-card');

      skillPills.forEach(pill => {
        const text = pill.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          pill.style.display = '';
        } else {
          pill.style.display = 'none';
        }
      });

      // Show/hide parent cards if all pills are hidden
      skillCards.forEach(card => {
        const visiblePills = card.querySelectorAll('.skill-pill:not([style*="display: none"])');
        if (visiblePills.length === 0 && query) {
          card.style.opacity = '0.35';
        } else {
          card.style.opacity = '1';
        }
      });
    });
  }

})();