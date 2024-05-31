function hideDifficultyTags() {
    const difficultyLevels = ["Easy", "Medium", "Hard"];
  
    const difficultyClasses = [
      "text-difficulty-easy",
      "text-difficulty-medium",
      "text-difficulty-hard",
    ];
  
    difficultyClasses.forEach((difficultyClass) => {
      const elements = document.querySelectorAll(`.${difficultyClass}`);
      elements.forEach((element) => {
        if (difficultyLevels.includes(element.textContent.trim())) {
          element.textContent = "🤔";
        }
      });
    });
  
    const spanElements = document.querySelectorAll("span");
    spanElements.forEach((element) => {
      if (difficultyLevels.includes(element.textContent.trim())) {
        element.textContent = "🤔";
      }
    });
  }
  
  hideDifficultyTags();
  
  const observer = new MutationObserver(hideDifficultyTags);
  observer.observe(document.body, { childList: true, subtree: true });
  