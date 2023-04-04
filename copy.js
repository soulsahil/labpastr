function copySection() {
    const section = document.getElementById("mySection");
    const range = document.createRange();
    range.selectNode(section);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }