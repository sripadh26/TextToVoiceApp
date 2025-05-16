const speakBtn = document.getElementById('speakBtn');
const textInput = document.getElementById('text');
const voiceSelect = document.getElementById('voice');
const rateInput = document.getElementById('rate');
const pitchInput = document.getElementById('pitch');

let voices = [];

function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

speakBtn.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  const selectedVoice = voices[voiceSelect.value];
  utterance.voice = selectedVoice;
  utterance.rate = rateInput.value;
  utterance.pitch = pitchInput.value;
  window.speechSynthesis.speak(utterance);
});
