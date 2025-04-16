const data = {
    companyName: "TechCorp",
    matchScore: 86,
    accountStatus: "Target"
  };
  
  // widget container HTML 
  const widget = document.createElement('div');
  widget.className = 'linkedin-widget';
  widget.innerHTML = `
    <div class="widget-header">
      <strong>${data.companyName}</strong>
      <button class="toggle-btn" title="Hide">×</button>
    </div>
    <div class="match-score">
      <label>Match Score: ${data.matchScore}</label>
      <progress max="100" value="${data.matchScore}"></progress>
    </div>
    <div class="account-status ${data.accountStatus === 'Target' ? 'status-target' : 'status-not-target'}">
      ${data.accountStatus}
    </div>
  `;
  
  // "Show Widget" button
  const showBtn = document.createElement('button');
  showBtn.textContent = 'Show Widget';
  showBtn.className = 'widget-show-btn';
  showBtn.style.display = 'none'; // default to hidden
  
  document.body.appendChild(showBtn);
  
  // Show/hide logic based on storage
  chrome.storage.sync.get('widgetVisible', (result) => {
    const isVisible = result.widgetVisible ?? true;
    if (isVisible) {
      document.body.appendChild(widget);
    } else {
      showBtn.style.display = 'block';
    }
  });
  
  // Hide widget and show the button
  widget.querySelector('.toggle-btn').addEventListener('click', () => {
    widget.remove();
    showBtn.style.display = 'block';
    chrome.storage.sync.set({ widgetVisible: false });
  });
  
  // Show widget again and hide the button
  showBtn.addEventListener('click', () => {
    document.body.appendChild(widget);
    showBtn.style.display = 'none';
    chrome.storage.sync.set({ widgetVisible: true });
  });
  